import re

# Music durations for each song (in seconds)
MUSIC_DURATIONS = {
    1: 213,   # Bensound Summer (LONGER - 3:33)
    2: 213,   # Bensound Little Idea (LONGER - 3:33)
    3: 215,   # Bensound Memories
    4: 215,   # Bensound November
    5: 520,   # Bensound Epic (LONGER)
    6: 530,   # Bensound Creative Minds (LONGER)
    7: 200,   # Bensound A New Beginning (LONGER - 3:20)
    8: 215,   # Bensound Better Days
    9: 530,   # Bensound The Elevator Bossa Nova (LONGER)
    10: 215,  # Bensound Clear Day (LONGER - 3:35)
    11: 200,  # Bensound Buddy (LONGER - 3:20)
    12: 200,  # Bensound Happy Rock (LONGER - 3:20)
    13: 215,  # Bensound Slow Motion
    14: 520,  # Bensound Relaxing (LONGER)
    15: 520,  # Bensound Tenderness (LONGER)
    16: 530   # Bensound Piano Moment (LONGER)
}

# Read songs.js
with open('js/songs.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Function to recalculate timings for a song
def recalculate_song_timings(match):
    full_match = match.group(0)
    song_id_match = re.search(r'id:\s*(\d+)', full_match)
    
    if not song_id_match:
        return full_match
    
    song_id = int(song_id_match.group(1))
    
    if song_id not in MUSIC_DURATIONS:
        return full_match
    
    # Find all time values
    lyrics_match = re.search(r'lyrics:\s*\[(.*?)\]', full_match, re.DOTALL)
    if not lyrics_match:
        return full_match
    
    lyrics_content = lyrics_match.group(1)
    
    # Count lines
    time_matches = list(re.finditer(r'time:\s*\d+', lyrics_content))
    num_lines = len(time_matches)
    
    if num_lines == 0:
        return full_match
    
    # Calculate time per line
    duration = MUSIC_DURATIONS[song_id]
    time_per_line = duration / num_lines
    
    # Replace each time value
    new_lyrics = lyrics_content
    for i, time_match in enumerate(time_matches):
        old_time = time_match.group(0)
        new_time = f"time: {int(i * time_per_line)}"
        new_lyrics = new_lyrics.replace(old_time, new_time, 1)
    
    # Replace in full match
    new_match = full_match.replace(lyrics_content, new_lyrics)
    
    print(f"✅ Song {song_id:2d}: Recalculated {num_lines} lines, {time_per_line:.1f}s per line")
    
    return new_match

# Process all songs
song_pattern = r'\{\s*id:\s*\d+,.*?lyrics:\s*\[.*?\]\s*\}'
new_content = re.sub(song_pattern, recalculate_song_timings, content, flags=re.DOTALL)

# Write back
with open('js/songs.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("\n✅ All song timings recalculated and saved to songs.js!")
