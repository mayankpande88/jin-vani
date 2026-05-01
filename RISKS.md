# Risk Register

**Format:** P (probability) × I (impact), each on 1-5 scale. Score = P × I. Anything ≥ 12 is HIGH and requires explicit mitigation owned by someone.

**Last reviewed:** 2026-05-01

---

## HIGH RISKS (score ≥ 12)

### R-001 — Translation accuracy errors offending readers
**P:** 4 / **I:** 5 / **Score:** 20 (CRITICAL)

**What:** Mistranslated verse, mis-attributed meaning, or imprecise rendering of doctrinal point. Religious content is read closely; small errors are noticed and damage credibility instantly.

**Specific failure modes:**
- Translating *moksha* as "salvation"
- Translating *murti* as "idol"
- Conflating *Arihant* and *Siddha*
- Mis-rendering Sanskrit compounds
- Picking a sectarian interpretation as the only one

**Mitigation:**
- GLOSSARY.md flags every term with confidence level
- Cultural reviewer (D-004) signs off on every text before publish
- Every translation cites its source so readers can audit
- Errata process from day one

**Owner:** Claude (drafting), cultural reviewer (validation), Mayank (escalation)

---

### R-002 — No Digambara cultural reviewer secured
**P:** 4 / **I:** 5 / **Score:** 20 (CRITICAL)

**What:** Mayank cannot find or secure a willing, qualified Digambara cultural reviewer (D-004). Without one, content cannot publish under our quality bar.

**Specific scenario:** Project completes through Sprint 4 with no reviewer; Sprint 5 gate cannot open; project stalls indefinitely.

**Mitigation:**
- Hard blocker before Sprint 5 (content expansion); Sprints 1-4 can proceed
- Digambara-specific reviewer profiles to pursue:
  1. Pandit / vidwat at any Digambara *peeth* — Shravanabelagola, Mudbidri, Humbach
  2. Mahavir Aradhana Kendra, Koba — accepts review requests for serious projects
  3. Bharatiya Jnanpith publication board — established translators, often willing to review
  4. Pt. Phool Chand Shastri lineage scholars (Hindi belt)
  5. Any *Bhattaraka* (for Bispanthi-leaning review) or senior *vidwat* (for Terapanthi-leaning review)
  6. Indian Council for Philosophical Research scholars working on Digambara philosophy
  7. Pay an honorarium ($100-500) to a willing scholar
  8. Worst case: defer publish until reviewer found; build privately

**Owner:** Mayank — this is the user's responsibility, not Claude's

---

### R-003 — Digambara sub-tradition mishandling (Bispanthi vs Terapanthi)
**P:** 2 / **I:** 4 / **Score:** 8 (was 15; lowered after Digambara-focus narrowed the surface area)

**What:** Phase 1 corpus is sub-tradition-neutral, so direct mishandling is unlikely. But subtle issues can surface:
- About page voice presupposes one sub-tradition without intending to
- Glossary entries describing Bhattaraka authority lean one way
- Phase 2 aarti/puja content (when added) gets done in only one sub-tradition's form

**Mitigation:**
- Phase 1 corpus chosen to be sub-tradition-neutral (C-014 confirms)
- Mayank to clarify own sub-tradition before Phase 2 content
- About page wording reviewed by reviewer specifically for sub-tradition neutrality
- If reviewer is strongly one sub-tradition, get a brief second-pass review from the other sub-tradition for About page only

**Note on lowered probability:** R-003 was about Digambara/Shvetambara mishandling, which is no longer a risk because we explicitly do not present both. The risk now is *within* Digambara — much narrower surface area.

**Owner:** Mayank (sub-tradition disclosure), reviewer (validation)

---

### R-004 — Translation copyright violation
**P:** 3 / **I:** 4 / **Score:** 12 (HIGH)

**What:** Using a copyrighted translation without permission. Could result in takedown, legal action, or damage to project credibility.

**Specific concerns:**
- Many "free online" Jain translations are copyrighted; Pravin Shah's, Acharya Mahapragya's, JAINA publications, etc.
- Even publications that look free may not be public domain
- Translations published before 1929 are usually safe in US; rules vary in India

**Mitigation:**
- D-005 forces explicit decision on translation rights strategy
- Document provenance of every translation in content frontmatter
- Default to public-domain (e.g., J. L. Jaini 1923, Hermann Jacobi) where available
- Where new translations are needed, write fresh under our own license
- License our content under CC-BY-SA so others can build on it cleanly

**Owner:** Mayank (rights decisions), Claude (provenance tracking)

---

## MEDIUM RISKS (score 6-11)

### R-005 — Devanagari typography rendering issues
**P:** 3 / **I:** 3 / **Score:** 9

**What:** Sanskrit conjunct consonants, vedic accents, or specific letterforms render badly on certain devices/browsers. Old Android, iOS, or emoji-substitution edge cases.

**Mitigation:**
- Sprint 1 testing matrix includes 5+ devices
- Self-host Devanagari fonts (Noto Sans/Serif Devanagari, Tiro)
- Test with copy-paste of canonical Sanskrit text (not hand-typed)
- Provide font-fallback chain

**Owner:** Claude

---

### R-006 — Audio licensing impossible
**P:** 3 / **I:** 3 / **Score:** 9

**What:** Existing chanted recordings on YouTube, archive.org, etc., have unclear licenses. No willing temple/community grants permission. Hiring a chanter exceeds remaining budget.

**Mitigation:**
- D-007 strategy decision sets the path early
- Phase 1 ships without audio — architecture ready, audio is Phase 1.5
- If hire needed, budget for it in Phase 2

**Owner:** Mayank

---

### R-007 — Scope creep mid-sprint
**P:** 4 / **I:** 2 / **Score:** 8

**What:** Mid-sprint, new texts get added, new languages requested, new features proposed. Sprints overrun.

**Mitigation:**
- PROJECT.md working agreement #3 — no scope additions mid-sprint
- New asks → BACKLOG.md → scheduled into a future sprint
- PM (Claude) pushes back on scope changes

**Owner:** Claude as PM

---

### R-008 — Reviewer bandwidth bottleneck
**P:** 3 / **I:** 3 / **Score:** 9

**What:** Reviewer agrees to help but is slow to turn around reviews. Sprints 2, 5, 6 all need review; if reviewer takes a week per text, project drags.

**Mitigation:**
- Set expectations with reviewer upfront: ~10-15 hours total, paced over 3-4 months
- Batch content for review — give reviewer 3 texts at once, not one at a time
- Have a clear review checklist so reviewer's time is leveraged
- Honorarium / formal compensation if going commercial would justify it

**Owner:** Mayank (relationship), Claude (process)

---

### R-009 — PWA quirks on iOS Safari
**P:** 3 / **I:** 2 / **Score:** 6

**What:** iOS Safari has historically inconsistent PWA support — install prompts, audio playback in background, offline behavior. Real users on iPhones may hit broken paths.

**Mitigation:**
- Test on real iOS devices, not just simulator
- Document known-iOS-quirks
- Graceful degradation — site works as a regular web app if PWA features fail

**Owner:** Claude

---

## LOW RISKS (score 1-5)

### R-010 — Domain unavailable
**P:** 3 / **I:** 1 / **Score:** 3
Unlikely all suggested domains are taken. Worst case: pick a less-preferred name. Bearable.

### R-011 — Cloudflare Pages outage
**P:** 1 / **I:** 3 / **Score:** 3
Cloudflare has high uptime. If it fails, reader experience degrades but content (in repo) survives. Migrate to Vercel/Netlify in <1 day.

### R-012 — Search performance
**P:** 2 / **I:** 1 / **Score:** 2
Pagefind handles Devanagari + diacritics adequately. Worst case: clean up search index manually.

---

## Risks I (Claude) am introducing

These are honest self-disclosures.

### S-001 — I am not a Jain scholar
This is the source of R-001 and R-003. Mitigated by GLOSSARY.md confidence flags, D-004 reviewer requirement, and citation discipline. The reviewer is the source of truth on doctrinal questions; I am the source of truth on shipping software.

### S-002 — My research depth varies across texts
I have higher confidence on widely-translated texts (Bhaktamara, Tattvartha, Navkar) than less-translated ones (Iriyavahi, Vandittu). I'll flag where my research is thinner so the reviewer knows where to focus.

### S-003 — I cannot verify community sentiment in real time
I can produce technically-correct content that still feels off to a community. Test readers and reviewer fill this gap; I do not.

### S-004 — Pivots may happen again
The project pivoted three times before Sprint 0 was even drafted. I've documented the anti-pivot policy in PROJECT.md, but if Mayank decides to pivot again, the docs help us re-charter quickly rather than dragging old assumptions forward.
