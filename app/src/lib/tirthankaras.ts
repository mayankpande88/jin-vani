// 24 Tirthankaras of the present avasarpini time-cycle, in canonical order.
// Lanchhana, complexion, and parentage follow the Digambara tradition.

export type Tirthankara = {
  num: number;
  name: string;
  nameSk: string;
  slug: string;                // URL-safe slug for /tirthankaras/<slug>
  lanchhana: string;          // Identifying symbol
  lanchhanaSk?: string;
  complexion: string;          // Traditional complexion
  fatherSk: string;
  motherSk: string;
  birthplace?: string;
  mokshaPlace?: string;
  note?: string;                // Short note shown in the table
  bio?: string;                 // Optional fuller biographical content (paragraphs separated by \n\n)
  connections?: { label: string; href: string }[]; // Cross-links to library content
};

export const TIRTHANKARAS: Tirthankara[] = [
  {
    num: 1, slug: 'rishabhanatha',
    name: 'Rishabhanatha (Adinatha)', nameSk: 'ऋषभनाथ (आदिनाथ)',
    lanchhana: 'Bull', lanchhanaSk: 'वृषभ', complexion: 'Golden',
    fatherSk: 'राजा नाभिराय', motherSk: 'महारानी मरुदेवी',
    birthplace: 'Ayodhya', mokshaPlace: 'Mt. Kailasha (Ashtapada)',
    note: 'The first Tirthankara of this time-cycle. Founded the spiritual order. The Bhaktamara Stotra is composed in his praise.',
    bio: `Rishabhanatha — also called *Adinatha* (the First Lord) and *Yugadi-deva* (the Lord at the era's beginning) — is the first of the 24 Tirthankaras of this time-cycle. According to tradition, he lived at the dawn of the present *avasarpini* era, when human society was first emerging from the *bhoga-bhumi* (the era of immediate enjoyment without effort).

He is the son of King Nabhiraj and Queen Marudevi, born in Ayodhya. Before his renunciation, as the first king, he is traditionally credited with introducing the foundational arts of civilization — *asi* (defense), *masi* (writing/ink), *kṛṣi* (agriculture), *vidyā* (education), *vāṇijya* (commerce), and *śilpa* (craft). The very structure of organized society is traced, in Jain tradition, to his pre-monastic kingship.

After renouncing his kingdom, he undertook severe austerity for a thousand years. He attained kevala-jnana under a banyan tree at Purimatal. He is said to have given his first sermon at Mount Kailasha (also called Ashtapada), where he later attained mokṣa.

His mother Marudevi is herself a celebrated figure: she is said to have attained mokṣa shortly after seeing her son's *samavasaraṇa*, becoming, by some traditions, the first liberated soul of this era.

For Digambara Jains, Rishabhanatha holds a position of unique importance. The *Bhaktamara Stotra*, the most beloved devotional hymn in the tradition, is composed entirely in his praise. The famous opening verse — *bhaktāmara-praṇata-mauli-maṇi-prabhāṇām...* — bows to his feet specifically.`,
    connections: [
      { label: 'Bhaktamara Stotra (composed in his praise)', href: '/bhaktamara-stotra' },
      { label: 'The Manatunga legend', href: '/bhaktamara-stotra/story' },
      { label: 'Bhaktamara Verse 1 (opens with "yugādi" — his epithet)', href: '/bhaktamara-stotra/1' },
    ],
  },
  {
    num: 2, slug: 'ajitanatha',
    name: 'Ajitanatha', nameSk: 'अजितनाथ',
    lanchhana: 'Elephant', lanchhanaSk: 'गज', complexion: 'Golden',
    fatherSk: 'राजा जितशत्रु', motherSk: 'महारानी विजया',
    birthplace: 'Ayodhya', mokshaPlace: 'Mt. Sammed Shikhar',
    bio: `Ajitanatha — &ldquo;the Unconquered&rdquo; — is the second Tirthankara, born in Ayodhya to King Jitashatru and Queen Vijaya. Tradition holds that during his mother&apos;s pregnancy she was so concentrated and serene that no one could defeat her, even at games of chance — hence the epithet *Ajita* (unconquered) given to her son.

He inherited the kingdom of Ayodhya before renouncing it. He attained kevala-jnana under a *saptaparna* tree, and reached mokṣa at Mount Sammed Shikhar — the destination of nearly all subsequent Tirthankaras.`,
  },
  {
    num: 3, slug: 'sambhavanatha',
    name: 'Sambhavanatha', nameSk: 'सम्भवनाथ',
    lanchhana: 'Horse', lanchhanaSk: 'अश्व', complexion: 'Golden',
    fatherSk: 'राजा जितारि', motherSk: 'महारानी सेना',
    birthplace: 'Sravasti', mokshaPlace: 'Mt. Sammed Shikhar',
    bio: `Sambhavanatha — &ldquo;the originator&rdquo; — is the third Tirthankara, born in the city of Sravasti to King Jitari and Queen Sena. Tradition holds that his birth coincided with relief from a long-standing famine in the region; the people credited his arrival with the return of abundance.

He renounced the throne after a period of kingship. He attained kevala-jnana under a *sala* tree and reached mokṣa at Mt. Sammed Shikhar.`,
  },
  {
    num: 4, slug: 'abhinandananatha',
    name: 'Abhinandananatha', nameSk: 'अभिनन्दननाथ',
    lanchhana: 'Monkey', lanchhanaSk: 'कपि', complexion: 'Golden',
    fatherSk: 'राजा संवर', motherSk: 'महारानी सिद्धार्था',
    birthplace: 'Ayodhya', mokshaPlace: 'Mt. Sammed Shikhar',
    bio: `Abhinandananatha — &ldquo;the joy-giver&rdquo; — is the fourth Tirthankara, born in Ayodhya to King Samvara and Queen Siddhartha. Tradition holds that his birth was attended with celebrations of unusual joy, even by celestial standards — hence the name.

His distinguishing iconographic feature is the monkey *(kapi)* lañchana — drawn from a story in his pre-Tirthankara births. He attained kevala-jnana under a *priyangu* tree; reached mokṣa at Mt. Sammed Shikhar.`,
  },
  {
    num: 5, slug: 'sumatinatha',
    name: 'Sumatinatha', nameSk: 'सुमतिनाथ',
    lanchhana: 'Curlew (krauñca)', lanchhanaSk: 'क्रौञ्च', complexion: 'Golden',
    fatherSk: 'राजा मेघप्रभ', motherSk: 'महारानी मङ्गला',
    birthplace: 'Ayodhya', mokshaPlace: 'Mt. Sammed Shikhar',
    bio: `Sumatinatha — &ldquo;Lord of right intellect&rdquo; — is the fifth Tirthankara, born in Ayodhya to King Meghaprabha and Queen Mangalā. The name *sumati* (good intellect) was given to him because, even as a child, he displayed remarkable wisdom in resolving disputes; one famous traditional story has him resolving a maternity dispute as a young prince. He renounced his kingdom; reached mokṣa at Mt. Sammed Shikhar.`,
  },
  {
    num: 6, slug: 'padmaprabha',
    name: 'Padmaprabha', nameSk: 'पद्मप्रभ',
    lanchhana: 'Red lotus', lanchhanaSk: 'रक्त-कमल', complexion: 'Red',
    fatherSk: 'राजा धरण', motherSk: 'महारानी सुसीमा',
    birthplace: 'Kausambi', mokshaPlace: 'Mt. Sammed Shikhar',
    bio: `Padmaprabha — &ldquo;the lotus-radiant&rdquo; — is the sixth Tirthankara, born in Kausambi to King Dharaṇa and Queen Susīmā. Distinguished from the golden-complexioned Tirthankaras, his complexion is traditionally described as *red* — like the petal of a red lotus, hence the name. The lotus-iconography on his pedestal extends this. He attained kevala-jnana under a *chatraka* tree; reached mokṣa at Mt. Sammed Shikhar.`,
  },
  {
    num: 7, slug: 'suparshvanatha',
    name: 'Suparshvanatha', nameSk: 'सुपार्श्वनाथ',
    lanchhana: 'Swastika', lanchhanaSk: 'स्वस्तिक', complexion: 'Golden',
    fatherSk: 'राजा सुप्रतिष्ठ', motherSk: 'महारानी पृथ्वी',
    birthplace: 'Varanasi', mokshaPlace: 'Mt. Sammed Shikhar',
    bio: `Suparshvanatha — &ldquo;Lord of beautiful sides&rdquo; — is the seventh Tirthankara, born in Varanasi (Banaras) — the same sacred city that would later be the birthplace of Parshvanatha (the 23rd Tirthankara) and the Buddha.

His lañchana is the *svastika* (an ancient auspicious symbol used in Jain, Hindu, and Buddhist iconography across Asia, predating its 20th-century appropriations by more than two millennia). He reached mokṣa at Mt. Sammed Shikhar.`,
  },
  {
    num: 8, slug: 'chandraprabha',
    name: 'Chandraprabha', nameSk: 'चन्द्रप्रभ',
    lanchhana: 'Crescent moon', lanchhanaSk: 'चन्द्र', complexion: 'White',
    fatherSk: 'राजा महासेन', motherSk: 'महारानी लक्ष्मणा',
    birthplace: 'Chandrapuri', mokshaPlace: 'Mt. Sammed Shikhar',
    bio: `Chandraprabha — &ldquo;the moon-radiant&rdquo; — is the eighth Tirthankara, born in *Chandrapuri* (the &ldquo;city of the moon&rdquo;) to King Mahasena and Queen Lakshmana. His complexion is traditionally described as *white* — like the moon&apos;s light — and his lañchana is the *crescent moon*. The whole iconography aligns: city, name, complexion, symbol all point to *chandra*.

He attained kevala-jnana under a *naga* tree; reached mokṣa at Mt. Sammed Shikhar.`,
  },
  {
    num: 9, slug: 'pushpadanta',
    name: 'Pushpadanta (Suvidhinatha)', nameSk: 'पुष्पदन्त (सुविधिनाथ)',
    lanchhana: 'Crocodile (makara)', lanchhanaSk: 'मकर', complexion: 'White',
    fatherSk: 'राजा सुग्रीव', motherSk: 'महारानी रामा',
    birthplace: 'Kakandi', mokshaPlace: 'Mt. Sammed Shikhar',
    bio: `Pushpadanta — also called *Suvidhinatha* (&ldquo;Lord of right conduct&rdquo;) — is the ninth Tirthankara, born in Kākandī to King Sugrīva and Queen Rāmā. The name *pushpadanta* (&ldquo;flower-toothed&rdquo;) refers to a tradition that his teeth were as beautiful as flowers. The alternative name *Suvidhinatha* highlights his role in clarifying conduct.

White-complexioned. Lañchana is the *makara* (a mythological crocodile-like creature). Mokṣa at Mt. Sammed Shikhar.`,
  },
  {
    num: 10, slug: 'shitalanatha',
    name: 'Shitalanatha', nameSk: 'शीतलनाथ',
    lanchhana: 'Śrīvatsa', lanchhanaSk: 'श्रीवत्स', complexion: 'Golden',
    fatherSk: 'राजा दृढरथ', motherSk: 'महारानी सुनन्दा',
    birthplace: 'Bhaddilapura', mokshaPlace: 'Mt. Sammed Shikhar',
    bio: `Shitalanatha — &ldquo;the cool one&rdquo; — is the tenth Tirthankara, born in Bhaddilapura to King Dṛḍharatha and Queen Sunandā. Tradition holds that his presence cooled fevers and calmed agitated minds — both his name and several stories about him reflect this. *Shitala* (cool, calm) carries connotations of relief from suffering.

His lañchana is the *śrīvatsa* — an auspicious mark also seen on the chest of Vishnu in Hindu iconography. Mokṣa at Mt. Sammed Shikhar.`,
  },
  {
    num: 11, slug: 'shreyamsanatha',
    name: 'Shreyamsanatha', nameSk: 'श्रेयांसनाथ',
    lanchhana: 'Rhinoceros (gaṇḍa)', lanchhanaSk: 'गण्डक', complexion: 'Golden',
    fatherSk: 'राजा विष्णु', motherSk: 'महारानी विष्णुश्री',
    birthplace: 'Simhapuri', mokshaPlace: 'Mt. Sammed Shikhar',
    bio: `Shreyamsanatha — &ldquo;Lord of the auspicious-bodied&rdquo; — is the eleventh Tirthankara, born in Simhapuri to King Vishnu and Queen Vishnushri. His name *śreyāṁsa* connotes both auspiciousness and excellence. He reached mokṣa at Mt. Sammed Shikhar; his lañchana is the rhinoceros (*gaṇḍa*).`,
  },
  {
    num: 12, slug: 'vasupujya',
    name: 'Vasupujya', nameSk: 'वासुपूज्य',
    lanchhana: 'Buffalo (mahiṣa)', lanchhanaSk: 'महिष', complexion: 'Red',
    fatherSk: 'राजा वसुपूज्य', motherSk: 'महारानी जयावती',
    birthplace: 'Champapuri', mokshaPlace: 'Champapuri',
    bio: `Vasupujya — &ldquo;honored by Vasus&rdquo; (the celestial Vasu deities of Indian tradition) — is the twelfth Tirthankara, and the only one in the present cycle who **attained mokṣa at his own birthplace**: Champapuri (modern Champapur in Bihar).

He renounced as a young prince, never married. Red-complexioned (like Padmaprabha and Vasupujya, exception to the predominantly golden coloring of Tirthankaras). Lañchana is the *mahiṣa* (buffalo).

Champapuri, his birthplace and place of liberation, is one of the few Jain pilgrimage sites that is *not* Mt. Sammed Shikhar.`,
  },
  {
    num: 13, slug: 'vimalanatha',
    name: 'Vimalanatha', nameSk: 'विमलनाथ',
    lanchhana: 'Boar (varāha)', lanchhanaSk: 'वराह', complexion: 'Golden',
    fatherSk: 'राजा कृतवर्मा', motherSk: 'महारानी सुरमा / श्यामा',
    birthplace: 'Kampilya', mokshaPlace: 'Mt. Sammed Shikhar',
    bio: `Vimalanatha — &ldquo;the stainless lord&rdquo; — is the thirteenth Tirthankara, born in Kampilya to King Kritavarma and Queen Suramā (Shyāmā in some accounts). His name *vimala* (stainless, pure) reflects the central Jain idea of the soul&apos;s pure nature being uncovered, not added.

Lañchana is the *varāha* (boar). Mokṣa at Mt. Sammed Shikhar.`,
  },
  {
    num: 14, slug: 'anantanatha',
    name: 'Anantanatha', nameSk: 'अनन्तनाथ',
    lanchhana: 'Falcon (śyena)', lanchhanaSk: 'श्येन', complexion: 'Golden',
    fatherSk: 'राजा सिंहसेन', motherSk: 'महारानी सर्वयशा',
    birthplace: 'Ayodhya', mokshaPlace: 'Mt. Sammed Shikhar',
    bio: `Anantanatha — &ldquo;the infinite lord&rdquo; — is the fourteenth Tirthankara, born in Ayodhya to King Simhasena and Queen Sarvayasā. The name *ananta* (infinite, unending) points to the soul&apos;s infinite knowledge, perception, bliss, and energy — which a kevali manifests fully.

Lañchana is the *śyena* (falcon). Mokṣa at Mt. Sammed Shikhar.`,
  },
  {
    num: 15, slug: 'dharmanatha',
    name: 'Dharmanatha', nameSk: 'धर्मनाथ',
    lanchhana: 'Vajra', lanchhanaSk: 'वज्र', complexion: 'Golden',
    fatherSk: 'राजा भानु', motherSk: 'महारानी सुव्रता',
    birthplace: 'Ratnapuri', mokshaPlace: 'Mt. Sammed Shikhar',
    bio: `Dharmanatha — &ldquo;the lord of dharma&rdquo; — is the fifteenth Tirthankara, born in Ratnapuri to King Bhānu and Queen Suvratā. The name *dharma* — the path, the right teaching, the way things are — is foundational in Jain (and broader Indian) thought.

His lañchana is the *vajra* — the diamond-thunderbolt — an ancient symbol of indestructibility shared with several Indian iconographic traditions. Mokṣa at Mt. Sammed Shikhar.`,
  },
  {
    num: 16, slug: 'shantinatha',
    name: 'Shantinatha', nameSk: 'शान्तिनाथ',
    lanchhana: 'Deer (mṛga)', lanchhanaSk: 'मृग', complexion: 'Golden',
    fatherSk: 'राजा विश्वसेन', motherSk: 'महारानी अचिरा',
    birthplace: 'Hastinapur', mokshaPlace: 'Mt. Sammed Shikhar',
    note: 'Also a Chakravartin emperor before renunciation.',
    bio: `Shantinatha — &ldquo;Lord of Peace&rdquo; — holds an unusual triple distinction in Jain tradition: he was a *Tirthankara*, a *Chakravartin* (universal monarch), and a *Kāmadeva* (a paragon of beauty/charisma) before renouncing the world.

Born in Hastinapur to King Vishvasena and Queen Achira, his birth is said to have ended a great pestilence (*śānti* = peace, calm) — hence the name. As Chakravartin, he ruled vast territories with unusual restraint and justice; as Kāmadeva, he was without equal in physical form. As Tirthankara, he relinquished all of this.

His decision to renounce universal kingship is often cited as the canonical example of *aparigraha* (non-attachment) at the highest level. To turn away from the position of the Chakravartin — when most beings would consider it the apex of worldly attainment — is to demonstrate, in the most visible way possible, that no external achievement satisfies the soul.

He attained mokṣa at Mt. Sammed Shikhar.`,
    connections: [
      { label: 'Foundation 07: Aparigraha is not just minimalism', href: '/foundations/aparigraha' },
    ],
  },
  {
    num: 17, slug: 'kunthunatha',
    name: 'Kunthunatha', nameSk: 'कुन्थुनाथ',
    lanchhana: 'Goat (chāgala)', lanchhanaSk: 'छागल', complexion: 'Golden',
    fatherSk: 'राजा सूर्य', motherSk: 'महारानी श्री',
    birthplace: 'Hastinapur', mokshaPlace: 'Mt. Sammed Shikhar',
    note: 'Also a Chakravartin emperor.',
    bio: `Kunthunatha is the seventeenth Tirthankara, born in Hastinapur to King Sūrya and Queen Śrī. Like his predecessor Shantinatha (#16) and his successor Aranatha (#18), Kunthunatha is one of the small group of figures who held both the position of *Chakravartin* (universal monarch) and *Tirthankara* — exceptional even among Tirthankaras.

The name *kunthu* refers to a tiny insect (the smallest soul-bearing creature recognizable in Jain biology), expressing his concern for even the smallest forms of life. Lañchana is the goat. Mokṣa at Mt. Sammed Shikhar.`,
  },
  {
    num: 18, slug: 'aranatha',
    name: 'Aranatha', nameSk: 'अरनाथ',
    lanchhana: 'Nandyāvarta', lanchhanaSk: 'नन्द्यावर्त', complexion: 'Golden',
    fatherSk: 'राजा सुदर्शन', motherSk: 'महारानी मित्रसेना',
    birthplace: 'Hastinapur', mokshaPlace: 'Mt. Sammed Shikhar',
    note: 'Also a Chakravartin emperor.',
    bio: `Aranatha is the eighteenth Tirthankara, also born in Hastinapur — the third Chakravartin-Tirthankara in succession (after Shantinatha and Kunthunatha). His parents were King Sudarśana and Queen Mitrasenā.

His lañchana is the *nandyāvarta* — an auspicious geometric figure, a complex pattern resembling a four-pointed śrīvatsa, found across Indian iconographic traditions. Mokṣa at Mt. Sammed Shikhar.`,
  },
  {
    num: 19, slug: 'mallinatha',
    name: 'Mallinatha', nameSk: 'मल्लिनाथ',
    lanchhana: 'Pitcher (kalaśa)', lanchhanaSk: 'कलश', complexion: 'Blue (in Digambara) / Variable',
    fatherSk: 'राजा कुम्भ', motherSk: 'महारानी प्रभावती',
    birthplace: 'Mithila', mokshaPlace: 'Mt. Sammed Shikhar',
    note: 'In Digambara tradition: a male Tirthankara. In Shvetambara tradition: female. This is the most-cited example of doctrinal difference between the traditions.',
    bio: `Mallinatha is the 19th Tirthankara, and the only one whose tradition is significantly disputed between the two major Jain sub-traditions.

In **Digambara** tradition — followed by this library — Mallinatha is a male Tirthankara, born to King Kumbha and Queen Prabhavati of Mithila. The Digambara position holds that final mokṣa requires the male body and the complete *digambara* state, so Mallinatha must necessarily have been male. He renounced the world as a young prince and attained kevala-jnana at Mithila.

In **Shvetambara** tradition, Mallinatha is female — uniquely so among the 24 Tirthankaras. The Shvetambara *Mallī Charitra* tells the story of a princess so beautiful that several kings sought her hand in marriage simultaneously, leading her to renounce. The Shvetambara tradition holds that women can attain mokṣa directly, so Mallinatha being female poses no doctrinal problem.

This is the most-cited example of the **gender-and-mokṣa doctrinal difference** between the two traditions, discussed in Foundation 09 (&ldquo;The tradition has hard questions&rdquo;). The disagreement is genuinely ancient and remains unresolved.

Both traditions agree on the lanchhana (pitcher / *kalaśa*), the parentage, and that Mallinatha attained mokṣa at Mt. Sammed Shikhar.`,
    connections: [
      { label: 'Foundation 09: The tradition has hard questions', href: '/foundations/hard-questions' },
    ],
  },
  {
    num: 20, slug: 'munisuvrata',
    name: 'Munisuvrata', nameSk: 'मुनिसुव्रत',
    lanchhana: 'Tortoise (kūrma)', lanchhanaSk: 'कूर्म', complexion: 'Black / Dark',
    fatherSk: 'राजा सुमित्र', motherSk: 'महारानी पद्मावती',
    birthplace: 'Rajagriha', mokshaPlace: 'Mt. Sammed Shikhar',
    bio: `Munisuvrata — &ldquo;the one of good monastic vows&rdquo; — is the twentieth Tirthankara, born in Rajagriha (the capital of Magadha — later associated with both the Jain and Buddhist traditions) to King Sumitra and Queen Padmāvatī. He is one of two Tirthankaras (with Neminatha) whose complexion is described as *black/dark* rather than golden.

His lañchana is the tortoise (*kūrma*), a symbol of endurance and slow steady progress. Mokṣa at Mt. Sammed Shikhar.`,
  },
  {
    num: 21, slug: 'naminatha',
    name: 'Naminatha', nameSk: 'नमिनाथ',
    lanchhana: 'Blue lotus (nīlotpala)', lanchhanaSk: 'नीलोत्पल', complexion: 'Golden',
    fatherSk: 'राजा विजय', motherSk: 'महारानी वप्रा',
    birthplace: 'Mithila', mokshaPlace: 'Mt. Sammed Shikhar',
    bio: `Naminatha — &ldquo;the bowing lord&rdquo; — is the twenty-first Tirthankara, born in Mithila (an ancient capital of the Videha kingdom, also the birthplace of Mallinatha) to King Vijaya and Queen Vaprā.

The name *nami* (he who bows) is sometimes connected to a tradition that even kings of opposing armies bowed before him in his pre-renunciation kingship. Lañchana is the blue lotus (*nīlotpala*). Mokṣa at Mt. Sammed Shikhar.`,
  },
  {
    num: 22, slug: 'neminatha',
    name: 'Neminatha (Aristanemi)', nameSk: 'नेमिनाथ (अरिष्टनेमि)',
    lanchhana: 'Conch (śaṅkha)', lanchhanaSk: 'शङ्ख', complexion: 'Black / Dark',
    fatherSk: 'राजा समुद्रविजय', motherSk: 'महारानी शिवादेवी',
    birthplace: 'Sauripura (Mathura region)', mokshaPlace: 'Mt. Girnar',
    note: 'Cousin of Krishna in Jain tradition. Renounced the world on his wedding day after seeing animals being slaughtered for the wedding feast.',
    bio: `Neminatha — also called *Aristanemi* — is the 22nd Tirthankara, and one of the most narratively rich figures in Jain literature. According to Jain tradition, he was a cousin of *Krishna* (the same Krishna of the Mahabharata), with both being born into the Yadava clan of Sauripura.

His renunciation story is the most-told renunciation tale in Jainism. As a young prince, he was being escorted to his wedding to Princess Rajimati. As the wedding procession approached the bride&apos;s palace, he heard the cries of animals being slaughtered to feed the wedding feast. The sight and sound of the suffering animals — caged, terrified, awaiting death — pierced him utterly. He turned the procession around. He renounced the kingdom, the marriage, and worldly life on the spot.

Princess Rajimati, devastated but inspired by his decision, soon herself renounced the world and joined the women&apos;s order. The tradition holds that she too attained mokṣa.

Neminatha attained kevala-jnana on Mount Girnar (in modern Gujarat) and attained mokṣa at the same place. **Mount Girnar** is now one of the most sacred Jain pilgrimage sites — the only major Tirthankara mokṣa-place that is not Mt. Sammed Shikhar.

For a tradition that holds *ahimsa* as its first vow, Neminatha&apos;s renunciation is the most concrete narrative expression of what that vow means: when you truly see harm being done, the only honest response is to stop participating in the system that causes it.`,
    connections: [
      { label: 'Foundation 06: Ahimsa is not just diet', href: '/foundations/ahimsa' },
    ],
  },
  {
    num: 23, slug: 'parshvanatha',
    name: 'Parshvanatha', nameSk: 'पार्श्वनाथ',
    lanchhana: 'Snake (sarpa, with hood)', lanchhanaSk: 'सर्प', complexion: 'Blue / Dark',
    fatherSk: 'राजा अश्वसेन', motherSk: 'महारानी वामा',
    birthplace: 'Varanasi', mokshaPlace: 'Mt. Sammed Shikhar',
    note: 'Historical Tirthankara (~9th–8th century BCE). His teaching of four vows preceded Mahavir, who added the fifth (brahmacarya).',
    bio: `Parshvanatha is the 23rd Tirthankara and one of two whose historical existence is supported by independent evidence (the other being Mahavir). Most scholars place his life in the 9th–8th century BCE, predating Mahavir by approximately 250 years.

He was born to King Ashvasena and Queen Vama of Varanasi. As a young prince, he is said to have witnessed an ascetic (Kamatha) performing severe austerities involving fire, and to have noticed two snakes trapped in a piece of wood about to be burned. Parshvanatha&apos;s compassion for the snakes, and his rebuke of the ascetic for unconscious harm, led to a famous incident in which the snakes were rescued — and reborn as the deities **Dharanendra** (the cobra-king) and **Padmavati** (his consort), who would later protect Parshvanatha in his ascetic life.

The most famous iconographic detail of Parshvanatha — the seven-hooded cobra that arches protectively over his head in nearly every image — comes from this connection. When Parshvanatha later sat in deep meditation and a malicious being attempted to disturb him with floods, Dharanendra and Padmavati appeared and shielded him. The cobra-hood, in Jain art, is the visible memory of this protection.

Parshvanatha taught the **four vows** (*chaturyāma*): non-violence, truth, non-stealing, and non-attachment. Mahavir, 250 years later, added the fifth vow — *brahmacarya* (celibacy) — which had been implicit in Parshvanatha&apos;s teaching but became explicit in Mahavir&apos;s formulation.

Parshvanatha attained mokṣa at Mount Sammed Shikhar (modern Parasnath Hill in Jharkhand) — which now bears his name in popular usage.

Among the 24 Tirthankaras, Parshvanatha is exceptionally venerated. The serpent-hood is the most recognizable icon in all of Jain art.`,
    connections: [
      { label: 'Foundation 06: Ahimsa is not just diet (the four vows tradition)', href: '/foundations/ahimsa' },
      { label: 'Glossary: Mahāvrata (the five great vows)', href: '/glossary#mahavrata' },
    ],
  },
  {
    num: 24, slug: 'mahavira',
    name: 'Mahavira (Vardhamana)', nameSk: 'महावीर (वर्धमान)',
    lanchhana: 'Lion (siṁha)', lanchhanaSk: 'सिंह', complexion: 'Golden',
    fatherSk: 'राजा सिद्धार्थ', motherSk: 'महारानी त्रिशला',
    birthplace: 'Kundalapura (Vaishali region)', mokshaPlace: 'Pavapuri',
    note: 'The 24th and last Tirthankara of this time-cycle. NOT the founder of Jainism.',
    bio: `Mahavira — born as *Vardhamana*, &ldquo;the Increasing One&rdquo; — is the 24th and final Tirthankara of the present time-cycle. The traditional dates are 599–527 BCE, making him a contemporary of the Buddha. He is **not the founder** of Jainism; he is the last in a long line of 24 Tirthankaras, and built his teaching on the foundation laid by Parshvanatha 250 years earlier.

He was born in Kundalapura, near present-day Vaishali in Bihar, to King Siddhartha and Queen Trishala (also called Priyakarini in the Shvetambara tradition). His birth is celebrated as Mahavir Jayanti — one of the most important festivals in modern Jain practice.

At the age of thirty, he renounced the world. He spent **twelve and a half years** in severe ascetic practice — wandering, meditating, fasting, often in conditions of extreme privation. The traditional accounts describe ordeals that test the limits of physical endurance: nights spent in hostile villages, periods of complete fasting, exposure to extreme weather, attacks by both humans and animals. Through it all, he maintained perfect equanimity (*sāmāyika*) — the central practice of his teaching.

At age 42, on the banks of the Rijuvaluka river, he attained **kevala-jnana** — omniscient knowledge.

For the next 30 years, he taught. He established the four-fold *saṅgha* — monks (*sādhu*), nuns (*sādhvī* / *aryikā*), laymen (*śrāvaka*), and laywomen (*śrāvikā*). His chief disciples were the eleven *gaṇadharas*, of whom **Indrabhuti Gautama** was the foremost; the gaṇadharas organized his teaching into the canonical scriptures.

He attained mokṣa at age 72, at **Pavapuri** in modern-day Bihar. The night of his liberation — *Dīpāvalī* in some traditions — is associated with the festival of lights; many Jains observe Diwali specifically as Mahavir-nirvana day.

Mahavir&apos;s teaching consolidated and refined what came before. He explicitly added the fifth vow — *brahmacarya* (celibacy) — to Parshvanatha&apos;s four. He emphasized the equality of all souls and admitted women to the monastic order. His doctrines of *anekāntavāda* (multiple viewpoints) and *syādvāda* (conditional predication) became hallmarks of Jain philosophy.

For the modern world, Mahavir occupies an unusual position: a fully historical religious founder-figure (in practice, even if not in tradition) whose teachings — rigorous non-violence, careful epistemic humility, individual responsibility for liberation — are unusually compatible with secular modern thought.`,
    connections: [
      { label: 'Glossary: Anekantavada', href: '/glossary#anekantavada' },
      { label: 'Foundation 08: Anekantavada — you might be wrong', href: '/foundations/anekantavada' },
      { label: 'Foundation 06: Ahimsa is not just diet', href: '/foundations/ahimsa' },
    ],
  },
];

export function getTirthankara(slug: string): Tirthankara | undefined {
  return TIRTHANKARAS.find((t) => t.slug === slug);
}
