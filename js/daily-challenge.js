// Daily Challenge (homepage)
// - Picks a new random song each day (stored in localStorage)
// - Shows streak + completion status
// - Start button navigates to player with ?daily=1

(function () {
    const LS = {
        dailySongDate: 'dailyChallenge.songDate',
        dailySongId: 'dailyChallenge.songId',
        completedDate: 'dailyChallenge.completedDate',
        streak: 'dailyChallenge.streak',
        lastCompletedDate: 'dailyChallenge.lastCompletedDate'
    };

    function getAttemptKey(songId, dateKey = getTodayKey()) {
        return `dailyChallenge.attempt.${dateKey}.${songId}`;
    }

    function hasAttemptForToday(songId) {
        if (songId == null) return false;
        try {
            return Boolean(localStorage.getItem(getAttemptKey(songId, getTodayKey())));
        } catch {
            return false;
        }
    }

    function getTodayKey() {
        return new Date().toISOString().slice(0, 10);
    }

    function safeGetAllSongs() {
        try {
            // Support multiple possible globals (keep this flexible):
            // - songsDatabase (current songs.js)
            // - songs / SONGS (older variants)
            const s0 = Array.isArray(window.songsDatabase) ? window.songsDatabase : [];
            const s1 = Array.isArray(window.songs) ? window.songs : [];
            const s2 = Array.isArray(window.SONGS) ? window.SONGS : [];

            const merged = [...s0, ...s1, ...s2].filter(Boolean);
            if (merged.length > 0) {
                const byId = new Map();
                merged.forEach(s => s && s.id != null && byId.set(String(s.id), s));
                return Array.from(byId.values());
            }
        } catch {
            // ignore
        }

        return [];
    }

    // Deterministic hash -> 32-bit unsigned
    // (simple, fast, stable across browsers)
    function hashString32(str) {
        let h = 2166136261; // FNV-1a offset basis
        for (let i = 0; i < str.length; i++) {
            h ^= str.charCodeAt(i);
            // FNV-1a prime: 16777619
            h = Math.imul(h, 16777619);
        }
        return h >>> 0;
    }

    function getDeterministicSongForDate(dateKey) {
        const all = safeGetAllSongs();
        if (!all || all.length === 0) return null;

        // Sort by a stable key so index mapping is identical for everyone.
        const sorted = all
            .slice()
            .sort((a, b) => String(a?.id ?? '').localeCompare(String(b?.id ?? '')));

        // Seed based only on the date so all users get the same song that day.
        const idx = hashString32(String(dateKey)) % sorted.length;
        return sorted[idx] || null;
    }

    function pickSongForToday() {
        const today = getTodayKey();
        const storedDate = localStorage.getItem(LS.dailySongDate);
        const storedId = localStorage.getItem(LS.dailySongId);

        // Deterministic pick: everyone gets the same song for a given day.
        const chosen = getDeterministicSongForDate(today);
        if (!chosen) return null;

        // Keep localStorage as a cache, but ensure it matches the deterministic result.
        if (storedDate !== today || String(storedId) !== String(chosen.id)) {
            localStorage.setItem(LS.dailySongDate, today);
            localStorage.setItem(LS.dailySongId, String(chosen.id));
        }

        // If we have matching storage and can resolve the song by ID, return that.
        // (Helps if the song object referenced by 'chosen' is not the canonical one.)
        const s = window.getSongById ? window.getSongById(String(chosen.id)) : null;
        return s || chosen;
    }

    function getStreak() {
        const v = parseInt(localStorage.getItem(LS.streak) || '0', 10);
        return Number.isFinite(v) ? v : 0;
    }

    function isCompletedToday() {
        return localStorage.getItem(LS.completedDate) === getTodayKey();
    }

    function setStatusText(el) {
        if (!el) return;
        const streak = getStreak();
        const completed = isCompletedToday();

        // Keep this readable even without translations: the surrounding UI is translated.
        if (completed) {
            el.textContent = `✅ Completed today • Streak: ${streak}`;
        } else {
            el.textContent = `🔥 Streak: ${streak}`;
        }
    }

    function setButtonState(btn) {
        if (!btn) return;
        const completed = isCompletedToday();
        btn.disabled = completed;

        const labelSpan = btn.querySelector('span');
        if (labelSpan) {
            if (completed) {
                labelSpan.dataset.fi = 'Suoritettu tänään';
                labelSpan.dataset.en = 'Completed today';
                labelSpan.dataset.es = 'Completado hoy';
                labelSpan.dataset.fr = "Terminé aujourd'hui";
                labelSpan.dataset.ar = 'اكتمل اليوم';
                labelSpan.dataset.nl = 'Vandaag voltooid';
            } else {
                labelSpan.dataset.fi = 'Aloita haaste';
                labelSpan.dataset.en = 'Start challenge';
                labelSpan.dataset.es = 'Iniciar desafío';
                labelSpan.dataset.fr = 'Démarrer le défi';
                labelSpan.dataset.ar = 'ابدأ التحدي';
                labelSpan.dataset.nl = 'Start uitdaging';
            }
        }

        // Apply label translation immediately
        if (window.translations && typeof window.translations.updatePageLanguage === 'function') {
            window.translations.updatePageLanguage();
        }
    }

    function initUI() {
        const card = document.getElementById('dailyChallenge');
        if (!card) return;

        const titleEl = document.getElementById('dailyChallengeTitle');
        const artistEl = document.getElementById('dailyChallengeArtist');
        const levelEl = document.getElementById('dailyChallengeLevel');
        const statusEl = document.getElementById('dailyChallengeStatus');
        const btn = document.getElementById('dailyChallengeBtn');
    const reviewBtn = document.getElementById('dailyChallengeReviewBtn');

    const song = pickSongForToday();
    const completed = isCompletedToday();
    // Only show review if the challenge is completed today AND we have a saved attempt for today.
    const canReview = Boolean(completed && song && hasAttemptForToday(song.id));
        if (song) {
            if (titleEl) titleEl.textContent = song.title;
            if (artistEl) artistEl.textContent = song.artist;
            if (levelEl) {
                levelEl.textContent = translations.getLevelName(song.level);
                levelEl.setAttribute('data-level', song.level);
            }
            if (btn) {
                btn.disabled = completed;
                btn.title = completed ? 'Completed today' : '';
            }

            if (reviewBtn) {
                // Review should only appear if we actually have a saved attempt.
                // (Completion can be set even when the quiz had 0 questions / or the attempt failed to save.)
                reviewBtn.style.display = canReview ? '' : 'none';
                reviewBtn.disabled = !canReview;
            }
        } else {
            if (titleEl) titleEl.textContent = 'No songs available';
            if (artistEl) artistEl.textContent = '';
            if (levelEl) {
                levelEl.textContent = '';
                levelEl.removeAttribute('data-level');
            }
            if (btn) btn.disabled = true;
            if (reviewBtn) {
                reviewBtn.style.display = 'none';
                reviewBtn.disabled = true;
            }
        }

        setStatusText(statusEl);
        setButtonState(btn);

        // Re-render difficulty label + button label when language changes.
        // The level name comes from translations.getLevelName(level), so it must be recomputed.
        const langSelector = document.getElementById('langSelector');
        if (langSelector && !langSelector.dataset.dailyChallengeBound) {
            langSelector.dataset.dailyChallengeBound = '1';
            langSelector.addEventListener('change', () => {
                const s = pickSongForToday();
                if (s && levelEl) {
                    levelEl.textContent = translations.getLevelName(s.level);
                    levelEl.setAttribute('data-level', s.level);
                }
                setButtonState(btn);
                setStatusText(statusEl);

                // Ensure review button label gets translated.
                if (window.translations && typeof window.translations.updatePageLanguage === 'function') {
                    window.translations.updatePageLanguage();
                }
            });
        }

        if (btn) {
            btn.addEventListener('click', () => {
                if (isCompletedToday()) return;
                if (!song) return;
                window.location.href = `player.html?song=${encodeURIComponent(song.id)}&daily=1`;
            });
        }

        if (reviewBtn) {
            reviewBtn.addEventListener('click', () => {
                // Allow review only if an attempt exists for today.
                if (!isCompletedToday()) return;
                if (!song || !hasAttemptForToday(song.id)) return;
                if (!song) return;
                window.location.href = `player.html?song=${encodeURIComponent(song.id)}&daily=1`;
            });
        }

        // If player marks completion in another tab, keep it fresh.
        window.addEventListener('storage', (e) => {
            if (!e || !e.key) return;
            if (e.key.startsWith('dailyChallenge.')) {
                setStatusText(statusEl);
                // Update button state if completion changed.
                setButtonState(btn);

                if (reviewBtn) {
                    const s = pickSongForToday();
                    const reviewable = Boolean(isCompletedToday() && s && hasAttemptForToday(s.id));
                    reviewBtn.style.display = reviewable ? '' : 'none';
                    reviewBtn.disabled = !reviewable;
                }
            }
        });
    }

    document.addEventListener('DOMContentLoaded', initUI);
})();
