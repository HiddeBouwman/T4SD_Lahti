// Main app logic
document.addEventListener('DOMContentLoaded', () => {
    // Homepage tab-like navigation (Daily Challenge vs Search/Browse)
    const tabDaily = document.getElementById('tabDaily');
    const tabSearch = document.getElementById('tabSearch');
    const dailySection = document.getElementById('dailyChallenge');
    const searchSection = document.getElementById('searchSection');
    const levelSection = document.getElementById('levelSection');

    function setActiveTab(which, opts = { scroll: true }) {
        const isDaily = which === 'daily';

        if (tabDaily) {
            tabDaily.classList.toggle('is-active', isDaily);
            tabDaily.setAttribute('aria-selected', isDaily ? 'true' : 'false');
        }
        if (tabSearch) {
            tabSearch.classList.toggle('is-active', !isDaily);
            tabSearch.setAttribute('aria-selected', !isDaily ? 'true' : 'false');
        }

        if (dailySection) dailySection.hidden = !isDaily;
        if (searchSection) searchSection.hidden = isDaily;
        if (levelSection) levelSection.hidden = isDaily;

        // Song list remains controlled by existing logic; just ensure it can't show on Daily tab.
        const songListEl = document.getElementById('songList');
        if (songListEl) {
            if (isDaily) {
                // Hard-hide so it can't visually linger even if other logic set display:block.
                songListEl.hidden = true;
                songListEl.style.display = 'none';
            } else {
                // Keep whatever display state the search logic wants.
                // If search logic has display:block, show it; otherwise keep hidden.
                songListEl.hidden = songListEl.style.display === 'none';
            }
        }

        try {
            localStorage.setItem('home.activeTab', which);
        } catch {
            // ignore
        }

        if (opts && opts.scroll) {
            const target = isDaily ? dailySection : searchSection;
            if (target && target.scrollIntoView) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }

    if (tabDaily) {
        tabDaily.addEventListener('click', () => setActiveTab('daily'));
    }
    if (tabSearch) {
        tabSearch.addEventListener('click', () => setActiveTab('search'));
    }

    const levelButtons = document.querySelectorAll('.level-btn');
    const randomBtn = document.getElementById('randomBtn');
    const searchInput = document.getElementById('searchInput');
    const songList = document.getElementById('songList');
    const songsContainer = document.getElementById('songsContainer');

    // When the language changes, update the difficulty labels inside existing song cards.
    const langSelector = document.getElementById('langSelector');
    if (langSelector) {
        langSelector.addEventListener('change', () => {
            // translations.changeLang runs on this same event; wait a tick so currentLang is updated.
            setTimeout(() => {
                updateSongCardLevelLabels();
            }, 0);
        });
    }

    // Handle level selection
    levelButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (tabSearch && tabDaily) setActiveTab('search', { scroll: false });
            const level = btn.dataset.level;
            showSongsByLevel(level);
        });
    });

    // Handle random song selection
    randomBtn.addEventListener('click', () => {
        if (tabSearch && tabDaily) setActiveTab('search', { scroll: false });
        const randomSong = getRandomSong();
        navigateToPlayer(randomSong.id);
    });

    // Handle search input
    searchInput.addEventListener('input', (e) => {
        if (tabSearch && tabDaily) setActiveTab('search', { scroll: false });
        const query = e.target.value.trim();
        const songs = searchSongs(query);
        displaySongs(songs);
        if (query && songs.length > 0) {
            songList.style.display = 'block';
            songList.hidden = false;
            songList.scrollIntoView({ behavior: 'smooth' });
        } else if (!query) {
            songList.style.display = 'none';
            songList.hidden = true;
        }
    });

    // Display songs by level
    function showSongsByLevel(level) {
        const songs = getSongsByLevel(level);
        displaySongs(songs);
        songList.style.display = 'block';
        songList.hidden = false;
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

    // Initial tab selection:
    // - If there is already a search query or a visible song list, start on Search.
    // - Else restore last tab from localStorage, default Daily.
    (function initTabs() {
        if (!tabDaily || !tabSearch) return;
        let initial = 'daily';
        try {
            const saved = localStorage.getItem('home.activeTab');
            if (saved === 'search' || saved === 'daily') initial = saved;
        } catch {
            // ignore
        }

        const hasQuery = Boolean(searchInput && searchInput.value && searchInput.value.trim().length > 0);
        const songListVisible = Boolean(songList && songList.style.display !== 'none');
        if (hasQuery || songListVisible) initial = 'search';

        setActiveTab(initial, { scroll: false });
    })();

    function updateSongCardLevelLabels() {
        const badges = songsContainer.querySelectorAll('.level-badge[data-level]');
        badges.forEach(badge => {
            const level = badge.getAttribute('data-level');
            if (!level) return;
            badge.textContent = translations.getLevelName(level);
        });
    }

    // Create song card element
    function createSongCard(song) {
        const card = document.createElement('div');
        card.className = `song-card level-${song.level}`;
        card.onclick = () => navigateToPlayer(song.id);

        const levelName = translations.getLevelName(song.level);

        card.innerHTML = `
            ${song.cover ? `<div class="song-cover-thumb" style="background-image: url('${song.cover}');"></div>` : `<div class="song-cover-thumb song-cover-thumb--placeholder" aria-hidden="true">🎵</div>`}
            <div class="song-info">
                <div class="song-main">
                    <h3>${song.title}</h3>
                    <p class="song-artist">${song.artist}</p>
                </div>
                <div class="song-meta">
                    <p class="song-year">${song.year}</p>
                    ${song.duration ? `<p class="song-duration">⏱️ ${song.duration}</p>` : ''}
                </div>
                <p class="level-badge" data-level="${song.level}">${levelName}</p>
            </div>
        `;

        return card;
    }

    // Navigate to player page
    function navigateToPlayer(songId) {
        window.location.href = `player.html?song=${songId}`;
    }
});
