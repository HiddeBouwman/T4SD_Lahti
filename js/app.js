// Main app logic
document.addEventListener('DOMContentLoaded', () => {
    const levelButtons = document.querySelectorAll('.level-btn');
    const randomBtn = document.getElementById('randomBtn');
    const songList = document.getElementById('songList');
    const songsContainer = document.getElementById('songsContainer');

    // Handle level selection
    levelButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const level = btn.dataset.level;
            showSongsByLevel(level);
        });
    });

    // Handle random song selection
    randomBtn.addEventListener('click', () => {
        const randomSong = getRandomSong();
        navigateToPlayer(randomSong.id);
    });

    // Display songs by level
    function showSongsByLevel(level) {
        const songs = getSongsByLevel(level);
        songsContainer.innerHTML = '';

        songs.forEach(song => {
            const songCard = createSongCard(song);
            songsContainer.appendChild(songCard);
        });

        songList.style.display = 'block';
        songList.scrollIntoView({ behavior: 'smooth' });
    }

    // Create song card element
    function createSongCard(song) {
        const card = document.createElement('div');
        card.className = 'song-card';
        card.onclick = () => navigateToPlayer(song.id);

        const levelName = translations.getLevelName(song.level);

        card.innerHTML = `
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
            <p class="level-badge">${levelName}</p>
        `;

        return card;
    }

    // Navigate to player page
    function navigateToPlayer(songId) {
        window.location.href = `player.html?song=${songId}`;
    }
});
