# Synthesis

Only patterns that were read in `resource/` are listed. Chizu is not in the folder, so it is not a source here. The video was not sampled.

## Comparison

| | Kamitsubaki home | Alt Skin page | Otsu | Cover |
| --- | --- | --- | --- | --- |
| Layout | Fixed header, full-height logo hero, news list, event list, 3-up jacket slider, link-heavy footer | One release: jacket left, title and credits right, then an iframe | Sticky full-viewport hero and showreel, marquee rows, work cards, capability tags, footer figure | Fixed-height key visual, numbered business block, vision banner, news, recruit, footer |
| Motion | GSAP ScrollTrigger for `.atg` and `data-bgchg`. Swiper at 600ms. CSS arrows 1.6s. Scroll line 2s linear | Same script, but the two Swipers are absent, so they do not construct | CSS only in the files that were read: sticky sections, marquees 26–58s, letter roll .32s, pill float 6s | CSS keyframes for fades and underlines. Swiper markup in the key visual. A vision node saved at `scale(1.1)` |
| Palette | `#fcfcfc` / `#020202` / `#dadada`. Jackets carry the color | Same sheet | `#0a0a0a` ink, `#fff` ground, hero `#000`, accent `#52ff00`, red `#e23636` | `#2B2B2B` text, primary `#0099EB`, grounds `#E8E8E8` / `#f5f5f5` |
| Mood | Quiet, monochrome, type-led | A single cover, then credits | Playful, high contrast, sticky video | Corporate cyan, wide photography and illustration |
| Reduced motion | Not in `main.css` | Not in `main.css` | Yes: marquees off, emoji particles hidden | Not in `2b8508dae4d87e9f.css` |

## Patterns worth keeping

1. Section background swap. `KAMITSUBAKI STUDIO_files/main.min.js.download` sets `body[data-bg]` from `[data-bgchg]` when the section crosses the midpoint (`start: "top 50%"`). The CSS pair is `#fcfcfc`/`#020202` versus the reverse. For this showcase, swap the pastel ground tokens the same way, not the black and white.
2. One-shot reveal. Same file, `.atg`, `start: "top bottom-=30%"`, `once: true`. CSS moves `translateY(1rem)` to `0` in `.5s`. The saved HTML never adds the class, so the hook is defined and unused on this capture.
3. News slider with a fraction and a progress bar. `#visual_news_slider`: Swiper speed `600`, autoplay `5000`, labels padded to `01 / 05`, `.progress` width driven by `autoplayTimeLeft`.
4. Square jacket as the release unit. Home slides and the Alt Skin page (`JKT_mini.png` at 480×480 in the article, 1000×1000 file). Title, date, artist, streaming link, one credit line, then the video iframe.
5. Doubled-letter nav. Otsu HTML `.roll-letter` / `.roll-letter-down`, delay step `0.018s`. CSS `transform .32s` and `cubic-bezier(.22, .61, .36, 1)`, hover `translateY(-100%)` only for fine pointers.
6. Opposite marquees. `.logo-track` animates `logoScroll` `46s linear` to `translate(-50%)`. `.rev` is `58s` and `reverse`. Third row `40s`. Hover pauses. Reduced motion sets `animation: none`.
7. Sticky muted reel. Otsu `.showreel` and `.hero` are `position: sticky; height: 100svh`. Video is `muted` and `autoplay`. Unmute and Pause are separate controls.
8. Staged key visual. Cover `#keyVisual` plus `kv-bg01.jpg`–`kv-bg03.jpg` inside Swiper slides, and preloaded `kv-text-*.svg` lines. `fadeAndPaint` is a wipe: opacity and `translateY(15%)`, then `background-position-x` from `100%` to `0`.

## What fights Kawaii Glass Dream

Kamitsubaki is near-monochrome. Otsu's hero is black with `#52ff00`. Cover's UI cyan is `#0099EB` on `#E8E8E8`. None of those sheets use plum ink, pink-to-blue ground, or Fredoka / Nunito.

Keep the structure and the timings. Recolor with the glass tokens: ground instead of `#020202` / `#000`, plum instead of `#0a0a0a` and `#2B2B2B`, candy pink instead of `#52ff00` and `#0099EB`.

Otsu already has a glass panel (`.glass-dark`, blur 5px, and an `@supports` solid fallback). That blur is darker and smaller than a 20px white panel. The fallback pattern is the part to copy.

Cover's `mouseStalker` is a 116px circle with a gray shadow. The class is not in the saved HTML. If a follower is built, it should use the pastel glow, and only from 768px up, which is when Cover shows it.

The jackets are the color. Kamitsubaki leaves the page gray so the squares read. A pastel page can do the same if the glass behind a jacket stays quiet.

Do not carry Otsu's Services / Capabilities list, Cover's recruit and IR links, or Kamitsubaki's store and ticket language. Those are in the nav and section copy. The showcase has no service pitch.

## Where they land

| Page | From the files |
| --- | --- |
| Home | Kamitsubaki hero plus news fraction (`#visual`, `#visual_news_slider`). Otsu sticky hero and two-direction marquee. Cover three-background key visual and `fadeAndPaint` |
| Vsinger | Alt Skin column: square jacket, date, credit line, streaming link, iframe. Home discography Swiper: 3 slides, speed 600, autoplay 6000. Filter UI was not in these saves (`mixitup.js` is loaded and never called) |
| Illustration | Jacket-style square grid, and Cover's picture/SP crop split (`kv-bg` vs the missing `kv-bg01-sp.jpg`, and `vision-pc.jpg` vs `vision-sp.jpg`) |
| Animation | Otsu `#heroVideo` and `#reel`: sticky `100svh`, muted autoplay, Unmute and Pause pills, `pillFloat` 6s / `-7px` |

## Scroll catalogue

| Effect | Source | Library | Trigger | Duration | Easing | Reduced motion in the source |
| --- | --- | --- | --- | --- | --- | --- |
| Reveal | `main.min.js.download` `.atg` | GSAP ScrollTrigger | `top bottom-=30%`, once | CSS `.5s` | `ease-out` on transform, `linear` on opacity | None in `main.css` |
| Ground swap | same, `[data-bgchg]` | ScrollTrigger | `top 50%` to `bottom 50%` | instant attribute change | none | None |
| News autoplay | `#visual_news_slider` | Swiper 11 | autoplay | speed `600`, delay `5000` | Swiper default | None |
| Jacket autoplay | `#discography_slider` | Swiper | autoplay | speed `600`, delay `6000` | Swiper default | None |
| Scroll cue | `main.css` `loopScroll` | CSS | always | `2s` infinite | `linear` | None |
| Arrow loop | `main.css` `arrowIn` / `arrowOut` | CSS | always | `1.6s` infinite | `cubic-bezier(0.22, 1, 0.36, 1)` | None |
| Underline | `main.css` `hoverLine` | CSS | hover | `.4s` | `cubic-bezier(0, 0.55, 0.45, 1)` | Hover media only |
| Letter roll | Otsu `.roll-letter` | CSS | hover, fine pointer | `.32s`, stagger `0.018s` | `--ease-out` `cubic-bezier(.22, .61, .36, 1)` | Not in the reduce block that was found |
| Marquee | `.logo-track` / `.marquee` | CSS | always | `46s`, `58s`, `40s`, or `26s` | `linear` | `animation: none` |
| Pill float | `.pill` | CSS | always | `6s` | `ease-in-out` | Not in that reduce block |
| Emoji burst | `.emoji-particle` | CSS | class present | `.85s` | `--ease-out` | `display: none` |
| Hero image zoom | `.hero-media img` | CSS | load | `1.4s` | `--ease` `cubic-bezier(.16, 1, .3, 1)` | Not selected for the `<video>` hero |
| Fade in | Cover `.fadeInArea` | CSS | load | `1.45s` delay `.5s` | `cubic-bezier(.25, 1, .5, 1)` | None in that file |
| Wipe | `fadeAndPaint` | CSS | keyframe defined | not bound in the extracted rule | via the keyframe | None |
| Cursor orb | `.mouseStalker` | CSS | from 768px | transform `.2s`, inner `.8s` | `cubic-bezier(.5, 1, .89, 1)` and `cubic-bezier(0, .55, .45, 1)` | Class absent from the HTML |

## Risks seen in the files

- The loose mp4 is 46866373 bytes, and the Otsu hero uses `preload="auto"` on a remote file of the same name. That is a heavy hero even before the local file is measured.
- Social PNGs are 3334×3334. `footer-character.webp` is 3840×2160. `kv-bg` and `vision-pc.jpg` are 3840×1912. `base.js.download` on the Alt Skin page is 1629008 bytes.
- Kamitsubaki and Cover site CSS do not mention `prefers-reduced-motion`. Infinite `loopScroll`, `arrowIn`, and `pillFloat` would keep running.
- Otsu autoplays two videos (`#heroVideo`, `#reel`) plus a specimen clip. They are `muted` in the markup. Unmute is a separate control.
- The Alt Skin iframe is a full YouTube player document (`www-player.css` is 550424 bytes) and the saved player shows an error heading.
- `mixitup.js.download` is 352820 bytes on both Kamitsubaki pages and is not called.
- Lenis does not appear in the scripts that were opened.
- Several saves include a `volume-booster-visusalizer` node and a hidden `<audio>`. That came from the browser, not from the site CSS.
