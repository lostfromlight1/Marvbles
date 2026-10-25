# Kamitsubaki Studio home

Source: `resource/KAMITSUBAKI STUDIO.html`, `resource/KAMITSUBAKI STUDIO_files/main.css`, `resource/KAMITSUBAKI STUDIO_files/main.min.js.download`.

The saved `<body>` already has classes `loading loaded scrolled` and `data-bg="white"`. Those classes are what the page had when it was saved, after the script ran.

## Sections, in order

1. Fixed header. Text link "KAMITSUBAKI STUDIO" (`.site_logo`) and `#menu` (three SVG bars, fill `#FCFCFC`).
2. `#menu_area` overlay nav: TOP, NEWS, WHAT WE ARE, LIVE/EVENT, ARTISTS＆PROJECTS, DISCOGRAPHY, OFFICIAL STORE, CONTACT, OFFICIAL ACCOUNTS, GUIDELINES. Store and Contact are external and include an external-link icon.
3. `#visual`. `h1.logo` is `logo_kamitsubaki.svg` (280×280, alt "KAMITSUBAKI STUDIO 神椿スタジオ"). Beside it, `.logo_text`: "MUSIC, ART, STORY, XPERIENCE". Then a SCROLL DOWN cue (`.scroll_area`). Then `#visual_news_slider`, a Swiper of 5 news items. The saved pagination reads `01 / 05`. Each slide has a bracketed category, a date line, and an `h4` title.
4. `#news` with `data-bgchg="black"`. `h2` NEWS. List rows: date, category, title, hashtags, "Explore". One row has a pin icon.
5. `#event` with `data-bgchg="white"`. `h2` LIVE/EVENT. Five event titles (ヰ世界情緒, 明透・琶舞, 幸祜, 春猿火, 理芽). Button "LIVE/EVENT一覧を見る".
6. `#discography` with `data-bgchg="white"`. `h2` DISCOGRAPHY. `#discography_slider` shows 5 jackets, numbered 01–05: Alt Skin (`JKT_mini.png`), メドレーの観察 (`afdcbe5feba6d92189dd6eddaef5a88a.png`), レディース・ロール・メソッド (`JKT2_mini_1.png`), PAUSE (`PAUSE_jkt_FIX-1400x1400.jpg`, label `[Single]`), ハウメニ (`HowMany_JKT_1080.jpg`, label `[Single]`). Each slide has a date, `h3`, an artist hashtag, and Explore. Button "DISCOGRAPHY一覧を見る".
7. Footer. `footer_logo_kamitsubaki.svg` (118×129, alt 神椿スタジオ). Main nav repeats the header links. Sub nav: PRIVACY POLICY, THINKR. `©2026 KAMITSUBAKI STUDIO`. A TOP control.

There is no artists grid on this saved home page. ARTISTS＆PROJECTS is only a nav link. There is no `class="atg"` in the HTML. The reveal class exists in CSS and JS only.

## Type

From the inline style in the HTML: `.tk-acumin-pro` is `"acumin-pro", sans-serif`. `.tk-dnp-shuei-gothic-kin-std` is `"dnp-shuei-gothic-kin-std", sans-serif`.

From `main.css`:

- `body` uses `"dnp-shuei-gothic-kin-std", sans-serif`, `font-size: .8rem`, `font-weight: 400`, color `#020202`.
- `#wrapper .alp` uses `"acumin-pro", sans-serif`. The tagline, dates, Explore, and section titles use `.alp`.
- `html` font-size: `23.52px` at `min-width: 1680px`; `1.3888888889vw` from 1024px to 1679px; `4.9751243781vw` at `max-width: 1023px`.
- `body` font-size becomes `.6rem` from 1024px up, and `1.2rem` at `max-width: 1023px`.
- `.content_title`: `1.6rem`, weight 300, `letter-spacing: .04em`, line-height 1. At `max-width: 1023px`, `1.35rem` and centered.
- Header logo: `0.65rem`, `letter-spacing: .04em`.
- Menu links: `0.9rem`, `letter-spacing: .04em`, line-height 1.3.
- Footer main nav: `0.75rem`, `letter-spacing: .04em`.
- Explore label: `0.55rem`, weight 300 (`0.5rem` under 1024px).
- Headings in the reset are `font-size: 100%` and `font-weight: normal`.

## Color

- Default `body`: background `#fcfcfc`, color `#020202`.
- `body[data-bg=black]`: background `#020202`, color `#fcfcfc`. Links inside `#wrapper` become `#fff`.
- `body[data-bg=white] .content_title`: color `#020202`.
- Other recurring hex values in `main.css`: `#dadada` (72 is `#020202`, 49 `#fcfcfc`, 26 `#dadada`, 14 `#8c8c8c`). News list border is `#262626` on black and `#dadada` on white. The scroll line is `#5c5c5c`.
- `#news` sets `data-bgchg="black"`. `#event` and `#discography` set `data-bgchg="white"`.

`main.css` has no `prefers-reduced-motion`.

## Layout

- `#wrapper .content_inner`: `width: 68rem`, centered. At `max-width: 1023px`, `width: 18rem`.
- Header is `position: fixed`, `z-index: 20`, flex.
- `#visual` is a centered column flex.
- Logo box: `14rem` square, `9.7rem` under 1024px.
- News slider slides were saved at `width: 406px`. Discography slides were saved at `width: 609.333px`.
- Breakpoints in `main.css`: 1680, 1441, 1281–1440, 1024, 1023.

## Imagery

Jackets are square `<img>` inside `.image`, `loading="lazy"` on the discography slides. The hero logo is an SVG, not a photograph. No border, mask, or shadow rules were pulled for the jacket `<img>` itself (the reset sets `img { border: 0 }`). Section titles use a mask image that is not in this folder: `url("../img/common/ico_blacket.svg")`.

## Motion

Defined in `main.min.js.download` with GSAP and ScrollTrigger, after a 1000ms `setTimeout`:

- `.atg`: `scrollTrigger.start` `"top bottom-=30%"`, `end` `"bottom top+=70%"`, `toggleClass: "active"`, `once: true`. CSS for `#wrapper .atg.fadeIn`: opacity 0, `translateY(1rem)`, transition opacity `.5s linear` and transform `.5s ease-out`. `.active` sets opacity 1 and `translateY(0)`. No element in the saved HTML has `atg`.
- `[data-bgchg]`: ScrollTrigger `start: "top 50%"`, `end: "bottom 50%"`. `onEnter` and `onEnterBack` set `body[data-bg]` to the attribute value.
- `#visual_news_slider`: Swiper `loop: true`, `speed: 600`, `slidesPerView: 1`, autoplay `delay: 5000`. At 768px, `allowTouchMove: false`. Pagination type `fraction`, numbers padded to 2 digits. `autoplayTimeLeft` sets `.progress` width to `100 * (1 - ratio)` percent.
- `#discography_slider`: Swiper `loop: true`, `speed: 600`, `slidesPerView: 3`, autoplay `delay: 6000`. At 768px, `slidesPerView: 3` and `allowTouchMove: false`. Prev/next are `.discography_btn_prev` and `.discography_btn_next`.

`mixitup.js.download` is loaded. `main.min.js.download` never calls it, and the HTML has no mixer markup. It is unused on this save.

CSS keyframes in `main.css`:

| Name | What it does | Where it is applied |
| --- | --- | --- |
| `hoverLine` | `scale(0, 1)` to `scale(1, 1)` | Explore underline on hover, `.4s cubic-bezier(0, 0.55, 0.45, 1)` forwards. Same timing on the article pagination underline |
| `arrowIn` | opacity 0 and `translate(-48%, 48%)` until 30%, then opacity 1 and `translate(0)` from 60% | `.explore span.ico .in`, `1.6s cubic-bezier(0.22, 1, 0.36, 1) infinite` |
| `arrowOut` | the reverse translate, opacity gone by 48% | `.explore span.ico .out`, same `1.6s` and easing, infinite |
| `loopScroll` | the 1px scroll line moves `translateY` 0 to 100% to -100% and back, with opacity gaps | `.scroll_area span.line`, `2s linear infinite`, color `#5c5c5c` |

Load: if `localStorage.lsLoading` is null or `"0"`, the script adds `loading` and sets the key to `"1"`. It always adds `loaded`. CSS: `.loaded #wrapper { opacity: 1 }` after a rule whose transition is `opacity .3s linear .8s`. `.loaded main.top #visual .logo { opacity: 1 }` after the logo's own `opacity .5s linear .5s`. Header on `.top.loaded` fades with `opacity .5s linear 1.2s`.

## Interactions

- `#menu` click toggles `body.menued`. In that state the logo goes to `opacity: .5` and the top and bottom menu bars go to `opacity: 0`.
- Links transition color `.4s linear`. Hover on menu and footer links, and on `.title_link`, goes to `opacity: .5` over `.4s cubic-bezier(0, 0.55, 0.45, 1)`, only under `@media (hover: hover)`.
- In-page hash links call `window.scrollTo({ behavior: "smooth" })`. `#totop` scrolls to `#wrapper`.
- An `IntersectionObserver` on a 100vh probe removes `scrolled` while that probe is visible, and adds it when it leaves. A second observer toggles `footered` on the footer.
- `.js_open_btn` toggles `.opened` and sets `.js_open_target` `maxHeight` to `scrollHeight` or `0`. Those classes are not in this home HTML.
