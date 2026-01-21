# Karakov - Opi suomea musiikin kautta / Learn Finnish through Music

A web application for learning Finnish language through music and karaoke-style lyrics.

## Features

- **Multiple Difficulty Levels**: Choose songs based on your Finnish proficiency (Beginner, Intermediate, Advanced)
- **Random Song Selection**: Get a surprise song if you're feeling adventurous
- **Bilingual Interface**: Full support for Finnish and English languages
- **Karaoke-Style Player**: Follow along with synchronized lyrics
- **Interactive Learning**: Toggle between Finnish and English translations
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Project Structure

```
karakov/
├── index.html              # Main landing page with level selection
├── player.html             # Music player with karaoke lyrics
├── css/
│   ├── style.css          # Main stylesheet
│   └── player.css         # Player-specific styles
├── js/
│   ├── app.js             # Main application logic
│   ├── player.js          # Player functionality
│   ├── songs.js           # Song database
│   └── translations.js    # Language switching logic
├── data/                  # Song data (future JSON files)
├── assets/                # Media files
│   └── audio/            # Audio files (MP3s)
└── .github/
    └── copilot-instructions.md

```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Installation

1. Clone or download this repository
2. Add your Finnish song audio files to the `assets/audio/` directory
3. Open `index.html` in your web browser

### Using a Local Server (Recommended)

For the best experience, use a local web server:

**Option 1: Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Node.js**
```bash
npx http-server
```

**Option 3: VS Code Live Server**
- Install the "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

Then navigate to `http://localhost:8000` (or the appropriate port).

## How to Use

1. **Select Your Level**: On the home page, choose your Finnish proficiency level
2. **Choose a Song**: Browse songs at your level or click "Random Song" for a surprise
3. **Learn with Karaoke**: 
   - Press play to start the music
   - Follow the Finnish lyrics as they highlight
   - Toggle English translations when needed
   - Sing along karaoke-style!

## Adding Your Own Songs

To add new songs to the application:

1. Add the audio file (MP3 format) to `assets/audio/`
2. Edit `js/songs.js` and add a new song object to the `songsDatabase` array:

```javascript
{
    id: 7,  // Unique ID
    title: "Your Song Title",
    artist: "Artist Name",
    level: "beginner", // or "intermediate" or "advanced"
    audioUrl: "assets/audio/your-song.mp3",
    lyrics: [
        { finnish: "Finnish lyrics line", english: "English translation" },
        // Add more lines...
    ]
}
```

## Language Support

The app supports two languages:
- **Finnish (Suomi)** - Primary language
- **English** - For learners who don't speak Finnish yet

Toggle between languages using the button in the top-right corner.

## Technology Stack

- **HTML5** - Structure and semantic markup
- **CSS3** - Styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No frameworks, pure JS
- **Local Storage** - Saves language preference

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Future Enhancements

- [ ] Add more Finnish songs
- [ ] Implement precise timestamp-based lyric synchronization
- [ ] Add vocabulary highlighting and definitions
- [ ] Include pronunciation guides
- [ ] Add user progress tracking
- [ ] Support for playlists
- [ ] Search and filter functionality
- [ ] User-uploaded songs
- [ ] Mobile app version

## Contributing

Feel free to contribute by:
- Adding more Finnish songs
- Improving translations
- Enhancing the UI/UX
- Fixing bugs
- Adding new features

## Notes

⚠️ **Audio Files Not Included**: This repository does not include actual audio files. You'll need to add your own Finnish music MP3s to the `assets/audio/` directory. Make sure you have the rights to use any music files you add.

## License

This project is open source and available for educational purposes.

## Support

If you have questions or need help, please open an issue on GitHub.

---

**Hauskaa oppimista! / Happy learning!** 🎵📚
