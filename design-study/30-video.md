# Video

File: `resource/2a848693e3164b1e98059a862b208203_compressed.mp4`.

Size on disk: 46866373 bytes.

`ffmpeg` and `ffprobe` are not on PATH (`Get-Command` did not find either). Duration, resolution, frame rate, and codec were not read. No frames were extracted. Nothing in this note describes the picture, pacing, or on-screen text.

The Otsu home HTML does point a hero `<source>` at a remote file with the same filename:

`https://pub-45ce6c444f0142409c144f23de3a547a.r2.dev/2a848693e3164b1e98059a862b208203_compressed.mp4`

That tag is `video#heroVideo` with `autoplay`, `loop`, `muted`, `playsinline`, and `preload="auto"`. The poster path in the tag is `/images/home/otsu-hero-poster.jpg`, which is not in `resource/`. This does not prove the local 46 MB file matches that remote URL.

To measure it later, without this study installing anything:

```
winget install Gyan.FFmpeg
```

Then:

```
ffprobe -hide_banner resource/2a848693e3164b1e98059a862b208203_compressed.mp4
```
