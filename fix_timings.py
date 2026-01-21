import re
import json

# Target timing per line for each level (in seconds)
TARGET_TIMING = {
    'beginner': 8,      # 8 seconds per line
    'intermediate': 7,  # 7 seconds per line
    'advanced': 10      # 10 seconds per line (more complex lyrics need more time)
}

# Music durations for each song (in seconds) - from Bensound
MUSIC_DURATIONS = {
    1: 148,   # Bensound Sunny
    2: 148,   # Bensound Happiness
    3: 215,   # Bensound Memories
    4: 215,   # Bensound November
    5: 260,   # Bensound Inspire
    6: 265,   # Bensound Dreams
    7: 148,   # Bensound Jazzy Frenchy
    8: 215,   # Bensound Better Days
    9: 265,   # SoundHelix Song 9
    10: 148,  # Bensound Acoustic Breeze
    11: 148,  # Bensound Ukulele
    12: 148,  # Bensound Little Idea
    13: 215,  # Bensound Slow Motion
    14: 260,  # Bensound The Lounge
    15: 260,  # Bensound Energy
    16: 260   # Bensound Perception
}

# Song levels
SONG_LEVELS = {
    1: 'beginner', 2: 'beginner', 7: 'beginner', 10: 'beginner', 11: 'beginner', 12: 'beginner',
    3: 'intermediate', 4: 'intermediate', 8: 'intermediate', 13: 'intermediate',
    5: 'advanced', 6: 'advanced', 9: 'advanced', 14: 'advanced', 15: 'advanced', 16: 'advanced'
}

print("Song Timing Analysis:")
print("=" * 60)

for song_id in sorted(MUSIC_DURATIONS.keys()):
    duration = MUSIC_DURATIONS[song_id]
    level = SONG_LEVELS.get(song_id, 'unknown')
    target_time = TARGET_TIMING.get(level, 7)
    ideal_lines = int(duration / target_time)
    
    print(f"Song {song_id:2d} ({level:12s}): {duration}s music ÷ {target_time}s/line = {ideal_lines} lines")

print("\n" + "=" * 60)
print("\nRECOMMENDATIONS:")
print("- Beginner songs (1,2,7,10,11,12): Should have ~18 lines (8s each)")
print("- Intermediate songs (3,4,8,13): Should have ~30 lines (7s each)")  
print("- Advanced songs (5,6,9,14,15,16): Should have ~26 lines (10s each)")
print("\nAdvanced songs currently have 50+ lines - TOO MANY!")
print("They need to be reduced to ~26 lines for comfortable 10s reading time.")

# Now analyze current state
print("\n" + "=" * 60)
print("\nCURRENT STATE IN songs.js:")

with open('js/songs.js', 'r', encoding='utf-8') as f:
    content = f.read()
    
for song_id in sorted(MUSIC_DURATIONS.keys()):
    # Find lyrics count
    song_match = re.search(rf'id:\s*{song_id},.*?lyrics:\s*\[(.*?)\]\s*\}}', content, re.DOTALL)
    if song_match:
        lyrics = song_match.group(1)
        current_lines = len(re.findall(r'time:\s*\d+', lyrics))
        duration = MUSIC_DURATIONS[song_id]
        actual_time_per_line = duration / current_lines if current_lines > 0 else 0
        level = SONG_LEVELS.get(song_id, 'unknown')
        target = TARGET_TIMING.get(level, 7)
        
        status = "✅" if abs(actual_time_per_line - target) < 1.5 else "❌"
        print(f"{status} Song {song_id:2d}: {current_lines} lines, {actual_time_per_line:.1f}s/line (target: {target}s)")
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
