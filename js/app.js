// Main app logic
document.addEventListener('DOMContentLoaded', () => {
    const levelButtons = document.querySelectorAll('.level-btn');
    const randomBtn = document.getElementById('randomBtn');
    const searchInput = document.getElementById('searchInput');
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

    // Handle search input
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        const songs = searchSongs(query);
        displaySongs(songs);
        if (query && songs.length > 0) {
            songList.style.display = 'block';
            songList.scrollIntoView({ behavior: 'smooth' });
        } else if (!query) {
            songList.style.display = 'none';
        }
    });

    // Display songs by level
    function showSongsByLevel(level) {
        const songs = getSongsByLevel(level);
        displaySongs(songs);
        songList.style.display = 'block';
        songList.scrollIntoView({ behavior: 'smooth' });
    }

    // Display songs in container
    function displaySongs(songs) {
        songsContainer.innerHTML = '';

        if (songs.length === 0) {
            songsContainer.innerHTML = '<p style="text-align:center;color:#666;">No songs found</p>';
            return;
        }

        songs.forEach(song => {
            const songCard = createSongCard(song);
            songsContainer.appendChild(songCard);
        });
    }

    // Create song card element
    function createSongCard(song) {
        const card = document.createElement('div');
        card.className = 'song-card';
        card.onclick = () => navigateToPlayer(song.id);

        const levelName = translations.getLevelName(song.level);
        
        // Determine level badge color
        let levelColor = '';
        switch(song.level) {
            case 'beginner':
                levelColor = 'background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%); color: white;';
                break;
            case 'intermediate':
                levelColor = 'background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); color: white;';
                break;
            case 'advanced':
                levelColor = 'background: linear-gradient(135deg, #f87171 0%, #ef4444 100%); color: white;';
                break;
        }

        card.innerHTML = `
            ${song.cover ? `<div class="song-cover" style="background-image: url('${song.cover}');"></div>` : ''}
            <div class="song-info">
                <h3>${song.title}</h3>
                <p class="song-artist">${song.artist}</p>
                <p class="song-year">${song.year}</p>
                ${song.duration ? `<p class="song-duration">⏱️ ${song.duration}</p>` : ''}
                <p class="level-badge" style="${levelColor}">${levelName}</p>
            </div>
        `;

        return card;
    }

    // Navigate to player page
    function navigateToPlayer(songId) {
        window.location.href = `player.html?song=${songId}`;
    }
});
