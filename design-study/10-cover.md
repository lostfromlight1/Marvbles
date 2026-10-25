# Cover Corporation

Source: `resource/Cover Corporation _ Let's create culture that the world loves..html` and `resource/Cover Corporation _ Let's create culture that the world loves._files/2b8508dae4d87e9f.css`. Swiper's preloader keyframe is the only animation in `b391ff86345e1955.css`. `main-7152143ba592f5bb.js.download` does not contain the strings `gsap`, `ScrollTrigger`, `mouseStalker`, `kv-bg`, or `fadeAndPaint`.

The saved HTML is wrapped by Google Translate (`translated-ltr`, `goog-gt-*`). Quoted English below is the translated text in the file, not a second source.

## Sections, in order

1. Header. Links include About COVER, business, news, Recruitment, IR, Promotion, and a JP / EN switch. Logo file `logo.svg` (viewBox `0 0 201.779 42.651`). Its gradient stops include `#b4eefa` and `#5ddbec`.
2. `#keyVisual` (`css-1fio08k`, inline `height: 890px`). `h1` text in the save: "Cover Official Website" and "Together, Let's Create Culture Loved by All". Inside it, a Swiper. The first picture uses `kv-bg01.jpg`, with a `source` `srcset="/top/kv-bg01-sp.jpg"` for `max-width: 768px`. That `-sp` file is not in the folder. Later slides in the same block are the other `kv-bg` files (the folder contains `kv-bg02.jpg` and `kv-bg03.jpg`, both 3840×1912). `kv-text-*.svg` files are preloaded in the head. They are filled path art (`fill="#fff"` on `kv-text-first.svg`), with a paired `-s` variant for several lines. No `<text>` nodes in `kv-text-first.svg`.
3. Business section. `h2` "Business". Numbered items 01 VTuber Production, 02 Media Mix. "View More".
4. `section.gsap-vision-section`. `h2` "Future Outlook" / "Our Future Prospects". The background node `gsap-vision-bgImg` is saved with inline `transform: scale(1.1, 1.1)`. Desktop art is `vision-pc.jpg` (3840×1912). `vision-sp.jpg` is 750×1140.
5. News. Dates in the save include `2026.10.20`. "View More".
6. Recruit. `h2` "Recruit". Art `recruit-pc.jpg` (2732×1246) and `recruit-sp.jpg` (750×1344).
7. Footer. Links repeat the header, plus inquiry, and links out to hololive production sites. `logo-x.svg` is 21×21.

`#keyVisual` is a full-width block at a fixed saved height of 890px. Business cards are numbered. Thumbs elsewhere in the folder (`company-thumb.jpg`, `collabolation-thumb.jpg`, `contact-thumb.jpg`) are 660×372.

## Type

`html { font-size: 62.5%; font-family: Noto Sans JP, sans-serif }`. `css2` in the same folder is an `@font-face` for Noto Sans JP.

`body` sets `--en-font: "Roboto", sans-serif` and `--oswald-font: "Oswald", sans-serif`, `letter-spacing: .02em`, `line-height: 1.6`, color `var(--main-color)`.

An English label (`.irTop .css-1rcpqza`) uses `var(--en-font)`, weight 700, `letter-spacing: .08em`, `font-size: 1.2rem`, then `1.3rem` from 768px and `1.4rem` from 1536px. Because `html` is `62.5%`, `1rem` is 10px at the default root. That 1.2rem label is 12px before the media queries. This is the only rem size read for a text class. Heading pixel sizes are not spelled out on `h1` in the slice that was extracted.

## Color

From the `body` custom properties in `2b8508dae4d87e9f.css`:

| Token | Value |
| --- | --- |
| `--main-color` | `#2B2B2B` |
| `--primary` | `#0099EB` |
| `--secondary` | `#38ABE0` |
| `--thirdly` | `#51CCE8` |
| `--background` | `#E8E8E8` |
| `--background2` | `#f5f5f5` |
| `--category-background` | `#F0EFEF` |
| `--line` | `#E0E0E0` |
| `--text-sub-color` | `#C3C3C3` |
| `--text-sub-color-2` | `#888888` |

`kv-text-first.svg` paths are `fill="#fff"`. The logo gradient uses light cyan stops (`#b4eefa`, `#5ddbec`).

This CSS file has no `prefers-reduced-motion`.

## Layout

Breakpoints in the CSS: `min-width: 768px`, `1024px`, `1536px`.

`.mouseStalker` is `display: none` and becomes `display: block` at `min-width: 768px`. It is a 116×116 circle, `pointer-events: none`, `z-index: 10`.

The key visual pictures use `<picture>` with a mobile source. PC frames that were opened are 3840×1912 (`kv-bg01.jpg`, `kv-bg02.jpg`, `kv-bg03.jpg`, `vision-pc.jpg`).

## Motion

Keyframes in `2b8508dae4d87e9f.css`:

| Name | 0% | End | Noted timing |
| --- | --- | --- | --- |
| `fadeInArea` | opacity 0 | opacity 1 | `.fadeInArea` runs it `1.45s cubic-bezier(.25, 1, .5, 1) .5s both` |
| `fadeOnly` | opacity 0, `translateY(15%)` | opacity 1, `translateY(2px)` | keyframe only in the slice |
| `fadeAndPaint` | opacity 0, `translateY(15%)` | at 48% opacity 1 and `translateY(0)` with `background-position-x: 100%`, then `background-position-x: 0` | keyframe only |
| `hoverLineKeep` | scale 1 from the right | scale 0 at 55%, origin flips to the left, scale 1 | keyframe only |
| `hoverLineIn` | scale 0 from the left | scale 1, then 0, then 1, origin flipping | keyframe only |
| `hoverLineOut` | scale 1 from the right | scale 0 | keyframe only |
| `hoverLineLink` | background-size 100% | shrinks to 0 at 50%, then grows from the left | keyframe only |
| `mouseStalkerFade` | opacity 0, `scale(0)` | opacity 1, `scale(1)` | keyframe only |
| `imgHoverLeftRight` | `left: -150%` | `left: 150%` | keyframe only |
| `lineLeftRight` | `left: -100%` | `left: 100%` | keyframe only |
| `circleIconLeftRight` / `circleIconRightLeft` | left -100% or 0 | left 0 or 100% | keyframe only |

`.mouseStalker` transition is `transform .2s cubic-bezier(.5, 1, .89, 1)`. `.mouseStalkerInner` is opacity 0 and `scale(0)`, shadow `3px 3px 16px rgba(0,0,0,.06)`, transition `.8s cubic-bezier(0, .55, .45, 1)`. `.is-show` sets opacity 1 and `scale(1)`.

The string `mouseStalker` is in the CSS and not in the saved HTML, so this capture does not show the node mounted.

The vision image is saved at `scale(1.1)`. The class is `gsap-vision-bgImg`. The init call was not in `main-7152143ba592f5bb.js.download`.

Swiper markup is in the key visual (`swiper-slide`, `data-swiper-slide-index`, inline `width: 1858px`). `b391ff86345e1955.css` only adds `swiper-preloader-spin`.

## Interactions

Header menu icons exist as separate PC and SP SVGs (`icon-menu-pc.svg` 39×35.896, `icon-menu-sp.svg` 24×9.5, `icon-close-pc.svg`, `icon-close-sp.svg`). `icon-circle-arrow.svg` is 60×60.

JP / EN is a visible switch in the header text. Business items are numbered 01 and 02.
