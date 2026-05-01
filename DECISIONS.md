# Decisions Log

**Format:** Open decisions block specific sprints. Closed decisions are immutable references — if a closed decision needs to change, it gets re-opened with rationale, not silently rewritten.

**Last updated:** 2026-05-01

---

## OPEN — blocking specific sprints

---

### D-004 — Cultural reviewer
**Status:** OPEN — **HARD BLOCKER**
**Blocks:** Any publish to a real audience (does not block scaffolding work, content drafting, or design build)
**Owner:** Mayank
**Cannot be closed by Claude** — no recommendation can substitute for a real human reviewer.

Required before any publish:
- A named individual who agrees to review content
- Has standing in the Jain community to make the review meaningful
- Available for ~10-15 hours of review across the project lifecycle

Acceptable profiles (in order of preference):
1. A Jain scholar/academic (e.g., associated with L. D. Institute of Indology, Mahavir Aradhana Kendra, etc.)
2. A respected community elder or *acharya*-recommended layperson
3. A senior practitioner deeply familiar with the texts

**My critical position as PM:** Without this, we don't publish. We can build through Sprint 4 (soft deploy URL is fine, content review can lag), but **Sprint 5 cannot start without this resolved**. I will halt the project at Sprint 4's gate if this is not in place.

**Action for Mayank:** Start outreach now. Names to consider:
- Local *upashraya* / *sthanak* head
- Any *acharya* you have access to via family connection
- L.D. Institute of Indology, Ahmedabad (academic route)
- Jain Vishwa Bharati University, Ladnun
- Mahavir Aradhana Kendra, Koba
- Any *pandit* attached to a major Jain temple

---

### D-008 — Mayank's relationship to the project (deferred)
**Status:** DEFERRED until Sprint 4 (About page write-up)
**Blocks:** Tone calibration of "About" page only
**Owner:** Mayank

**Default assumed for all content production:** This project is built respectfully for the Jain community. Content tone is neutral-respectful, neither overtly insider nor explicitly outsider. About page voice is generic ("This library was built to make Jain texts more accessible...") until Mayank specifies otherwise.

**Action for Mayank:** Tell me before Sprint 4 closes whether you want a personal-voice About page (you as a Jain practitioner / member of the community) or institutional-voice (the project as a resource, no personal narrative).

---

## CLOSED decisions

### C-001 — Project pivot: scripture library, not Tirthankara videos
**Closed:** 2026-05-01
**Decision:** Build a scripture reading library, not 24 Tirthankara videos.
**Rationale:** Lower cost, higher utility, no AI-generation religious-sentiment risk, content-first lets us validate appetite before adding audio/video. Real gap in the market.
**Cost of reversal:** Re-charter the project. Treat further pivots as full restart, not edits.

### C-002 — Tech stack: Next.js + Tailwind + MDX content + PWA
**Closed:** 2026-05-01
**Decision:** Next.js 15 (App Router), Tailwind, MDX for content, Workbox for PWA, Pagefind for search, Cloudflare Pages for hosting.
**Rationale:** Reading app needs interactivity (bookmarks, mode toggle, audio sync) that Astro doesn't fit cleanly. Next.js + MDX gives us content-as-code with full interactivity.
**Cost of reversal:** Roughly one sprint of rework. Bearable until Sprint 3.

### C-003 — Design philosophy: "manuscript, not app"
**Closed:** 2026-05-01
**Decision:** Parchment-cream palette, vermillion + saffron accents, restrained Devanagari + serif typography, generous whitespace, no gradients/shadows/animations beyond the most subtle.
**Rationale:** Religious content earns its weight by not shouting. Reference points: Sefaria, Quran.com, Kalpa Sutra manuscripts.
**Cost of reversal:** Cheap to refine within philosophy; expensive to abandon entirely.

### C-004 — Three reading modes: Pathan / Adhyayan / Shravan
**Closed:** 2026-05-01
**Decision:** Three modes — Read (minimal), Study (all layers), Listen (audio + highlight).
**Rationale:** Different users have different needs from the same text. Same content, different presentation; cheap to implement, big UX win.
**Cost of reversal:** Easy to drop or merge modes if usage data later shows nobody uses one.

### C-005 — No AI-generated sacred imagery
**Closed:** 2026-05-01
**Decision:** No AI generation of Tirthankara figures, faces, or sacred iconography. Public-domain canonical art only (Wikimedia Commons, archive.org).
**Rationale:** AI hallucinates iconographic details (lanchhana, mudra, complexion, dress). Errors offend. Public-domain canonical art is sufficient and authentic.
**Cost of reversal:** None — this is a hard rule, not a preference.

### C-006 — Budget cap: $100 in Phase 1
**Closed:** 2026-05-01
**Decision:** Phase 1 spend ≤ $100. Allocated to: domain (~$15), reserve for Phase 1.5 audio (~$50-60), contingency (~$25-35). Most production cost is content/code, which is free.
**Rationale:** Library-first project doesn't need video-grade tooling. $100 is plenty for Phase 1.
**Cost of reversal:** Increase budget if scope grows; document why in a new decision.

### C-007 — Phase 1 corpus (rebalanced) — **SUPERSEDED by C-014**
**Closed:** 2026-05-01
**Superseded:** 2026-05-01 (same day, by Mayank's Digambara-focus decision)
**Original decision:** 6 universal + 1 Shvetambara + 2 Digambara + 1 modern-universal text list.
**Why superseded:** Mayank confirmed the project is Digambara-focused, not tradition-balanced. See C-014 for replacement corpus.

### C-008 — Tradition presentation: both side-by-side — **SUPERSEDED by C-015**
**Closed:** 2026-05-01
**Superseded:** 2026-05-01 (same day, by Mayank's Digambara-focus decision)
**Original decision:** Show both Digambara and Shvetambara variants side-by-side where they differ.
**Why superseded:** Mayank confirmed Digambara focus. Library now uses Digambara versions throughout. See C-015 for replacement framing.

### C-009 — Languages at launch: English + Hindi
**Closed:** 2026-05-01
**Decision:** Phase 1 launches with English + Hindi for both content (translations, meanings) and UI labels. Sanskrit Devanagari and IAST transliteration are always present regardless of UI language.
**Rationale:** English + Hindi covers the vast majority of the target audience. Gujarati is the next-most-important addition (large Gujarati Jain population) and goes to Phase 2 backlog.
**Cost of reversal:** Adding Gujarati post-launch is straightforward (translation work + UI strings); removing a language is unlikely.

### C-010 — Translation rights: public-domain only in Phase 1
**Closed:** 2026-05-01
**Decision:** Phase 1 uses only public-domain translations OR new translations written for this project (and licensed CC-BY-SA). No copyrighted third-party translations are used without explicit written permission.
**Rationale:** Avoids takedowns, legal risk, and credibility problems. Public-domain translations exist for major texts (J.L. Jaini, Hermann Jacobi, etc.). For texts where PD coverage is thin, we write fresh — slower but safer.
**Provenance discipline:** Every translation in content frontmatter cites its source: PD edition + year, OR "fresh translation by [reviewer-validated]". Provenance shown in citation footer per verse.
**Action item:** Sprint 2 starts with a provenance audit per text — what's PD, what needs fresh writing.
**Cost of reversal:** Switching to a copyrighted translation later requires the rights holder's permission, which is hard to retroactively obtain. PD-first is the prudent default.

### C-011 — Domain name: provisional priority
**Closed:** 2026-05-01
**Decision:** Buy first available from this priority list:
1. **jinvani.org** — *Jin-vani* = "words of the Jinas". Meaningful, traditional. Primary choice.
2. **jainpath.org** — descriptive fallback
3. **jaintexts.org** — purely functional fallback
4. **agama.app** — academic-leaning fallback
5. **pathan.app** — discarded (the word "Pathan" carries other meanings; reviewer concern)

**Action for Mayank:** Sprint 4 task — check availability in order, buy first available. ~$10-15.
**Cost of reversal:** Domain change post-launch is painful (SEO, sharing, brand). Pick carefully.

### C-012 — Audio strategy: defer to Phase 1.5
**Closed:** 2026-05-01
**Decision:** Phase 1 ships without audio. Architecture supports audio (Shravan mode shell built in Sprint 3). Audio production is Phase 1.5 (Sprint 6), strategy decided then based on what licenses/recordings are accessible.
**Rationale:** Audio risks (licensing, quality, reviewer sign-off) shouldn't block Phase 1 content shipping. Better to validate text experience first, add audio once we know what's worth recording.
**Cost of reversal:** None — adding audio later is the planned path.

### C-013 — Non-commercial in Phase 1
**Closed:** 2026-05-01
**Decision:** Phase 1 ships non-commercial — no ads, no paywalls, no premium features, no donation prompts. Code released open-source (license TBD in Sprint 7). Content licensed CC-BY-SA.
**Rationale:** Sacred-content commercialization is a credibility minefield in Phase 1. Decide commercial questions later, with usage data and community input.
**Cost of reversal:** Easy to add monetization later if community accepts; hard to remove the perception once added.

### C-014 — Phase 1 corpus: Digambara-focused (10 texts) — supersedes C-007
**Closed:** 2026-05-01

**Decision:** Phase 1 library is Digambara-focused. The 10 texts are:

1. **Navkar Mantra** (5 lines + Pad meanings) — foundational
2. **Chattari Mangalam** — universal, short
3. **Bhaktamara Stotra (48-verse Digambara version)** by Acharya Manatunga — flagship
4. **Mangalashtak** — Digambara daily prayer
5. **Chhah Dhala** by Pt. Daulatram (Terapanthi pandit, read across both Digambara sub-traditions) — most-read Digambara primer
6. **Tattvartha Sutra Chapter 1** by Acharya Umaswami — read with *Sarvarthasiddhi* (Acharya Pujyapada's commentary) as the Digambara reading
7. **Dravya Sangraha** (58 gathas) by Acharya Nemichandra — Digambara philosophical primer
8. **Ratnakaranda Shravakachara** by Acharya Samantabhadra — Digambara lay ethics
9. **Samayasara — selected gathas** by Acharya Kundakunda — heart of Digambara *adhyatmika* (mystical) philosophy. Selecting key gathas from total 415; full text out of Phase 1 scope.
10. **Ishtopadesh** (51 gathas) by Acharya Pujyapada — meditative Digambara classic

**Rationale:** Mayank confirmed Digambara focus. Texts chosen across daily-recitation (1-5), philosophical primers (6-7), ethics (8), and mystical philosophy (9-10). Mix of devotional, philosophical, and practical — covers the breadth of Digambara reading life.

**Sub-tradition note:** Within Digambara, Bispanthi and Terapanthi do NOT differ on these specific texts. Sub-tradition matters for aartis/pujas (deferred to Phase 2) and for some commentary readings.

**Reviewer override expected:** Reviewer (D-004) may prefer to substitute texts (e.g., add *Niyamasara* or *Pravachansara* of Kundakunda, or *Aapta Mimansa* of Samantabhadra). Reviewer rebalancing within Digambara corpus is welcomed.

**Implementation note:** Bhaktamara is now **48 verses** everywhere — content production, mockups, schema, all UI labels. The verses 33-36 (or numbering as per the Digambara edition we use; verify in Sprint 2) are the additional verses absent from the Shvetambara 44-verse version.

**Cost of reversal:** Adding/removing one text is cheap. Switching back to mixed-tradition or Shvetambara focus would supersede C-014 with full re-charter consequences.

### C-015 — Editorial focus: Digambara — supersedes C-008
**Closed:** 2026-05-01

**Decision:** This library presents Digambara texts in their Digambara forms. We do not show Shvetambara variants side-by-side. We do not silently merge traditions. Where a text exists in both traditions with differences (e.g., Bhaktamara), we use the Digambara form. The library is honest about its focus on the Home page, About page, and individual text intros.

**What "honest about focus" means in product copy:**
- Home page tagline acknowledges Digambara focus
- About page states the library follows the Digambara tradition
- Each text's intro page notes if the version differs from Shvetambara (with brief note like "The Shvetambara recension has 44 verses; this is the 48-verse Digambara version")
- We do not disparage Shvetambara texts or interpretations; we simply do not include them

**Rationale:** A focused library serves its tradition better than a half-hearted "both sides" treatment. Mayank is Digambara, the audience is primarily Digambara, and Digambara texts deserve dedicated treatment in a way "balanced" libraries fail to provide.

**Future expansion:** A Shvetambara-focused sister library (or Phase 3 expansion) is not ruled out, but is out of scope for this project.

**Cost of reversal:** Significant if reversed (re-open glossary, content production approach, mockups). Manageable as schema and UI assume single-tradition focus.

### C-016 — Mayank is a Digambara practitioner — supersedes D-008
**Closed:** 2026-05-01

**Decision:** Mayank Pande, the project owner, is a Digambara Jain practitioner. Project voice and About page are written from this position.

**Implications:**
- About page voice: first-person ("I built this resource for our community" / "I wanted Bhaktamara, Tattvartha, Samayasara, and Chhah Dhala readable on my phone")
- The project is positioned as a community-member's contribution to the Digambara tradition, not as an outsider's resource
- Reviewer (D-004) profile confirmed: must be Digambara, ideally a known scholar/elder/pandit in the Digambara community
- Sub-tradition (Bispanthi vs Terapanthi) — Mayank to confirm before any aarti/puja content (Phase 2). Phase 1 corpus is sub-tradition-neutral.

**Cost of reversal:** None — this is a fact, not a choice.

---

## Decisions still pending after Sprint 0 closes

- **D-004** (cultural reviewer) — must close before Sprint 5. Profile narrowed: must be Digambara-affiliated.
- **Mayank's sub-tradition** (Bispanthi / Terapanthi) — must close before Phase 2 aarti/puja content. Phase 1 unaffected.
