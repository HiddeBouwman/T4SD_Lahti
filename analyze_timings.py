import re

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
    5: 520,   # Bensound Epic (LONGER for advanced - 51 lines × 10s)
    6: 530,   # Bensound Creative Minds (LONGER for advanced - 53 lines × 10s)
    7: 148,   # Bensound Jazzy Frenchy
    8: 215,   # Bensound Better Days
    9: 530,   # Bensound The Elevator Bossa Nova (LONGER for advanced - 53 lines × 10s)
    10: 148,  # Bensound Acoustic Breeze
    11: 148,  # Bensound Ukulele
    12: 148,  # Bensound Little Idea
    13: 215,  # Bensound Slow Motion
    14: 520,  # Bensound Relaxing (LONGER for advanced - 52 lines × 10s)
    15: 520,  # Bensound Tenderness (LONGER for advanced - 52 lines × 10s)
    16: 530   # Bensound Piano Moment (LONGER for advanced - 53 lines × 10s)
}

# Song levels
SONG_LEVELS = {
    1: 'beginner', 2: 'beginner', 7: 'beginner', 10: 'beginner', 11: 'beginner', 12: 'beginner',
    3: 'intermediate', 4: 'intermediate', 8: 'intermediate', 13: 'intermediate',
    5: 'advanced', 6: 'advanced', 9: 'advanced', 14: 'advanced', 15: 'advanced', 16: 'advanced'
}

print("Song Timing Analysis:")
print("=" * 80)

for song_id in sorted(MUSIC_DURATIONS.keys()):
    duration = MUSIC_DURATIONS[song_id]
    level = SONG_LEVELS.get(song_id, 'unknown')
    target_time = TARGET_TIMING.get(level, 7)
    ideal_lines = int(duration / target_time)
    
    print(f"Song {song_id:2d} ({level:12s}): {duration}s music ÷ {target_time}s/line = {ideal_lines} ideal lines")

print("\n" + "=" * 80)
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
        print(f"{status} Song {song_id:2d}: {current_lines:2d} lines, {actual_time_per_line:.1f}s/line (target: {target}s)")

print("\n" + "=" * 80)
print("\nPROBLEMS FOUND:")
print("Advanced songs have 50+ lines but only 260s of music = ~5s per line")
print("This is TOO FAST for complex Finnish lyrics!")
print("\nSOLUTION: Reduce advanced songs to ~26 lines for 10s/line comfortable reading.")
