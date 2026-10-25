# Asset plan

Prototype copies belong in `public/assets/ref/`. Nothing was copied in this study. These files are placeholders. They are not Arri Virtual work.

## Reuse

| Source | Copy to | Use | Compression |
| --- | --- | --- | --- |
| `resource/JKT_mini.png` (1000×1000) | `public/assets/ref/jackets/alt-skin.png` | Vsinger jacket and release hero | Keep PNG if the black margin must stay sharp. A 1000px WebP alongside it is enough for the grid |
| `resource/JKT2_mini_1.png` | `public/assets/ref/jackets/jkt2.png` | Jacket grid | WebP at 1000px |
| `resource/afdcbe5feba6d92189dd6eddaef5a88a.png` | `public/assets/ref/jackets/observing-medley.png` | Jacket grid | WebP at 1000px |
| `resource/KAMITSUBAKI STUDIO_files/HowMany_JKT_1080.jpg` | `public/assets/ref/jackets/howmany.jpg` | Jacket grid. Prefer this over the loose webp because the home page loads the jpg | WebP at 1080px |
| `resource/KAMITSUBAKI STUDIO_files/PAUSE_jkt_FIX-1400x1400.jpg` | `public/assets/ref/jackets/pause.jpg` | Jacket grid. The loose webp was not decoded and is a different file | WebP at 1400px |
| `resource/Cover Corporation _ Let's create culture that the world loves._files/kv-bg01.jpg` | `public/assets/ref/kv/kv-bg01.jpg` | Home key-visual slide | 1600px wide WebP for the page, keep the 3840 file out of the first load |
| `kv-bg02.jpg`, `kv-bg03.jpg` | `public/assets/ref/kv/` | The other two slides | Same |
| `vision-pc.jpg` and `vision-sp.jpg` | `public/assets/ref/kv/` | Only if a wide banner is needed. They are Cover scenes, so label them as reference | 1600px and 750px WebP |
| `resource/Anime-Style Animation Studio_files/Otsu_Logo_white.png` | Do not use as a studio logo | Studied only | — |
| Row SVGs | Optional `public/assets/ref/marquees/` | Pattern reference for a marquee. They are client-logo strips | Leave as SVG. Do not present them as Arri clients |

`HowMany_JKT_1080.webp` and `PAUSE_jkt_FIX-1400x1400.webp` can wait. The pages use the jpg/png siblings, and the PAUSE webp did not decode.

## Video

Do not ship `2a848693e3164b1e98059a862b208203_compressed.mp4` (46866373 bytes) as a hero. The Otsu page already autoplays a file of that name with `preload="auto"`.

After `ffmpeg` is installed (`winget install Gyan.FFmpeg`), re-encode a short muted loop to `public/assets/ref/reel/hero.mp4` at 720p or 1080p, H.264, and keep it at or under 4 MB. Write a poster JPEG next to it. The Otsu poster path is not in this folder, so the poster has to be extracted from the video.

## Do not copy into the prototype

- YouTube `www-player.css`, `9gPO_Kd4OxY.html`, `base.js.download`, Google `js` / `gtm.js.download`, Next chunks.
- Otsu social PNGs at 3334×3334. They are brand marks and they are oversized.
- Cover recruit, company, contact, and collaboration photos. They are office, skyline, and merch shots, not studio work.
- `footer-character.webp` until it can be decoded. It is 3840×2160 and was not viewed.
- Kamitsubaki and Otsu logos, if the page would read them as Arri's mark.

## Still missing

- Chizu page and any character art that came with it. Not in `resource/`.
- Otsu poster `/images/home/otsu-hero-poster.jpg` and specimen clip `/images/home/otsu-cat-sitting.mp4`.
- Cover mobile key visual `/top/kv-bg01-sp.jpg`.
- Kamitsubaki title ornament `../img/common/ico_blacket.svg`.
- A measured cut of the mp4 (duration, frame size, codec).
- Any Arri logo, talent portrait, or original jacket. Everything above is reference material.
