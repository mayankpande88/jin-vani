# Sprint 1 — Design Mockups

Static HTML/CSS mockups demonstrating the design direction for the Jain Scripture Library.
No build step required — open the HTML files directly in a browser.

## How to view

From this directory:

```bash
# Mac: open in default browser
open index.html

# Or serve with any static server:
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Pages

1. **`index.html`** — Library landing page (home)
   - All 10 Phase-1 texts grouped by category (Mantras, Stotras, Daily Reading, Sutras & Philosophy)
   - Continue-reading card
   - Hero showing Navkar Mantra
   - Bottom nav on mobile

2. **`bhaktamara.html`** — Bhaktamara Stotra index page
   - Header with title, author, verse count (48 — Digambara)
   - Intro: significance and the Manatunga legend
   - "Begin reading" CTA
   - Grid of all 48 verses, with read/current state markers
   - Source citations footer

3. **`verse.html`** — Single verse reading page (Verse 1 of Bhaktamara)
   - Three reading modes — toggle between them at the top:
     - **Pathan (पठन / Read)** — minimal: Sanskrit + Hindi translation only
     - **Adhyayan (अध्ययन / Study)** — all layers: Sanskrit, transliteration, both translations, both meanings, word-by-word
     - **Shravan (श्रवण / Listen)** — large type, audio player visible (placeholder)
   - Adjustable text size: A− / A / A+ / A++
   - Light / dark mode toggle
   - Verse navigation: prev / TOC / next

## What to evaluate

When reviewing, focus on:

- **Typography** — Sanskrit Devanagari should render with clean conjunct consonants (e.g., the `मणि` and `दलित` in verse 1)
- **Color discipline** — vermillion ink for Sanskrit, saffron only for accents, restraint everywhere else
- **Reading comfort** — try at S/M/L/XL text sizes; reading column width feels right at all of them
- **Mode switching** — Pathan vs Adhyayan vs Shravan should feel meaningfully different, not just hidden/shown
- **Mobile** — open Chrome DevTools, switch to mobile (iPhone 14 Pro), verify bottom nav appears, layout still works
- **Dark mode** — toggle the topbar moon icon. The vermillion shifts to a warmer gold for legibility on dark.

## Known issues / not in scope for Sprint 1

- Search box is a placeholder (Sprint 3)
- Audio player is non-functional (Sprint 6 has the real audio)
- Bookmark / settings buttons in bottom nav are dead-ends (Sprint 3)
- No PWA / offline (Sprint 3)
- Only Verse 1 has real content — others are placeholders (Sprint 2)
- Cards on home page link to verse.html via Bhaktamara only; other texts not implemented yet

## Design tokens

All design values live in `styles.css` at the top under `:root` and `[data-theme="dark"]`.
The full set will move into Tailwind CSS variables when we scaffold Next.js in Sprint 2.

## Next sprint gate

Sprint 1 closes when Mayank reviews these on phone + laptop and signs off (or tells me what to change).
After approval, Sprint 2 begins: scaffolding the real Next.js app and producing Bhaktamara's actual 48-verse content.
