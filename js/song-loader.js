// Song loader utilities.
// Goal: avoid loading/parsing the full lyrics database (songs.js) on player.html.
//
// Contract:
// - window.ensureSongsLoaded(): Promise<void>
// - window.getSongByIdAsync(id): Promise<Song|null>
//
// The player should:
// 1) Load songs-index.js
// 2) Use songsIndex for quick metadata
// 3) Load songs.js only if/when it needs full lyrics (and then call getSongById)

(function () {
    function alreadyHasSongsDb() {
        return Array.isArray(window.songsDatabase) && window.songsDatabase.length > 0;
    }

    function loadScriptOnce(src) {
        return new Promise((resolve, reject) => {
            // If the script tag already exists, assume it will (or did) load.
            const existing = document.querySelector(`script[src="${src}"]`);
            if (existing) {
                if (existing.dataset.loaded === '1') return resolve();
                existing.addEventListener('load', () => resolve(), { once: true });
                existing.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)), { once: true });
                return;
            }

            const s = document.createElement('script');
            s.src = src;
            s.defer = true;
            s.dataset.dynamic = '1';
            s.addEventListener('load', () => {
                s.dataset.loaded = '1';
                resolve();
            }, { once: true });
            s.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)), { once: true });
            document.head.appendChild(s);
        });
    }

    async function ensureSongsLoaded() {
        if (alreadyHasSongsDb()) return;
        await loadScriptOnce('js/songs.js');
    }

    async function getSongByIdAsync(id) {
        // Fast path: if the full db is already present, use the existing helper.
        if (alreadyHasSongsDb() && typeof window.getSongById === 'function') {
            return window.getSongById(id);
        }

        // Otherwise load songs.js on demand.
        await ensureSongsLoaded();
        if (typeof window.getSongById === 'function') return window.getSongById(id);
        return null;
    }

    try {
        window.ensureSongsLoaded = ensureSongsLoaded;
        window.getSongByIdAsync = getSongByIdAsync;
    } catch {
        // ignore
    }
})();
