# Otsu Animation

Source: `resource/Anime-Style Animation Studio.html` and `resource/Anime-Style Animation Studio_files/0s_4mows_1zol.css`. Route-loading keyframes are in `05hsz~.3bln_b.css`. Minified Next chunks were not read line by line. Letter markup, video tags, and section order were read from the HTML.

## Sections, in order

1. `header#siteHeader`. Nav labels are doubled, one letter per `.roll-letter` plus `.roll-letter-down`. Visible words: About, Works, Services, Blog, Contact, Join Us Now. Stagger on the About letters starts at `transition-delay: 0s` and steps by `0.018s`.
2. `section.hero`. `h1`: "We Animate Like Scientists. Or Madmen". Three clocks are in the hero text: Los Angeles, Hong Kong (HQ), HCMC. `video#heroVideo` is `autoplay loop muted playsinline preload="auto"`. Poster attribute is `/images/home/otsu-hero-poster.jpg` (not in this folder). The `<source>` is the remote mp4 whose filename matches the loose file in `resource/`.
3. `section.clients.overlap`. Text: "Introduction & Clients" and "Otsu Animation is a creative studio crafting frame-by-frame animation for advertising, social media, tv and beyond." Three `.logo-marquee` rows use `Row 1.svg`, `Row 2.svg`, and `Row 3.svg`. Each SVG is placed twice in the track. The second and third rows use `.logo-marquee.rev` on the second.
4. `section.intro.lab-unpacked`. A muted looping `video.specimen-char` points at `/images/home/otsu-cat-sitting.mp4` (not in this folder). Caption starts "Experiment Log" / "Specimen 02".
5. `section.showreel`. `video#reel`. Buttons read Unmute and Pause (the letters are doubled in the markup). Label "Showreel".
6. `section#works`. `h2` "Selected works". Cards: "GOM: The Mascot", "Erene Mochi • First Stage Debut", "Battle of Honor • Building the World of Nova Thera". Each has "View Project".
7. `section.caps`. "Capabilities" and a tag list: Creative Direction, Script Writing, Animation Production, Storyboard, Narrative Design, Cinematic Planning, Stillomatic, Compositing.
8. `footer.site-footer`. `h2` "Reach Out!". Mail links. `figure.footer-figure` ( `aria-hidden="true"` ) uses `footer-character.webp`. City clocks repeat in `.footer-locs`.

## Type

CSS custom properties in `0s_4mows_1zol.css`:

- `--font-geist-sans` / `--font-geist-mono`. Body uses `var(--font-geist-sans)`.
- `--fs-h1: clamp(30px, 3.6vw, 60px)`. A later `@media (min-width: 769px)` sets `--fs-h1: clamp(22.8px, 2.74vw, 45.6px)`.
- `--fs-h2: clamp(22px, 2.2vw, 34px)`, `--fs-h3: clamp(19px, 1.7vw, 26px)`, then the smaller steps down to `--fs-h6: clamp(14px, 1vw, 16px)`.
- `--fs-lead: clamp(47px, 5vw, 88px)`.
- `--lh-heading: 1.1`, `--lh-body: 1.65`, `--tracking-heading: -.03em`.
- Heading weight is 400.
- `.pill` text is `clamp(22px, 3vw, 58px)`, weight 400, `letter-spacing: -.04em`.
- Mono badges use `letter-spacing: .02em` and uppercase.

## Color

`:root` in the same CSS: `--bg: #fff`, `--bg-tint: #f1f1f1`, `--ink: #0a0a0a`, `--ink-2: #141414`, `--ink-soft: #666`, `--ink-faint: #8a8a8a`, `--line: #0000001f`, `--accent: #52ff00`.

`.hero` and `.showreel` set `background: #000`. Hex counts in this file are dominated by `#fff`, `#0a0a0a`, and `#000`. Accent greens `#66fe66` and `#52ff00` and red `#e23636` each appear several times. `.livePulse` uses `#52ff00`.

`.glass-dark`: blur `5px`, `saturate(180%)`, border `1px solid #ffffff52`, dark translucent fills. `@supports not (backdrop-filter: blur(1px))` sets `.glass-dark` background `#0e0e14cc` and `.glass-light` background `#ffffffeb`. `.glass-light` uses `blur(6px) saturate(185%)`.

## Layout

- `.hero` and `.showreel` are `position: sticky; top: 0; height: 100svh; width: 100%`.
- Video and hero image: `object-fit: cover`, inset 0.
- `--content-pad-x: clamp(16px, 2.5vw, 48px)`.
- `.footer-figure`: `position: absolute; bottom: 0; left: 52%; transform: translate(-50%)`, width `min(1102px, 61vw)`, `pointer-events: none`, `z-index: 1`.
- Breakpoints named in the CSS include 1279, 1240, 1024, 900, 768, 680, 640, 560, 540, 480. `min-width: 769px` retunes the heading clamps.

## Motion

| Name | Defined in | Timing | Applied to |
| --- | --- | --- | --- |
| `heroZoom` | `0s_4mows_1zol.css` | `1.4s var(--ease)` forwards, from `scale(1.06)` to `scale(1)` | `.hero-media img` only. The hero node is a `<video>`, so this rule does not select it |
| `logoScroll` | same | `46s linear infinite`, to `translate(-50%)`. `.rev` is `58s` and `reverse`. Third row is `40s` | `.logo-track` inside `.logo-marquee` |
| `marquee` | same | `26s linear infinite`, to `translate(-50%)` | `.marquee` (`mix-blend-mode: multiply`) |
| `pillFloat` | same | `6s ease-in-out infinite`, `translateY(-7px)` at 50% | `.pill`. Second `.feature-row` delays `-3s` |
| `emojiPop` | same | `.85s var(--ease-out)` forwards. Uses `--dx`, `--dy`, `--rot` | `.emoji-particle` |
| `livePulse` | same | opacity 1 to .5, green shadow | (pulse keyframe; box-shadow `#52ff00`) |
| `shake` | same | `translate(-6px)` / `translate(6px)` | error field treatment near `#e23636` |
| `badgeFadeIn`, `cselect-in`, `faq-open`, `blog-rise`, `lightbox-in`, `lightbox-pop` | same | short opacity / translate / scale | badges, FAQ, blog, lightbox |
| `route-loading-slide`, `route-loading-pulse` | `05hsz~.3bln_b.css` | not expanded here | route bar. That file's colors include `#0d0d12` |

`--ease` is `cubic-bezier(.16, 1, .3, 1)`. `--ease-out` is `cubic-bezier(.22, .61, .36, 1)`.

Hover on `.logo-marquee` sets `.logo-track` to `animation-play-state: paused`.

Letter roll, in the same CSS: `.roll-letter` transitions `transform .32s var(--ease-out)`. `.roll-letter-down` is `translateY(100%)`. Under `@media (hover: hover) and (pointer: fine)`, `.roll-trigger:hover .roll-letter` goes to `translateY(-100%)`.

`prefers-reduced-motion: reduce` in this CSS turns `.logo-track` animation off, sets `.emoji-particle` to `display: none`, and clears transform/transition on `.badge-animate`. `05hsz~.3bln_b.css` also contains `prefers-reduced-motion`.

## Interactions

- Hero and showreel videos are marked `muted` and `autoplay`.
- Showreel exposes Unmute and Pause as pill controls (`.showreel-mute`, height `clamp(34px, 2.4vw, 44px)`).
- Footer character is `aria-hidden="true"`.
- The three Row SVGs have no `<text>` nodes. They are image strips, `viewBox` `0 0 1329 61`, `0 0 1329 42`, and `0 0 1329 76`.
