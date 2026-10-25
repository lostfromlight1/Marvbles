# Images

Dimensions come from the file headers (PNG IHDR, JPEG SOF, WEBP VP8X, or SVG `viewBox`). ImageMagick is not installed, so no dominant-color sample was computed. Palette notes are from looking at the pixels, except where the decoder could not open a WebP. Those files are listed with size only.

Duplicate bytes are called out. Descriptions are not repeated for the copy.

## Jackets

| File | Px | Seen as | Role |
| --- | --- | --- | --- |
| `resource/JKT_mini.png` (and the two `_files` copies, same bytes) | 1000×1000 | Square anime illustration. A figure with long pink hair in a black dress with pink lacing, lying across the frame. Magenta script reads "Alt Skin". Small text "BEMA" / "virtual singer". Black margin around the art | Thumbnail and release hero. Used for Alt Skin |
| `resource/JKT2_mini_1.png` (and the home `_files` copy) | 1000×1000 | Flat anime illustration. Brown hair, orange jacket, teal nails and bow, on an orange grid with teal pixels and pink sparkles. No title text | Thumbnail. Home slide "レディース・ロール・メソッド" |
| `resource/afdcbe5feba6d92189dd6eddaef5a88a.png` (and the home copy) | 1000×1000 | Anime character with mint hair and a scaled tail, pale green grid, yellow title "メドレーの観察", English "Observing Medley", "virtual singer" | Thumbnail. Home slide for that title |
| `resource/HowMany_JKT_1080.webp` | 1080×1080 | Surreal collage. Cyan sky, white feathers, flowers, a butterfly outline, a typewriter, a ruined structure, a thick cyan ribbon. No character portrait | Thumbnail. Not the file the HTML loads |
| `resource/KAMITSUBAKI STUDIO_files/HowMany_JKT_1080.jpg` | 1080×1080 | Same collage as the webp, viewed separately. This is the file on the home slide "ハウメニ" | Thumbnail |
| `resource/KAMITSUBAKI STUDIO_files/PAUSE_jkt_FIX-1400x1400.jpg` | 1400×1400 | Anime room. A person with black hair and blue streaks, headphones, a cat, a studio desk, city window. Large blue "PAUSE" | Thumbnail. Home slide PAUSE |
| `resource/PAUSE_jkt_FIX-1400x1400.webp` | 1400×1400 | Header read. The WebP decoder failed, so the pixels were not viewed. It is not the same byte length as the jpg | Unknown until decoded |

All of these are square and read as release covers, not as page backgrounds.

## Otsu

| File | Px | Seen as | Role |
| --- | --- | --- | --- |
| `footer-character.webp` | 3840×2160 | Header read only. Decoder failed | Footer figure in the HTML (`aria-hidden="true"`). Pixels not reviewed |
| `Otsu_Logo_white.png` | 128×157 | White "OTSU" letters stacked on a dark teal field | Logo |
| `banner-1780558662129-aba8eb7c.jpg`, `banner-1-….jpg`, `banner-2-….jpg` | 3200×1800 each | File magic is `RIFF` / `WEBP` / `VP8 `, despite the `.jpg` name. Decoder failed | Pixels not reviewed |
| `Row 1.svg` | viewBox 1329×61 | Opened as XML. No `<text>` element | Marquee strip |
| `Row 2.svg` | viewBox 1329×42 | Same | Marquee strip |
| `Row 3.svg` | viewBox 1329×76 | Same | Marquee strip |
| `youtube.png` | 3334×3334 | White play button on black | Social icon |
| `facebook.png` | 3334×3334 | White "f" on black | Social icon |
| `instagram.png` | 3334×3334 | White camera outline on black | Social icon |
| `linkedin.png` | 3334×3334 | White "in" on black | Social icon |
| `tiktok.png` | 3334×3334 | White note mark on black | Social icon |
| `x.png` | 3334×3334 | White X on black | Social icon |

The six social PNGs are far larger than an icon needs. They are marks, not hero art.

## Cover

| File | Px | Seen as | Role |
| --- | --- | --- | --- |
| `kv-bg01.jpg` | 3840×1912 | Wide concert photo. Dark blue arena, confetti, crowd light sticks, bright stage | Key visual, PC |
| `kv-bg02.jpg` | 3840×1912 | Dark field of tilted anime stills, faces and scenes in a loose grid, a gray wash over them | Key visual, PC |
| `kv-bg03.jpg` | 3840×1912 | 3D scene. Orange-haired figure from behind, arms up, yellow jacket, jumping over a green hill into a bright sky | Key visual, PC |
| `vision-pc.jpg` | 3840×1912 | Painted valley, green hills, a small figure, silver sculptures, a beam of light | Wide banner |
| `vision-sp.jpg` | 750×1140 | Taller crop of the same valley. The figure is lower left, the beam is centered | Narrow banner |
| `recruit-pc.jpg` | 2732×1246 | Blue gradient and a large pale chevron | Graphic background |
| `recruit-sp.jpg` | 750×1344 | Same blue chevron, vertical | Graphic background |
| `collabolation-thumb.jpg` | 660×372 | Tilted merch and illustration cards on blue, including chibi groups | Thumbnail |
| `company-thumb.jpg` | 660×372 | Wood wall, a large white triangle, a small COVER mark | Thumbnail |
| `contact-thumb.jpg` | 660×372 | Looking up between glass towers, sun, trees | Thumbnail |
| `icon-linkedin.png` | 52×44 | Small "in" mark | Icon |
| `logo.svg` | viewBox 201.779×42.651 | Gradient stops include `#b4eefa` and `#5ddbec` | Logo |
| `logo-x.svg` | 21×21 | Icon source, not rasterized | Icon |
| `kv-text-first.svg` | viewBox 302.958×66.157 | White filled paths, no `<text>` node | Staged key-visual line |
| `kv-text-second.svg` | viewBox 449.986×66.535 | Same kind of path art | Staged line |
| `kv-text-third01.svg` through `third07.svg`, each with a `-s` twin | various, about 78–126 wide | Path art, paired SP/PC files | Staged lines |
| `icon-menu-pc.svg`, `icon-menu-sp.svg`, `icon-close-pc.svg`, `icon-close-sp.svg`, `icon-circle-arrow.svg`, `24px.svg` | see viewBoxes in the header read (menu PC 39×35.896, menu SP 24×9.5, circle arrow 60×60, 24px is 24×24) | UI chrome. Not rasterized | Icons |

## Kamitsubaki marks

| File | Px | Seen as | Role |
| --- | --- | --- | --- |
| `logo_kamitsubaki.svg` | viewBox 280×280 | SVG logo. Used as the home `h1` image | Hero mark |
| `footer_logo_kamitsubaki.svg` (both copies, same bytes) | viewBox 118×129 | Footer mark, alt text in the HTML is 神椿スタジオ | Footer mark |

## What was not viewed as pixels

- `PAUSE_jkt_FIX-1400x1400.webp`
- `footer-character.webp`
- The three Otsu `banner-*.jpg` files (WebP data in a `.jpg` name)
- SVG icons and the Row / kv-text sheets, beyond their XML

No `.avif` file exists here to convert.
