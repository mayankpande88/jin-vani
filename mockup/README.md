# Sprint 1 — Design Mockups (v2)

**v2 changes from v1** — addressing feedback that v1 was "too sepia/old" and "too much vertical scroll":

- **Dark-first palette** with deeper saffron + bold gold accents (was: parchment cream + muted vermillion)
- **Verse reader is card-based** with tab segments to switch between Hindi / English / Meaning / Word-by-word — no more 7-section vertical scroll dump
- **Modern type stack** — Fraunces (display) + Manrope (UI), more contemporary feel
- **Hero "Verse of the Day"** card on home — daily-engagement hook
- **Streak tiles** (5-day streak, 12 verses read, 3 bookmarks) — habit formation
- **Library cards with custom Devanagari covers** — each text gets a styled letter cover
- **Continue card with circular progress ring** — visual progress
- **Reader has a bottom action bar** — bookmark / play audio / share / prev / next, always reachable
- **Floating-pill layer tabs** — modern segmented control feel
- **Subtle atmospheric background glow** — premium app feel

## How to view

```bash
open mockup/index.html
```

## Pages

1. **`index.html`** — home / library landing
   - Greeting → Verse of the Day → streak tiles → continue → library grouped by category
   - Bottom tab bar on mobile

2. **`bhaktamara.html`** — Bhaktamara Stotra index
   - Big text cover with गल mark + stats
   - Intro card with Manatunga legend
   - Begin reading CTA pill button
   - 48-verse grid with read/current state

3. **`verse.html`** — verse reading (the big change)
   - Card-style screen with verse number, Sanskrit, transliteration
   - **4 tabs to switch layer**: हिन्दी / English / Meaning / Word-by-word — tap to switch, no scrolling everything
   - Bottom action bar: prev verse / bookmark / **play audio (big)** / share / next verse
   - Settings strip (text size)
   - Try **swiping horizontally** on the verse card — visual hint shown (in real app this navigates verses)

## What to evaluate

- Does this feel like an app you'd open daily, not a webpage?
- Is the dark mode atmospheric without being gimmicky?
- Verse page: is "tap a tab to switch layer" cleaner than "scroll through everything"?
- Mobile (Chrome DevTools → device mode → iPhone): bottom tab bar appears, layout works
- Toggle to light mode (◐ icon top right) — design holds up in both

## What's still placeholder

- Search, audio play, bookmark, share — all dummy
- Only Bhaktamara Verse 1 has real content
- Other library cards link nowhere yet
- No PWA, no offline, no real swipe nav (just visual hint)

## Tech notes

- Uses Google Fonts (loads on first view; cache after)
- Pure HTML/CSS/JS, no build step
- All design tokens in `styles.css` `:root`
- Mobile-first; max-width 480px for reading column on phone
