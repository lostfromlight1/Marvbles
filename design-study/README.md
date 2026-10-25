# Design study

Notes from `resource/` only. Pages were not built. See `00-inventory.md` through `50-asset-plan.md`.

## Key takeaways

- Kamitsubaki's home is a logo hero, a 5-item news Swiper with `01 / 05` and a progress bar, a news list, a live list, and a 3-up jacket Swiper. The ground flips between `#fcfcfc` and `#020202` from `data-bgchg`.
- The Alt Skin save is one release: 480×480 jacket, date, artist, one credit line, a streaming link, and a YouTube iframe. The saved player shows "An error occurred."
- `mixitup.js` is loaded on both Kamitsubaki pages and is never called. There is no filter grid in these saves.
- Otsu doubles every nav letter and rolls it `translateY(-100%)` in `.32s` on fine-pointer hover. Marquees run `46s` / `58s` reverse / `40s`, and reduced motion turns them off.
- Otsu's hero and showreel are sticky `100svh` videos with `muted` autoplay. Unmute and Pause are separate pills. `pillFloat` moves `7px` over `6s`.
- Cover's key visual is a Swiper of 3840×1912 frames (`kv-bg01`–`03`) with preloaded white SVG lines. `fadeAndPaint` wipes `background-position-x` from `100%` to `0`.
- Cover's cursor rule is a 116px circle from 768px up. The class is in the CSS and not in the saved HTML.
- The palettes to leave behind are Kamitsubaki gray, Otsu black plus `#52ff00`, and Cover `#0099EB`. The timings and the section order are the part that transfers.
- Jackets are square 1000–1400 images and they are the color on an otherwise gray page.
- The loose mp4 is 46866373 bytes. It was not measured or watched. Otsu's hero points at a remote file with the same name and `preload="auto"`.

## Not reviewed

- Chizu Koyote. No HTML or asset folder by that name is under `resource/`.
- `2a848693e3164b1e98059a862b208203_compressed.mp4` picture, duration, resolution, frame rate, and codec. `ffmpeg` and `ffprobe` are not installed. No frames were written.
- `footer-character.webp`, `PAUSE_jkt_FIX-1400x1400.webp`, and the three Otsu `banner-*.jpg` files (WebP inside a `.jpg` name). The image decoder failed. Sizes were read from headers.
- Row SVGs, kv-text SVGs, and Cover UI icons, beyond their XML. They were not rasterized.
- Minified Next, GSAP, Swiper, MixItUp, Google, and YouTube player scripts, except `main.min.js.download` (read) and a string search of Cover's `main-7152143ba592f5bb.js.download`.
- Dominant colors. ImageMagick is not installed.
- `/images/home/otsu-hero-poster.jpg`, `/images/home/otsu-cat-sitting.mp4`, `/top/kv-bg01-sp.jpg`, and `ico_blacket.svg`. The HTML or CSS names them. The files are not here.
- `saved_resource.html` (1121 bytes) has no headings or landmarks.
- `m=root,base` is 0 bytes.

## Open questions for the team

- Which public name and which talents are real, before any jacket is treated as a stand-in for a person?
- Is the 46 MB file allowed as a temporary hero after a re-encode, or should the reel wait for an Arri clip?
- Should the three Cover key visuals be used at all, given they show a concert, a wall of other studios' stills, and a 3D character?
- The discography filters from the brief are not in these saves. Do we still invent a cover / original / unit filter, or wait for a page that actually has one?
- Chizu's profile layout was part of the brief and is missing here. Is a profile card still in scope without that reference?
