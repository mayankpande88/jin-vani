// Glossary — single source of truth for Jain terminology used across the library.
// Each entry can be linked to from any page; future enhancement will auto-link
// inline term mentions back to /glossary#<id>.

export type GlossaryEntry = {
  id: string;            // URL-safe slug
  term: string;          // English/transliterated form
  termSk?: string;       // Devanagari form (Sanskrit/Prakrit)
  category: 'philosophy' | 'practice' | 'cosmology' | 'people' | 'tradition' | 'ethics';
  short: string;         // One-sentence definition
  long?: string;         // Fuller explanation (optional)
  notUse?: string;       // What NOT to translate it as
  seeAlso?: string[];    // Related glossary IDs
  citedIn?: { source: string; ref?: string }[];  // Where this term is treated in primary texts
};

export const GLOSSARY: GlossaryEntry[] = [
  // === People / Beings ===
  {
    id: 'tirthankara',
    term: 'Tirthankara',
    termSk: 'तीर्थंकर',
    category: 'people',
    short: 'A "ford-maker" — a soul who, in their final birth, attained complete liberation through their own effort and established the four-fold sangha. There are 24 Tirthankaras per time-cycle.',
    long: 'Not a god, not a deity, not a creator. A Tirthankara is a jiva who, having destroyed the four ghati karmas, attained kevala-jnana (omniscience) and then the Siddha state. They cannot intervene; they are exemplars.',
    notUse: 'god, deity, avatar, prophet',
    seeAlso: ['jina', 'arihant', 'siddha', 'kevali', 'samavasarana'],
    citedIn: [{ source: 'Tattvartha Sutra 10.1, 10.5–10.7' }, { source: 'Foundation 01' }],
  },
  {
    id: 'jina',
    term: 'Jina',
    termSk: 'जिन',
    category: 'people',
    short: '"Conqueror" — one who has conquered the inner enemies (passions, ignorance). All Tirthankaras are Jinas; not all Jinas are Tirthankaras.',
    seeAlso: ['tirthankara', 'arihant'],
  },
  {
    id: 'arihant',
    term: 'Arihant',
    termSk: 'अरिहन्त',
    category: 'people',
    short: 'One who has destroyed the four ghati karmas (knowledge-obscuring, perception-obscuring, deluding, obstructing) and attained omniscience while still embodied. The first being venerated in the Navkar Mantra.',
    seeAlso: ['siddha', 'kevali', 'tirthankara', 'ghati-karma'],
    citedIn: [{ source: 'Navkar Mantra' }, { source: 'Tattvartha Sutra 10.1' }],
  },
  {
    id: 'siddha',
    term: 'Siddha',
    termSk: 'सिद्ध',
    category: 'people',
    short: 'A fully liberated soul. After the Arihant\'s physical death, all karma is shed; the soul ascends to Siddhaloka at the apex of the universe and remains there forever in pure consciousness.',
    seeAlso: ['arihant', 'moksha', 'siddhaloka'],
    citedIn: [{ source: 'Tattvartha Sutra 10.5–10.7' }],
  },
  {
    id: 'kevali',
    term: 'Kevali',
    termSk: 'केवली',
    category: 'people',
    short: 'One who has attained kevala-jnana (omniscient knowledge). All Arihants are Kevalis; Tirthankaras are a special subset who establish the sangha.',
    seeAlso: ['kevala-jnana', 'arihant', 'tirthankara'],
  },
  {
    id: 'acharya',
    term: 'Acharya',
    termSk: 'आचार्य',
    category: 'people',
    short: 'The head of a monastic order; a senior monk who guides others on the path. Authors of foundational texts (Kundakunda, Umaswami, etc.) hold this title.',
    seeAlso: ['muni', 'upadhyaya'],
  },
  {
    id: 'upadhyaya',
    term: 'Upadhyaya',
    termSk: 'उपाध्याय',
    category: 'people',
    short: 'A teacher-monk; one who instructs other monks in the scriptures. The fourth being venerated in the Navkar Mantra.',
    seeAlso: ['acharya', 'muni'],
  },
  {
    id: 'muni',
    term: 'Muni / Sadhu',
    termSk: 'मुनि / साधु',
    category: 'people',
    short: 'A Jain monk who has taken the five great vows (mahavrata). The fifth category venerated in the Navkar Mantra.',
    seeAlso: ['mahavrata', 'shravak'],
  },
  {
    id: 'aryika',
    term: 'Aryika',
    termSk: 'आर्यिका',
    category: 'people',
    short: 'A female ascetic in the Digambara tradition, wearing a single white sari (unlike Digambara male monks who are unclothed). Held to teaching role at Upadhyaya level.',
  },
  {
    id: 'shravak',
    term: 'Shravak / Shravika',
    termSk: 'श्रावक / श्राविका',
    category: 'people',
    short: 'Lay follower (male / female). Takes the twelve vows (anuvrata + gunavrata + shikshavrata) appropriate to a householder.',
    seeAlso: ['anuvrata', 'mahavrata'],
  },

  // === Philosophy / Categories ===
  {
    id: 'jiva',
    term: 'Jīva',
    termSk: 'जीव',
    category: 'philosophy',
    short: 'Soul. The conscious principle. Eternal, indestructible, infinite in number. The first of the seven tattvas.',
    long: 'Every living being has a jīva — humans, animals, microscopic life, even tiny souls in plants, water, fire, earth. The jīva\'s natural state is infinite knowledge, perception, bliss, and energy; it is currently obscured by karma.',
    seeAlso: ['ajiva', 'tattva', 'paramatma', 'jnayaka'],
    citedIn: [{ source: 'Tattvartha Sutra 1.4' }, { source: 'Samayasara' }],
  },
  {
    id: 'ajiva',
    term: 'Ajīva',
    termSk: 'अजीव',
    category: 'philosophy',
    short: 'Non-soul. Everything that is not conscious: matter (pudgala), space, time, motion-medium (dharma), rest-medium (adharma).',
    seeAlso: ['jiva', 'pudgala', 'dravya'],
  },
  {
    id: 'tattva',
    term: 'Tattva',
    termSk: 'तत्त्व',
    category: 'philosophy',
    short: 'Category of reality. Jain philosophy holds seven tattvas: jīva, ajīva, āsrava, bandha, saṁvara, nirjarā, mokṣa.',
    seeAlso: ['jiva', 'ajiva', 'asrava', 'bandha', 'samvara', 'nirjara', 'moksha'],
    citedIn: [{ source: 'Tattvartha Sutra 1.4' }],
  },
  {
    id: 'dravya',
    term: 'Dravya',
    termSk: 'द्रव्य',
    category: 'philosophy',
    short: 'Substance. Jain ontology recognizes six eternal dravyas: jīva (soul), pudgala (matter), dharma (motion-medium), adharma (rest-medium), ākāśa (space), kāla (time).',
    long: 'All six are uncreated, indestructible, and eternal. None was made by anything else. There is no creator — see Foundation 03.',
    seeAlso: ['jiva', 'pudgala', 'tattva'],
    citedIn: [{ source: 'Tattvartha Sutra 5.1–5.4' }, { source: 'Foundation 03' }],
  },
  {
    id: 'pudgala',
    term: 'Pudgala',
    termSk: 'पुद्गल',
    category: 'philosophy',
    short: 'Matter. The only one of the six dravyas with form (rupa). Includes karmic matter (subtle particles that bind to the soul).',
    seeAlso: ['paramanu', 'karma', 'dravya'],
  },
  {
    id: 'paramanu',
    term: 'Paramāṇu',
    termSk: 'परमाणु',
    category: 'philosophy',
    short: 'The smallest indivisible particle of matter (pudgala) in Jain physics. Different from but conceptually parallel to the modern atom.',
    seeAlso: ['pudgala'],
  },
  {
    id: 'karma',
    term: 'Karma',
    termSk: 'कर्म',
    category: 'philosophy',
    short: 'In Jain technical usage, karma is a substance — extremely subtle particles of matter (pudgala) that bind to the soul because of how the soul acts. NOT a moral force or a vague law.',
    long: 'Eight major types: jnāna-āvaraṇīya (knowledge-obscuring), darśana-āvaraṇīya (perception-obscuring), vedanīya (feeling), mohanīya (deluding), āyu (lifespan), nāma (body), gotra (status), antarāya (obstruction). Each obscures a specific capacity of the soul.',
    notUse: '"What goes around comes around" — that is the casual usage; Jain karma is much more specific.',
    seeAlso: ['ghati-karma', 'asrava', 'bandha', 'samvara', 'nirjara'],
    citedIn: [{ source: 'Tattvartha Sutra 6.1–6.5, 8.4–8.14' }, { source: 'Foundation 02' }],
  },
  {
    id: 'ghati-karma',
    term: 'Ghāti-karma',
    termSk: 'घाति-कर्म',
    category: 'philosophy',
    short: 'The four "destructive" karmas that obscure the soul\'s essential capacities: jnāna-āvaraṇīya, darśana-āvaraṇīya, mohanīya, antarāya. Their destruction produces kevala-jnana (omniscience).',
    seeAlso: ['karma', 'kevala-jnana', 'arihant'],
    citedIn: [{ source: 'Tattvartha Sutra 10.1' }],
  },
  {
    id: 'asrava',
    term: 'Āsrava',
    termSk: 'आस्रव',
    category: 'philosophy',
    short: 'Influx — the inflow of karmic matter into the soul because of the soul\'s own activity (mind, speech, body). Third of the seven tattvas.',
    seeAlso: ['karma', 'bandha', 'samvara'],
    citedIn: [{ source: 'Tattvartha Sutra 6.1' }],
  },
  {
    id: 'bandha',
    term: 'Bandha',
    termSk: 'बन्ध',
    category: 'philosophy',
    short: 'Bondage — the actual binding of karma to the soul. Fourth of the seven tattvas.',
    seeAlso: ['karma', 'asrava', 'samvara', 'nirjara'],
  },
  {
    id: 'samvara',
    term: 'Saṁvara',
    termSk: 'संवर',
    category: 'philosophy',
    short: 'Stoppage — halting the inflow of new karma. The first half of the path to liberation. Fifth of the seven tattvas.',
    seeAlso: ['nirjara', 'asrava', 'moksha'],
    citedIn: [{ source: 'Tattvartha Sutra 9.1' }],
  },
  {
    id: 'nirjara',
    term: 'Nirjarā',
    termSk: 'निर्जरा',
    category: 'philosophy',
    short: 'Shedding — the gradual removal of accumulated karma through austerity (tapas) and purification. The second half of the path to liberation. Sixth tattva.',
    seeAlso: ['samvara', 'moksha', 'tapas'],
    citedIn: [{ source: 'Tattvartha Sutra 9.3' }],
  },
  {
    id: 'moksha',
    term: 'Mokṣa',
    termSk: 'मोक्ष',
    category: 'philosophy',
    short: 'Liberation. Complete freedom from all karma. The soul, freed, attains its pure nature and goes to Siddhaloka. Seventh and final tattva.',
    notUse: '"Salvation" — Christian theological baggage that doesn\'t apply.',
    seeAlso: ['siddha', 'siddhaloka', 'samvara', 'nirjara'],
    citedIn: [{ source: 'Tattvartha Sutra 10.1, 10.7' }],
  },
  {
    id: 'kevala-jnana',
    term: 'Kevala-jnāna',
    termSk: 'केवलज्ञान',
    category: 'philosophy',
    short: 'Omniscient knowledge. Direct, complete, simultaneous knowledge of all substances in all their modes across all three times. The fifth and highest type of knowledge.',
    seeAlso: ['kevali', 'jnana', 'arihant'],
    citedIn: [{ source: 'Tattvartha Sutra 1.9, 10.1' }],
  },
  {
    id: 'jnana',
    term: 'Jnāna',
    termSk: 'ज्ञान',
    category: 'philosophy',
    short: 'Knowledge. Five types in Jain philosophy: mati (sensory), śruta (scriptural), avadhi (clairvoyant), manaḥparyaya (mind-reading), kevala (omniscient).',
    seeAlso: ['kevala-jnana', 'pramana'],
    citedIn: [{ source: 'Tattvartha Sutra 1.9' }],
  },
  {
    id: 'pramana',
    term: 'Pramāṇa',
    termSk: 'प्रमाण',
    category: 'philosophy',
    short: 'Means of valid knowledge. Two categories in Jain epistemology: parokṣa (indirect — sensory and scriptural) and pratyakṣa (direct — clairvoyant, mind-reading, omniscient).',
    seeAlso: ['naya', 'jnana'],
    citedIn: [{ source: 'Tattvartha Sutra 1.6, 1.10' }],
  },
  {
    id: 'naya',
    term: 'Naya',
    termSk: 'नय',
    category: 'philosophy',
    short: 'Perspectival standpoint — partial but valid view of a thing. Distinct from pramāṇa, which is full means of knowledge. Foundation of anekāntavāda.',
    seeAlso: ['anekantavada', 'syadvada', 'pramana'],
    citedIn: [{ source: 'Tattvartha Sutra 1.6' }, { source: 'Samayasara — niścaya/vyavahāra' }],
  },
  {
    id: 'anekantavada',
    term: 'Anekāntavāda',
    termSk: 'अनेकान्तवाद',
    category: 'philosophy',
    short: 'The doctrine of multiplicity of viewpoints. Reality has infinite aspects; any single perspective gives only a partial view. Built-in epistemic humility.',
    long: 'One of Jainism\'s most distinctive contributions to world philosophy. Counsels against dogmatism by recognizing that any statement is true only "in some respect." Closely related to syādvāda.',
    seeAlso: ['syadvada', 'naya'],
  },
  {
    id: 'syadvada',
    term: 'Syādvāda',
    termSk: 'स्याद्वाद',
    category: 'philosophy',
    short: 'The doctrine of conditional predication — every statement about reality is qualified by "in some respect." Often paired with anekāntavāda.',
    seeAlso: ['anekantavada', 'naya'],
  },
  {
    id: 'jnayaka',
    term: 'Jnāyaka',
    termSk: 'ज्ञायक',
    category: 'philosophy',
    short: 'The "Knower" — the soul as pure knowing-principle. Kundakunda\'s preferred term in the Samayasara for the soul seen from the absolute (niścaya) standpoint.',
    seeAlso: ['jiva', 'paramatma'],
    citedIn: [{ source: 'Samayasara, gatha 7' }],
  },
  {
    id: 'paramatma',
    term: 'Paramātmā',
    termSk: 'परमात्मा',
    category: 'philosophy',
    short: 'The supreme soul — in Jain usage, the soul as it is in its perfect (Siddha) state. Not a creator god; the realized form of any soul.',
    seeAlso: ['siddha', 'jiva'],
  },

  // === Cosmology ===
  {
    id: 'samsara',
    term: 'Saṁsāra',
    termSk: 'संसार',
    category: 'cosmology',
    short: 'The cycle of birth, death, and rebirth in which souls (jīvas) wander, driven by their karma, until liberation. Often metaphorized as the "ocean of becoming."',
    seeAlso: ['moksha', 'karma', 'jiva'],
  },
  {
    id: 'siddhaloka',
    term: 'Siddhaloka',
    termSk: 'सिद्धलोक',
    category: 'cosmology',
    short: 'The realm at the apex of the universe where liberated souls (Siddhas) reside in pure consciousness, beyond rebirth.',
    seeAlso: ['siddha', 'moksha'],
    citedIn: [{ source: 'Tattvartha Sutra 10.5–10.7' }],
  },
  {
    id: 'samavasarana',
    term: 'Samavasaraṇa',
    termSk: 'समवसरण',
    category: 'cosmology',
    short: 'The divine assembly hall manifested for a Tirthankara\'s first sermon after attaining kevala-jnana. The eight prātihāryas surround the Tirthankara during the assembly.',
    seeAlso: ['tirthankara', 'pratiharya', 'divya-dhvani'],
  },
  {
    id: 'pratiharya',
    term: 'Aṣṭa-mahā-prātihārya',
    termSk: 'अष्टमहाप्रातिहार्य',
    category: 'cosmology',
    short: 'The eight great signs that mark a Tirthankara during the samavasarana: aśoka tree, simhāsana (lion-throne), cāmara (fly-whisks), three umbrellas, golden lotuses underfoot, dundubhi (divine drum), puṣpa-vṛṣṭi (rain of flowers), bhāmaṇḍala (halo).',
    seeAlso: ['samavasarana', 'tirthankara'],
    citedIn: [{ source: 'Bhaktamara Stotra v.28–32, 45–47' }],
  },
  {
    id: 'lanchhana',
    term: 'Lāñchana',
    termSk: 'लाञ्छन',
    category: 'cosmology',
    short: 'The identifying symbol associated with each Tirthankara, depicted at the base of their murti. Bull for Rishabhanath, lion for Mahavir, snake for Parshvanath, etc.',
    seeAlso: ['tirthankara', 'murti'],
  },
  {
    id: 'divya-dhvani',
    term: 'Divya-dhvani',
    termSk: 'दिव्यध्वनि',
    category: 'cosmology',
    short: 'The "divine voice" of a Tirthankara during the samavasarana — speech that arises spontaneously and is heard by every being in their own language. A unique attribute in Digambara doctrine.',
    seeAlso: ['samavasarana', 'tirthankara'],
    citedIn: [{ source: 'Bhaktamara Stotra v.48' }],
  },

  // === Ethics / Vows ===
  {
    id: 'ahimsa',
    term: 'Ahiṁsā',
    termSk: 'अहिंसा',
    category: 'ethics',
    short: 'Non-violence in thought, speech, and action. The first and foundational vow. Extends to all life forms — including microscopic life. Far more than vegetarianism.',
    seeAlso: ['mahavrata', 'aparigraha'],
  },
  {
    id: 'aparigraha',
    term: 'Aparigraha',
    termSk: 'अपरिग्रह',
    category: 'ethics',
    short: 'Non-attachment, non-possessiveness. One of the five great vows. Critique of how possessions distort the mind, not just minimalism.',
    seeAlso: ['mahavrata'],
  },
  {
    id: 'mahavrata',
    term: 'Mahāvrata',
    termSk: 'महाव्रत',
    category: 'ethics',
    short: 'The five great vows taken by monks/nuns: ahiṁsā (non-violence), satya (truth), asteya (non-stealing), brahmacarya (celibacy), aparigraha (non-attachment).',
    seeAlso: ['ahimsa', 'aparigraha', 'anuvrata', 'muni'],
  },
  {
    id: 'anuvrata',
    term: 'Aṇuvrata',
    termSk: 'अणुव्रत',
    category: 'ethics',
    short: 'The "lesser vows" taken by lay followers — partial versions of the five mahāvratas suited to householder life.',
    seeAlso: ['mahavrata', 'shravak'],
  },
  {
    id: 'tapas',
    term: 'Tapas / Tapasyā',
    termSk: 'तप / तपस्या',
    category: 'practice',
    short: 'Austerity, ascetic practice. Central to nirjarā — the shedding of accumulated karma. External (fasting, isolation) and internal (study, meditation) forms.',
    seeAlso: ['nirjara', 'pratikraman'],
  },
  {
    id: 'pratikraman',
    term: 'Pratikramaṇa',
    termSk: 'प्रतिक्रमण',
    category: 'practice',
    short: 'The introspective ritual of "turning back" — review of conduct, confession of transgressions, renewal of vows. One of the six daily duties (ṣaṭ-āvaśyaka). Performed daily, fortnightly, and annually.',
    long: 'Combines self-examination, formal confession in canonical verses, and recommitment to ethical practice. Central to Jain spiritual life — the practical mechanism for stopping new karmic inflow (saṁvara) and shedding old karma (nirjarā).',
    seeAlso: ['samvara', 'nirjara', 'avasyaka'],
    citedIn: [{ source: 'Tattvartha Sutra 9.20 (six āvaśyakas)' }],
  },
  {
    id: 'avasyaka',
    term: 'Ṣaṭ-āvaśyaka',
    termSk: 'षडावश्यक',
    category: 'practice',
    short: 'The six essential daily duties of a serious Jain practitioner: sāmāyika (equanimity), caturviṁśati-stava (praise of the 24 Tirthankaras), vandanā (veneration of acharyas), pratikramaṇa (introspection), kāyotsarga (standing meditation), pratyākhyāna (renunciation/vows).',
    seeAlso: ['pratikraman', 'kayotsarga', 'samayika'],
  },
  {
    id: 'samayika',
    term: 'Sāmāyika',
    termSk: 'सामायिक',
    category: 'practice',
    short: 'The practice of equanimity — typically a 48-minute meditative period in which the practitioner sits in calm awareness, free of attachments and aversions. First of the six āvaśyakas.',
    seeAlso: ['avasyaka', 'pratikraman'],
  },
  {
    id: 'kayotsarga',
    term: 'Kāyotsarga',
    termSk: 'कायोत्सर्ग',
    category: 'practice',
    short: 'Literally "abandoning the body" — standing meditation practice in which the practitioner stands motionless, focused inward. Also one of the two iconographic postures of the Tirthankaras (the other being padmāsana).',
    seeAlso: ['avasyaka', 'padmasana'],
  },
  {
    id: 'padmasana',
    term: 'Padmāsana',
    termSk: 'पद्मासन',
    category: 'practice',
    short: 'The lotus-seated meditative posture. One of the two iconographic postures of the Tirthankaras.',
    seeAlso: ['kayotsarga'],
  },
  {
    id: 'puja',
    term: 'Pūjā',
    termSk: 'पूजा',
    category: 'practice',
    short: 'Veneration ritual. In Jain context, pūjā honors the Tirthankara as an example to follow — not as a deity granting requests. See Foundation 01 for the distinction.',
    seeAlso: ['murti', 'bhakti', 'tirthankara'],
  },
  {
    id: 'murti',
    term: 'Mūrti',
    termSk: 'मूर्ति',
    category: 'practice',
    short: 'A sacred sculptural representation of a Tirthankara. Used reverentially as object of veneration.',
    notUse: '"Idol" — pejorative English connotation that doesn\'t capture the role of murti in Jain practice.',
    seeAlso: ['puja', 'tirthankara'],
  },
  {
    id: 'bhakti',
    term: 'Bhakti',
    termSk: 'भक्ति',
    category: 'practice',
    short: 'Devotion. In Jain context: profound respect for one who has shown what is possible (the Tirthankara), and the willingness to walk in their footsteps. Closer to apprenticeship than worship.',
    seeAlso: ['tirthankara', 'puja'],
  },

  // === Texts / Scriptures ===
  {
    id: 'agama',
    term: 'Āgama',
    termSk: 'आगम',
    category: 'tradition',
    short: 'The canonical scriptures of Jainism — what the Tirthankaras taught, transmitted through the gaṇadharas (chief disciples). Digambara and Shvetambara differ on which texts constitute the surviving canon.',
    seeAlso: ['ganadhara'],
  },
  {
    id: 'ganadhara',
    term: 'Gaṇadhara',
    termSk: 'गणधर',
    category: 'people',
    short: 'A chief disciple of a Tirthankara, who organized the teaching into the canonical scriptures. Mahavir had 11 gaṇadharas, the foremost being Gautama (Indrabhuti).',
    seeAlso: ['agama', 'tirthankara'],
  },
  {
    id: 'sangha',
    term: 'Saṅgha',
    termSk: 'संघ',
    category: 'tradition',
    short: 'The four-fold Jain community: monks (sādhu), nuns (sādhvī / aryikā), laymen (śrāvaka), laywomen (śrāvikā). Established by every Tirthankara at the start of their teaching.',
    seeAlso: ['muni', 'aryika', 'shravak'],
  },
  {
    id: 'stotra',
    term: 'Stotra',
    termSk: 'स्तोत्र',
    category: 'tradition',
    short: 'A hymn of praise, typically composed in verse. Bhaktamara Stotra and Kalyana Mandir Stotra are canonical examples.',
    seeAlso: ['bhakti'],
  },
  {
    id: 'sutra',
    term: 'Sūtra',
    termSk: 'सूत्र',
    category: 'tradition',
    short: 'An aphoristic text — concise, dense Sanskrit (or Prakrit) statement intended to be memorized and unpacked through commentary. Tattvartha Sutra is the foundational example.',
  },

  // === Traditions ===
  {
    id: 'digambara',
    term: 'Digambara',
    termSk: 'दिगम्बर',
    category: 'tradition',
    short: '"Sky-clad" — the tradition where male monks practice complete nudity as the visible expression of total aparigraha. Holds that final mokṣa requires the digambara state. Strong in Karnataka, Maharashtra, Madhya Pradesh, Rajasthan, Bundelkhand.',
    long: 'This library follows the Digambara tradition. The Sanskrit/Prakrit texts, translations, and interpretive framings come from this lineage.',
    seeAlso: ['shvetambara', 'bhattaraka'],
    notUse: '"Sect" — use "tradition" or "sampradāya"',
  },
  {
    id: 'shvetambara',
    term: 'Śvetāmbara',
    termSk: 'श्वेताम्बर',
    category: 'tradition',
    short: '"White-clad" — the tradition where monks and nuns wear white robes. Holds that women can attain mokṣa and that Mahavir married. Strong in Gujarat and Rajasthan.',
    seeAlso: ['digambara'],
  },
  {
    id: 'bhattaraka',
    term: 'Bhaṭṭāraka',
    termSk: 'भट्टारक',
    category: 'tradition',
    short: 'A Digambara religious-administrative figure heading a peeth (seat) and overseeing temple administration. Bispanthi accepts Bhattaraka authority; Terapanthi (Digambara) does not.',
    seeAlso: ['digambara', 'bispanthi-terapanthi'],
  },
  {
    id: 'bispanthi-terapanthi',
    term: 'Bispanthi / Terapanthi (Digambara)',
    termSk: 'बीसपंथी / तेरापंथी',
    category: 'tradition',
    short: 'Two sub-traditions within Digambara. Bispanthi uses wet substances in pūjā and accepts Bhaṭṭāraka authority; Terapanthi (Digambara) uses only dry aṣṭadravya, rejects subordinate-deity worship and Bhaṭṭāraka authority over monks. Note: unrelated to the Shvetambara Terapanthi.',
    seeAlso: ['digambara', 'bhattaraka'],
  },
];

export function getEntry(id: string): GlossaryEntry | undefined {
  return GLOSSARY.find((e) => e.id === id);
}

// =============================================================================
// Auto-link: turns first occurrence of curated glossary terms into links
// to the glossary anchor. Used in prose contexts only (foundations,
// today reflections, deeper-meaning paragraphs).
// =============================================================================

const AUTOLINK_PATTERNS: Array<{ id: string; patterns: string[] }> = [
  { id: 'tirthankara', patterns: ['Tirthankaras', 'Tirthankara'] },
  { id: 'jiva', patterns: ['jīvas', 'jivas', 'jīva', 'jiva'] },
  { id: 'ajiva', patterns: ['ajīva', 'ajiva'] },
  { id: 'pudgala', patterns: ['pudgala'] },
  { id: 'paramanu', patterns: ['paramāṇu', 'paramanu'] },
  { id: 'karma', patterns: ['karma'] },
  { id: 'asrava', patterns: ['āsrava'] },
  { id: 'bandha', patterns: ['bandha'] },
  { id: 'samvara', patterns: ['saṁvara', 'samvara'] },
  { id: 'nirjara', patterns: ['nirjarā', 'nirjara'] },
  { id: 'moksha', patterns: ['mokṣa', 'moksha'] },
  { id: 'kevala-jnana', patterns: ['kevala-jnāna', 'kevala-jnana'] },
  { id: 'kevali', patterns: ['Kevalīs', 'kevalis', 'Kevalī', 'kevali'] },
  { id: 'samsara', patterns: ['samsāra', 'samsara', 'saṁsāra'] },
  { id: 'siddha', patterns: ['Siddhas', 'Siddha'] },
  { id: 'siddhaloka', patterns: ['Siddhaloka', 'Siddha-loka'] },
  { id: 'arihant', patterns: ['Arihants', 'Arihant'] },
  { id: 'jina', patterns: ['Jinas', 'Jina'] },
  { id: 'acharya', patterns: ['Acharyas', 'Acharya'] },
  { id: 'muni', patterns: ['munis', 'Muni', 'muni'] },
  { id: 'shravak', patterns: ['shravak', 'śrāvaka'] },
  { id: 'ahimsa', patterns: ['ahiṁsā', 'ahimsa'] },
  { id: 'aparigraha', patterns: ['aparigraha'] },
  { id: 'mahavrata', patterns: ['mahāvratas', 'mahāvrata'] },
  { id: 'tapas', patterns: ['tapasyā', 'tapasya', 'tapas'] },
  { id: 'pratikraman', patterns: ['pratikramaṇa', 'pratikraman'] },
  { id: 'avasyaka', patterns: ['āvaśyaka', 'ṣaṭ-āvaśyaka'] },
  { id: 'samayika', patterns: ['sāmāyika', 'samayika'] },
  { id: 'kayotsarga', patterns: ['kāyotsarga', 'kayotsarga'] },
  { id: 'puja', patterns: ['pūjā'] },
  { id: 'murti', patterns: ['mūrtis', 'mūrti', 'murti'] },
  { id: 'bhakti', patterns: ['bhakti'] },
  { id: 'naya', patterns: ['nayas', 'naya'] },
  { id: 'pramana', patterns: ['pramāṇa'] },
  { id: 'anekantavada', patterns: ['anekāntavāda', 'anekantavada'] },
  { id: 'syadvada', patterns: ['syādvāda', 'syadvada'] },
  { id: 'samavasarana', patterns: ['samavasaraṇa', 'samavasarana'] },
  { id: 'lanchhana', patterns: ['lāñchana', 'lanchhana'] },
  { id: 'sangha', patterns: ['saṅgha', 'sangha'] },
  { id: 'digambara', patterns: ['Digambara'] },
  { id: 'shvetambara', patterns: ['Shvetambara', 'Śvetāmbara'] },
];

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

type AutolinkMatch = { id: string; pattern: string };
const ALL_PATTERNS: AutolinkMatch[] = AUTOLINK_PATTERNS.flatMap((g) =>
  g.patterns.map((p) => ({ id: g.id, pattern: p }))
).sort((a, b) => b.pattern.length - a.pattern.length);

const COMBINED_REGEX = new RegExp(
  '(?<![\\p{L}\\p{M}])(' +
    ALL_PATTERNS.map((p) => escapeRegex(p.pattern)).join('|') +
    ')(?![\\p{L}\\p{M}])',
  'gu'
);

const PATTERN_TO_ID = new Map<string, string>();
ALL_PATTERNS.forEach((p) => PATTERN_TO_ID.set(p.pattern.toLowerCase(), p.id));

/**
 * Walks a string, replacing the FIRST occurrence of each curated glossary
 * term with a link to the glossary entry. Subsequent occurrences are
 * untouched. The `linked` set is mutated; pass the same set across multiple
 * calls on the same page to enforce per-page first-occurrence-only.
 */
export function autolinkText(
  text: string,
  basePath: string,
  linked: Set<string>
): Array<string | { type: 'link'; href: string; text: string; key: string }> {
  const out: Array<string | { type: 'link'; href: string; text: string; key: string }> = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  // Reset regex (it's stateful with /g flag)
  const re = new RegExp(COMBINED_REGEX.source, COMBINED_REGEX.flags);
  while ((match = re.exec(text)) !== null) {
    const matched = match[1];
    const id = PATTERN_TO_ID.get(matched.toLowerCase());
    if (!id || linked.has(id)) continue; // Skip if already linked on this page
    if (match.index > lastIndex) {
      out.push(text.slice(lastIndex, match.index));
    }
    out.push({
      type: 'link',
      href: `${basePath}/glossary#${id}`,
      text: matched,
      key: `gl-${id}-${key++}`,
    });
    linked.add(id);
    lastIndex = match.index + matched.length;
  }
  if (lastIndex < text.length) {
    out.push(text.slice(lastIndex));
  }
  return out.length === 0 ? [text] : out;
}

export function getCategoryEntries(category: GlossaryEntry['category']): GlossaryEntry[] {
  return GLOSSARY.filter((e) => e.category === category);
}

export const CATEGORY_LABELS: Record<GlossaryEntry['category'], string> = {
  philosophy: 'Philosophy & Categories',
  practice: 'Practice & Ritual',
  cosmology: 'Cosmology & Iconography',
  people: 'Beings & People',
  tradition: 'Texts & Traditions',
  ethics: 'Ethics & Vows',
};
