# Sprint Roadmap

**Project:** Jain Scripture Library (see PROJECT.md)
**Cadence:** Sprints are scoped by deliverable, not duration. Each sprint ends with a clear gate.
**Last updated:** 2026-05-01

---

## Sprint structure

Each sprint has:
- **Goal:** the single outcome that defines done
- **Deliverables:** concrete artifacts produced
- **Acceptance criteria:** how we know it's done (binary checks)
- **Gate:** what must be true to start the next sprint
- **Risks:** what could derail this sprint
- **Out of scope:** what we're explicitly not doing this sprint

A sprint cannot be marked done until all acceptance criteria pass and the gate is open.

---

## Sprint 0 — Foundations & Decisions

**Status:** IN PROGRESS
**Goal:** Lock all blocking decisions so subsequent sprints can run without further interruption.

### Deliverables
- ✅ PROJECT.md (charter)
- ✅ GLOSSARY.md (terminology, flagged for reviewer)
- ✅ DECISIONS.md (open + closed decisions)
- ✅ SPRINTS.md (this doc)
- ✅ RISKS.md (risk register)
- ✅ BACKLOG.md (task list)
- ⬜ All 9 open decisions in DECISIONS.md closed by Mayank
- ⬜ Cultural reviewer named and confirmed available (D-004)

### Acceptance criteria
- D-001 through D-009 all have CLOSED status in DECISIONS.md
- D-004 (cultural reviewer) has a named person with confirmed availability
- A `git` repository is initialized with all PM docs committed

### Gate to Sprint 1
- All decisions closed
- Mayank explicitly confirms "go" for Sprint 1

### Risks
- Decisions stall — Mayank doesn't have a cultural reviewer lined up; this delays everything
- Decision drift — decisions reopened without going through closed-decision-reversal process

### Out of scope
- Any code, design, or content production. Sprint 0 is decisions only.

---

## Sprint 1 — Design Validation (visual mockup)

**Status:** PENDING (blocked by Sprint 0)
**Goal:** Produce static HTML/CSS mockups of three key screens. Mayank reviews and approves design direction before any real build.

### Deliverables
- Static HTML mockup of **Home / Library landing page**
- Static HTML mockup of **Bhaktamara Stotra index page** (intro + verse list)
- Static HTML mockup of **Single verse reading page** — showing all three reading modes (Pathan, Adhyayan, Shravan)
- Mobile + desktop versions of each (responsive)
- Light + dark mode toggle on each
- Design system file: palette, typography, spacing, component primitives

### Acceptance criteria
- All three screens render correctly on iOS Safari, Android Chrome, desktop Chrome/Safari/Firefox
- Devanagari renders correctly (no missing glyphs, proper conjunct consonants)
- Three reading modes visually distinct and recognizable from each screen
- Mayank approves visual direction in writing (one round of feedback expected; revisions stay within philosophy from C-003)
- Design system documented in `design-system.md`

### Gate to Sprint 2
- Mayank's written approval of design direction
- No outstanding design feedback unresolved

### Risks
- Devanagari typography surprises (font fallbacks, conjunct consonants render badly)
- Mayank wants major direction change after seeing it — costs Sprint 1 redo, not a blocker if scoped honestly

### Out of scope
- Real Next.js build (Sprint 2)
- Functionality (just visuals)
- Content correctness (lorem-ipsum-style placeholder Sanskrit acceptable)

---

## Sprint 2 — Content Pipeline & Bhaktamara MVP Content

**Status:** PENDING
**Goal:** Build the Next.js scaffold with the content pipeline, and produce verified content for **Bhaktamara Stotra (48-verse Digambara version)**, all layers.

### Deliverables
- Next.js 15 project scaffold with Tailwind, MDX, App Router
- Content schema: MDX frontmatter spec for texts and verses
- Build pipeline: content validation, transliteration linting, broken-link check
- **Bhaktamara Stotra (Digambara, 48 verses) full content:**
  - 48 verses, each with: Devanagari, IAST transliteration, Hindi translation, English translation, Hindi meaning (*bhavarth*), English meaning
  - Verify the canonical placement of the 4 verses unique to the Digambara recension against a Bharatiya Jnanpith or Mahavir Aradhana Kendra edition
  - Author intro (Acharya Manatunga, traditional dating, Manatunga legend)
  - Text intro: significance in Digambara tradition, recitation practice, the *Manatunga* legend (chains breaking on each invocation), sources used
  - Citations: every translation cites its source (PD edition + year, or fresh translation)
  - Word-by-word breakdown for verses 1-5 (validate the format; expand to all in Sprint 3)
- Digambara reviewer pass on Bhaktamara content — sign-off documented

### Acceptance criteria
- Bhaktamara MDX file passes schema validation
- Reviewer signs off on content (in writing, attached to the file)
- All translations have source citations
- All flagged glossary terms in this content are reviewer-approved
- `npm run build` succeeds with no warnings
- Search index (Pagefind) generates without errors

### Gate to Sprint 3
- Reviewer-signed-off content for Bhaktamara
- Working content pipeline that can ingest the next 9 texts mechanically

### Risks
- Translation rights blocker (D-005) — if we can't use existing translations, we write fresh, which slows reviewer approval
- Reviewer disagreement on translation choices — budget for revision rounds
- Devanagari encoding issues in MDX (zero-width joiners, etc.)

### Out of scope
- Other 9 texts (Sprint 5)
- Reading modes UI (Sprint 3)
- Audio (Sprint 6)

---

## Sprint 3 — Reading Experience Build

**Status:** PENDING
**Goal:** Build the three reading modes and core reading-experience features against the Bhaktamara content.

### Deliverables
- **Pathan mode** — minimal reading view (Sanskrit + one translation, swipe between verses)
- **Adhyayan mode** — full study view (all layers visible, word-by-word toggle)
- **Shravan mode** — audio-ready listening view (placeholder where audio will plug in)
- Verse navigation: prev/next, jump-to-verse, table of contents
- Adjustable text size (S/M/L/XL)
- Dark mode toggle
- Bookmarks (localStorage, no account)
- Reading progress tracking (localStorage)
- Search across Bhaktamara content (Pagefind)
- PWA setup: installable, offline after first load
- Verse permalinks (`/bhaktamara-stotra/15`)

### Acceptance criteria
- Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 90
- Loads in < 2s on simulated 3G
- All three reading modes work on iOS Safari and Android Chrome
- PWA installs cleanly from Chrome and Safari
- Offline mode: previously-loaded text fully readable with no network
- Bookmark and progress survive page reload
- Word-by-word for all 44 verses complete (expanded from Sprint 2)
- Five test readers can complete the "read verse 5 with meaning" task without help

### Gate to Sprint 4
- All Sprint 3 acceptance criteria pass
- Test reader feedback documented; major issues addressed

### Risks
- PWA quirks on iOS (notoriously inconsistent)
- Audio sync architecture may need adjustment when real audio arrives in Sprint 6

### Out of scope
- Texts beyond Bhaktamara (Sprint 5)
- Real audio (Sprint 6)
- Multilingual UI (Sprint 7)

---

## Sprint 4 — Polish, Audit, Soft Deploy

**Status:** PENDING
**Goal:** Polish Bhaktamara experience to ship-quality and deploy to production behind a soft-launch URL.

### Deliverables
- Performance audit: every page hits Lighthouse 90+ across the board
- Accessibility audit: WCAG 2.1 AA compliance verified
- Cross-device testing matrix completed (5+ devices)
- SEO basics: meta tags, OpenGraph, structured data for verses
- Sharing: each verse has share-to-WhatsApp / copy-link buttons
- Print stylesheet: each text printable as a clean book
- Domain purchased and DNS configured (D-006)
- Cloudflare Pages deployment live
- Soft-launch URL active; analytics (Plausible / Cloudflare) wired

### Acceptance criteria
- Production URL live with Bhaktamara fully functional
- All audits pass thresholds
- Mayank does final walkthrough on his phone and laptop, signs off
- Reviewer does final pass on the live site, signs off

### Gate to Sprint 5
- Live, signed-off Bhaktamara experience
- Confidence that we can replicate the content pipeline for 9 more texts

### Risks
- Domain unavailable (D-006 needs alternate names)
- Reviewer surfaces issues not caught in Sprint 2 — budget for revision

### Out of scope
- Texts 2-10 (Sprint 5)
- Audio (Sprint 6)
- Public announcement (Sprint 7)

---

## Sprint 5 — Library Expansion (texts 2-10)

**Status:** PENDING
**Goal:** Produce content for the remaining 9 texts in the Phase 1 corpus, using the pipeline from Sprint 2.

### Deliverables
- 9 texts, each with: Devanagari, IAST, Hindi translation, English translation, Hindi meaning, English meaning, citations
- Word-by-word for the most-recited texts (Navkar, Logassa, Chattari Mangalam) — full coverage; for longer texts, key verses only
- Cultural reviewer sign-off for each text
- Library home page updated with all texts grouped by category
- Cross-text search working

### Acceptance criteria
- All 10 texts live and reviewer-signed-off
- Search returns results across all texts
- Library home page presents all texts in a coherent taxonomy
- No regression in Bhaktamara experience

### Gate to Sprint 6
- 10-text library complete and reviewer-approved
- Decision D-007 (audio strategy) closed

### Risks
- Tradition coverage imbalance noticed late — Decision D-001 may need rebalancing
- Reviewer bandwidth becomes the bottleneck — budget for parallel review

### Out of scope
- Audio (Sprint 6)
- Multilingual UI (Sprint 7)

---

## Sprint 6 — Audio Integration

**Status:** PENDING (gated on D-007 strategy choice)
**Goal:** Add verse-synced audio for the most-recited texts.

### Deliverables (depending on D-007 choice)
- If existing recordings: licensed, attributed, processed (volume normalize, trim, format)
- If fresh recording: chanter hired or volunteer recorded, audio engineered
- Audio player component with verse-sync highlighting
- Shravan mode polished against real audio
- Speed control (0.75x, 1x, 1.25x, 1.5x)
- Pre-cached for offline playback in PWA

### Acceptance criteria
- Audio for at least Navkar, Bhaktamara, Logassa, Kalyana Mandir live
- Verse-sync highlighting is accurate to within ±200ms
- Audio plays offline after first cache
- Reviewer signs off on chanter's pronunciation and recording quality

### Gate to Sprint 7
- Audio live for flagship texts
- Reviewer approval of audio quality

### Risks
- Audio licensing turns out impossible — fall back to fresh recording
- Chanter availability or quality issues — may need to redo
- Audio file size impacts PWA cache budget — may need compression strategy

### Out of scope
- Audio for every verse of every text — selective is fine

---

## Sprint 7 — Public Launch

**Status:** PENDING
**Goal:** Open the library to the public, with appropriate communication channels and quality safeguards.

### Deliverables
- Public announcement (Mayank's channels, community, perhaps Jain organizations)
- Feedback channel: a way for users to report errors or suggest texts (email or simple form)
- Privacy policy, terms of use, content licensing statement
- Multilingual UI (English + Hindi UI labels) — content was always multilingual; this is the chrome
- Phase 2 backlog populated with reader-requested additions

### Acceptance criteria
- Public URL announced
- Feedback channel monitored
- First week: no major reported errors; minor errors triaged within 48h
- Phase 2 priorities established from real reader feedback

### Gate to Phase 2
- Sustained traffic over a 2-week window
- Reviewer continues to be available
- Feedback patterns clear enough to prioritize Phase 2

### Risks
- Errors surface that should have been caught earlier — process improvement for Phase 2
- Volume of feedback overwhelms ability to respond

### Out of scope
- Phase 2 texts
- Native apps (PWA continues to serve)
- Account-based features

---

## Phase 2 — pending after Sprint 7

Possible (not committed):
- Expand to ~25 texts (Pratikraman in full, Aartis, Stavans, more sutras)
- Audio for full library
- Community contribution flow (proposed corrections via PR)
- More languages (Gujarati, Marathi, Kannada)
- Liturgical calendar / daily reading feature
- Print-on-demand book version

Do not plan Phase 2 in detail until Sprint 7 ships.

---

## Sprint dependencies

```
Sprint 0 (decisions)
  └─→ Sprint 1 (design mockup)
        └─→ Sprint 2 (Bhaktamara content + pipeline)
              └─→ Sprint 3 (reading modes)
                    └─→ Sprint 4 (polish + soft deploy)
                          └─→ Sprint 5 (9 more texts)
                                └─→ Sprint 6 (audio)  [gated by D-007]
                                      └─→ Sprint 7 (public launch)
```

No sprint can start until its predecessor's gate is open. No exceptions.
