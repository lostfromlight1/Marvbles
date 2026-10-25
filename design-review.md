# Arri Virtual Showcase: Design Review of Reference Folder

Source: `C:\Users\Admin\marvbles\resource` (read-only). Reviewed from saved HTML, CSS and JS bundles via shell extraction.

**Limitation:** copying the images and the video to my workspace was not approved on your PC, so I could not view the 7 images, the key-visual JPGs, or frames of the 46 MB video (`2a848693..._compressed.mp4`). Image notes below are from filenames, sizes and where the pages use them, not from looking at them. To get a visual pass, approve the file copy (or set local execution to "Always allow") and ask again.

## Who Arri Virtual is (from public sources)
- Myanmar-based VTuber/VSinger production. Their VSinger unit is called **Eonica**. Listed VSingers: Sasayaka Lumi, Morika Rei, Seika Marionette, Amanogawa (vtubie.com). Other talents named at events: Nyanoh, Hoshimi Ritsu, Kasumi Toka, Danny Amberynth.
- They sing covers (J-pop, Vocaloid, anime songs) on YouTube and Twitch, in Burmese, English, Japanese and Thai. Several talents debuted 1 Jan 2025.
- In June 2025 they hosted Myanmar's first VTuber Exhibition at the Japan Foundation, Yangon.
- Stated mission (VTuber NewsDrop, Sept 2025): introduce VTubers to Myanmar, nurture local talent, and use the medium for cultural exchange. Founders came to it as fans.
- Not found: an official website, a logo file, brand colors, or an illustration/animation portfolio. These are placeholders until you provide them.

## Existing project (`marvbles`)
Vite 6 + React 19 + react-router-dom 7, plain JS (JSX), one `styles.css`, content in `src/content.js`. Pages: Home, Singer, Gallery, Motion, Work, Project, Roster, About, Contact, **Services, Offering**. Components: Reel, ReleaseList, TalentCards, PieceView, ProcessSteps, ScrollCue, **InquireCta, OfferingHero**. The service-style pieces (Services, Offering, InquireCta) go against the "showcase, not services" brief and should be removed or reworked.

## Reference 1: KAMITSUBAKI STUDIO (home + "Alt Skin" discography page)
- **What:** Japanese virtual-singer label. This is the closest match to what you want.
- **Structure:** fixed header and full-screen menu toggle (`body.menued`), hero tagline "MUSIC, ART, STORY, XPERIENCE" with a SCROLL DOWN cue, then an info ticker, a news slider with a 01/05 counter and autoplay progress bar, News cards (date, category, hashtags, "Explore"), Live/Event list, a Discography carousel (3 per view), Artists, and a big-nav footer. The release page has a large jacket, release date, a Streaming&Download block, credits, and an embedded YouTube MV.
- **Type/color:** acumin-pro (Latin) with dnp-shuei-gothic (JP). Near-monochrome: #020202 / #fcfcfc / #dadada greys. The cover art supplies all the color.
- **Motion:** GSAP + ScrollTrigger. `.atg` elements get an `active` class once when they enter the viewport (top at bottom-30%). `[data-bgchg]` sections change the body background theme as you scroll through them. Swiper carousels use fraction pagination and an autoplay progress bar. MixItUp filters the listings. Keyframes: hoverLine (underline sweep), arrowIn/arrowOut, loopScroll (marquee). Easing: cubic-bezier(0.22,1,0.36,1). A first-visit loading animation is stored in localStorage so it plays once.
- **Borrow:** background color that changes by section (mapped to pastel themes per page), one-shot reveal classes, the jacket-led release page layout, the carousel with a progress bar, filterable discography, and the play-once loader.
- **Skip:** the monochrome corporate tone and the heavy news and ticket-sales focus.

## Reference 2: Anime-Style Animation Studio (Otsu Animation, Next.js)
- **Structure:** menu labels built from split letters (each letter doubled for a hover roll effect), a playful hero line ("We Animate Like Scientists. Or Madmen"), live clocks for each studio city, an "Experiment log" intro with a mascot voice, a showreel with Unmute/Pause pill controls, Selected Works cards ("View Project"), a capabilities tag cloud, client logo marquees (Row 1-3 SVG rows), FAQ, blog, and a footer character image.
- **Type/color:** Geist / Geist Mono. Dark #0a0a0a with neon accents (#66fe66, #52ff00, #e23636).
- **Motion:** CSS keyframes heroZoom (scale-in), marquee and logoScroll (translate -50% loops), pillFloat (7px bob), emojiPop (particles burst outward using --dx/--dy/--rot variables), livePulse, shake, lightbox-in/pop, faq-open, blog-rise, and a route-loading bar. Easing cubic-bezier(.16,1,.3,1). Uses backdrop-filter and sticky positioning.
- **Borrow:** letter-roll hover on nav, showreel with pill controls, multi-row marquees running in opposite directions (as rows of your artwork instead of client logos), sparkle or heart burst on click, floating pills, a character peeking over the footer, the route-loading bar, and a lightbox pop.
- **Skip:** the neon-on-black palette, the "Services/Capabilities/Clients" agency framing, and the redacted lab gimmick.

## Reference 3: Chizu Koyote / Vzatsu VTuber Agency (Wix)
- **Structure:** a talent profile page. Bio key/value block (oshi mark, fan name, birthday, height, color with hex, debut, socials), then a "classified file" lore section (subject profile, supervision level, redacted text, containment procedures), embedded YouTube videos, and logo and character art over a themed background.
- **Type/color:** Helvetica, DIN and Lucida Console (for the dossier). The character color (#92A775) is used as a theme.
- **Motion:** basically none. Wix video player only.
- **Borrow:** the **character profile card** for each VSinger (stats with their own theme color), a lore or "file" section told in-world, and a per-character accent color applied to the page.
- **Skip:** Wix weight (about 950 KB of HTML plus many bundles), generic typography, and the lack of motion.

## Reference 4: Cover Corporation (hololive parent, Next.js)
- **Structure:** a full-screen key visual that crossfades three backgrounds (kv-bg01-03) with SVG text lines revealed in sequence (kv-text-first, second, third01-07, with SP variants), then numbered business cards (01/02/03), a Vision banner, News, Recruit, and a big footer.
- **Type/color:** Noto Sans JP plus an English font variable. Light theme, cyan accents #0099eb / #38abe0 / #51cce8.
- **Motion:** fadeInArea, fadeAndPaint (wipe reveal), hoverLine In/Out/Keep, imgHoverLeftRight, circleIcon arrow swaps, and a **mouseStalker** (custom cursor follower). Easing out-cubic/quart. Swiper.
- **Borrow:** a multi-slide key visual with staged SVG or split text reveals, wipe-paint image reveals, a cursor follower (as a soft glowing orb), numbered section cards, and separate PC/SP art crops.
- **Skip:** corporate IR/recruit content and anything hololive-branded.

## Loose images and video
- `JKT_mini.png`, `JKT2_mini_1.png`, `HowMany_JKT_1080.webp`, `PAUSE_jkt_FIX-1400x1400.webp`, `afdcbe5f...png`: Kamitsubaki release jackets (square cover art). They suggest square jacket cards as the main unit of the Vsinger page.
- `77079a_...~mv2.avif`, `download.png`: from the Wix/Chizu set (character or logo art).
- Video (46.9 MB): not inspected (see limitation). Budget for it: re-encode any hero reel to 1080p H.264/AV1 at no more than 6-8 MB, plus a poster image.

## Reference use
This is a private planning prototype. The demo closely replicates these layouts and motion patterns and reuses the resource-folder assets directly. Replace them with Arri Virtual's own assets before anything goes public.

## Synthesis

### Site map
`/` Home, `/vsinger` (list) and `/vsinger/:talent` (profile) with `/vsinger/release/:slug`, `/illustration` and `/illustration/:slug`, `/animation` and `/animation/:slug`, `/about` (studio story, exhibition, team), and contact/socials in the footer. No services, pricing or inquiry funnels.

### Page concepts
- **Home:** dreamy glass hero (see the concepts below), then three portals (Music / Art / Motion) as large glass cards that zoom into their page on click. Next, a marquee wall of artwork, latest releases, a "Made in Yangon" studio story with the exhibition photo, and social links. The background hue shifts per section (data-bgchg idea).
- **Vsinger:** a talent selector of Eonica members as circular avatars with glowing rims. Each talent gets a Chizu-style profile card in their own theme color, then a discography of square jackets (Swiper and filters), a sticky mini player (wavesurfer waveform), MV embeds that only load on click, and optional lyric lines that highlight in time with the song.
- **Illustration:** a masonry gallery with filters (character, fan art, key visual), and a lightbox that pops open with shared-element zoom. A sketch-to-final reveal uses a scroll-scrubbed clip-path wipe. A character sheet section scrolls horizontally while pinned.
- **Animation:** showreel hero with pill controls. Pinned storytelling where a storyboard panel becomes the animatic and then the final shot as you scroll. A frame-sequence scrubber (image sequence on canvas). A behind-the-scenes timeline with a dashed connector.

### Signature scroll ideas, mapped to techniques
1. Hero clouds and glass parallax at three depths: GSAP ScrollTrigger `scrub`, with Lenis smooth scroll.
2. Headline that splits into letters and bounces in: SplitText (now free) or SplitType, staggered 0.03s with a back.out ease.
3. Portal zoom: a pinned section where a card scales to full screen, then the route changes. Use a View Transitions API page transition.
4. Pinned horizontal gallery: ScrollTrigger `pin` plus x translation, with `containerAnimation` for nested reveals.
5. Background hue morph per section: ScrollTrigger onEnter sets CSS variables.
6. Sketch-to-color wipe: a clip-path inset scrubbed by scroll.
7. Storyboard frame scrub: a canvas image sequence (webp frames).
8. Opposite-direction artwork marquees whose speed follows scroll velocity.
9. Cursor glow orb plus a sparkle trail. Click bursts hearts (emojiPop-style).
10. Audio-reactive sparkles while a track plays (Web Audio AnalyserNode).

### Blending references with Kawaii Glass Dream
Keep Kawaii Glass Dream as the visual skin. Kamitsubaki provides the information architecture and scroll logic, Otsu the playful micro-interactions, Cover the hero sequencing and cursor follower, and Chizu the profile model. Swap all their dark or monochrome palettes for the pastel ground and glass cards. Each talent's theme color appears only as an accent.

### Risks
- **Performance:** backdrop-filter on many layers combined with scroll scrub is expensive. Limit blur to about 6 elements per viewport, use a 10px blur on mobile, and animate only transform and opacity. Lazy-load YouTube embeds and video, and preload only the hero.
- **Accessibility:** pastel-on-glass contrast. Keep plum text and test AA. Under prefers-reduced-motion, turn off scrub, pinning, parallax and the cursor effects, and use plain fades. Pinned sections must not trap keyboard users. Audio must never autoplay with sound.
- **Smooth scroll:** Lenis can break anchors and focus. Use its scrollTo and test with the keyboard.

### Three hero concepts
1. **Glass Sky Stage:** a pastel sky with drifting clouds and a large glass panel holding "ARRI VIRTUAL" split letters and a featured VSinger beside it. On scroll the clouds part at different depths and the panel tilts and splits into the three portal cards.
2. **Record Bubble:** a giant glass bubble holds a spinning jacket of the latest release with a waveform ring around it. Press play and sparkles pulse to the audio. On scroll the bubble shrinks into the sticky mini player.
3. **Sketchbook Unfold:** a pinned sketch-to-color reveal of one key illustration. As you scroll, the line art fills with color, then frames start moving (animation) and a voice line or song snippet appears (music), presenting all three disciplines in one piece.
