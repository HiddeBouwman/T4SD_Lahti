// Player page logic
let currentSong = null;

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const songId = urlParams.get('song');

    if (!songId) {
        window.location.href = 'index.html';
        return;
    }

    const song = getSongById(songId);
    if (!song) {
        alert('Song not found');
        window.location.href = 'index.html';
        return;
    }

    currentSong = song;
    initializePlayer(song);
    
    // Listen for language changes
    const langSelector = document.getElementById('langSelector');
    if (langSelector) {
        langSelector.addEventListener('change', () => {
            // Wait a bit for translations to update, then reload lyrics
            setTimeout(() => {
                if (currentSong) {
                    displayLyrics(currentSong.lyrics);
                }
            }, 100);
        });
    }
});

function initializePlayer(song) {
    // Set song info
    document.getElementById('songTitle').textContent = song.title;
    document.getElementById('artistName').textContent = song.artist;
    
    const levelBadge = document.getElementById('levelBadge');
    levelBadge.textContent = translations.getLevelName(song.level);

    // Set audio source
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');
    audioSource.src = song.audioUrl;
    audioPlayer.load();

    // Display lyrics
    displayLyrics(song.lyrics);

    // Setup translation toggle
    setupTranslationToggle();

    // Setup audio sync (optional - for highlighting current lyric)
    setupAudioSync(audioPlayer, song.lyrics);
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
    let showTranslations = false;

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
    });
}
