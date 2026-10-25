# Kamitsubaki Alt Skin release page

Source: `resource/【琶舞】Alt Skin｜DISCOGRAPHY｜KAMITSUBAKI STUDIO.html` and the shared `main.css` in its `_files` folder (78797 bytes, same keyframe names and the same top hex counts as the home `main.css`). The script set matches the home page, including `main.min.js.download`.

This save is one release, not a filterable discography index. `mixitup.js.download` is loaded and is not called by the site script.

## Sections, in order

1. Same header and `#menu_area` as the home page.
2. `main.discography.article`. A link back wraps `h2.content_title` "DISCOGRAPHY".
3. `#discography_detail`. Left column `.discography_image` shows `JKT_mini.png` at `width="480" height="480"`, alt "Alt Skin". Under it, on `.pc_f`, a "Streaming＆Download" link. Right column: `h3` "Alt Skin", artist "琶舞", `[release]`, date "2026.7.8 Wed", a `.sp_f` copy of the streaming link, then "Lyrics & Music & Arrangement：Neuron", then a `.youtube` iframe pointed at the local `9gPO_Kd4OxY.html`.
4. Pagination: "DISCOGRAPHY一覧に戻る" and a next arrow.
5. Same footer as the home page, including the 2026 copyright and TOP control.

The iframe document's visible heading is "An error occurred." (`9gPO_Kd4OxY.html`). `www-player.css` (550412 bytes) is the YouTube player skin. Its keyframes (`ytp-bezel-fadeout`, spinner spins, and the rest) belong to that player, not to Kamitsubaki. It does contain `prefers-reduced-motion`.

## Layout and type

From `main.css` on this page's copy:

- `#discography_detail`: `margin: 4rem auto 0`, `padding: 2rem 0 0`, `border-top: 1px solid #dadada`. Under 1024px, margin `1.5rem` and padding `1.5rem`.
- `.discography_area`: flex, `gap: 1.8rem`.
- Under 1024px the image is `width: 100%` and `order: 1`.
- `.article .content_inner` padding is `6.85rem 0 25rem`, and `4.35rem 0 25rem` under 1024px.
- `.content_inner` width stays `68rem` / `18rem`, same as the home page.
- Title, date, and `[release]` use the `.alp` Acumin rule. Body copy uses the gothic face on `body`.

Color follows the home sheet: page ground `#fcfcfc` / ink `#020202`, black theme `#020202` / `#fcfcfc`. This article does not set `data-bgchg`.

## Motion on this page

The shared script still registers `.atg` and `[data-bgchg]` ScrollTriggers, and looks for `#visual_news_slider` and `#discography_slider`. Those two slider nodes are absent here, so those Swiper constructors do not run. The menu toggle, smooth hash scroll, loading flag, and footer observer still run because they are not guarded by those ids.

Hover underline `hoverLine` (`.4s`, `cubic-bezier(0, 0.55, 0.45, 1)`) is attached to `.article_pagination .index a:after` in `main.css`. Explore arrows use `arrowIn` / `arrowOut` at `1.6s`, `cubic-bezier(0.22, 1, 0.36, 1)`, infinite. There is no `prefers-reduced-motion` block in this `main.css`.
