// Quick sanity test for seeded Daily Challenge selection.
// Open index.html and run in DevTools console:
//   SeedTest.run()
// This file is not required for the app to work.

(function () {
    function hashString32(str) {
        let h = 2166136261;
        for (let i = 0; i < str.length; i++) {
            h ^= str.charCodeAt(i);
            h = Math.imul(h, 16777619);
        }
        return h >>> 0;
    }

    function safeSongs() {
        const s1 = Array.isArray(window.songs) ? window.songs : [];
        const s2 = Array.isArray(window.SONGS) ? window.SONGS : [];
        const merged = [...s1, ...s2].filter(Boolean);
        const byId = new Map();
        merged.forEach(s => s && s.id != null && byId.set(String(s.id), s));
        return Array.from(byId.values());
    }

    function pickForDate(dateKey) {
        const all = safeSongs();
        const sorted = all.slice().sort((a, b) => String(a?.id ?? '').localeCompare(String(b?.id ?? '')));
        const idx = hashString32(String(dateKey)) % sorted.length;
        return sorted[idx] || null;
    }

    window.SeedTest = {
        run() {
            const dates = ['2026-01-23', '2026-01-24', '2026-02-01'];
            const picks = dates.map(d => ({
                date: d,
                songId: pickForDate(d)?.id,
                title: pickForDate(d)?.title
            }));

            console.table(picks);
            console.log('Same date should always pick same song, across browsers (assuming identical songs list + IDs).');
            return picks;
        }
    };
})();
