export type Author = {
  id: string;
  name: string;
  nameSk: string;
  era: string;
  short: string;
  long: string;
  works: { title: string; href?: string; note?: string }[];
  significance: string;
};

export const AUTHORS: Author[] = [
  {
    id: 'kundakunda',
    name: 'Acharya Kundakunda',
    nameSk: 'आचार्य कुन्दकुन्द',
    era: 'c. 2nd century CE (sometimes earlier)',
    short: 'The towering figure of Digambara Jain philosophy. His Samayasara is the most influential text in the tradition.',
    long: 'Acharya Kundakunda is quoted constantly in every later Digambara commentary. His works lay out the entire Digambara philosophy of the soul (jīva) using the methodologically powerful niścaya–vyavahāra distinction (absolute vs. conventional standpoints). Almost nothing is preserved about his historical life; the texts have carried him for nearly two millennia.',
    works: [
      { title: 'Samayasāra', href: '/samayasara', note: 'On the soul — 415 gathas; the heart-text of Digambara philosophy. Selected gathas live in this library.' },
      { title: 'Pravacanasāra', note: 'Discourse on essence — ~275 gathas.' },
      { title: 'Niyamasāra', note: 'Rules of conduct.' },
      { title: 'Pañcāstikāya Saṅgraha', note: 'On the five astikāyas (substances).' },
      { title: 'Aṣṭa Pāhuḍa', note: 'Eight short tracts on faith, knowledge, conduct, and related topics.' },
    ],
    significance: 'Kundakunda\'s niścaya–vyavahāra method shapes nearly all subsequent Digambara philosophy. The Samayasara is read by monks, ascetics, and serious lay students continuously across the centuries; it is the philosophical core of the tradition.',
  },
  {
    id: 'umaswami',
    name: 'Acharya Umaswami',
    nameSk: 'आचार्य उमास्वामी',
    era: 'c. 2nd–4th century CE',
    short: 'Author of the Tattvartha Sutra — the rare Jain scripture accepted as authoritative by both Digambara and Shvetambara traditions.',
    long: 'Sometimes called Umaswati in the Shvetambara tradition. Almost nothing is preserved about his life. What survives is the Tattvartha Sutra — 357 highly compressed Sanskrit sutras across 10 chapters that condense the entire Jain worldview into the most aphoristic form possible. Each sutra is just a few words; each opens onto centuries of commentary.',
    works: [
      { title: 'Tattvārtha Sūtra', href: '/tattvartha-sutra', note: '357 sutras, 10 chapters. Library has Chapter 1 (10 sutras).' },
    ],
    significance: 'The Tattvartha is the philosophical DNA of Jainism — the one text every educated Jain knows. Both traditions treat it as authoritative, despite reading it through different commentarial lineages (Sarvarthasiddhi for Digambara; Tattvartha-bhāṣya for Shvetambara).',
  },
  {
    id: 'pujyapada',
    name: 'Acharya Pujyapada',
    nameSk: 'आचार्य पूज्यपाद',
    era: 'c. 5th–6th century CE',
    short: 'Author of the Sarvarthasiddhi — the foundational Digambara commentary on Tattvartha — and the Ishtopadesh.',
    long: 'Pujyapada\'s Sarvarthasiddhi establishes the authoritative Digambara reading of the Tattvartha Sutra. When doctrinal questions about Tattvartha arise, the Sarvarthasiddhi resolves them; this library cites it constantly. He also composed the Ishtopadesh — 51 meditative gathas — and the Samadhitantra. Pujyapada was renowned as a scholar of Sanskrit grammar (Jainendra-vyākaraṇa) as well as philosophy.',
    works: [
      { title: 'Sarvārthasiddhi', note: 'Commentary on Tattvartha — the foundational Digambara reading. Cited throughout this library.' },
      { title: 'Iṣṭopadeśa', note: '51 gathas — meditative Digambara classic. (Phase 2 of library.)' },
      { title: 'Samādhitantra', note: 'On samādhi (meditative absorption).' },
      { title: 'Jainendra-vyākaraṇa', note: 'A Sanskrit grammar. Pujyapada was also a celebrated grammarian.' },
    ],
    significance: 'For Digambara philosophy, the Sarvarthasiddhi is what gives the Tattvartha Sutra its detailed teeth. Without Pujyapada\'s reading, the Tattvartha would be a skeleton; with it, it becomes a living philosophical system.',
  },
  {
    id: 'samantabhadra',
    name: 'Acharya Samantabhadra',
    nameSk: 'आचार्य समन्तभद्र',
    era: 'c. 2nd century CE (some place earlier)',
    short: 'Composer of the Aapta-mīmāṁsā (philosophical defense of the trustworthy guide) and the Ratnakaranda Shravakachara (lay ethics).',
    long: 'Samantabhadra is one of the earliest Digambara philosophical writers, predating even Kundakunda by some accounts. His Aapta-mīmāṁsā argues philosophically for what makes a teacher trustworthy — the apta — establishing categories that later commentators build on extensively. The Ratnakaranda Shravakachara codifies lay practice in 150 verses and is still recited.',
    works: [
      { title: 'Āpta-mīmāṁsā / Devagama Stotra', note: '114 verses on the qualities of the trustworthy spiritual guide.' },
      { title: 'Ratnakaraṇḍa Śrāvakācāra', note: '150 verses on lay practice. Phase 2 of library.' },
      { title: 'Yuktyānuśāsana', note: 'On Jain logic and reasoning.' },
      { title: 'Svayambhū-stotra', note: 'Devotional praise of the 24 Tirthankaras.' },
    ],
    significance: 'Samantabhadra\'s definitions of the apta and his work on lay ethics give Jainism its concrete forms — both who deserves trust as a teacher and what a Jain householder actually does day to day.',
  },
  {
    id: 'manatunga',
    name: 'Acharya Manatunga',
    nameSk: 'आचार्य मानतुङ्ग',
    era: 'c. 7th–8th century CE',
    short: 'Composer of the Bhaktamara Stotra — one of the most beloved devotional hymns in all of Jainism.',
    long: 'Almost nothing is preserved of Manatunga\'s historical life. What survives is the Bhaktamara Stotra: 48 verses (Digambara recension; 44 in Shvetambara) of remarkable Sanskrit poetry, dense with imagery, technically masterful, devotionally profound. The famous legend — that Manatunga composed the stotra while bound in 48 chains by King Bhoja, with each verse breaking one chain — comes from later sources and varies across traditions.',
    works: [
      { title: 'Bhaktāmara Stotra', href: '/bhaktamara-stotra', note: '48 verses (Digambara). Library has all 48 in full draft.' },
    ],
    significance: 'For over 1300 years, the Bhaktamara has been recited daily across the Digambara world — in temples, in homes, by elders, by children just learning their first prayers. It is the living heart of Jain devotional practice.',
  },
  {
    id: 'daulatram',
    name: 'Pandit Daulatram Kasliwal',
    nameSk: 'पण्डित दौलतराम कासलीवाल',
    era: '18th century',
    short: 'Author of Chhah Dhala — the comprehensive Hindi summary that most modern Digambaras read daily. Foundational figure of the Digambara Terapanthi tradition.',
    long: 'Pt. Daulatram was a Hindi-language pandit in the 18th-century reform movement of the Digambara Terapanthi sub-tradition. The Chhah Dhala — "six sections" — distills the Jain path into accessible Hindi-language verse, making it readable for ordinary householders without Sanskrit training. It became, and remains, the most widely-read Digambara text in modern North India.',
    works: [
      { title: 'Chhah Dhālā', note: 'Six sections in Hindi covering: the rare human birth, the pursuit of misery vs. happiness, the path of liberation, the journey of the soul, the conduct of monks and laity, and the goal. Phase 2 of library.' },
    ],
    significance: 'The Chhah Dhala is the bridge between classical Sanskrit/Prakrit Jain philosophy and modern Hindi-speaking practice. For most Digambara families today, this is the first text a child learns after the Navkar Mantra.',
  },
];

export function getAuthor(id: string): Author | undefined {
  return AUTHORS.find((a) => a.id === id);
}
