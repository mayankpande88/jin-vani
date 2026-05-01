# Jain Scripture Library — Project Charter

**Status:** Scope locked. Pending Sprint 0 decisions before build starts.
**Last updated:** 2026-05-01

---

## What we are building

A digital library for reading and learning **Digambara Jain** scriptural texts — stotras, sutras, and philosophical works — with parallel translations and meanings, optimized for daily reading on mobile and laptop.

The goal is a respectful, accurate, beautifully readable resource that helps Digambara practitioners and learners read, understand, and learn the canonical and devotional texts of the tradition. Reference quality bar: Sefaria.org, Quran.com, vedabase.io. Nothing of this quality currently exists for Jain texts of any tradition.

## Why this project exists

Existing Jain digital resources (jainworld.com, jainelibrary.org, JinVaani, etc.) hold the content but have outdated reading experiences. A Digambara practitioner who wants to learn Bhaktamara Stotra (48-verse Digambara version) verse-by-verse, or study Samayasara, or read Chhah Dhala daily — with Devanagari + transliteration + Hindi meaning + English meaning, on their phone, with audio — has no good option today. This fills that gap for the Digambara tradition specifically.

The owner (Mayank) is himself a Digambara practitioner building this resource for his own community.

## Editorial focus

This is a **Digambara-focused** library. It presents Digambara texts in their Digambara recensions and interpretations. It does not present Shvetambara variants side-by-side. The library is openly honest about its focus on the Home page, About page, and individual text intros — readers from other traditions are welcome to use the resource but are told upfront what they are reading.

(See DECISIONS.md C-015 for the rationale.)

## Audience

Primary: Digambara Jain practitioners (lay followers, *shravak* and *shravika*) who want to read and learn texts daily, especially those who can't read Devanagari fluently or need translations to understand meaning.

Secondary: Students of Jain philosophy, scholars researching Digambara texts, Shvetambara practitioners curious about Digambara forms, non-Jain learners.

We are not building for: children specifically (that's a different product), academic researchers needing critical apparatus (manuscript variants, philological notes), or temple ritual use (aartis, full pujas — Phase 2 candidate).

## Scope (Phase 1)

In scope:
- 10 Digambara texts (locked in DECISIONS.md C-014) — Navkar, Chattari Mangalam, Bhaktamara (48), Mangalashtak, Chhah Dhala, Tattvartha Sutra Ch.1, Dravya Sangraha, Ratnakaranda Shravakachara, Samayasara (selected), Ishtopadesh
- Three reading modes: *Pathan* (read) / *Adhyayan* (study) / *Shravan* (listen)
- Sanskrit/Prakrit (Devanagari) + romanized transliteration (IAST) + Hindi translation + English translation + Hindi meaning (*bhavarth*) + English meaning, per verse
- Mobile-first PWA, installable, works offline
- Bookmarks, reading progress, adjustable text size — all client-side, no accounts
- Verse-level permalinks for sharing and citation
- Search across all texts
- Cultural reviewer pass (Digambara reviewer) on all content before publish

Out of scope (Phase 1):
- Audio recordings (architecture supports it; recording itself is Phase 1.5)
- User accounts, social features, comments, contributions
- Detailed academic apparatus (manuscript variants, critical editions)
- Liturgical/ritual scheduling
- Children's content layer
- Native mobile apps (PWA covers both)

## Non-goals

These are explicitly out:
- Becoming a wiki — single curated voice, not crowd-edited
- Replacing temple-based learning — this complements, doesn't replace
- Commercial monetization in Phase 1 — no ads, no paywalls, no subscriptions
- Promoting one tradition over another — Digambar and Shvetambar variants presented honestly where they differ

## Success criteria

Phase 1 ships when:
1. All 10 texts have verified content reviewed by cultural reviewer
2. Three reading modes work on mobile (iOS Safari, Android Chrome) and desktop (Chrome, Safari, Firefox)
3. Lighthouse: Performance 90+, Accessibility 95+, Best Practices 95+
4. PWA installable, works offline after first load
5. Loads in under 2s on a simulated 3G connection
6. Cultural reviewer signs off on entire corpus
7. Five test readers from target audience can complete a "read Bhaktamara Stotra verse 5 with meaning" task without assistance

## Stakeholders

- **Owner / decision-maker:** Mayank Pande (Digambara practitioner)
- **Builder:** Claude (full responsibility for design, content drafting, code, deployment)
- **Cultural reviewer:** TBD (D-004) — must be a Digambara scholar/elder/pandit. Required for content sign-off before any publish.
- **Test readers:** 5 people from target audience (Digambara community) for usability validation pre-launch

## Working agreements

1. **Religious precision is non-negotiable.** Every Jain term used in product copy is defined in GLOSSARY.md. Where I'm uncertain, I flag for review rather than guess.
2. **No publish without cultural reviewer sign-off.** Even on Mayank's authority alone — this protects the project's credibility.
3. **No scope additions mid-sprint.** New asks go to BACKLOG.md and are scheduled into a future sprint.
4. **Translation provenance is tracked.** Every translation cites its source. Public-domain translations preferred; permission-required ones flagged.
5. **Tradition handling is consistent.** Digambar and Shvetambar variants shown side-by-side where they differ, never silently merged or picked.
6. **Pivots cost a sprint.** A fourth pivot in this project means re-charter, not patch.

## What I (Claude) will not do

- Write content I cannot verify against a primary or accepted secondary source
- Use a translation whose copyright I cannot confirm
- Generate AI imagery of Tirthankaras or sacred figures
- Ship content not reviewed by the cultural reviewer
- Use the word "god," "deity," "idol," "salvation," "sect," or other terms incorrect for Jain context (see GLOSSARY.md)

## Reference quality bar

- **Sefaria.org** — parallel translations, sharing, citations
- **Quran.com** — verse-by-verse audio, multiple translations, beautiful Arabic typography
- **Vedabase.io** — chapter/verse navigation, purport (meaning) layer
- **bhagavadgita.io** — modern UX, Sanskrit + transliteration + translation parallel

We aim to match or exceed the reading experience of these for Jain texts.
