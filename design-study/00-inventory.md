# Inventory

Source: every file under `resource/`, listed with size from the filesystem. Page use comes from `src` and `href` in the saved HTML, or from a script/link tag. A loose root file is not referenced by a relative path unless the table says so.

Chizu Koyote is not in this folder. No `.avif` files are in this folder.

Injected browser UI is in the saved HTML (`volume-booster-visusalizer`, Google Translate `goog-gt-*`). Those nodes are not part of the sites.

## Saved pages

| File | Bytes | What it is |
| --- | ---: | --- |
| `resource/KAMITSUBAKI STUDIO.html` | 60468 | Kamitsubaki home |
| `resource/【琶舞】Alt Skin｜DISCOGRAPHY｜KAMITSUBAKI STUDIO.html` | 33478 | Kamitsubaki release page for Alt Skin |
| `resource/Anime-Style Animation Studio.html` | 61741 | Otsu Animation home |
| `resource/Cover Corporation _ Let's create culture that the world loves..html` | 197372 | Cover home |
| `resource/Cover Corporation _ Let's create culture that the world loves._files/saved_resource.html` | 1121 | Empty saved frame. No ids, headings, or landmarks |
| `resource/【琶舞】Alt Skin｜DISCOGRAPHY｜KAMITSUBAKI STUDIO_files/9gPO_Kd4OxY.html` | 433158 | YouTube player document embedded by the Alt Skin iframe. Visible heading: "An error occurred." |

## Libraries named by the pages

Kamitsubaki home and Alt Skin, from the script tags in both HTML files: `gsap.min.js.download`, `ScrollTrigger.min.js.download`, `swiper-bundle.min.js.download`, `mixitup.js.download`, `ua-parser.min.js.download`, `main.min.js.download`. `main.css` also has `@import` of `swiper@11/swiper-bundle.min.css`. Site behavior is in `main.min.js.download` (3890 bytes), read in full.

Otsu: Next.js chunks (`*.js.download`) and two CSS files, `0s_4mows_1zol.css` (104116 bytes, site CSS) and `05hsz~.3bln_b.css` (1253 bytes, route-loading). The HTML body class names Geist and Geist Mono.

Cover: Next.js chunks, `2b8508dae4d87e9f.css` (site CSS, 15508 bytes), `b391ff86345e1955.css` (Swiper preloader keyframe only). `main-7152143ba592f5bb.js.download` was searched for `mouseStalker`, `kv-bg`, `ScrollTrigger`, `gsap`, and `fadeAndPaint`. None of those strings are in that file. The other Cover chunks were not read; they are minified page bundles.

Extensionless files: four `js` files start with "Copyright 2012 Google Inc." `css2` is an `@font-face` for Noto Sans JP. `m=el_main_css` is a Google Translate bar stylesheet. `m=root,base` is 0 bytes. `m=root,base(1)` starts with `"use strict"` and is a large script. These are not site source.

## Duplicate bytes

SHA-256 prefix compared while reading images:

| Hash prefix | Files |
| --- | --- |
| `4b745e41e581` | `afdcbe5feba6d92189dd6eddaef5a88a.png` and `KAMITSUBAKI STUDIO_files/afdcbe5feba6d92189dd6eddaef5a88a.png` (1362176 each) |
| `0c202f1f1130` | `JKT2_mini_1.png` and `KAMITSUBAKI STUDIO_files/JKT2_mini_1.png` (479113 each) |
| `7eb3ceb3e9fd` | `JKT_mini.png`, `KAMITSUBAKI STUDIO_files/JKT_mini.png`, and the Alt Skin copy (1276362 each) |
| `21a7d03d899e` | Both `footer_logo_kamitsubaki.svg` copies (8886 each) |

`HowMany_JKT_1080.webp` (160332) is not the same file as `KAMITSUBAKI STUDIO_files/HowMany_JKT_1080.jpg` (1534700). `PAUSE_jkt_FIX-1400x1400.webp` (204976) is not the same file as the `.jpg` (395510). The home page uses the jpg copies.

## Loose root files

| Path | Bytes | Referenced by HTML? |
| --- | ---: | --- |
| `2a848693e3164b1e98059a862b208203_compressed.mp4` | 46866373 | Not by a relative path. Otsu's hero `<source>` points at `https://pub-45ce6c444f0142409c144f23de3a547a.r2.dev/2a848693e3164b1e98059a862b208203_compressed.mp4` |
| `JKT_mini.png` | 1276362 | Same bytes as the jacket the home and Alt Skin pages load from their `_files` folders |
| `JKT2_mini_1.png` | 479113 | Same bytes as the home discography slide |
| `afdcbe5feba6d92189dd6eddaef5a88a.png` | 1362176 | Same bytes as the home discography slide |
| `HowMany_JKT_1080.webp` | 160332 | No. The home slide uses the jpg |
| `PAUSE_jkt_FIX-1400x1400.webp` | 204976 | No. The home slide uses the jpg |

## Referenced but not in the folder

- Otsu hero poster `/images/home/otsu-hero-poster.jpg`
- Otsu specimen video `/images/home/otsu-cat-sitting.mp4`
- Cover `<source media="(max-width: 768px)" srcset="/top/kv-bg01-sp.jpg">`
- Kamitsubaki CSS mask `url("../img/common/ico_blacket.svg")` on `.content_title:before`

## Full file list

Sizes are bytes. "Used by" is the page whose `_files` folder holds the file, or "loose" for the root.

| Bytes | Used by | Path |
| ---: | --- | --- |
| 33478 | saved page | `【琶舞】Alt Skin｜DISCOGRAPHY｜KAMITSUBAKI STUDIO.html` |
| 46866373 | loose | `2a848693e3164b1e98059a862b208203_compressed.mp4` |
| 1362176 | loose | `afdcbe5feba6d92189dd6eddaef5a88a.png` |
| 61741 | saved page | `Anime-Style Animation Studio.html` |
| 197372 | saved page | `Cover Corporation _ Let's create culture that the world loves..html` |
| 160332 | loose | `HowMany_JKT_1080.webp` |
| 1276362 | loose | `JKT_mini.png` |
| 479113 | loose | `JKT2_mini_1.png` |
| 60468 | saved page | `KAMITSUBAKI STUDIO.html` |
| 204976 | loose | `PAUSE_jkt_FIX-1400x1400.webp` |
| 11806 | Otsu | `Anime-Style Animation Studio_files/0.rt8-e_eu9~9.js.download` |
| 12659 | Otsu | `Anime-Style Animation Studio_files/009t_30dojs04.js.download` |
| 112594 | Otsu | `Anime-Style Animation Studio_files/03~yq9q893hmn.js.download` |
| 8052 | Otsu | `Anime-Style Animation Studio_files/04~fmkmzglcgh.js.download` |
| 1253 | Otsu | `Anime-Style Animation Studio_files/05hsz~.3bln_b.css` |
| 6605 | Otsu | `Anime-Style Animation Studio_files/09f1ovrxr.n32.js.download` |
| 141598 | Otsu | `Anime-Style Animation Studio_files/0c7h~x4_chf35.js.download` |
| 54646 | Otsu | `Anime-Style Animation Studio_files/0d3shmwh5_nmn.js.download` |
| 4546 | Otsu | `Anime-Style Animation Studio_files/0hswm2fjpvw9-.js.download` |
| 31337 | Otsu | `Anime-Style Animation Studio_files/0i~w-e2y-tcah.js.download` |
| 27796 | Otsu | `Anime-Style Animation Studio_files/0owo195ja.nt7.js.download` |
| 44414 | Otsu | `Anime-Style Animation Studio_files/0pqt~8bl3ukh4.js.download` |
| 104116 | Otsu | `Anime-Style Animation Studio_files/0s_4mows_1zol.css` |
| 13049 | Otsu | `Anime-Style Animation Studio_files/11pxhevfkb~w-.js.download` |
| 32720 | Otsu | `Anime-Style Animation Studio_files/15jqp4twnt3cq.js.download` |
| 227314 | Otsu | `Anime-Style Animation Studio_files/1893xy~29ju5a.js.download` |
| 161272 | Otsu | `Anime-Style Animation Studio_files/banner-1-1780539837025-a66db03e.jpg` |
| 158646 | Otsu | `Anime-Style Animation Studio_files/banner-1780558662129-aba8eb7c.jpg` |
| 147162 | Otsu | `Anime-Style Animation Studio_files/banner-2-1780540123400-6b06f789.jpg` |
| 55572 | Otsu | `Anime-Style Animation Studio_files/facebook.png` |
| 431510 | Otsu | `Anime-Style Animation Studio_files/footer-character.webp` |
| 95841 | Otsu | `Anime-Style Animation Studio_files/instagram.png` |
| 540369 | Otsu | `Anime-Style Animation Studio_files/js` |
| 64953 | Otsu | `Anime-Style Animation Studio_files/linkedin.png` |
| 1570 | Otsu | `Anime-Style Animation Studio_files/Otsu_Logo_white.png` |
| 39065 | Otsu | `Anime-Style Animation Studio_files/Row 1.svg` |
| 107706 | Otsu | `Anime-Style Animation Studio_files/Row 2.svg` |
| 428127 | Otsu | `Anime-Style Animation Studio_files/Row 3.svg` |
| 73192 | Otsu | `Anime-Style Animation Studio_files/tiktok.png` |
| 11041 | Otsu | `Anime-Style Animation Studio_files/turbopack-0._xm6wmupkbb.js.download` |
| 107711 | Otsu | `Anime-Style Animation Studio_files/x.png` |
| 79457 | Otsu | `Anime-Style Animation Studio_files/youtube.png` |

Cover `_files` holds 102 files. The ones that are not minified page bundles are the two CSS files (`2b8508dae4d87e9f.css` 15508 bytes, `b391ff86345e1955.css` 8087), `css2` (360800, Noto Sans JP `@font-face`), `js` (501364, Google), `m=el_main_css` (22361, Google Translate bar), the images in `20-images.md`, and `saved_resource.html`. The rest are Next.js chunks (`*.js.download`), including `main-7152143ba592f5bb.js.download` (179536), `framework-a75dd24d57e34b68.js.download` (189686), `gtm.js.download` (501328), and `polyfills-42372ed130431b0a.js.download` (112594). Those chunks were not read, except the string search noted above.

Kamitsubaki home `_files`: `main.css` 78799, `main.min.js.download` 3890, `gsap.min.js.download` 65262, `ScrollTrigger.min.js.download` 38076, `swiper-bundle.min.js.download` 154597, `mixitup.js.download` 352820, `ua-parser.min.js.download` 36814, `gtm.js.download` 339538, `pyc5iqv.js.download` 113137, `js` 533958 (Google), plus the jackets, `logo_kamitsubaki.svg` 2550, and `footer_logo_kamitsubaki.svg` 8886.

Alt Skin `_files`: the same `main.css` size (78799) and the same library script sizes as the home folder, `www-player.css` 550424, `base.js.download` 1629008, `ad_status.js.download` 29, `m=root,base` 0 bytes, `m=root,base(1)` 453120, `JKT_mini.png`, `footer_logo_kamitsubaki.svg`, and `9gPO_Kd4OxY.html`.
