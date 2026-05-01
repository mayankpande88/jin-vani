# Backlog

**Format:** Tasks grouped by sprint. Each task has an ID, title, owner, and acceptance criterion. IDs are stable across the project lifetime.

**Status legend:** ⬜ pending · 🟡 in progress · ✅ done · 🚫 blocked · ❌ cancelled

**Last updated:** 2026-05-01

---

## Sprint 0 — Foundations

| ID | Task | Owner | Status | Notes |
|---|---|---|---|---|
| S0-01 | Write PROJECT.md | Claude | ✅ | Charter, scope, non-goals locked |
| S0-02 | Write GLOSSARY.md | Claude | ✅ | Terminology + reviewer-flag list |
| S0-03 | Write DECISIONS.md | Claude | ✅ | 9 open decisions surfaced |
| S0-04 | Write SPRINTS.md | Claude | ✅ | Roadmap S0–S7 |
| S0-05 | Write RISKS.md | Claude | ✅ | Risk register with mitigations |
| S0-06 | Write BACKLOG.md | Claude | 🟡 | This file |
| S0-07 | Initialize git repo, commit PM docs | Claude | ⬜ | After Mayank approves docs |
| S0-08 | Close D-001 (corpus) → C-007 | Claude (per Mayank "A") | ✅ | Rebalanced 10-text list, 2 Digambara texts added |
| S0-09 | Close D-002 (tradition) → C-008 | Claude (per Mayank "A") | ✅ | Both side-by-side |
| S0-10 | Close D-003 (languages) → C-009 | Claude (per Mayank "A") | ✅ | English + Hindi |
| S0-11 | Close D-004 (reviewer) | Mayank | ⬜ | **HARD BLOCKER** — must name a person; cannot be closed by Claude |
| S0-12 | Close D-005 (translation rights) → C-010 | Claude (per Mayank "A") | ✅ | Public-domain only or fresh writes |
| S0-13 | Close D-006 (domain) → C-011 | Claude (per Mayank "A") | ✅ | Priority list set; Mayank buys in Sprint 4 |
| S0-14 | Close D-007 (audio) → C-012 | Claude (per Mayank "A") | ✅ | Defer to Phase 1.5 |
| S0-15 | Close D-008 (Mayank's relationship) | Mayank | 🚫 | Deferred to Sprint 4 (About page) |
| S0-16 | Close D-009 (commercial intent) → C-013 | Claude (per Mayank "A") | ✅ | Non-commercial Phase 1 |

**Sprint 0 done when:** Tasks S0-01 through S0-07 ✅ AND all decisions D-001 through D-009 closed.

---

## Sprint 1 — Design Mockup

| ID | Task | Owner | Status | Notes |
|---|---|---|---|---|
| S1-01 | Set up mockup directory `mockup/` | Claude | ⬜ | Static HTML/CSS only |
| S1-02 | Build design system: palette, type, spacing | Claude | ⬜ | Output: `design-system.html` |
| S1-03 | Source Devanagari fonts and confirm rendering | Claude | ⬜ | Tiro Devanagari Sanskrit, Noto Serif Devanagari |
| S1-04 | Mock home / library landing — desktop | Claude | ⬜ | List of texts, categories, search bar |
| S1-05 | Mock home / library landing — mobile | Claude | ⬜ | Single column, bottom nav |
| S1-06 | Mock Bhaktamara index page — desktop | Claude | ⬜ | Intro + verse list, "begin" CTA |
| S1-07 | Mock Bhaktamara index page — mobile | Claude | ⬜ | |
| S1-08 | Mock verse reading — Pathan mode (desktop + mobile) | Claude | ⬜ | Minimal: Sanskrit + one translation |
| S1-09 | Mock verse reading — Adhyayan mode (desktop + mobile) | Claude | ⬜ | All layers visible |
| S1-10 | Mock verse reading — Shravan mode (desktop + mobile) | Claude | ⬜ | Audio player, large type, highlight |
| S1-11 | Add light/dark toggle to all mocks | Claude | ⬜ | |
| S1-12 | Add adjustable text size demo | Claude | ⬜ | S/M/L/XL |
| S1-13 | Mayank reviews mocks on phone + laptop | Mayank | ⬜ | |
| S1-14 | Iterate on feedback (one round) | Claude | ⬜ | |
| S1-15 | Mayank signs off design direction | Mayank | ⬜ | Written approval, gate to S2 |

---

## Sprint 2 — Bhaktamara Content + Pipeline

| ID | Task | Owner | Status | Notes |
|---|---|---|---|---|
| S2-01 | Initialize Next.js 15 project with App Router | Claude | ⬜ | TypeScript, Tailwind, MDX |
| S2-02 | Set up `content/` directory structure | Claude | ⬜ | `content/texts/<slug>/index.mdx`, `verses/01.mdx`, ... |
| S2-03 | Define MDX frontmatter schema | Claude | ⬜ | Validation via Zod |
| S2-04 | Build content validator (CI step) | Claude | ⬜ | Required fields, citation present, IAST valid |
| S2-05 | Source Bhaktamara Devanagari (Digambara 48-verse edition) | Claude | ⬜ | Bharatiya Jnanpith / Mahavir Aradhana Kendra edition; verify against archive.org Digambara sources |
| S2-06 | Source Bhaktamara IAST transliteration (48 verses) | Claude | ⬜ | Verify diacritics; ensure 4 Digambara-only verses included |
| S2-07 | Source Bhaktamara English translation | Claude | ⬜ | Pravin Shah / J. L. Jaini / Bharatiya Jnanpith Digambara edition; verify PD or write fresh |
| S2-08 | Source Bhaktamara Hindi translation | Claude | ⬜ | Hindi Digambara commentaries (Pt. Phool Chand Shastri, etc.); verify rights |
| S2-09 | Write English meaning (bhavarth) for all 48 verses | Claude | ⬜ | Reviewer-validatable explanatory paraphrase |
| S2-10 | Write Hindi meaning for all 48 verses | Claude | ⬜ | |
| S2-11 | Write word-by-word for verses 1-5 | Claude | ⬜ | Validate format; expand in S3 |
| S2-12 | Write text intro: history, author, Manatunga legend, Digambara recitation tradition | Claude | ⬜ | Acharya Manatunga, traditional context, sources |
| S2-13 | Compile citation footer: every translation source listed | Claude | ⬜ | |
| S2-14 | Run content through validator; fix issues | Claude | ⬜ | |
| S2-15 | Submit Bhaktamara content for reviewer pass | Mayank/Reviewer | ⬜ | Use checklist from RISKS.md mitigation |
| S2-16 | Apply reviewer corrections | Claude | ⬜ | Track corrections inline in commit messages |
| S2-17 | Reviewer signs off Bhaktamara content | Reviewer | ⬜ | Written sign-off attached to repo |

---

## Sprint 3 — Reading Experience

| ID | Task | Owner | Status | Notes |
|---|---|---|---|---|
| S3-01 | Implement Pathan mode component | Claude | ⬜ | Sanskrit + one translation, swipe nav |
| S3-02 | Implement Adhyayan mode component | Claude | ⬜ | All layers, word-by-word toggle |
| S3-03 | Implement Shravan mode shell (no audio yet) | Claude | ⬜ | Audio plug-in point ready |
| S3-04 | Build mode toggle UI | Claude | ⬜ | |
| S3-05 | Verse navigation: prev/next, jump | Claude | ⬜ | Keyboard arrows on desktop |
| S3-06 | Table of contents view | Claude | ⬜ | |
| S3-07 | Adjustable text size (settings panel) | Claude | ⬜ | S/M/L/XL, persists in localStorage |
| S3-08 | Light/dark mode toggle | Claude | ⬜ | Respects system preference initially |
| S3-09 | Bookmarks (localStorage) | Claude | ⬜ | Star verse → save → list view |
| S3-10 | Reading progress (last verse read) | Claude | ⬜ | "Continue reading" CTA on home |
| S3-11 | Verse permalinks | Claude | ⬜ | `/bhaktamara-stotra/15` |
| S3-12 | Set up Pagefind search | Claude | ⬜ | Index Sanskrit + transliteration + translations |
| S3-13 | PWA manifest, service worker | Claude | ⬜ | Workbox + custom strategy |
| S3-14 | Offline-first content caching | Claude | ⬜ | Cache full text after first visit |
| S3-15 | Word-by-word for all 48 Bhaktamara verses | Claude | ⬜ | Expand from S2's first 5 |
| S3-16 | Lighthouse audit pass | Claude | ⬜ | Mobile + desktop ≥ 90 |
| S3-17 | Recruit 5 test readers | Mayank | ⬜ | From target audience |
| S3-18 | Test reader sessions: "read verse 5" task | Claude+Mayank | ⬜ | Document blockers |
| S3-19 | Address test reader feedback | Claude | ⬜ | |

---

## Sprint 4 — Polish + Soft Deploy

| ID | Task | Owner | Status | Notes |
|---|---|---|---|---|
| S4-01 | Performance audit, optimize | Claude | ⬜ | Image lazy load, code splitting, font loading strategy |
| S4-02 | Accessibility audit (WCAG 2.1 AA) | Claude | ⬜ | Keyboard nav, screen reader, color contrast |
| S4-03 | Cross-device testing matrix | Claude | ⬜ | iPhone, Android, iPad, Mac, Windows, Linux |
| S4-04 | SEO basics: meta, OpenGraph, JSON-LD | Claude | ⬜ | Verse-level structured data |
| S4-05 | Sharing: WhatsApp, copy-link buttons | Claude | ⬜ | Per verse, per text |
| S4-06 | Print stylesheet (print as book) | Claude | ⬜ | Each text printable cleanly |
| S4-07 | Buy domain (D-006 outcome) | Mayank | ⬜ | ~$10-15 |
| S4-08 | Configure DNS, Cloudflare Pages | Claude+Mayank | ⬜ | |
| S4-09 | Production deploy | Claude | ⬜ | |
| S4-10 | Wire analytics (Plausible / CF Web Analytics) | Claude | ⬜ | Privacy-respecting |
| S4-11 | Reviewer final pass on live site | Reviewer | ⬜ | |
| S4-12 | Mayank final walkthrough, sign-off | Mayank | ⬜ | Phone + laptop |

---

## Sprint 5 — Library Expansion

Phase 1 corpus per C-014 (Digambara-focused). Texts sequenced from short/foundational to long/philosophical for reviewer pacing.

| ID | Task | Owner | Status | Notes |
|---|---|---|---|---|
| S5-01 | Navkar Mantra full content + reviewer pass | Claude+Reviewer | ⬜ | 5 lines + Pad meanings |
| S5-02 | Chattari Mangalam full content + reviewer pass | Claude+Reviewer | ⬜ | Short |
| S5-03 | Mangalashtak full content + reviewer pass | Claude+Reviewer | ⬜ | Digambara daily prayer |
| S5-04 | Tattvartha Sutra Ch.1 (10 sutras) + reviewer pass | Claude+Reviewer | ⬜ | With Sarvarthasiddhi (Acharya Pujyapada) reading |
| S5-05 | Ishtopadesh (51 gathas) + reviewer pass | Claude+Reviewer | ⬜ | Acharya Pujyapada, meditative |
| S5-06 | Dravya Sangraha (58 gathas) + reviewer pass | Claude+Reviewer | ⬜ | Acharya Nemichandra, philosophical primer |
| S5-07 | Ratnakaranda Shravakachara + reviewer pass | Claude+Reviewer | ⬜ | Acharya Samantabhadra, lay ethics |
| S5-08 | Chhah Dhala (Pt. Daulatram) + reviewer pass | Claude+Reviewer | ⬜ | Hindi-language Digambara primer; long |
| S5-09 | Samayasara — selected key gathas + reviewer pass | Claude+Reviewer | ⬜ | Acharya Kundakunda; Phase 1 covers selected gathas only (full 415 → Phase 2) |
| S5-10 | Library home page taxonomy update | Claude | ⬜ | Group by: Mantras / Stotras / Sutras / Daily / Philosophical |
| S5-11 | Cross-text search smoke test | Claude | ⬜ | |

---

## Sprint 6 — Audio (gated by D-007)

| ID | Task | Owner | Status | Notes |
|---|---|---|---|---|
| S6-01 | Lock audio strategy (D-007 outcome) | Mayank | ⬜ | |
| S6-02 | Source / record audio for Navkar | Claude+Mayank | ⬜ | |
| S6-03 | Source / record audio for Bhaktamara | Claude+Mayank | ⬜ | |
| S6-04 | Source / record audio for Logassa | Claude+Mayank | ⬜ | |
| S6-05 | Source / record audio for Kalyana Mandir | Claude+Mayank | ⬜ | |
| S6-06 | Audio post-processing (normalize, trim, format) | Claude | ⬜ | |
| S6-07 | Build verse-sync timing data | Claude | ⬜ | Manual or whisper-aligned |
| S6-08 | Audio player component | Claude | ⬜ | |
| S6-09 | Verse-sync highlight in Shravan mode | Claude | ⬜ | |
| S6-10 | Speed control (0.75x, 1x, 1.25x, 1.5x) | Claude | ⬜ | |
| S6-11 | PWA audio caching strategy | Claude | ⬜ | Quota-aware |
| S6-12 | Reviewer signs off audio quality | Reviewer | ⬜ | Pronunciation, recording |

---

## Sprint 7 — Public Launch

| ID | Task | Owner | Status | Notes |
|---|---|---|---|---|
| S7-01 | Multilingual UI (English + Hindi labels) | Claude | ⬜ | Content was always multilingual; this is chrome |
| S7-02 | Privacy policy, terms, content licensing page | Claude | ⬜ | CC-BY-SA likely |
| S7-03 | Feedback channel (email or simple form) | Claude+Mayank | ⬜ | |
| S7-04 | Public announcement copy | Claude+Mayank | ⬜ | |
| S7-05 | Outreach to Jain organizations | Mayank | ⬜ | |
| S7-06 | First-week monitoring + triage | Claude+Mayank | ⬜ | |
| S7-07 | Phase 2 backlog populated from feedback | Claude+Mayank | ⬜ | |

---

## Backlog (unscheduled — Phase 2+ candidates)

| ID | Task | Notes |
|---|---|---|
| B-01 | Pratikraman in full | Long; varies by tradition |
| B-02 | Aartis collection | Bhaktamara aarti, Mahavir aarti, etc. |
| B-03 | Stavans collection | Devotional songs, mostly Gujarati |
| B-04 | Samayasara key verses | Kundakunda — Digambara |
| B-05 | Ratnakaranda Shravakachara | Samantabhadra — Digambara lay ethics |
| B-06 | Dasvaikalika Sutra | Shvetambara |
| B-07 | Daily reading / liturgical calendar | "Today's verse" feature |
| B-08 | Audio for full library (not just flagship) | |
| B-09 | Gujarati UI + content | |
| B-10 | Marathi UI + content | |
| B-11 | Print-on-demand book version | |
| B-12 | Community contribution flow (PRs) | |
| B-13 | Native iOS / Android apps | Likely deferred indefinitely; PWA serves |
| B-14 | Annotations / personal notes | localStorage, then optional sync |

---

## How to use this file

- New work goes here first, then gets pulled into a sprint when scheduled
- Status updated as work progresses
- Don't edit completed sprints' tasks — they're a record
- Don't add tasks mid-sprint — they go to "Backlog" section, not the current sprint
