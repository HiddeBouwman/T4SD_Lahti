import re
import json

# Durations for each song (in seconds) - estimated from Bensound tracks
SONG_DURATIONS = {
    1: 140,   # Beginner - Sunny
    2: 140,   # Beginner - Happiness
    3: 210,   # Intermediate - Memories
    4: 210,   # Intermediate - November
    5: 255,   # Advanced - Inspire (51 lines)
    6: 260,   # Advanced - Dreams (53 lines)
    7: 140,   # Beginner - Jazzy Frenchy
    8: 210,   # Intermediate - Better Days
    9: 260,   # Advanced - The Lounge (53 lines)
    10: 140,  # Beginner - Acoustic Breeze
    11: 140,  # Beginner - Ukulele
    12: 140,  # Beginner - Little Idea
    13: 210,  # Intermediate - Slow Motion
    14: 255,  # Advanced - Energy
    15: 255,  # Advanced - Summer
    16: 255   # Advanced - Perception
}

def count_lyrics_lines(song_text):
    """Count number of lyric lines in a song"""
    # Count occurrences of 'time:'
    return len(re.findall(r'time:\s*\d+', song_text))

def fix_song_timings(songs_content):
    """Fix all song timings based on duration and number of lines"""
    
    # Split into individual songs
    song_pattern = r'(\{\s*id:\s*\d+,.*?lyrics:\s*\[)(.*?)(\]\s*\})'
    
    def replace_song_timings(match):
        song_header = match.group(1)
        lyrics_content = match.group(2)
        song_footer = match.group(3)
        
        # Extract song ID
        id_match = re.search(r'id:\s*(\d+)', song_header)
        if not id_match:
            return match.group(0)
        
        song_id = int(id_match.group(1))
        
        # Count lines
        num_lines = len(re.findall(r'time:\s*\d+', lyrics_content))
        
        if num_lines == 0 or song_id not in SONG_DURATIONS:
            return match.group(0)
        
        # Calculate time per line
        duration = SONG_DURATIONS[song_id]
        time_per_line = duration / num_lines
        
        # Replace all time values
        line_index = 0
        def replace_time(time_match):
            nonlocal line_index
            new_time = int(line_index * time_per_line)
            line_index += 1
            return f"time: {new_time}"
        
        new_lyrics = re.sub(r'time:\s*\d+', replace_time, lyrics_content)
        
        print(f"Song {song_id}: {num_lines} lines, {duration}s duration, {time_per_line:.1f}s per line")
        
        return song_header + new_lyrics + song_footer
    
    return re.sub(song_pattern, replace_song_timings, songs_content, flags=re.DOTALL)

# Read the file
with open('js/songs.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix timings
new_content = fix_song_timings(content)

# Write back
with open('js/songs.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("\n✅ All song timings have been recalculated!")
