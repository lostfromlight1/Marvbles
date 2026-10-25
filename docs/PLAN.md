# Marvbles showcase — plan

Status: decisions below are locked. The TypeScript app starts in this folder. Hosting is still open.

This folder is the project. The brief is [cursor-initial-prompt.md](../cursor-initial-prompt.md). What the saved pages actually contain is [design-study/README.md](../design-study/README.md). Rules for later implementation are in `.cursor/rules/`.

The previous paper-label site is discarded. Do not port its pages, its white-and-violet palette, its services or inquiry pieces, or its placeholder project titles. Build the showcase fresh here.

Three UI versions ship together. They share routes and content. A switch in the header selects `sky`, `reel`, or `key`. No version is the winner until you have seen all three.

## Stack

The app is Vite 6, React 19, React Router 7, and TypeScript, scaffolded in this folder. New files are `.tsx` and `.ts`.

Styling is CSS custom properties, split into `tokens.css`, `base.css`, `glass.css`, and `fallbacks.css`. Tailwind is a poor fit: the token table is already CSS variables, and glass, `@supports`, and reduced-motion are easier to audit in CSS.

Astro and Next.js are rejected. A server or islands setup does not pay for itself on this client-rendered showcase.

GSAP 3, ScrollTrigger, SplitText, `@gsap/react`, and Lenis are the motion stack for Phase 1+. Swiper, a waveform player (wavesurfer.js, or Howler plus AnalyserNode), a lightbox, and lite-youtube-embed come with the showcase pages. An optional shader or Rive mascot stays lazy and off the first paint. None of these are installed now.

Playback is a YouTube embed. There is no hosted audio yet. The wordmark is the text "Marvbles". UI copy is English. Deploy target is still undecided. The private prototype stays `noindex`.

Home is one layout, the Kamitsubaki pattern: text wordmark, menu overlay, scroll cue, black news, white roster, square discography. The glass Sky / Reel / Key switch is retired.

## Site map

Routes:

| Route | Page |
| --- | --- |
| `/` | The selected version's home. `sky`, `reel`, and `key` all exist |
| `/vsinger` | Glowing avatar selector. A cover / original / unit filter is new. The saved pages never call `mixitup` |
| `/vsinger/:slug` | Profile card. Fan name, oshi mark, birthday, height, debut, and lore are from the brief. No Chizu HTML is in `resource/` |
| `/vsinger/release/:slug` | Jacket, date, credits, streaming links, MV embed |
| `/illustration` | Masonry, filters, lightbox |
| `/illustration/:slug` | Artwork detail, process wipe, character sheet |
| `/animation` | Showreel hero, pinned storyboard, frame scrubber |
| `/animation/:slug` | Credits, embed, behind-the-scenes timeline |
| `/about` | Studio story, exhibition, team. Not a services page |
| `*` | 404, in Phase 4 |

Contact is a footer mailto and Discord link. There is no contact page, services page, or inquiry form.

## Components to create

Build these in Phase 1 and after. Do not import anything from the discarded site.

| Piece | Role |
| --- | --- |
| `src/app/` | Routes, layout, scroll reset, route transition |
| `src/components/layout/Header` | Text wordmark and the menu overlay |
| `src/components/layout/Footer` | Repeated nav, email and Discord when they exist |
| `src/components/layout/Loader` | Play-once loader. Kamitsubaki sets `localStorage.lsLoading` and adds `loaded` |
| `src/pages/Home` | Kamitsubaki-pattern home |
| `src/pages/Vsinger`, `Talent` | Avatar selector and profile |
| `src/pages/Release` | Jacket-led release page |
| `src/pages/Illustration`, `Artwork` | Masonry and artwork detail |
| `src/pages/Animation`, `AnimationDetail` | Showreel and project detail |
| `src/pages/About`, `NotFound` | Studio story, and the 404 |
| `src/content/*.json` | Talents, releases, artworks, animations, site |
| `useTitle` | Per-route title and description. OG images wait for Phase 4 |

Do not create a services page, an offering page, a process-steps sales block, or an inquire call to action.

## Reference map

Facts below are from `design-study/`, which opened the saved files. The home uses the Kamitsubaki palette `#fcfcfc` / `#020202`. Otsu `#52ff00` and Cover `#0099EB` stay out.

| Reference | Borrow | Skip |
| --- | --- | --- |
| Kamitsubaki home | Palette `#fcfcfc` / `#020202`. Play-once loader via `localStorage.lsLoading`. `data-bgchg` at `top 50%`. News Swiper speed `600`, delay `5000`, fraction `01 / 05`. Discography 3-up, delay `6000`. Arrow loop `1.6s`. Scroll line `2s`. | Their logo, slogan, news, store, and tickets. `main.css` has no `prefers-reduced-motion`; we still stop the loops |
| Alt Skin release page | One square jacket, date, artist, credit line, streaming link, video iframe. Display size in the HTML is 480×480 | Calling it a filter grid. `mixitup.js` is loaded and never called. The saved iframe heading is "An error occurred." |
| Otsu | Letter roll `.32s`, stagger `0.018s`, fine pointer only. Marquees `46s` / `58s` reverse / `40s`, and a `26s` track. Reduced motion sets `animation: none`. Sticky `100svh` muted video. Unmute and Pause. `pillFloat` `6s`, `-7px`. Emoji burst `.85s` with `--dx` `--dy` `--rot`. Ease `cubic-bezier(.16, 1, .3, 1)` | Services and capabilities copy, client-logo strips, `#52ff00` on black. `footer-character.webp` was not decoded |
| Cover | Three key-visual frames in Swiper (`kv-bg01`–`03`, 3840×1912). `fadeAndPaint` wipe. `fadeInArea` `1.45s`. Cursor rule is a 116px circle from 768px up. The class is in the CSS and not in the saved HTML | Recruit, IR, office and skyline photos, and the concert / other-studio stills / 3D character as if they were Arri work. Primary `#0099EB` |
| Chizu | Not in `resource/`. Profile fields stay in the content model as empty placeholders from the brief | Treating `design-review.md` as a file that was opened in this study |

Loose assets, all placeholders. Prefer the file the HTML actually loads:

- Jackets the pages use: `JKT_mini.png`, `JKT2_mini_1.png`, `afdcbe5feba6d92189dd6eddaef5a88a.png`, `KAMITSUBAKI STUDIO_files/HowMany_JKT_1080.jpg`, `KAMITSUBAKI STUDIO_files/PAUSE_jkt_FIX-1400x1400.jpg`
- The loose HowMany webp and PAUSE webp are different files. The PAUSE webp did not decode
- Video: `2a848693e3164b1e98059a862b208203_compressed.mp4` is 46866373 bytes. Duration and picture were not read. `ffmpeg` is not installed. Do not ship this file as the reel

Phase 1 copies the chosen jackets into `public/assets/ref/` and writes `ASSETS.md`. See `design-study/50-asset-plan.md`. Real studio files go in `public/assets/arri/` later.

## What stays from the old constraints

The paper-label site itself is out of the project. These limits still hold:

- Do not invent bios or theme colors. The eight Eonica names are confirmed. Credits that are not real say Dummy.
- No inquiry form. Contact is email and Discord.
- Placeholders stay marked. `resource/` files may be copied into `public/assets/ref/` only as labeled stand-ins.
- Reduced motion is mandatory. Video does not autoplay with sound.
- VSinger, Illustration, and Animation do not share one layout.

## Phases

Each phase waits for a yes.

**Phase 1 — scaffold, tokens, and shell.** In progress. Vite, React, React Router, and TypeScript, shared tokens, glass with a solid fallback, the version switch, reduced motion, and content stubs with the eight names and Dummy credits. Lenis, GSAP, the loader, and reference asset copies come with the motion pass. Acceptance: every route renders the shell, the switch shows `sky`, `reel`, and `key`, keyboard nav works, and reduced motion stops motion.

**Phase 2 — three homes.** Build `sky`, `reel`, and `key` to the descriptions in `20-motion.mdc`. Acceptance: each version works at 1440, 1100, 760, and 375, holds 60fps in a trace, LCP under 2.5s on mobile emulation, and has a static fallback. Review all three before the rest of Home. Do not delete a version in this phase.

**Phase 3 — showcase pages.** 3a VSinger (profile, discography, release page, persistent mini-player, lyrics). The discography filter is new. 3b Illustration (masonry, lightbox, wipe, horizontal character sheets). 3c Animation (reel, pinned storyboard, frame scrubber, detail pages). Pages stay readable in every UI version. Acceptance per page: data comes only from content JSON, every motion has a reduced-motion state, media is lazy, and layout does not shift. Ask after each page.

**Phase 4 — polish.** Bundle split, image and video encodes, axe plus a keyboard pass, SEO and OG, a 404, Safari backdrop-filter and Firefox. Acceptance: Lighthouse mobile Performance 85 or higher, and Accessibility, Best Practices, and SEO 95 or higher, with no critical axe issues.

**Phase 5 — deploy.** Preview on the host once one is chosen, private and `noindex`, SPA fallback and cache headers. Ask before deploying or connecting an account.

## Risks

- Backdrop blur plus scroll scrub is expensive. Cap blur at about 6 elements per viewport, 10px and 3 blobs on small screens, and animate only transform and opacity.
- Plum on pale glass can fail contrast. Raise glass opacity. Provide `@supports not (backdrop-filter)` with `--kg-color-glass-strong`.
- Lenis can break anchors and focus. Use its `scrollTo`, and test with the keyboard. No Lenis on touch.
- The mp4 is 46866373 bytes and was not measured. Re-encode before any demo use, to 720–1080p and 4 MB or less, with a poster and `preload="metadata"`. Do not use `preload="auto"` the way the Otsu hero tag does.
- Kamitsubaki and Cover define infinite motion and do not mention `prefers-reduced-motion`. Our versions still stop that motion. Otsu already turns marquees off and hides emoji particles. Match that, and extend it to pins, scrub, and video autoplay.
- Pinned sections must stay in DOM order so they do not trap keyboard or screen-reader users.
- Sound never autoplays. The mini-player starts silent.

## Home

The glass versions are retired. The home follows the Kamitsubaki section order with Marvbles content.

## Decisions

1. **Name and roster.** The public name is Marvbles. The unit is Eonica. Feature all eight: Sasayaka Lumi, Morika Rei, Seika Marionette, Amanogawa, Nyanoh, Hoshimi Ritsu, Kasumi Toka, Danny Amberynth. Theme colors, bios, and birthdays are still empty.
2. **Logo.** No logo file yet. Use a text wordmark.
3. **Audio.** YouTube embeds only for now. No hosted audio.
4. **Language.** English.
5. **Credits.** Dummy credits until Kaung adds the real ones. Mark them Dummy.
6. **Host.** Not chosen.
7. **TypeScript.** New project, TypeScript from the first file.
8. **Versions.** Retired. Kaung asked to drop the glass skins and keep the Kamitsubaki pattern only.
