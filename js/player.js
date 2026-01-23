// Player page logic
let currentSong = null;
let isDailyMode = false;
let dailyQuizShown = false;
// Whether the translation lines should be visible. This must survive re-rendering
// (e.g. when changing language, we rebuild the lyrics DOM).
let showTranslations = false;

const DAILY_LS = {
    completedDate: 'dailyChallenge.completedDate',
    streak: 'dailyChallenge.streak',
    lastCompletedDate: 'dailyChallenge.lastCompletedDate'
};

function isDailyCompletedToday() {
    return localStorage.getItem(DAILY_LS.completedDate) === getTodayKey();
}

function getDailyAttemptKey(songId, dateKey = getTodayKey()) {
    return `dailyChallenge.attempt.${dateKey}.${songId}`;
}

function loadDailyAttempt(songId, dateKey = getTodayKey()) {
    if (songId == null) return null;
    try {
        const raw = localStorage.getItem(getDailyAttemptKey(songId, dateKey));
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
}

function saveDailyAttempt(songId, dateKey, attempt) {
    if (songId == null) return;
    try {
        localStorage.setItem(getDailyAttemptKey(songId, dateKey), JSON.stringify(attempt));
    } catch {
        // Ignore quota / serialization errors.
    }
}

function getTodayKey() {
    return new Date().toISOString().slice(0, 10);
}

function getYesterdayKey() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().slice(0, 10);
}

function markDailyChallengeCompletedToday(score, total) {
    const today = getTodayKey();
    const completed = localStorage.getItem(DAILY_LS.completedDate);
    if (completed === today) {
        // Already completed today; keep streak as-is.
        return;
    }

    const last = localStorage.getItem(DAILY_LS.lastCompletedDate);
    const yesterday = getYesterdayKey();
    const currentStreak = parseInt(localStorage.getItem(DAILY_LS.streak) || '0', 10) || 0;

    let nextStreak = 1;
    if (last === yesterday) {
        nextStreak = currentStreak + 1;
    }

    localStorage.setItem(DAILY_LS.completedDate, today);
    localStorage.setItem(DAILY_LS.lastCompletedDate, today);
    localStorage.setItem(DAILY_LS.streak, String(nextStreak));

    // Optional score tracking (nice for future UI)
    if (currentSong && currentSong.id != null) {
        localStorage.setItem(`dailyChallenge.lastScore.${currentSong.id}`, String(score));
        localStorage.setItem(`dailyChallenge.lastScoreTotal.${currentSong.id}`, String(total));
    }
}

function getLyricTranslation(lyric, lang) {
    if (!lyric) return '';
    if (lang === 'fi') return lyric.english || '';
    if (lang === 'es') return lyric.spanish || lyric.english || '';
    if (lang === 'fr') return lyric.french || lyric.english || '';
    if (lang === 'ar') return lyric.arabic || lyric.english || '';
    if (lang === 'nl') return lyric.dutch || lyric.english || '';
    return lyric.english || '';
}

function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// --- Seeded RNG helpers (for deterministic Daily Challenge quizzes) ---
// We seed based on (dateKey + songId) so all users see the same questions each day.
// Implementation: FNV-1a 32-bit hash + Mulberry32 PRNG.
function hashString32(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
        h ^= str.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return h >>> 0;
}

function mulberry32(seed) {
    let a = seed >>> 0;
    return function () {
        a |= 0;
        a = (a + 0x6D2B79F5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function seededShuffle(arr, randFn) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(randFn() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function buildDailyQuizQuestions(song, questionCount = 3) {
    const lang = translations.currentLang;
    const lyrics = Array.isArray(song?.lyrics) ? song.lyrics : [];

    // Candidates must have Finnish + some translation text available.
    const candidates = lyrics
        .map((l, idx) => ({ idx, finnish: l?.finnish || '', translation: getLyricTranslation(l, lang) }))
        .filter(x => x.finnish.trim().length > 0 && x.translation.trim().length > 0);

    if (candidates.length < 3) return [];

    // Seeded: all users get the same 3 QUESTIONS (prompts) for a given (date + song).
    // Non-seeded: wrong answers + option order are randomized so people can't share "A/B/C".
    const dateKey = getTodayKey();
    const baseSeedStr = `dailyQuiz|${dateKey}|${String(song?.id ?? '')}|${lang}`;

    // Question order seed (stable across users)
    const qRand = mulberry32(hashString32(baseSeedStr));

    // Pool of wrong answers from other lines.
    // Deduplicate to reduce repeated options.
    const pool = Array.from(new Set(candidates.map(x => x.translation)));

    const selected = seededShuffle(candidates, qRand).slice(0, Math.min(questionCount, candidates.length));

    return selected.map((q, i) => {
        const wrongPool = pool.filter(t => t !== q.translation);
        const wrongs = shuffle(wrongPool).slice(0, 2);
        const options = shuffle([q.translation, ...wrongs]);
        return {
            id: `q${i}`,
            prompt: q.finnish,
            correct: q.translation,
            options
        };
    });
}

function openDailyQuizNow(opts = { force: false }) {
    if (!isDailyMode || !currentSong) return;

    // Auto-open should happen only once, but user-initiated opens should always work.
    if (dailyQuizShown && !opts?.force) return;

    dailyQuizShown = true;
    const questions = buildDailyQuizQuestions(currentSong, 3);
    openDailyQuizModal(questions);
}

function openDailyQuizModal(questions) {
    const modal = document.getElementById('dailyQuizModal');
    const form = document.getElementById('dailyQuizForm');
    const result = document.getElementById('dailyQuizResult');
    const submit = document.getElementById('dailyQuizSubmit');
    const closeBtn = document.getElementById('dailyQuizClose');

    if (!modal || !form || !submit) return;

    // If the daily challenge is already completed today, allow review.
    // IMPORTANT: only treat it as review-mode if the stored attempt matches today's song + language.
    // Otherwise we might accidentally render stale question/option ordering.
    const today = getTodayKey();
    const alreadyCompletedToday = localStorage.getItem(DAILY_LS.completedDate) === today;
    const storedAttempt = (alreadyCompletedToday && currentSong && currentSong.id != null)
        ? loadDailyAttempt(currentSong.id, today)
        : null;
    const attemptMatchesContext = Boolean(
        storedAttempt &&
        storedAttempt.dateKey === today &&
        String(storedAttempt.songId) === String(currentSong?.id ?? '') &&
        String(storedAttempt.lang || '') === String(translations?.currentLang || '')
    );
    const isReviewMode = Boolean(attemptMatchesContext);

    result.textContent = '';
    form.innerHTML = '';

    if (!questions || questions.length === 0) {
        // Not enough data for a quiz; still count completion to avoid frustration.
        markDailyChallengeCompletedToday(0, 0);

        // Turn button into a "Return to home" action.
        const labelSpan = submit.querySelector('span');
        if (labelSpan) {
            labelSpan.dataset.fi = 'Takaisin etusivulle';
            labelSpan.dataset.en = 'Return to home';
            labelSpan.dataset.es = 'Volver al inicio';
            labelSpan.dataset.fr = "Retour à l'accueil";
            labelSpan.dataset.ar = 'العودة إلى الصفحة الرئيسية';
            labelSpan.dataset.nl = 'Terug naar home';
        } else {
            submit.textContent = 'Return to home';
        }

        submit.onclick = () => {
            window.location.href = 'index.html';
        };

        translations.updatePageLanguage();
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        return;
    }

    const questionsToRender = isReviewMode && storedAttempt?.questions ? storedAttempt.questions : questions;

    questionsToRender.forEach((q, index) => {
        const qEl = document.createElement('div');
        qEl.className = 'daily-quiz__q';
        qEl.innerHTML = `
            <div class="daily-quiz__q-title">${index + 1}. ${q.prompt}</div>
            <div class="daily-quiz__options"></div>
        `;

        const opts = qEl.querySelector('.daily-quiz__options');
        q.options.forEach((opt, oi) => {
            const id = `${q.id}_${oi}`;
            const label = document.createElement('label');
            label.className = 'daily-quiz__opt';
            label.setAttribute('for', id);
            label.innerHTML = `
                <input type="radio" name="${q.id}" id="${id}" value="${encodeURIComponent(opt)}" />
                <span>${opt}</span>
            `;
            opts.appendChild(label);
        });

        form.appendChild(qEl);
    });

    function close() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
    }

    function scoreQuiz() {
        let score = 0;
        questionsToRender.forEach(q => {
            const selected = form.querySelector(`input[name="${q.id}"]:checked`);
            if (!selected) return;
            const chosen = decodeURIComponent(selected.value);
            if (chosen === q.correct) score += 1;
        });
        return score;
    }

    function showAnswerFeedback() {
        // Lock form to avoid changing answers after grading
        form.classList.add('is-graded');
        const inputs = form.querySelectorAll('input[type="radio"]');
        inputs.forEach(i => (i.disabled = true));

        questionsToRender.forEach(q => {
            const selected = form.querySelector(`input[name="${q.id}"]:checked`);
            const chosen = selected ? decodeURIComponent(selected.value) : null;

            const options = Array.from(form.querySelectorAll(`input[name="${q.id}"]`));
            const correctInput = options.find(i => decodeURIComponent(i.value) === q.correct) || null;

            // Ensure we have a slot for an icon in every option label.
            options.forEach(input => {
                const label = input.closest && input.closest('.daily-quiz__opt');
                if (!label) return;
                if (!label.querySelector('.daily-quiz__mark')) {
                    const mark = document.createElement('span');
                    mark.className = 'daily-quiz__mark';
                    mark.setAttribute('aria-hidden', 'true');
                    label.insertBefore(mark, label.firstChild);
                }
            });

            // Mark selected option as correct/incorrect
            if (selected && selected.closest) {
                const label = selected.closest('.daily-quiz__opt');
                if (label) {
                    label.classList.toggle('is-correct', chosen === q.correct);
                    label.classList.toggle('is-incorrect', chosen !== q.correct);

                    const mark = label.querySelector('.daily-quiz__mark');
                    if (mark) {
                        // Show X only when the chosen answer is wrong
                        mark.textContent = chosen === q.correct ? '' : '✕';
                    }
                }
            }

            // If incorrect (or unanswered), highlight the correct choice
            if (correctInput && correctInput.closest) {
                const correctLabel = correctInput.closest('.daily-quiz__opt');
                if (correctLabel) {
                    correctLabel.classList.add('is-correct-answer');
                }
            }

            // Only show a ✓ when the user actually selected the correct answer.
            if (selected && chosen === q.correct && correctInput && correctInput.closest) {
                const correctLabel = correctInput.closest('.daily-quiz__opt');
                const mark = correctLabel && correctLabel.querySelector('.daily-quiz__mark');
                if (mark) mark.textContent = '✓';
            }
        });
    }

    function applySavedSelections() {
        if (!isReviewMode) return;
        const answers = storedAttempt?.answers || {};
        questionsToRender.forEach(q => {
            const chosen = answers[q.id];
            if (!chosen) return;
            const inputs = Array.from(form.querySelectorAll(`input[name="${q.id}"]`));
            const match = inputs.find(i => decodeURIComponent(i.value) === chosen);
            if (match) match.checked = true;
        });
    }

    function setSubmitToReturnHome() {
        const labelSpan = submit.querySelector('span');
        if (labelSpan) {
            labelSpan.dataset.fi = 'Takaisin etusivulle';
            labelSpan.dataset.en = 'Return to home';
            labelSpan.dataset.es = 'Volver al inicio';
            labelSpan.dataset.fr = "Retour à l'accueil";
            labelSpan.dataset.ar = 'العودة إلى الصفحة الرئيسية';
            labelSpan.dataset.nl = 'Terug naar home';
        } else {
            submit.textContent = 'Return to home';
        }

        submit.onclick = () => {
            window.location.href = 'index.html';
        };
    }

    // Prefill + lock if reviewing.
    applySavedSelections();
    if (isReviewMode) {
        showAnswerFeedback();
        // It's already completed; only allow returning home.
        setSubmitToReturnHome();
        translations.updatePageLanguage();
    } else {
        // Avoid stacking listeners if the user replays the song.
        submit.onclick = () => {
            const score = scoreQuiz();
            showAnswerFeedback();

            // Persist attempt so it can be reviewed later today.
            if (currentSong && currentSong.id != null) {
                const answers = {};
                questionsToRender.forEach(q => {
                    const selected = form.querySelector(`input[name="${q.id}"]:checked`);
                    answers[q.id] = selected ? decodeURIComponent(selected.value) : null;
                });
                saveDailyAttempt(currentSong.id, today, {
                    dateKey: today,
                    songId: String(currentSong.id),
                    lang: String(translations?.currentLang || ''),
                    // Store exactly what the user saw (including randomized option order)
                    questions: JSON.parse(JSON.stringify(questionsToRender)),
                    answers
                });
            }

            markDailyChallengeCompletedToday(score, questionsToRender.length);

            setSubmitToReturnHome();

            // Clear any score text (feedback is shown via highlighted answers).
            if (result) result.textContent = '';

            translations.updatePageLanguage();
        };
    }

    // Click close / backdrop
    modal.onclick = (e) => {
        const target = e.target;
        if (target && target.getAttribute && target.getAttribute('data-close') === '1') {
            close();
        }
    };
    if (closeBtn) closeBtn.onclick = close;

    // Escape to close
    document.addEventListener('keydown', function onKey(e) {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            close();
        }
    }, { once: true });

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    translations.updatePageLanguage();
}

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const songId = urlParams.get('song');
    isDailyMode = urlParams.get('daily') === '1';

    if (!songId) {
        window.location.href = 'index.html';
        return;
    }

    // Fast initial render: use the lightweight index for title/artist/cover/audio.
    const idx = Array.isArray(window.songsIndex) ? window.songsIndex : [];
    const songMeta = idx.find(s => String(s.id) === String(songId)) || null;
    if (!songMeta) {
        // As a fallback (e.g., index not updated), load the full DB.
        if (typeof window.getSongByIdAsync === 'function') {
            const fallbackSong = await window.getSongByIdAsync(songId);
            if (!fallbackSong) {
                alert('Song not found');
                window.location.href = 'index.html';
                return;
            }
            currentSong = fallbackSong;
            initializePlayer(fallbackSong);
        } else {
            alert('Song not found');
            window.location.href = 'index.html';
            return;
        }
    } else {
        currentSong = songMeta;
        initializePlayer(songMeta);
    }

    // Daily mode: show a "Questions" button that opens the quiz immediately.
    const quizJumpBtn = document.getElementById('dailyQuizJumpBtn');
    if (quizJumpBtn) {
        if (isDailyMode) {
            quizJumpBtn.style.display = '';

            // If already completed today, show "Review answers" label.
            const span = quizJumpBtn.querySelector('span');
            if (span) {
                if (isDailyCompletedToday()) {
                    span.dataset.fi = 'Katso vastaukset';
                    span.dataset.en = 'Review answers';
                    span.dataset.es = 'Revisar respuestas';
                    span.dataset.fr = 'Revoir les réponses';
                    span.dataset.ar = 'راجع الإجابات';
                    span.dataset.nl = 'Bekijk antwoorden';
                } else {
                    span.dataset.fi = 'Siirry kysymyksiin';
                    span.dataset.en = 'Go to questions';
                    span.dataset.es = 'Ir a las preguntas';
                    span.dataset.fr = 'Aller aux questions';
                    span.dataset.ar = 'اذهب إلى الأسئلة';
                    span.dataset.nl = 'Ga naar vragen';
                }
                translations.updatePageLanguage();
            }

            quizJumpBtn.addEventListener('click', () => {
                // Don't mark completion here; only open the modal.
                // Force=true so the button always works even if the modal was opened once already.
                openDailyQuizNow({ force: true });
            });
        } else {
            quizJumpBtn.style.display = 'none';
        }
    }
    
    // Listen for language changes
    const langSelector = document.getElementById('langSelector');
    if (langSelector) {
        langSelector.addEventListener('change', () => {
            // Wait a bit for translations to update, then reload lyrics
            setTimeout(() => {
                if (currentSong) {
                    // Also update the difficulty badge label (it isn't part of updatePageLanguage).
                    const levelBadge = document.getElementById('levelBadge');
                    if (levelBadge) {
                        levelBadge.textContent = translations.getLevelName(currentSong.level);
                    }

                    // Ensure we have the full song data (with lyrics) before rendering.
                    Promise.resolve(typeof window.getSongByIdAsync === 'function' ? window.getSongByIdAsync(songId) : currentSong)
                        .then(fullSong => {
                            if (fullSong) {
                                currentSong = fullSong;
                                displayLyrics(currentSong.lyrics);
                            }
                        });
                }
            }, 100);
        });
    }
});

async function initializePlayer(song) {
    // Put the current song title in the browser tab title.
    // Keep the existing branding text from player.html.
    document.title = `${song.title} - SingFin - Opi suomea musiikin kautta / Learn Finnish through Music`;

    // Set song info
    document.getElementById('songTitle').textContent = song.title;
    document.getElementById('artistName').textContent = song.artist;

    // Album cover above the audio player
    const coverImg = document.getElementById('playerCoverImg');
    const coverPlaceholder = document.getElementById('playerCoverPlaceholder');
    if (coverImg && coverPlaceholder) {
        const hasCover = Boolean(song.cover);
        if (hasCover) {
            coverImg.src = song.cover;
            coverImg.alt = `${song.title} — ${song.artist}`;
            coverImg.style.display = 'block';
            coverPlaceholder.style.display = 'none';
        } else {
            coverImg.removeAttribute('src');
            coverImg.alt = '';
            coverImg.style.display = 'none';
            coverPlaceholder.style.display = 'grid';
        }
    }
    
    const levelBadge = document.getElementById('levelBadge');
    levelBadge.textContent = translations.getLevelName(song.level);
    // Allow CSS to theme the difficulty badge consistently with the homepage.
    levelBadge.setAttribute('data-level', song.level);

    // Set audio source
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');
    audioSource.src = song.audioUrl;
    audioPlayer.load();

    // Display lyrics (loaded on-demand if needed)
    const hasLyrics = Array.isArray(song?.lyrics) && song.lyrics.length > 0;
    if (hasLyrics) {
        displayLyrics(song.lyrics);
        setupAudioSync(audioPlayer, song.lyrics);
    } else {
        const lyricsContainer = document.getElementById('lyricsContainer');
        if (lyricsContainer) {
            lyricsContainer.innerHTML = '<div class="lyric-line" style="opacity:0.8">Loading lyrics…</div>';
        }

        // Fetch the full song (with lyrics) only now.
        const fullSong = typeof window.getSongByIdAsync === 'function' ? await window.getSongByIdAsync(song.id) : null;
        if (fullSong && Array.isArray(fullSong.lyrics)) {
            currentSong = fullSong;
            displayLyrics(fullSong.lyrics);
            setupAudioSync(audioPlayer, fullSong.lyrics);
        } else {
            if (lyricsContainer) {
                lyricsContainer.innerHTML = '<div class="lyric-line" style="opacity:0.8">Lyrics unavailable.</div>';
            }
        }
    }

    // Setup translation toggle
    setupTranslationToggle();

    // Audio sync is now initialized only when lyrics are present.
}

function displayLyrics(lyrics) {
    const lyricsContainer = document.getElementById('lyricsContainer');
    lyricsContainer.innerHTML = '';

    lyrics.forEach((lyric, index) => {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'lyric-line';
        lineDiv.dataset.index = index;

        const finnishLine = document.createElement('div');
        finnishLine.className = 'lyric-finnish';
        finnishLine.textContent = lyric.finnish;

        const translationLine = document.createElement('div');
        translationLine.className = 'lyric-translation';
        
        // Get translation based on current language
        const currentLang = translations.currentLang;
        let translationText = '';
        
        // Try to get translation in the selected language, fallback to English
        if (currentLang === 'fi') {
            translationText = lyric.english || ''; // For Finnish, show English as translation
        } else if (currentLang === 'es') {
            translationText = lyric.spanish || lyric.english || '';
        } else if (currentLang === 'fr') {
            translationText = lyric.french || lyric.english || '';
        } else if (currentLang === 'ar') {
            translationText = lyric.arabic || lyric.english || '';
        } else if (currentLang === 'nl') {
            translationText = lyric.dutch || lyric.english || '';
        } else {
            translationText = lyric.english || '';
        }
        
        translationLine.textContent = translationText;

        // Preserve current toggle state even after re-rendering.
        if (showTranslations) {
            translationLine.classList.add('show');
        }
        
        // Set direction for RTL languages
        if (currentLang === 'ar') {
            translationLine.style.direction = 'rtl';
            translationLine.style.textAlign = 'right';
        } else {
            translationLine.style.direction = 'ltr';
            translationLine.style.textAlign = 'left';
        }

        lineDiv.appendChild(finnishLine);
        lineDiv.appendChild(translationLine);
        lyricsContainer.appendChild(lineDiv);
    });
}

function setupTranslationToggle() {
    const toggleBtn = document.getElementById('translationToggle');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
        showTranslations = !showTranslations;
        const translationLines = document.querySelectorAll('.lyric-translation');
        
        translationLines.forEach(line => {
            if (showTranslations) {
                line.classList.add('show');
            } else {
                line.classList.remove('show');
            }
        });

        // Update button text based on language
        const btnText = toggleBtn.querySelector('span');
        const currentLang = translations.currentLang;
        
        if (showTranslations) {
            btnText.dataset.fi = 'Piilota käännös';
            btnText.dataset.en = 'Hide translation';
            btnText.dataset.es = 'Ocultar traducción';
            btnText.dataset.fr = 'Masquer traduction';
            btnText.dataset.ar = 'إخفاء الترجمة';
        } else {
            btnText.dataset.fi = 'Näytä käännös';
            btnText.dataset.en = 'Show translation';
            btnText.dataset.es = 'Mostrar traducción';
            btnText.dataset.fr = 'Afficher traduction';
            btnText.dataset.ar = 'عرض الترجمة';
        }
        translations.updatePageLanguage();
    });
}

function setupAudioSync(audioPlayer, lyrics) {
    const lyricsContainer = document.getElementById('lyricsContainer');
    const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
    
    if (lyrics.length === 0) return;

    // Check if lyrics have custom timestamps
    const hasCustomTime = lyrics[0].time !== undefined;

    audioPlayer.addEventListener('timeupdate', () => {
        const currentTime = audioPlayer.currentTime;
        let currentLineIndex = -1;

        if (hasCustomTime) {
            // Use custom timestamps for precise synchronization
            for (let i = lyrics.length - 1; i >= 0; i--) {
                if (currentTime >= lyrics[i].time) {
                    currentLineIndex = i;
                    break;
                }
            }
        } else {
            // Fallback to simple timing (5 seconds per line)
            const secondsPerLine = 5;
            currentLineIndex = Math.floor(currentTime / secondsPerLine);
        }

        // Remove active class from all lines
        lyricLines.forEach(line => line.classList.remove('active'));

        // Add active class to current line
        if (lyricLines[currentLineIndex]) {
            lyricLines[currentLineIndex].classList.add('active');
            lyricsContainer.classList.add('highlight-mode');
        }
    });

    audioPlayer.addEventListener('pause', () => {
        lyricsContainer.classList.remove('highlight-mode');
        lyricLines.forEach(line => line.classList.remove('active'));
    });

    audioPlayer.addEventListener('ended', () => {
        lyricsContainer.classList.remove('highlight-mode');
        lyricLines.forEach(line => line.classList.remove('active'));

        // Daily challenge: show quiz when song ends.
        if (isDailyMode && !dailyQuizShown && currentSong) {
            openDailyQuizNow();
        }
    });
}
