// Player page logic
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

    initializePlayer(song);
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

        const englishLine = document.createElement('div');
        englishLine.className = 'lyric-english';
        englishLine.textContent = lyric.english;

        lineDiv.appendChild(finnishLine);
        lineDiv.appendChild(englishLine);
        lyricsContainer.appendChild(lineDiv);
    });
}

function setupTranslationToggle() {
    const toggleBtn = document.getElementById('translationToggle');
    let showTranslations = false;

    toggleBtn.addEventListener('click', () => {
        showTranslations = !showTranslations;
        const englishLines = document.querySelectorAll('.lyric-english');
        
        englishLines.forEach(line => {
            if (showTranslations) {
                line.classList.add('show');
            } else {
                line.classList.remove('show');
            }
        });

        // Update button text
        const btnText = toggleBtn.querySelector('span');
        if (translations.currentLang === 'fi') {
            btnText.dataset.fi = showTranslations ? 'Piilota englanti' : 'Näytä englanti';
        } else {
            btnText.dataset.en = showTranslations ? 'Hide English' : 'Show English';
        }
        translations.updatePageLanguage();
    });
}

function setupAudioSync(audioPlayer, lyrics) {
    // This is a simplified version - for real sync, you'd need timestamp data
    const lyricsContainer = document.getElementById('lyricsContainer');
    const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
    
    if (lyrics.length === 0) return;

    audioPlayer.addEventListener('timeupdate', () => {
        const currentTime = audioPlayer.currentTime;
        
        // Each line changes every 5 seconds for better pacing
        const secondsPerLine = 5;
        const currentLineIndex = Math.floor(currentTime / secondsPerLine);

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
