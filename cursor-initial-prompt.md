# Cursor Initial Prompt: Arri Virtual Showcase (paste everything below)

---

You are working in my existing project `marvbles` (Vite 6 + React 19 + react-router-dom 7, JSX, `src/`, `public/`, `resource/`). Do NOT write feature code yet. Phase 0 is inspect, plan, and write rules, then stop and wait for my approval.

## 0. First steps (mandatory)
1. Inspect the whole project: `package.json`, `vite.config.*`, `src/App.jsx`, `src/main.jsx`, `src/content.js`, `src/styles.css`, `src/pages/*`, `src/components/*`. Summarise the current routes, components, and styling conventions.
2. Inspect `resource/` thoroughly (read-only source):
   - `KAMITSUBAKI STUDIO.html` and its `_files` (GSAP, ScrollTrigger, Swiper, MixItUp, `main.min.js`, `main.css`) and the discography page `...Alt Skin|DISCOGRAPHY|KAMITSUBAKI STUDIO.html`
   - `Anime-Style Animation Studio.html` (Otsu: split-letter nav, showreel, Row 1-3 SVG marquees, footer-character.webp, keyframes heroZoom/marquee/pillFloat/emojiPop)
   - `Chizu Koyote _ Vzatsu Vtuber Agency.html` (talent profile and dossier layout)
   - `Cover Corporation ... .html` (kv-bg01-03 key-visual crossfade with staged kv-text SVGs, mouse stalker, fadeAndPaint reveals)
   - the loose images (jackets: JKT_mini.png, JKT2_mini_1.png, HowMany_JKT_1080.webp, PAUSE_jkt_FIX-1400x1400.webp, afdcbe5f...png; 77079a_...avif; download.png) and the video `2a848693e3164b1e98059a862b208203_compressed.mp4` (about 46 MB)
   For each reference, extract the section order, layout grid, typography scale, the motion logic (read the JS and CSS keyframes), and the easing values.
3. Private prototype: closely replicate these reference layouts, sections, and motion, and reuse the resource assets directly by copying them into `public/assets/ref/...`. Keep a manifest at `public/assets/ref/ASSETS.md` listing each file, where it came from, and where it is used. Every one of them is a placeholder to swap for Arri Virtual's own assets later.
4. Write:
   - `.cursor/rules/00-project.mdc` (alwaysApply): stack, folder structure, showcase-not-services rule, coding conventions
   - `.cursor/rules/10-design-system.mdc`: the full Kawaii Glass Dream block below plus the tokens
   - `.cursor/rules/20-motion.mdc`: the motion spec, reduced-motion rules, and performance budget
   - `.cursor/rules/30-content.mdc`: the content model and how to add works
   - `docs/PLAN.md`: stack decision with justification, site map, a component inventory (reuse, rework, or delete for each existing component), a reference-to-section mapping table, the phased plan, risks, and open questions
5. Stop and ask me to approve PLAN.md.

## 1. Brand and positioning
- **Arri Virtual (ARRI):** a small, Myanmar-based hobby studio and VTuber/VSinger production. Its VSinger unit is **Eonica** (public talents include Sasayaka Lumi, Morika Rei, Seika Marionette, and Amanogawa; others are Nyanoh, Hoshimi Ritsu, Kasumi Toka, and Danny Amberynth). They do song covers in Burmese, English, Japanese, and Thai, and also illustration and animation. They hosted Myanmar's first VTuber Exhibition (Japan Foundation Yangon, 2025). Confirm all of these facts with me. Use placeholders for anything else, such as the logo, brand colors, and bios.
- **Positioning:** a SHOWCASE of talent and past work, made with love by fans turned creators. No services, pricing, "hire us", inquiry funnels, or client logos. Delete or rework `Services.jsx`, `Offering.jsx`, `InquireCta.jsx`, and `OfferingHero.jsx` (propose which, in PLAN.md).
- **Audience:** VTuber and anime fans in Myanmar and abroad, potential collaborators, and the talents' communities.
- **Tone:** sweet, playful, proud of the work. Bilingual-ready (EN first; Burmese/JP later).

## 2. Tech stack (propose and justify; default below)
Reuse the existing Vite + React + React Router setup unless you have a strong reason not to.
- **Default:** Vite + React 19 + React Router 7. Migrate to TypeScript gradually (new files as .tsx), with CSS custom properties for the tokens plus CSS Modules, or Tailwind v4 mapped to the same tokens (pick one and justify).
- **Motion:** GSAP 3 + ScrollTrigger + SplitText (free), `@gsap/react` `useGSAP` for cleanup, and Lenis smooth scroll synced to the ScrollTrigger ticker. Motion (Framer Motion) only for component-level presence/layout animations, if you need it. The View Transitions API for route transitions, with a fallback.
- **Media:** Swiper (carousels), wavesurfer.js (waveform player), or Howler plus a Web Audio AnalyserNode for audio-reactive visuals. PhotoSwipe or a custom lightbox. lite-youtube-embed for MVs.
- **Optional hero:** OGL/Three.js (shader clouds or bubbles) or Rive/Lottie for a mascot, lazy-loaded and never blocking first paint.
- **Content:** JSON or MDX in `src/content/` (talents, releases, artworks, animations) so non-developers can add works. Optionally a later headless CMS (Decap or Sanity).
- **Deploy:** Cloudflare Pages, Vercel, or Netlify (SPA fallback, image caching headers).
- **Alternatives to discuss briefly:** Astro (islands, best performance, also good for content) or Next.js. Only recommend switching if the benefits are clear.

## 3. Site map and page requirements
`/` Home · `/vsinger` · `/vsinger/:talent` · `/vsinger/release/:slug` · `/illustration` · `/illustration/:slug` · `/animation` · `/animation/:slug` · `/about` · footer with socials and contact (email/Discord only, with no inquiry form).

### Home (structure replicates the Kamitsubaki top page, Cover key visual, and Otsu playfulness)
- A loader on the first visit only (localStorage flag, as Kamitsubaki does): a sparkle logo assembles, under 1.5 s, and can be skipped.
- Hero: see the Design Demo below.
- A news/feature slider with a 01/05 fraction and an autoplay progress bar (Kamitsubaki `#visual_news_slider`).
- Three portals (Vsinger / Illustration / Animation): large glass cards, each with a looping preview. On click, the card zooms to full screen and the route transitions.
- Artwork marquee: 2-3 rows running in opposite directions (Otsu Row 1-3), speed tied to scroll velocity.
- Latest releases: a 3-up jacket carousel.
- "About the studio": a short story, an exhibition photo, and the team avatars.
- Socials, then a footer with a cloud-wave top edge and a character peeking over it (Otsu footer-character).

### Vsinger
- A talent selector of glowing circular avatars. Each talent page uses a Chizu-style profile card: fan name, oshi mark, birthday, height, debut, languages, theme color shown as a swatch with its hex, and socials. An optional in-world "lore file" section.
- A discography grid of square jackets with filters (cover / original / unit) using MixItUp-like animated filtering, as on the Kamitsubaki discography page.
- A release page that replicates the Kamitsubaki "Alt Skin" page: big jacket, date, credits, streaming links, MV embed.
- A sticky glass mini-player that persists across routes: play/pause, waveform, track, and talent. Never autoplays with sound.
- Lyrics: a timed line highlight (an LRC-like JSON format). A visualizer of sparkles and bubbles driven by the AnalyserNode.

### Illustration
- A masonry gallery with filters (talent design, fan art, key visual, sketch), lazy images, and reserved aspect ratios.
- A lightbox with a shared-element zoom (FLIP or View Transitions), keyboard navigation, and a caption with the artist credit.
- Process reveal: a pinned section where a scroll-scrubbed clip-path wipe goes from sketch to lineart to final color.
- Character sheets: a pinned horizontal scroll of turnarounds and expressions.

### Animation
- A showreel hero with Unmute and Pause pill buttons (Otsu), muted autoplay only when motion is allowed, and a poster image.
- Pinned scroll storytelling: storyboard, then animatic, then final, as a crossfade scrubbed by scroll.
- A frame scrubber: a canvas image sequence (for example 60-120 webp frames) driven by scroll progress.
- Project cards that go to detail pages with credits, embedded video, and a behind-the-scenes timeline (heart-dotted dashed connector).

### About
The studio story, the mission (introduce VTubers to Myanmar, nurture local talent), an exhibition gallery, and the team. Not a services page.

## 4. Motion spec
**Global:** Lenis (lerp 0.1), GSAP defaults `ease: "power3.out"`, plus the reference easings `cubic-bezier(0.22,1,0.36,1)` and `cubic-bezier(.16,1,.3,1)`. Interactions take 180 ms, reveals 600-900 ms, and ambient loops 4-8 s.

**Scroll catalogue (implement as reusable hooks or components):**
1. `Reveal`: fade-up 24px with a 0.08 s stagger, played once (Kamitsubaki `.atg` with `start: "top bottom-=30%"`).
2. `SplitHeadline`: SplitText chars, y 100% to 0 with a slight rotate, `back.out(1.6)`, 0.03 s stagger.
3. `ParallaxLayer`: data-speed on clouds, blobs, and glass, scrubbed.
4. `BgShift`: sections with `data-bg` tween the root ground-gradient CSS variables (Kamitsubaki `data-bgchg`), each page tinted toward its accent.
5. `PinnedHorizontal`: pin plus x translate, with `containerAnimation` for nested reveals.
6. `WipeReveal`: clip-path inset scrub (Cover `fadeAndPaint`).
7. `FrameSequence`: canvas image sequence.
8. `VelocityMarquee`: base CSS marquee (translate -50%), with GSAP scaling its timeScale by scroll velocity.
9. `PortalZoom`: a pinned card that scales to the viewport, then navigates.
10. `KVSequence`: a crossfade of 3 key visuals with staged SVG or text lines (Cover kv-bg01-03 and kv-text-*).

**Interactions:** letter-roll hover on nav (Otsu doubled letters), a hoverLine underline sweep, magnetic pill buttons, a cursor glow orb follower (Cover mouseStalker, pastel) with a sparkle trail on desktop pointer devices only, heart or sparkle bursts on click (Otsu emojiPop with --dx/--dy/--rot), and floating pills (pillFloat 7px).

**Page transitions:** a glass curtain or bubble wipe of 500-700 ms via View Transitions, plus a top route-loading bar. Move focus to the new `h1` after navigation.

**Reduced motion:** with `prefers-reduced-motion: reduce`, turn off Lenis, scrub, pins, parallax, the cursor effects, and the marquees (show them as a static grid). Content becomes visible immediately with a simple 150 ms opacity. Video does not autoplay. Add an in-site "Calm mode" toggle that does the same.

**Mobile:** use touch scroll natively (no Lenis on touch, or `syncTouch: false`), make pinned horizontal sections into swipe carousels, use a 10px blur and at most 3 blobs, remove the cursor effects, and use shorter frame sequences.

**Performance budget:** animate transform and opacity only. Allow at most about 6 backdrop-filter elements per viewport. Main JS under 180 KB gzip on the initial route, with heavy modules (three/ogl, wavesurfer, frame sequences) lazy-loaded. LCP under 2.5 s, CLS under 0.05, INP under 200 ms on mid-range mobile. Hold 60 fps while scrolling in a Chrome performance trace.

## 5. Design system (authoritative, embed in rules)
<prompt>
<task>
Apply this visual style to the user's existing project. Inspect and preserve its stack, copy, routes, and behavior. Follow existing component and styling conventions. Treat framework, library, and page examples in these design instructions as illustrations; they do not require a stack change or new sections. Scope changes to the user's requested work.

Keep controls keyboard accessible, focus visible, and text legible. Preserve reading order, responsive behavior, and reduced-motion preferences. Verify actual states at the rendered width. Check text contrast on every frosted surface, and provide a solid fallback where backdrop blur is unsupported. The user's stack and content take precedence over illustrative implementation details.

Showcase addendum: this is a talent and work showcase (music, illustration, animation), not a services site. The scroll-driven motion defined in the Motion spec above extends the Motion section below. Ambient float stays subtle, and the scroll choreography may be bolder, provided the reduced-motion and performance rules hold.
</task>

<design-system>
# Kawaii Glass Dream

## Identity

Use a dreamy anime-inspired composition: a soft pastel sky gradient with frosted glass panels floating above it, bubbly rounded shapes, and small sparkle details. The mood is gentle, sweet, and airy, like a magical-girl title screen or a cozy anime bedroom at dusk. Panels look like frosted candy glass with luminous white edges and soft pink and lavender glow.

## Layout

Open with a large, friendly headline on a wide glass panel beside a cute focal illustration, mascot, or soft cluster of shapes such as clouds, stars, hearts, moons, and bubbles. Give the opening statement generous scale and keep clear space around the actions.

Place related content in a few layered glass cards of the same rounded family. Overlap them slightly, with a few pastel gradient blobs behind to give the blur something to refract. Use a numbered or heart-dotted path with a soft dashed connector when sequence matters. Quotations can sit in speech-bubble glass panels with a small tail. A pastel gradient closing panel can hold the final call to action, with sparse sparkles at its edges. Use a softly tinted footer with a wavy or cloud-shaped top edge.

Choose patterns according to the brief. The design does not require a fixed section count, anime content, or sample quotes and prices.

## Typography

Use Fredoka or Baloo 2 for headings, bound to "KawaiiGlassDisplay". Use Nunito or Quicksand for reading, labels, and controls, bound to "KawaiiGlassReading". For Japanese text, add Zen Maru Gothic or M PLUS Rounded 1c. Headings are rounded, bold, and friendly, scaling from 48px to 88px with compact leading. Body text stays relaxed at 16px to 17px with 1.65 leading. Use soft plum ink for text, never pure black, and never pale pastel text on glass.

## Color and surfaces

Ground: a gentle gradient from blush pink through lavender to baby blue, with peach and mint glows in the corners. Glass panels are white at 35% to 55% opacity with backdrop-filter blur around 16px to 24px, a 1.5px to 2px translucent white border, a faint inner highlight along the top edge, and a soft diffused pink-lavender shadow.

Primary actions use a candy gradient of pink to violet with white text, and secondary actions use frosted glass. Use sky blue, mint, lemon, and peach as small accents. Do not give every accent equal weight in every section.

Keep sufficient contrast: use darker plum text on light glass, and raise the panel opacity or add a tinted backing whenever text sits over a busy part of the background.

## Components

Buttons are pill-shaped and plump, with a glossy highlight, a soft glow, and a small sparkle or heart detail where it fits. Hover lifts slightly and brightens the glow, and press settles back down. Inputs are frosted, with rounded corners and a clear pink-violet focus ring that stays visible against the glass. Cards, chips, tags, and badges share one rounded family. Badges can be star, heart, or bubble shapes. Toggles and checkboxes are rounded and chunky with clear on and off states. Disclosures use soft plus and minus or heart marks inside glass rows. Avatars sit in circular frames with glowing rims.

## Images

Use soft-colored, bright images or anime-style illustrations in rounded, bubble, or cloud-like frames with a white translucent border and a gentle pastel glow. Preserve the subject in the crop. Reserve image dimensions and provide useful alternative text. Mark decorative sparkles, stars, and hearts as hidden from assistive technology.

## Motion

Use slow, subtle float on background blobs and decorative sparkles, brief hover lifts, soft glow transitions, and a gentle twinkle on a few small accents. Keep durations around 180ms for interactions and 4s to 8s for ambient drift. Under prefers-reduced-motion, remove all ambient animation, transforms, and transitions, and keep the static composition.

## Responsive behavior

At 1100px, tighten the glass grid and decorative spacing. At 760px, stack the opening, cards, steps, and quotes, and keep the overlap light so text is never cut off. Reduce blur radius and the number of background blobs on small screens to protect performance and legibility. At very narrow widths, shrink headings and decorations but keep body text, labels, and touch targets at least 44px.

## Design limits

Keep it cute but tidy: limit decorative sparkles, hearts, and stars to a few per section, with plenty of open space. Avoid neon overload, harsh black outlines, hard offset shadows, clip-art clutter, copyrighted characters, and text over blur without enough contrast. Do not stack glass on glass more than two layers deep. The customer's content supplies the tone, and the style should not add invented claims or force baby talk, emoji, or kaomoji into the copy.

## Authoritative tokens

| CSS variable | Value |
| --- | --- |
| --kg-color-ground-start | #ffe3f1 |
| --kg-color-ground-mid | #e6dcff |
| --kg-color-ground-end | #d6ecff |
| --kg-color-glass | rgba(255, 255, 255, 0.45) |
| --kg-color-glass-strong | rgba(255, 255, 255, 0.65) |
| --kg-color-glass-border | rgba(255, 255, 255, 0.75) |
| --kg-color-ink | #4a3560 |
| --kg-color-ink-soft | #6e5a85 |
| --kg-color-accent | #ff7ac2 |
| --kg-color-accent-secondary | #a98bff |
| --kg-color-accent-sky | #8fd3ff |
| --kg-color-accent-mint | #a6f0d6 |
| --kg-color-accent-lemon | #fff1a8 |
| --kg-color-accent-peach | #ffc9b0 |
| --kg-color-focus | #7a4dff |
| --kg-typography-display | "KawaiiGlassDisplay", "Fredoka", sans-serif |
| --kg-typography-reading | "KawaiiGlassReading", "Nunito", sans-serif |
| --kg-typography-reading-compact | 16px |
| --kg-typography-label | 14px |
| --kg-typography-metadata | 13px |
| --kg-typography-reading-leading | 1.65 |
| --kg-spacing-gap-compact | 12px |
| --kg-radius-corner | 24px |
| --kg-radius-pill | 999px |
| --kg-blur-glass | 20px |
| --kg-border-glass-width | 1.5px |
| --kg-shadow-glow | 0 8px 32px rgba(169, 139, 255, 0.28) |
| --kg-motion-interaction | 180ms |
| --kg-motion-ambient | 6s |
</design-system>
</prompt>

Reference palettes (monochrome Kamitsubaki, neon Otsu, cyan Cover) are re-skinned into these tokens. Only the layouts and motion are replicated. Each talent's theme color is an extra accent variable (`--talent-accent`), used sparingly.

## 6. Design demo to build first (Phase 2 spike)
**"Glass Sky Stage":**
- **On load:** the pastel ground gradient fades in, then 3 depth layers of clouds and blobs drift (6 s float). A wide glass panel slides up holding "ARRI VIRTUAL", split into letters that bounce in, plus the subline "Music · Illustration · Animation from Yangon". Beside it, a featured VSinger (reference placeholder art for now) sits in a bubble frame with a glowing rim. Two pill buttons: "Listen" (candy gradient) and "See the art" (glass). The cursor orb glows, and clicking pops hearts.
- **On scroll** (pinned for about 200vh): the clouds part at different speeds, the panel tilts slightly and splits into 3 portal cards (Music, Art, Motion) that fan out. Each card's preview starts (a jacket spin, a sketch wipe, a looping clip from the resource video). The background shifts from blush to lavender. The pin releases into the artwork marquee.
- **Reduced motion:** a static composition with the three cards already laid out.
- Alternatives to keep in PLAN.md: "Record Bubble" (a giant glass bubble with the latest jacket and an audio-reactive waveform ring that shrinks into the mini-player on scroll) and "Sketchbook Unfold" (a pinned sketch-to-color reveal that starts moving, then sings).

## 7. Accessibility
WCAG 2.2 AA: plum text on glass of at least 4.5:1 (raise glass opacity when needed). A solid fallback through `@supports not (backdrop-filter: blur())` that uses `--kg-color-glass-strong` on a tinted background. Visible focus (`--kg-color-focus`, a 3px ring with an offset). A skip link, semantic landmarks, one h1 per page, and focus management on route change. The lightbox traps and restores focus. Players have labelled controls, and lyrics are readable as text. 44px targets. No autoplaying sound, and video can be paused. Decorative layers get `aria-hidden`. Pinned sections stay usable with keyboard and screen readers (content stays in DOM order).

## 8. SEO / OG
Per-route title and description (extend `useTitle.js` or use react-helmet-async), OG/Twitter images per talent, release, and work, JSON-LD (Organization, MusicRecording/MusicAlbum, VisualArtwork, VideoObject), a sitemap.xml, and robots. Consider prerendering (vite-plugin-ssg or similar) for crawlable HTML. While the project is a private prototype, set `noindex`.

## 9. Asset pipeline
Images: AVIF/WebP with a JPG/PNG fallback, responsive `srcset` (480/960/1600/2400), explicit width and height, `loading="lazy"` except for the hero, and blurred LQIP placeholders. Use vite-imagetools or a sharp script. Video: ffmpeg to H.264 MP4 plus WebM/AV1, hero loops at 720-1080p and 4 MB or less, a poster frame, `preload="metadata"`. Re-encode the 46 MB resource video for the demo. Audio: AAC/Opus 128-160 kbps, and precomputed waveform peaks in JSON. Fonts: self-host subset WOFF2 with `font-display: swap`, and load JP fonts only on pages that need them. Store reference copies in `public/assets/ref/` (prototype only) and own assets in `public/assets/arri/`.

## 10. Content model (`src/content/*.json` or MDX)
- `talents`: slug, name, nameJp, unit (Eonica), themeColor, avatar, portrait, fanName, oshiMark, birthday, height, debut, languages[], bio, lore?, socials{youtube,twitch,x,tiktok}
- `releases`: slug, title, talentSlugs[], type(cover|original|unit), date, jacket, credits[{role,name}], audioSrc?, peaks?, lyrics?(timed), mvYoutubeId?, streamingLinks[]
- `artworks`: slug, title, artist, category, image, width, height, alt, process[]?(sketch/line/color), tags[], date
- `animations`: slug, title, poster, video, youtubeId?, credits[], storyboardFrames[]?, frameSequence?{path,count}, bts[]
- `site`: nav, socials, studio story, exhibition entries
Document in `30-content.mdc` how to add a work without touching code.

## 11. Folder structure (proposal)
```
src/
  app/ (routes, layout, transitions)
  pages/ Home, Vsinger, Talent, Release, Illustration, Artwork, Animation, AnimationDetail, About, NotFound
  components/ ui/ (GlassPanel, PillButton, Badge, Avatar), media/ (MiniPlayer, Lightbox, VideoReel, FrameSequence), layout/ (Header, Footer, Loader)
  motion/ (lenis.ts, useReveal, SplitHeadline, Parallax, PinnedHorizontal, WipeReveal, VelocityMarquee, BgShift, CursorOrb, Burst)
  content/ (*.json, *.mdx)
  styles/ (tokens.css, base.css, glass.css, fallbacks.css)
public/assets/{ref,arri}/
docs/PLAN.md
.cursor/rules/*.mdc
```

## 12. Phased plan (ask before moving on to each phase)
- **Phase 0: Plan + rules.** The deliverables in section 0. *Acceptance:* PLAN.md has the stack decision, component inventory, reference mapping table, and open questions, and the rules files exist. **Ask me before** installing dependencies or deleting files.
- **Phase 1: Tokens + shell.** tokens.css, glass utilities with fallback, fonts, Header (letter-roll nav), Footer (cloud edge and peeking character), Lenis and GSAP setup, the reduced-motion and Calm-mode switch, route transitions, the loader, reference assets copied plus ASSETS.md, and the content JSON stubs. *Acceptance:* every route renders the shell, contrast passes AA, keyboard nav works, and turning on reduced motion stops all motion. **Ask me before** removing the Services/Offering pages.
- **Phase 2: Home + hero demo.** *Acceptance:* the demo behaves as described in section 6 at 1440, 1100, 760, and 375 widths, runs at 60 fps in a trace, LCP under 2.5 s on mobile emulation, and has a static fallback. **Ask me** to review the hero before building the rest of Home.
- **Phase 3: Showcase pages.** 3a Vsinger (profile, discography, release page, persistent mini-player, lyrics), 3b Illustration (masonry, filters, lightbox, wipe reveal, horizontal character sheets), 3c Animation (reel, pinned storyboard, frame scrubber, detail pages). *Acceptance per page:* data comes only from content JSON, every motion item has a reduced-motion state, lazy media, and no layout shift. **Ask me** after each page.
- **Phase 4: Polish.** Perf (bundle analysis, code-splitting, image and video encodes), an a11y audit (axe plus a manual keyboard and screen-reader pass), SEO/OG, a 404 page, and cross-browser checks (Safari backdrop-filter, Firefox). *Acceptance:* Lighthouse mobile Performance 85 or higher, and Accessibility, Best Practices, and SEO 95 or higher, with zero axe criticals.
- **Phase 5: Deploy.** A preview deploy to the host we choose (private, noindex), with SPA redirects and cache headers. **Ask me before** deploying or connecting any account.

## 13. Open questions for me (list them in PLAN.md)
1. Confirm the talent roster, which talents to feature, and the per-talent theme colors.
2. Logo and wordmark: do they exist, and in what format?
3. Do we host audio ourselves or use YouTube/Spotify embeds only? Are there original songs or only covers (cover licensing for hosted audio)?
4. Languages: EN only at launch, or EN + Burmese + JP?
5. Who are the illustration and animation artists, and how should they be credited?
6. Hosting preference and domain?
7. Keep plain JS, or migrate to TypeScript?
8. Which hero concept do we build: Glass Sky Stage, Record Bubble, or Sketchbook Unfold?

## 14. Assets I need to provide
Logo (SVG), talent avatars, portraits, and full-body art (transparent PNG), the talents' profile data, release jackets (square 1400px or larger) with credits, links, and audio or YouTube IDs, illustration files with sketch, line, and color stages, character sheets, animation reels and source clips, storyboards, exhibition photos, the studio story text, and social links.
