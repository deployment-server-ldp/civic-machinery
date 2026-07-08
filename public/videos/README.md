# Hero background video

Place the **Mark 8 Post 64 – Cigarette Manufacturing Machine** video here:

- `mark-8-post-64.mp4` (required — H.264/MP4, most compatible)
- `mark-8-post-64.webm` (optional — smaller, served first where supported)

The homepage hero (`app/page.tsx`) references these paths. It autoplays
muted, loops and is muted/inline for mobile. Until a file is added, the hero
falls back to its dark gradient background automatically.

### Tips for a good background video
- Keep it short (8–20s) and loop-friendly (no hard cut at the end).
- Compress it: aim for well under ~5 MB so it loads fast (Core Web Vitals).
  Example: `ffmpeg -i input.mov -vf "scale=1920:-2" -b:v 2M -an mark-8-post-64.mp4`
  (`-an` strips audio, which isn't needed for a muted background).
- 1920×1080 (16:9) works well; the video is cropped with `object-cover`.
