// Song database
const songsDatabase = [
    {
        id: 1,
        title: "Kesäyö",
        artist: "Perinteinen",
        level: "beginner",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        lyrics: [
            { finnish: "Kesäyö on kaunis", english: "Summer night is beautiful" },
            { finnish: "Tähdet loistaa kirkkaasti", english: "Stars shine brightly" },
            { finnish: "Kuljen metsäpolkuja", english: "I walk forest paths" },
            { finnish: "Sydän täynnä iloa", english: "Heart full of joy" },
            { finnish: "Yö on hiljainen ja rauhallinen", english: "Night is quiet and peaceful" },
            { finnish: "Kuulen vain luonnon äänet", english: "I hear only nature's sounds" },
            { finnish: "Tämä hetki on täydellinen", english: "This moment is perfect" },
            { finnish: "En halua että se loppuu", english: "I don't want it to end" }
        ]
    },
    {
        id: 2,
        title: "Satumaa",
        artist: "Klassikko",
        level: "beginner",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        lyrics: [
            { finnish: "Satumaa, satumaa", english: "Fairyland, fairyland" },
            { finnish: "Kaunehin ja ihanin", english: "Most beautiful and wonderful" },
            { finnish: "Sinne matkaan tahtoisin", english: "There I would like to travel" },
            { finnish: "Yli meren sinisen", english: "Over the blue sea" },
            { finnish: "Missä kaikki on kaunista", english: "Where everything is beautiful" },
            { finnish: "Ja ihmiset ovat onnellisia", english: "And people are happy" },
            { finnish: "Haaveilen sinusta joka päivä", english: "I dream of you every day" },
            { finnish: "Jonain päivänä pääsen sinne", english: "Someday I will get there" }
        ]
    },
    {
        id: 3,
        title: "Kotikaupunkini",
        artist: "Moderni",
        level: "intermediate",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        lyrics: [
            { finnish: "Tämä on kotikaupunkini", english: "This is my hometown" },
            { finnish: "Tunnen jokaisen kadun", english: "I know every street" },
            { finnish: "Muistot täyttää sydämen", english: "Memories fill the heart" },
            { finnish: "Täällä aina palaan", english: "Here I always return" },
            { finnish: "Lapsuuteni talot seisovat vielä", english: "My childhood houses still stand" },
            { finnish: "Ystäväni asuvat lähellä", english: "My friends live nearby" },
            { finnish: "Tämä paikka on minun kotini", english: "This place is my home" },
            { finnish: "En vaihda sitä mihinkään", english: "I wouldn't trade it for anything" }
        ]
    },
    {
        id: 4,
        title: "Syksy saapuu",
        artist: "Nykymusiikki",
        level: "intermediate",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        lyrics: [
            { finnish: "Lehdet putoaa maahan", english: "Leaves fall to the ground" },
            { finnish: "Värit vaihtuvat kultaan", english: "Colors change to gold" },
            { finnish: "Tuuli humisee puissa", english: "Wind whispers in the trees" },
            { finnish: "Syksy on saapunut", english: "Autumn has arrived" },
            { finnish: "Ilma muuttuu viileämmäksi", english: "The air becomes cooler" },
            { finnish: "Päivät lyhenevät nopeasti", english: "Days shorten quickly" },
            { finnish: "Luonto valmistautuu talveen", english: "Nature prepares for winter" },
            { finnish: "Mutta kauneus on kaikkialla", english: "But beauty is everywhere" }
        ]
    },
    {
        id: 5,
        title: "Elämän polku",
        artist: "Filosofinen",
        level: "advanced",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        lyrics: [
            { finnish: "Kulkiessani elämän polkua", english: "As I walk life's path" },
            { finnish: "Kohtaan monia haasteita", english: "I face many challenges" },
            { finnish: "Jokainen askel opettaa", english: "Every step teaches" },
            { finnish: "Viisautta ja ymmärrystä", english: "Wisdom and understanding" },
            { finnish: "Virheistä opin eniten", english: "I learn most from mistakes" },
            { finnish: "Onnistumiset antavat voimaa", english: "Successes give strength" },
            { finnish: "Matka on tärkeämpi kuin määränpää", english: "Journey is more important than destination" },
            { finnish: "Elämä on kaunis kokemus", english: "Life is a beautiful experience" }
        ]
    },
    {
        id: 6,
        title: "Unelmien maailma",
        artist: "Runoilija",
        level: "advanced",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
        lyrics: [
            { finnish: "Unelmien maailmassa vaeltaen", english: "Wandering in the world of dreams" },
            { finnish: "Todellisuus hämärtyy", english: "Reality blurs" },
            { finnish: "Mielikuvitus lentää vapaana", english: "Imagination flies free" },
            { finnish: "Rajattomat mahdollisuudet avautuvat", english: "Limitless possibilities open up" },
            { finnish: "Luon oman todellisuuteni", english: "I create my own reality" },
            { finnish: "Missä mikään ei ole mahdotonta", english: "Where nothing is impossible" },
            { finnish: "Unelmat voivat toteutua", english: "Dreams can come true" },
            { finnish: "Jos vain uskallan uskoa", english: "If I only dare to believe" }
        ]
    },
    {
        id: 7,
        title: "Aurinko paistaa",
        artist: "Kesälaulu",
        level: "beginner",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
        lyrics: [
            { finnish: "Aurinko paistaa taivaalla", english: "The sun shines in the sky" },
            { finnish: "Linnut laulavat puissa", english: "Birds sing in the trees" },
            { finnish: "Kesä on täällä taas", english: "Summer is here again" },
            { finnish: "Onnellinen olen nyt", english: "I am happy now" },
            { finnish: "Lämpö tuntuu ihollani", english: "Warmth feels on my skin" },
            { finnish: "Kukat kukkivat kauniisti", english: "Flowers bloom beautifully" },
            { finnish: "Haluan nauttia tästä hetkestä", english: "I want to enjoy this moment" },
            { finnish: "Kesä on paras vuodenaika", english: "Summer is the best season" }
        ]
    },
    {
        id: 8,
        title: "Sininen meri",
        artist: "Merilaulu",
        level: "intermediate",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
        lyrics: [
            { finnish: "Sininen meri aaltoilee", english: "The blue sea waves" },
            { finnish: "Purjevene liukuu hiljaa", english: "Sailboat glides quietly" },
            { finnish: "Tuuli vie minut kauas", english: "Wind takes me far away" },
            { finnish: "Vapaus on minun", english: "Freedom is mine" },
            { finnish: "Aaltojen ääni rauhoittaa", english: "Sound of waves calms" },
            { finnish: "Horisontissa ei näy maata", english: "No land visible on horizon" },
            { finnish: "Olen yksin mutta en yksinäinen", english: "I am alone but not lonely" },
            { finnish: "Meri on minun kotini", english: "The sea is my home" }
        ]
    },
    {
        id: 9,
        title: "Tähtitaivas",
        artist: "Yölaulu",
        level: "advanced",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
        lyrics: [
            { finnish: "Tähtitaivas loistaa yllä", english: "Starry sky shines above" },
            { finnish: "Kuu valaisee polkuni", english: "Moon illuminates my path" },
            { finnish: "Äärettömyys ympäröi minua", english: "Infinity surrounds me" },
            { finnish: "Löydän rauhan syvällä sisimmässäni", english: "I find peace deep within myself" },
            { finnish: "Tähdet kertovat tarinoita", english: "Stars tell stories" },
            { finnish: "Universumin salaisuuksista", english: "About secrets of the universe" },
            { finnish: "Tunnen olevani osa jotain suurempaa", english: "I feel part of something greater" },
            { finnish: "Yö antaa minulle perspektiivin", english: "Night gives me perspective" }
        ]
    }
];

// Get all songs
function getAllSongs() {
    return songsDatabase;
}

// Get songs by level
function getSongsByLevel(level) {
    return songsDatabase.filter(song => song.level === level);
}

// Get random song
function getRandomSong() {
    const randomIndex = Math.floor(Math.random() * songsDatabase.length);
    return songsDatabase[randomIndex];
}

// Get song by ID
function getSongById(id) {
    return songsDatabase.find(song => song.id === parseInt(id));
}

// Get random song by level
function getRandomSongByLevel(level) {
    const levelSongs = getSongsByLevel(level);
    if (levelSongs.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * levelSongs.length);
    return levelSongs[randomIndex];
}
