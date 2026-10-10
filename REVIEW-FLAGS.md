# Review flags

Open questions from the October 2026 content audit. Each one needs a Digambara reviewer's decision (D-004). Clear errors were fixed in commit 13c42393. The items below were left unchanged because the sources disagree or could not be verified.

## Bhaktamara Stotra
- v.5: the text now reads मृगी (doe), following Vijay K. Jain's Digambara edition (2023) and jinvani.in; sanskritdocuments.org has मृगो.
- v.14: the meaning_en and bhavarth_hi read *guṇa* as a pun on "cord". No source checked confirms this.
- v.15: "the reference is to the puranic apsaras story" is interpretation presented as fact.
- v.21: "if I had seen You first" adds a counterfactual and a "first" that are not in the Sanskrit.
- v.10: "every soul has the same potential as a Tirthankara" and liberation as everyone's "default destiny" ignore abhavya souls and tīrthaṅkara-nāma-karma.
- v.20: kevala-jñāna does not set a Tirthankara apart from other kevalīs.
- v.33: digjainwiki counts सुन्दर as a fifth tree; the file treats it as an adjective (four trees).
- v.34 (लोकत्रये / लोकत्रय) and v.48 (रुचिरवर्ण / विविधवर्ण): both readings are attested; the current ones were kept.
- v.48: *avaśā* is glossed "unwillingly"; "irresistibly" may be closer.
- v.35: "one of the most distinctive teachings of Digambara doctrine" may overstate it. If a citation is wanted, Ādipurāṇa 23.70 (quoted on jainkosh) can be checked.
- index.md: says many modern scholars regard verses 32–35 as later additions. Decide whether this note belongs on a Digambara-focused page.

## Tattvartha Sutra (ch. 1)
- 1.29: the "Samayasara, Sarva-viśuddha-jñāna adhikāra" citation is unverified.
- 1.10: the description of Pramāṇa-naya-tattvāloka is unverified, and that is a Shvetambara work.
- 1.31: "mithyā-darśana destroyed" may be wrong, since it can also be in the subsided (upaśama) state.
- 1.13: the cintā/abhinibodha glosses differ from the Sarvārthasiddhi rendering (induction/deduction).
- 1.33: newly drafted from Sarvārthasiddhi 1.33; needs review.
- Prose throughout writes "jnāna"; only the IAST fields were normalised to "jñāna".

## Samayasara
- Eight gathas were replaced with real ones (93, 146, 164, 186, 218, 240, 293, 320; the real gatha 151 moved from file 05 to 06). The choice of each was made to fit the existing theme of its file; a reviewer may prefer others. Their bhavarth_hi and meaning_en are new drafts.
- Readings that differ between editions (186, 164, 320, 218): the nikkyjain edition was followed, with Vijay K. Jain's reading noted in the citation.
- The Jīvājīva chapter has no gatha in the selection.
- v.3: the gloss "णिच्छय (implicit)" does not match any word in the verse.

## Short texts and articles
- The Mangala Path lives at the slug `mangalashtak`, but it is one śloka, not a Maṅgalāṣṭaka. The कुन्दकुन्दाद्यो variant also exists.
- Overclaims still in the articles: "Manatunga asks for nothing" (verses 38–48 are about benefits), "no religious warfare", "two thousand years before Western philosophy", "effort is sufficient" (Digambara views on the present era).
- Unverified: sallekhanā requiring family consent, women's sanctum restrictions, vandanā = "acharyas", lay forms "derived from Mūlācāra".
- Samayasara citations with no gatha number: tattvartha-sutra 1.4 and 1.6, bhaktamara 7.

## Tirthankaras
- Sumati: the lāñchana is given as krauñca ("curlew"); Digambara texts give koka/cakravāka.
- Śītala: now kalpavṛkṣa; Tiloyapaṇṇatti and Jainpedia give svastika.
- Ananta: now porcupine; Jainpedia gives bear.
- Pārśva: colour kept as green, with a blue/dark variant.
- Unverified: Rishabha's first sermon at Kailāśa, the Śītala fever story, Kunthu "smallest creature", "Mallī Charitra", the Sumati dispute story, āryikā at "upādhyāya level".

## Site
- Bookmarks and the continue card saved before 2026-10-10 point at the old Bhaktamara numbering (old 32–44 are now 36–48; old 45–48 are now 32–35). There is no clean migration.
- "Verse of the Day" is always verse 1, and every text page shows the same hardcoded Sources footer.
- `npm run lint` is broken: `next lint` was removed in Next 16, and there is no eslint config.
- `.github/workflows/deploy.yml` has never run since May, because of an account billing lock. The real deploy is `npm run deploy:gh`. Either delete the workflow, or fix billing and switch Pages to Actions.
