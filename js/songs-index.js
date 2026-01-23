// Lightweight song index for the player page.
// Contains only metadata needed for rendering the header + cover + audio.
// Full lyrics remain in songs.js and are loaded on-demand only on the player.

(function () {
    // NOTE: Keep this intentionally small. No lyrics here.
    // If you add/remove songs in songs.js, update this index too.

    const songsIndex = [
        {
            id: 1,
            title: "Lapin Kesä",
            artist: "Vesa-Matti Loiri",
            year: 1983,
            duration: "4:30",
            level: "beginner",
            cover: "https://cdnaws.recis.io/i/img/02/3f/d6/a2_624286_sq250.jpg",
            audioUrl: "assets/audio/id1.mp3"
        },
        {
            id: 2,
            title: "Sata Salamaa",
            artist: "Virve Rosti",
            year: 1982,
            duration: "2:49",
            level: "beginner",
            cover: "https://cdnaws.recis.io/i/img/02/3f/c6/33_f88f88_sq250.jpg",
            audioUrl: "assets/audio/SataSalamaa.mp3"
        },
        {
            id: 3,
            title: "Armo",
            artist: "Apulanta",
            year: 1999,
            duration: "3:30",
            level: "intermediate",
            cover: "https://cdnaws.recis.io/i/img/02/3f/d1/c4_3ae569_sq250.jpg",
            audioUrl: "https://www.bensound.com/bensound-music/bensound-memories.mp3"
        }
    ];

    try {
        window.songsIndex = songsIndex;
    } catch {
        // ignore
    }
})();
