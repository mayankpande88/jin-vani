import Link from 'next/link';
import { notFound } from 'next/navigation';

const ARTICLES: Record<string, { num: string; title: string; readingMinutes: number; render: () => React.ReactNode }> = {
  'tirthankaras-and-gods': {
    num: '01',
    title: 'Tirthankaras and the question of "gods"',
    readingMinutes: 6,
    render: () => <TirthankarasArticle />,
  },
  'karma-is-not-fate': {
    num: '02',
    title: 'Karma is not fate — it\'s accountability',
    readingMinutes: 7,
    render: () => <KarmaArticle />,
  },
  'no-creator-god': {
    num: '03',
    title: 'There is no creator god — and that\'s not a bug',
    readingMinutes: 6,
    render: () => <NoCreatorArticle />,
  },
  'pratikraman': {
    num: '04',
    title: 'Pratikraman — the daily practice of "turning back"',
    readingMinutes: 9,
    render: () => <PratikramanArticle />,
  },
  'liberation-self-effort': {
    num: '05',
    title: 'Liberation is by your own effort',
    readingMinutes: 5,
    render: () => <LiberationArticle />,
  },
  'ahimsa': {
    num: '06',
    title: 'Ahimsa is not just diet',
    readingMinutes: 6,
    render: () => <AhimsaArticle />,
  },
  'aparigraha': {
    num: '07',
    title: 'Aparigraha is not just minimalism',
    readingMinutes: 5,
    render: () => <AparigrahaArticle />,
  },
  'anekantavada': {
    num: '08',
    title: 'Anekantavada — you might be wrong',
    readingMinutes: 7,
    render: () => <AnekantavadaArticle />,
  },
  'hard-questions': {
    num: '09',
    title: 'The tradition has hard questions',
    readingMinutes: 8,
    render: () => <HardQuestionsArticle />,
  },
};

export function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }));
}

export default async function FoundationArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) notFound();

  return (
    <main className="max-w-[480px] lg:max-w-[36rem] mx-auto px-5 lg:px-8 pb-24 lg:pb-12" data-pagefind-body>
      <article className="my-12">
        <div className="font-ui text-[0.72rem] tracking-[0.16em] uppercase text-accent mb-3">
          Foundation {article.num} · Reading time {article.readingMinutes} min · With citations
        </div>
        <h1 className="font-display font-semibold text-text leading-[1.25] m-0 mb-6 tracking-tight" style={{ fontSize: 'clamp(1.6rem, 4vw, 2rem)' }}>
          {article.title}
        </h1>
        {article.render()}
      </article>
    </main>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="font-display font-semibold text-[1.2rem] text-text mt-8 mb-3 tracking-tight">{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="font-body text-[1.05rem] leading-[1.8] text-text mb-5 last:mb-0">{children}</p>;
}

function CiteMark({ id, label }: { id: string; label: string }) {
  return (
    <a
      href={`#${id}`}
      className="inline-block font-ui text-[0.65rem] font-bold text-accent py-px px-1.5 rounded-pill align-super ml-0.5 no-underline leading-none"
      style={{ background: 'var(--bg-elev-3)' }}
    >
      {label}
    </a>
  );
}

function TirthankarasArticle() {
  return (
    <>
      <p className="font-display font-medium text-[1.4rem] leading-snug text-ink m-0 mb-6 -tracking-[0.005em]">
        When the English word &ldquo;god&rdquo; is used about Tirthankaras, it can mislead. The Jain texts themselves are clearer about what a Tirthankara is — and isn&apos;t. Here is what the granths say.
      </p>

      <H3>Yes — Jainism has devas</H3>
      <P>
        First, a clarification. Jain cosmology does include <em>devas</em> — celestial beings. The Tattvartha Sutra (Acharya Umaswami&apos;s foundational text accepted by both Digambara and Shvetambara traditions) classifies them in detail.<CiteMark id="cite1" label="1" />
      </P>
      <P>
        Devas live in heavenly realms above the human world. They have powers, long lifespans, and beautiful bodies, gained through accumulated good karma. But — and this is the critical point — devas are still <em>jivas</em> like us. They are subject to rebirth. They are not creators. They cannot grant liberation. They themselves still have the spiritual work of moksha ahead of them.
      </P>
      <P>
        So when someone says &ldquo;Jainism has no gods,&rdquo; that is not quite right. A more careful statement is: <strong>Jainism has no creator god, no salvific god, and the Tirthankaras are not deities in either of those senses.</strong>
      </P>

      <H3>What a Tirthankara is</H3>
      <P>
        A Tirthankara is a soul (<em>jiva</em>) born in the human realm who, in their final birth, attains <em>kevala-jnana</em> — omniscient knowledge — by destroying the four <em>ghati</em> karmas.<CiteMark id="cite2" label="2" />
      </P>
      <P>
        After their physical death, they become <em>Siddhas</em> — fully liberated souls beyond rebirth, residing in <em>Siddha-loka</em> at the apex of the universe.<CiteMark id="cite3" label="3" />
      </P>
      <P>
        Tirthankaras are not in the deva category at all. The cosmology of Tattvartha is explicit: devas are one classification of jivas (Chapter 4); kevalis and Siddhas are another (Chapter 10). They are different things.
      </P>

      <H3>What the Tirthankara cannot do for you</H3>
      <P>
        Acharya Kundakunda&apos;s <em>Samayasara</em> — one of the most influential philosophical texts in the Digambara tradition — is unambiguous: liberation is by the soul&apos;s own effort. The soul is its own doer (<em>karta</em>) and its own enjoyer (<em>bhokta</em>) of the fruits of its actions.<CiteMark id="cite4" label="4" />
      </P>
      <P>
        Acharya Pujyapada&apos;s <em>Sarvarthasiddhi</em>, the foundational Digambara commentary on Tattvartha, makes the same point: the Tirthankara is the <em>avalambana</em> — the support, the example — not the agent who liberates the seeker.
      </P>
      <blockquote className="my-6 pl-5 italic text-[1.15rem] leading-[1.55] text-text font-display" style={{ borderLeft: '3px solid var(--accent)' }}>
        The Tirthankara shows the path. The Tirthankara does not walk it for you.
      </blockquote>

      <H3>Why they are venerated</H3>
      <P>
        Acharya Samantabhadra, in <em>Ratnakaranda Shravakachara</em>, defines the <em>apta</em> — the trustworthy one worthy of taking refuge in — by qualities: free of desire, free of flaws, possessing complete knowledge.<CiteMark id="cite5" label="5" /> The apta is the Tirthankara, defined by what they are, not by what they do for the devotee.
      </P>
      <P>
        The Bhaktamara Stotra itself is a clear example. Across all 48 verses, Acharya Manatunga praises Adinath&apos;s qualities, recognizes his uniqueness — verse 22 says &ldquo;Hundreds of women bear hundreds of sons, but no other mother has borne a son like you&rdquo; — and notes that even Indra, king of the cosmological devas, bows to him.<CiteMark id="cite6" label="6" />
      </P>
      <P>
        But Manatunga asks for nothing. The structure of the stotra is praise and recognition, not solicitation. This is the form <em>bhakti</em> takes in Jainism: appreciation of an exemplar, not petition to a deity.
      </P>

      <H3>A note on the word &ldquo;deva&rdquo;</H3>
      <P>
        To complicate things, traditional Jain liturgy <em>does</em> sometimes use the word <em>deva</em> for the Tirthankara — as in <em>deva-puja</em>, the daily veneration that is one of the six duties of a <em>shravak</em>. But the deva referred to here is the <em>apta-deva</em> or <em>paramatma</em> — defined by spiritual qualities — and is technically distinct from the cosmological devas of Tattvartha Chapter 4.
      </P>
      <P>
        In other words: in Jain Sanskrit usage, the same word can mean different things depending on context. The cleanest English summary remains: <strong>Tirthankaras are not deities who answer prayers. They are exemplars whose qualities are venerated.</strong>
      </P>

      <H3>For a modern reader</H3>
      <P>
        For someone trained to be skeptical of religion&apos;s promises, this matters. Jainism does not promise what it cannot deliver. It does not say: <em>pray and your wishes will be granted, fail to believe and be punished.</em> It says: <em>here is what is possible, here is what those who reached it did, the work is yours.</em>
      </P>
      <P>
        So when you bow before a Tirthankara murti, or recite the Bhaktamara, you are not asking. You are acknowledging. The path is open. The example exists. The walking is yours.
      </P>

      {/* Citations */}
      <div className="rounded-md p-5 mt-12 mb-4 font-ui text-[0.82rem] leading-relaxed" style={{ background: 'var(--bg-elev-2)', border: '1px solid var(--border-2)' }}>
        <h4 className="font-display font-semibold text-[0.7rem] tracking-[0.18em] uppercase text-accent m-0 mb-3">Sources cited</h4>
        <ul className="list-none m-0 p-0">
          <Cite id="cite1" n="1." source="Tattvartha Sutra 4.1">
            &ldquo;Devāḥ caturnikāyāḥ&rdquo; — &ldquo;Devas are of four orders.&rdquo; Chapter 4 of the Tattvartha gives the full classification of celestial beings.
          </Cite>
          <Cite id="cite2" n="2." source="Tattvartha Sutra 10.1">
            &ldquo;Mohakṣayāj-jnāna-darśanāvaraṇa-antarāya-kṣayācca kevalam&rdquo; — Kevala-jnana arises from the destruction of mohaniya, jnana-avarana, darshana-avarana, and antaraya karmas (the four ghati karmas).
          </Cite>
          <Cite id="cite3" n="3." source="Tattvartha Sutra 10.5–10.7">
            Description of the Siddha state, including 10.7 &ldquo;Tadanantaramūrdhvaṁ gacchatyālokāntāt&rdquo; — &ldquo;Immediately after liberation [the soul] travels upward to the end of the loka.&rdquo;
          </Cite>
          <Cite id="cite4" n="4." source="Samayasara — gathas on kartritva">
            (Acharya Kundakunda) — The doctrine that the soul is the doer of its own karma and the enjoyer of its own fruits, and that liberation requires the soul&apos;s own internal purification.
          </Cite>
          <Cite id="cite5" n="5." source="Ratnakaranda Shravakachara 1.5">
            (Acharya Samantabhadra) — Defines the qualities of the <em>apta</em>: <em>&ldquo;Āpta-Āgama-Padārthāḥ&rdquo;</em> — the trustworthy one defined by being free of flaws and possessing complete knowledge.
          </Cite>
          <Cite id="cite6" n="6." source="Bhaktamara Stotra, verses 22, 31, 32">
            (Acharya Manatunga) — Verses recognizing Adinath&apos;s uniqueness and the veneration of cosmological devas (Indra) toward him, without solicitation.
          </Cite>
        </ul>
      </div>

      <div className="font-ui text-[0.72rem] text-text-3 leading-relaxed py-3 px-4 rounded-md mt-6" style={{ background: 'var(--bg-elev-1)', border: '1px dashed var(--border-2)' }}>
        <strong className="text-accent">Draft note:</strong> This page is a project draft pending Digambara cultural reviewer. It cites primary Jain texts (Tattvartha, Samayasara, Sarvarthasiddhi, Ratnakaranda Shravakachara, Bhaktamara) but the framing and English presentation are project work. Specific verse numbers in citations to be verified against authoritative Digambara editions.
      </div>
    </>
  );
}

function KarmaArticle() {
  return (
    <>
      <p className="font-display font-medium text-[1.4rem] leading-snug text-ink m-0 mb-6 -tracking-[0.005em]">
        For most modern readers, &ldquo;karma&rdquo; means roughly: <em>what goes around comes around</em>. The Jain doctrine is much more specific — and, in a way, much more demanding.
      </p>

      <H3>Karma is a substance, not a metaphor</H3>
      <P>
        In Jain philosophy, <em>karma</em> is not a moral force or a cosmic law of fairness. It is a substance — extremely subtle particles of matter (<em>pudgala</em>) that exist throughout the universe and become attached to the soul (<em>jīva</em>) when the soul acts under the influence of passions.<CiteMark id="cite1" label="1" />
      </P>
      <P>
        These particles, once bound to the soul, alter what the soul can perceive, what it can know, what it can do, what it can become. Different kinds of karma produce different kinds of obscuration. There are eight major karma-types in Jain theory, each affecting a specific capacity of the soul.<CiteMark id="cite2" label="2" />
      </P>
      <P>
        This is not metaphor. The Tattvartha and its commentaries treat karma as literally substantial, with measurable properties: its quantity, its intensity, its duration, the kinds of effects it produces. <strong>Karma is a physics, not a poetry.</strong>
      </P>

      <H3>Karma is not fate</H3>
      <P>
        This is the part that most often gets misunderstood. Because karma binds to the soul through past actions, people often conclude that &ldquo;everything that happens to you is karma&rdquo; — meaning, you deserved it; meaning, accept it; meaning, change is impossible.
      </P>
      <P>
        That is fatalism, and Jain philosophy explicitly rejects it.
      </P>
      <blockquote className="my-6 pl-5 italic text-[1.15rem] leading-[1.55] text-text font-display" style={{ borderLeft: '3px solid var(--accent)' }}>
        Karma is not what happens to you. Karma is what you accumulate from how you respond to what happens.
      </blockquote>
      <P>
        Acharya Kundakunda&apos;s <em>Samayasara</em> is unambiguous: the soul, in its true nature, is the doer (<em>kartā</em>) of its own karma. External circumstances do not bind karma; <em>your relation to circumstances</em> binds karma.<CiteMark id="cite3" label="3" /> A person facing pain who responds with rage accumulates one kind of karma. A person facing the same pain who responds with equanimity accumulates almost none. The pain is not the karma. The response is.
      </P>

      <H3>What karma is for</H3>
      <P>
        Karma in Jain philosophy serves a specific function: it accounts for why the soul, which is intrinsically pure and omniscient, is currently impure and limited. Without karma as the explanation, the soul&apos;s present state would be inexplicable — either by chance, or by an external designer (a creator god). Jainism has neither; karma is the alternative.<CiteMark id="cite4" label="4" />
      </P>
      <P>
        This makes karma a <em>theodicy without a God</em>. The pain in the world is not the will of a deity. It is also not random. It is the lawful consequence of soul-action across countless lifetimes. The system is impartial — there is no judge, no grace, no exception. Just cause and effect, working at the level of the soul.
      </P>

      <H3>Why this is harder than it looks</H3>
      <P>
        The Jain karma doctrine is theologically demanding in a specific way: <strong>nobody is going to fix this for you</strong>. There is no creator god to forgive. There is no Tirthankara who can intervene. The Tirthankaras, as Foundation 01 noted, can only show the path; they cannot walk it for you.
      </P>
      <P>
        This means the entire weight of one&apos;s liberation rests on one&apos;s own actions. Every meditation, every act of restraint, every moment of equanimity, every refusal to react to provocation — these are the actual work of liberation. Not metaphors. Not gestures. Karma is reduced or shed only through specific spiritual practices: <em>saṁvara</em> (stoppage of new karmic inflow) and <em>nirjarā</em> (shedding of accumulated karma).<CiteMark id="cite5" label="5" />
      </P>

      <H3>Karma and modern responsibility</H3>
      <P>
        For a modern reader trained to be wary of religious claims about cosmic justice, the Jain doctrine has an unexpected angle. It is closer to a strict accountability framework than to a blame-the-victim system.
      </P>
      <P>
        <em>You</em> accumulate karma. <em>You</em> shed it. <em>You</em> are responsible for your own state. The framework is rigorous about cause-and-effect at a scale that includes lifetimes, but the underlying ethic is the same as one any secular person can recognize: take responsibility for your actions; their consequences come back to you.
      </P>
      <P>
        Where it differs sharply from the casual &ldquo;what goes around comes around&rdquo; is that Jain karma is <strong>indefatigable</strong>. There is no escape clause. No god grants forgiveness. No ritual washes karma off. The only way out is the slow, patient work of changing how you act, what you accumulate, what you shed. <strong>The path that the Tattvartha&apos;s first sutra named — right faith, right knowledge, right conduct — is also the only mechanism that can actually undo karmic bondage.</strong>
      </P>

      {/* Citations */}
      <div className="rounded-md p-5 mt-12 mb-4 font-ui text-[0.82rem] leading-relaxed" style={{ background: 'var(--bg-elev-2)', border: '1px solid var(--border-2)' }}>
        <h4 className="font-display font-semibold text-[0.7rem] tracking-[0.18em] uppercase text-accent m-0 mb-3">Sources cited</h4>
        <ul className="list-none m-0 p-0">
          <Cite id="cite1" n="1." source="Tattvartha Sutra 6.1–6.5">
            On the nature of <em>āsrava</em> (influx) — karma as <em>pudgala</em> particles binding to the soul through the soul&apos;s own activity. The technical mechanism by which karma becomes substantial.
          </Cite>
          <Cite id="cite2" n="2." source="Tattvartha Sutra 8.4–8.14">
            The eight types of karma (<em>jnāna-āvaraṇīya</em>, <em>darśana-āvaraṇīya</em>, <em>vedanīya</em>, <em>mohanīya</em>, <em>āyu</em>, <em>nāma</em>, <em>gotra</em>, <em>antarāya</em>) and their specific obscurations.
          </Cite>
          <Cite id="cite3" n="3." source="Samayasara — gathas on kartṛtva">
            Acharya Kundakunda — the soul as <em>kartā</em> (doer) of its own karma; the inner relation, not the external circumstance, is what binds.
          </Cite>
          <Cite id="cite4" n="4." source="Tattvartha Sutra 6.1, Sarvarthasiddhi commentary">
            The mechanism of <em>āsrava</em> functions as the Jain alternative to a divine creator: it explains the soul&apos;s present state through its own causal history, not external design.
          </Cite>
          <Cite id="cite5" n="5." source="Tattvartha Sutra 9.1–9.3">
            On <em>saṁvara</em> (stoppage of new karmic influx) and <em>nirjarā</em> (shedding of accumulated karma) as the two practices that break karmic bondage.
          </Cite>
        </ul>
      </div>

      <div className="font-ui text-[0.72rem] text-text-3 leading-relaxed py-3 px-4 rounded-md mt-6" style={{ background: 'var(--bg-elev-1)', border: '1px dashed var(--border-2)' }}>
        <strong className="text-accent">Draft note:</strong> This page is a project draft pending Digambara cultural reviewer. It cites Tattvartha Sutra and Samayasara; the technical karma doctrine summarized here has many further details (subdivisions, durations, intensities) treated in classical texts that this article does not cover.
      </div>
    </>
  );
}

function NoCreatorArticle() {
  return (
    <>
      <p className="font-display font-medium text-[1.4rem] leading-snug text-ink m-0 mb-6 -tracking-[0.005em]">
        Jainism has no creator god. The world was not made; it has always been. This is not a hedge or an evolution — it is the position the tradition has held for at least 2500 years.
      </p>

      <H3>What the texts say</H3>
      <P>
        The universe in Jain cosmology consists of six eternal substances (<em>dravyas</em>): souls (<em>jīva</em>), matter (<em>pudgala</em>), the medium of motion (<em>dharma</em>), the medium of rest (<em>adharma</em>), space (<em>ākāśa</em>), and time (<em>kāla</em>).<CiteMark id="cite1" label="1" /> Each is uncreated, indestructible, and eternal. None of them was made by anything else.
      </P>
      <P>
        There is no first cause. There is no creator. There is no being outside the system that designed it. The Tattvartha Sutra simply lists the substances and proceeds — the question of who made them does not arise, because the answer is: nobody, they always were.
      </P>

      <H3>Why this is not a bug</H3>
      <P>
        Most religious traditions handle the question &ldquo;why is there something rather than nothing?&rdquo; by introducing a creator. Jainism handles it by rejecting the question. The world has always existed; what needs explanation is not its <em>existence</em> but its <em>structure</em>.
      </P>
      <P>
        And the structure has an explanation: souls, bound by karma, transmigrate through countless lifetimes; the patterns of their bondage and liberation produce the world we see. The cosmos doesn&apos;t need a designer because it isn&apos;t designed; it functions according to inherent laws — natural laws of substance, motion, time, and karma — that have always been there.
      </P>
      <blockquote className="my-6 pl-5 italic text-[1.15rem] leading-[1.55] text-text font-display" style={{ borderLeft: '3px solid var(--accent)' }}>
        Where other traditions need a god to explain the world, Jainism needs only the world.
      </blockquote>

      <H3>The advantages of having no creator</H3>
      <P>
        The position is unusually clean. Three things become unnecessary that bedevil other religious philosophies:
      </P>
      <ul className="list-disc pl-6 mb-5 [&>li]:mb-2 [&>li]:font-body [&>li]:text-text [&>li]:leading-relaxed">
        <li><strong>The problem of evil disappears.</strong> No omnibenevolent creator means no contradiction between divine goodness and worldly suffering. Suffering exists because karma exists; karma exists because souls have always acted; that&apos;s the whole story.</li>
        <li><strong>No divine command morality.</strong> What is right is not right because a god commanded it. It is right because of its actual effects on souls and on the world. The basis of ethics is causal and observable, not decreed.</li>
        <li><strong>No salvation through grace.</strong> No deity hands out forgiveness or punishment. The path is entirely your own work; the consequences are entirely your own karma. Justice is not external; it is internal to the system.</li>
      </ul>

      <H3>Three traditions, one answer</H3>
      <P>
        Both major Jain traditions — Digambara and Shvetambara — agree on the no-creator position. So do all sub-traditions. Across 2500 years of disagreement on dozens of doctrinal points, this is one of the few points of complete unity in Jain philosophy. The Tattvartha Sutra, accepted by both, contains no creator — anywhere.<CiteMark id="cite2" label="2" />
      </P>

      <H3>What about the &ldquo;gods&rdquo; that do appear in Jainism?</H3>
      <P>
        Jain cosmology does include <em>devas</em> — celestial beings who live in heavenly realms. These are not creators. They are jīvas like us — souls that have accumulated good karma and now enjoy a celestial existence. They have powers, long lifespans, beautiful bodies, but they are still subject to rebirth and still on the spiritual path. They cannot grant liberation; some of them eventually become Tirthankaras themselves.<CiteMark id="cite3" label="3" />
      </P>
      <P>
        See <Link href="/foundations/tirthankaras-and-gods" className="text-accent">Foundation 01</Link> for the full distinction between cosmological devas and the Tirthankaras as <em>apta-deva</em>.
      </P>

      <H3>What this means for a modern reader</H3>
      <P>
        For someone who has been pushed away from religion by the standard creator-god framing — by the problem of evil, by the question of how a good god allows suffering, by the apparent arbitrariness of revelation — Jainism is unusually compatible.
      </P>
      <P>
        The world is here. It has always been here. Souls in it do good or bad and the consequences come back through karma. The path of liberation is open to anyone who walks it. There is no special grace, no chosen people, no required ritual. There is only what is, and what you do with what is.
      </P>
      <P>
        This is, theologically, what philosophy of religion sometimes calls a <strong>non-theistic</strong> tradition — and the Jain version is one of the most rigorous expressions of that position the world has produced.
      </P>

      {/* Citations */}
      <div className="rounded-md p-5 mt-12 mb-4 font-ui text-[0.82rem] leading-relaxed" style={{ background: 'var(--bg-elev-2)', border: '1px solid var(--border-2)' }}>
        <h4 className="font-display font-semibold text-[0.7rem] tracking-[0.18em] uppercase text-accent m-0 mb-3">Sources cited</h4>
        <ul className="list-none m-0 p-0">
          <Cite id="cite1" n="1." source="Tattvartha Sutra 5.1–5.4">
            On the six eternal <em>dravyas</em> (substances): the foundational ontology of Jainism. Each is anādi (without beginning) and ananta (without end).
          </Cite>
          <Cite id="cite2" n="2." source="Tattvartha Sutra (entire text)">
            The Tattvartha&apos;s 357 sutras describe the categories of reality, the path of liberation, the structure of the cosmos. There is no sutra invoking or assuming a creator. The omission is not an oversight; it is the position.
          </Cite>
          <Cite id="cite3" n="3." source="Tattvartha Sutra 4.1–4.42">
            On the four orders of devas, their hierarchies, lifespans, powers. Devas are jīvas in celestial births — not creators, and ultimately still subject to the cycle of rebirth.
          </Cite>
        </ul>
      </div>

      <div className="font-ui text-[0.72rem] text-text-3 leading-relaxed py-3 px-4 rounded-md mt-6" style={{ background: 'var(--bg-elev-1)', border: '1px dashed var(--border-2)' }}>
        <strong className="text-accent">Draft note:</strong> This page is a project draft pending Digambara cultural reviewer. The non-theistic position summarized here is well-attested across Digambara and Shvetambara traditions; the framing for modern readers is interpretive and may be revised.
      </div>
    </>
  );
}

function PratikramanArticle() {
  return (
    <>
      <p className="font-display font-medium text-[1.4rem] leading-snug text-ink m-0 mb-6 -tracking-[0.005em]">
        Of all daily Jain practices, <em>pratikramaṇa</em> may be the most important — and the most misunderstood. Literally &ldquo;turning back,&rdquo; it is the daily ritual of moral self-examination, confession, and renewal of vows. It is not optional decoration. It is the practical mechanism by which the Jain path actually works.
      </p>

      <H3>What pratikramaṇa is, etymologically</H3>
      <P>
        <em>Prati-kram</em> = "to step back" or "to turn back." The full word means: a return — a turning back from wrong action, wrong speech, wrong thought — to the soul&apos;s right state. In a single word, the Jain understanding of how transgressions are addressed: not by external forgiveness, but by internal turning.
      </P>
      <P>
        Pratikramaṇa is one of the <strong>six daily essential duties</strong> (<em>ṣaṭ-āvaśyaka</em>) of a serious Jain practitioner.<CiteMark id="cite1" label="1" /> Together with <em>sāmāyika</em> (equanimity), <em>caturviṁśati-stava</em> (praise of the 24 Tirthankaras), <em>vandanā</em> (veneration of acharyas), <em>kāyotsarga</em> (standing meditation), and <em>pratyākhyāna</em> (renunciation), it forms the structural framework of Jain spiritual life.
      </P>

      <H3>Why it matters: saṁvara and nirjarā</H3>
      <P>
        Foundation 02 (<Link href="/foundations/karma-is-not-fate" className="text-accent">Karma is not fate</Link>) explained that liberation in Jainism happens through two mechanisms: <em>saṁvara</em> (stopping new karmic inflow) and <em>nirjarā</em> (shedding accumulated karma).<CiteMark id="cite2" label="2" /> The question that immediately follows: <em>how, concretely, are these accomplished?</em>
      </P>
      <P>
        Pratikramaṇa is the answer. It is one of the most direct practical mechanisms for both saṁvara and nirjarā. Through daily review, the practitioner identifies actions, speech, and thoughts that bound new karma — and by recognizing, confessing, and committing not to repeat them, both halts new inflow and works on shedding what was newly bound.
      </P>
      <blockquote className="my-6 pl-5 italic text-[1.15rem] leading-[1.55] text-text font-display" style={{ borderLeft: '3px solid var(--accent)' }}>
        Pratikramaṇa is what makes the Jain path operational. Without it, the path is theory. With it, the path is daily practice.
      </blockquote>

      <H3>The structure of daily pratikramaṇa</H3>
      <P>
        A traditional pratikramaṇa is not a quick prayer. It is a structured sequence — typically 30 to 60 minutes — that includes:
      </P>
      <ul className="list-disc pl-6 mb-5 [&>li]:mb-2 [&>li]:font-body [&>li]:text-text [&>li]:leading-relaxed">
        <li><strong>Sāmāyika</strong> — first, establish equanimity. The mind quiets; attachments are temporarily set aside.</li>
        <li><strong>Iriyāvahī</strong> — confession of harm done while moving (a Jain monastic / serious lay form acknowledges the impossibility of moving through the world without inadvertently harming any tiny life).</li>
        <li><strong>Logassa / Caturviṁśati-stava</strong> — recitation honoring the 24 Tirthankaras.</li>
        <li><strong>Vandanā</strong> — veneration of one&apos;s acharya.</li>
        <li><strong>The pratikramaṇa proper</strong> — systematic review of conduct over the period (day, fortnight, year): violations of each of the five vows, the twelve lay vows, the daily duties. Each is named and confessed.</li>
        <li><strong>Kāyotsarga</strong> — extended standing meditation, often timed to specific verse-counts.</li>
        <li><strong>Pratyākhyāna</strong> — renunciation; recommitment to specific forms of restraint for the next day.</li>
      </ul>

      <H3>Three timeframes</H3>
      <P>
        Pratikramaṇa is performed in three different intensities:
      </P>
      <ul className="list-disc pl-6 mb-5 [&>li]:mb-2 [&>li]:font-body [&>li]:text-text [&>li]:leading-relaxed">
        <li><strong>Daily</strong> (<em>devasika</em> in the morning, <em>raika</em> in the evening) — review of the past day or night.</li>
        <li><strong>Fortnightly</strong> (<em>pakṣika</em>) — every two weeks, on the new-moon and full-moon days. More extensive.</li>
        <li><strong>Annual</strong> (<em>sāṁvatsarika</em>) — once a year, on the last day of <em>Paryuṣaṇa</em> (or <em>Daśalakṣaṇa</em> for Digambara). The most thorough, year-long review. This is when Jains traditionally seek forgiveness from those they have wronged across the year (the <em>kṣamāpana</em> tradition: &ldquo;<em>micchami dukkaḍaṁ</em>&rdquo; — &ldquo;may my wrongdoings be forgiven&rdquo;).</li>
      </ul>

      <H3>Digambara and Shvetambara variations</H3>
      <P>
        Both traditions practice pratikramaṇa, but the specific liturgical texts differ. Shvetambara pratikramaṇa uses certain Prakrit sutras (Vandittu, Iriyāvahī, etc.) that are more elaborate; Digambara pratikramaṇa is somewhat shorter and uses different specific verses, though the structure (review → confession → renewal) is the same.<CiteMark id="cite3" label="3" />
      </P>
      <P>
        Within Digambara, the Bispanthi and Terapanthi sub-traditions also have minor variations in liturgy. The library&apos;s focus, when we add the full pratikramaṇa text, will be the Digambara form.
      </P>

      <H3>Why pratikramaṇa is harder than it sounds</H3>
      <P>
        The structure of pratikramaṇa <em>looks</em> like confession in other religions: identify wrongdoing, name it, ask for forgiveness, resolve to do better. But the underlying mechanism is different in three important ways.
      </P>
      <P>
        <strong>First, there is no one to forgive you.</strong> In Jainism, no creator god, no Tirthankara, no priest can absolve karma. The confession is to oneself — and the &ldquo;forgiveness,&rdquo; if we can use that word, comes from the karmic inflow stopping and the karmic accumulation shedding. The relief is real, but it is causal, not granted.
      </P>
      <P>
        <strong>Second, the bar is unusually high.</strong> Pratikramaṇa includes not just deeds but <em>speech and thought</em>. Not just intentional harms but <em>incidental</em> ones (the souls inadvertently harmed while walking, drinking water, breathing). Not just gross violations but the subtlest passions (a momentary flash of irritation, a fleeting attachment).
      </P>
      <P>
        <strong>Third, it is not a license to repeat.</strong> Unlike rituals where confession allows the cycle of wrongdoing-and-forgiveness to continue, pratikramaṇa demands actual change. The <em>pratyākhyāna</em> at the end — concrete renunciation for the future — makes this explicit. You don&apos;t just confess; you actually commit.
      </P>

      <H3>Why kṣamāpana matters even more</H3>
      <P>
        The annual <em>sāṁvatsarika pratikramaṇa</em>, performed on the closing day of Paryuṣaṇa (in Shvetambara) or Daśalakṣaṇa (in Digambara), includes the most beautiful Jain practice: <em>kṣamāpana</em>. The practitioner sends — by message, in person, in writing — to every person they may have wronged in the past year, the words: <em>micchami dukkaḍaṁ</em> (Prakrit) or <em>uttam kṣamā</em> (Sanskrit).
      </P>
      <P>
        &ldquo;May my wrongdoings be forgiven.&rdquo; &ldquo;Forgive me; I forgive you.&rdquo;
      </P>
      <P>
        This is unique in world religious practice. Once a year, an entire community spends a day asking forgiveness — actively, individually, by name — from anyone they may have hurt. No deity mediates. No priest absolves. The practitioner does the work directly, and then the relationship is renewed.
      </P>

      <H3>For a modern reader</H3>
      <P>
        Pratikramaṇa is, in many ways, what makes Jainism a living practice rather than a philosophy. The Tattvartha Sutra describes the path; pratikramaṇa walks it. Without it, the soul cannot effectively work on its own karma; with it, the soul has a daily, fortnightly, and yearly mechanism for the only work that actually liberates: the careful, patient, internal turning toward what one ought to be.
      </P>
      <P>
        For someone trained in modern psychology, pratikramaṇa has obvious analogues — daily reflection, the practice of self-honesty, behavior change through repeated awareness. The Jain version is older by 2500 years and operates in a richer ontological context (souls and karma, not just minds and habits) — but the practical structure is the same. Notice. Confess. Commit. Repeat.
      </P>
      <P>
        <strong>The full pratikramaṇa liturgy will be added to this library in a future expansion</strong>, with the Digambara texts in Sanskrit/Prakrit, transliteration, and translation. For now, this article is a doctrinal introduction; the actual practice deserves and requires careful textual production.
      </P>

      {/* Citations */}
      <div className="rounded-md p-5 mt-12 mb-4 font-ui text-[0.82rem] leading-relaxed" style={{ background: 'var(--bg-elev-2)', border: '1px solid var(--border-2)' }}>
        <h4 className="font-display font-semibold text-[0.7rem] tracking-[0.18em] uppercase text-accent m-0 mb-3">Sources cited</h4>
        <ul className="list-none m-0 p-0">
          <Cite id="cite1" n="1." source="Tattvartha Sutra 9.20 — six āvaśyakas">
            On the six daily essential duties of a Jain practitioner: sāmāyika, caturviṁśati-stava, vandanā, pratikramaṇa, kāyotsarga, pratyākhyāna.
          </Cite>
          <Cite id="cite2" n="2." source="Tattvartha Sutra 9.1–9.3 — saṁvara and nirjarā">
            On the two mechanisms of liberation: stopping new karmic inflow (saṁvara) and shedding accumulated karma (nirjarā). Pratikramaṇa is a primary practice for both.
          </Cite>
          <Cite id="cite3" n="3." source="Mūlācāra (Acharya Vattakera) — Digambara monastic conduct">
            Foundational Digambara monastic text describing the form of daily and periodic pratikramaṇa for monks. Lay forms are derived from this.
          </Cite>
        </ul>
      </div>

      <div className="font-ui text-[0.72rem] text-text-3 leading-relaxed py-3 px-4 rounded-md mt-6" style={{ background: 'var(--bg-elev-1)', border: '1px dashed var(--border-2)' }}>
        <strong className="text-accent">Draft note:</strong> This article gives the doctrinal and structural overview of pratikramaṇa. The full liturgical text of Digambara pratikramaṇa is a Phase 2 addition. Reviewer should verify specific liturgical sequences and Digambara/Shvetambara differences described here.
      </div>
    </>
  );
}

function LiberationArticle() {
  return (
    <>
      <p className="font-display font-medium text-[1.4rem] leading-snug text-ink m-0 mb-6 -tracking-[0.005em]">
        In Jainism, no one liberates you. Not a creator god. Not a Tirthankara. Not a guru. Not a ritual. The path is yours to walk; the result is yours to attain.
      </p>

      <H3>What the texts say</H3>
      <P>
        The Tattvartha Sutra opens with: <em>samyag-darśana-jnāna-cāritrāṇi mokṣa-mārgaḥ</em> — &ldquo;right faith, right knowledge, right conduct: the path to liberation.&rdquo;<CiteMark id="cite1" label="1" /> Three components, one path. Notice what is not in the sentence: no agent other than the practitioner. No deity. No grace. The path is constituted entirely by the practitioner&apos;s own faith, knowledge, and conduct.
      </P>
      <P>
        Acharya Kundakunda&apos;s <em>Samayasara</em> makes the same point in stronger terms. The soul (<em>jīva</em>) is its own doer (<em>kartā</em>) and its own enjoyer (<em>bhoktā</em>) of the fruits of its actions.<CiteMark id="cite2" label="2" /> Liberation comes when the soul recognizes its true nature and ceases to act under the influence of passions; nothing external accomplishes this.
      </P>
      <P>
        The Tirthankaras themselves cannot liberate anyone. (See <Link href="/foundations/tirthankaras-and-gods" className="text-accent">Foundation 01</Link>.) They are the <em>avalambana</em> — the example, the support — not the agent. They show the path; they cannot walk it for you.
      </P>

      <H3>Why this is harder than it sounds</H3>
      <P>
        In traditions where liberation is granted by a deity or earned through grace, the practitioner&apos;s primary work is to qualify for that grace — through faith, devotion, ritual, obedience. If liberation depends on someone else&apos;s decision, your effort is necessary but not sufficient.
      </P>
      <P>
        In Jainism, your effort is necessary <em>and</em> sufficient. There is no further variable. Every meditation, every act of restraint, every moment of equanimity, every refusal to react in anger — these <em>are</em> the work. Karma is shed by specific spiritual practices: <em>saṁvara</em> (stopping new karmic inflow) and <em>nirjarā</em> (shedding accumulated karma).<CiteMark id="cite3" label="3" /> No prayer. No ritual. No deity. The mechanism is causal.
      </P>
      <blockquote className="my-6 pl-5 italic text-[1.15rem] leading-[1.55] text-text font-display" style={{ borderLeft: '3px solid var(--accent)' }}>
        Whatever you accumulate, you accumulated. Whatever you shed, you shed. The system has no exception clause.
      </blockquote>

      <H3>Why this is also liberating</H3>
      <P>
        Read another way, this is a remarkably empowering position. Your liberation does not depend on whether you were born into the right family, whether you said the right prayer, whether you happened to be loved by the right deity. It depends on what <em>you</em> do.
      </P>
      <P>
        For a modern reader trained to be skeptical of religion&apos;s arbitrary mechanisms — chosen people, predestination, salvation only through specific rituals — Jainism&apos;s position is unusually clean. The path is open to anyone, regardless of birth, gender, or community. The work is the same. The result is the same.
      </P>

      <H3>The catch</H3>
      <P>
        The catch is that the work is real and continuous. You cannot delegate it. You cannot defer it. You cannot expect a future grace to compensate for present neglect. Every day&apos;s actions actually determine the soul&apos;s trajectory; every day&apos;s practices — pratikramaṇa, sāmāyika, restraint — actually accomplish karma-shedding. (See <Link href="/foundations/pratikraman" className="text-accent">Foundation 04</Link> for the daily mechanism.)
      </P>
      <P>
        Self-effort sounds inspiring until you realize it means there are no shortcuts. Every soul that ever attained mokṣa did so by walking the same path you are currently on. They did not have a magic helper. Neither do you. Neither does anyone.
      </P>

      <div className="rounded-md p-5 mt-12 mb-4 font-ui text-[0.82rem] leading-relaxed" style={{ background: 'var(--bg-elev-2)', border: '1px solid var(--border-2)' }}>
        <h4 className="font-display font-semibold text-[0.7rem] tracking-[0.18em] uppercase text-accent m-0 mb-3">Sources cited</h4>
        <ul className="list-none m-0 p-0">
          <Cite id="cite1" n="1." source="Tattvartha Sutra 1.1">
            The path to liberation as right faith, knowledge, and conduct — entirely constituted by the practitioner.
          </Cite>
          <Cite id="cite2" n="2." source="Samayasara — gathas on kartṛtva">
            Acharya Kundakunda — the soul as its own doer and enjoyer; liberation by self-purification.
          </Cite>
          <Cite id="cite3" n="3." source="Tattvartha Sutra 9.1–9.3">
            On saṁvara and nirjarā as the practical mechanisms of karmic shedding.
          </Cite>
        </ul>
      </div>
      <DraftNote />
    </>
  );
}

function AhimsaArticle() {
  return (
    <>
      <p className="font-display font-medium text-[1.4rem] leading-snug text-ink m-0 mb-6 -tracking-[0.005em]">
        Most people who know one thing about Jainism know that Jains are vegetarian. That is true, but it&apos;s the visible tip of a much larger ethic. <em>Ahimsa</em> in Jain philosophy is the most rigorous account of non-violence ever produced by a human tradition.
      </p>

      <H3>The fivefold extension</H3>
      <P>
        <em>Ahimsa</em> means non-harm — but the Jain tradition extends &ldquo;harm&rdquo; in five dimensions:
      </P>
      <ul className="list-disc pl-6 mb-5 [&>li]:mb-2 [&>li]:font-body [&>li]:text-text [&>li]:leading-relaxed">
        <li><strong>By action, speech, or thought</strong> — harm in any of the three.</li>
        <li><strong>Done by oneself, caused by another, or approved of</strong> — three modes of complicity.</li>
        <li><strong>Toward all life forms, not just humans</strong> — including the smallest microscopic souls.</li>
        <li><strong>To one-sensed beings (plants, water, fire, earth, air) as well as multi-sensed</strong> — though the Jain ethic recognizes degrees, the principle extends to all.</li>
        <li><strong>Even &ldquo;intentional&rdquo; harm and &ldquo;incidental&rdquo; harm both bind karma</strong> — though differently.</li>
      </ul>
      <P>
        The result: ahimsa is not a single rule. It is a complete framework for evaluating any action — what it harms, who, intentionally or not, in what way, and whether it could have been avoided.<CiteMark id="cite1" label="1" />
      </P>

      <H3>Why vegetarianism is necessary but insufficient</H3>
      <P>
        Killing animals for food directly violates ahimsa toward multi-sensed beings. So Jains are vegetarian — and traditionally also avoid root vegetables (whose harvest kills countless tiny soul-bearing organisms in the soil).
      </P>
      <P>
        But ahimsa demands much more. A traditional Jain monk sweeps the ground before sitting, filters water before drinking, walks only in daylight (to avoid stepping on insects invisible at night), wears a mouth-cover (to avoid inhaling tiny life). The visible practices look extreme until you understand the logic: the practitioner is taking ahimsa to its consistent conclusion.
      </P>

      <H3>Ahimsa in speech and thought</H3>
      <P>
        Modern moral philosophy mostly addresses physical harm. Jain ahimsa is older and broader: harsh speech is <em>himsā</em>; deceptive speech is <em>himsā</em>; cruel thought, even unspoken, is <em>himsā</em>. Each binds karma. Each is something to confess in pratikramaṇa.
      </P>
      <P>
        For a modern reader, this maps surprisingly well to current debates: psychological harm, structural harm, harms-by-omission, the moral weight of speech that incites violence. Jainism was working through these questions in the form of <em>vāñ-māna-kāya-yoga</em> — the threefold yoga of speech, thought, and body — for over two millennia.
      </P>

      <H3>Why this matters now</H3>
      <P>
        The world is now urgently revisiting questions of ecological harm, animal welfare, factory farming, climate change. Jain ahimsa was 2500 years ahead on these. The framework — every life matters; harm is to be minimized in thought, speech, and action; the small acts add up — provides one of the few worked-out ethical traditions actually equipped for the moment.
      </P>
      <P>
        For someone who arrives at vegetarianism, animal-rights activism, environmentalism, or careful consumption from secular reasoning, Jainism is in some ways the older tradition that already worked through these questions in a religious-philosophical register. The practical conclusions converge.
      </P>
      <blockquote className="my-6 pl-5 italic text-[1.15rem] leading-[1.55] text-text font-display" style={{ borderLeft: '3px solid var(--accent)' }}>
        Jain ahimsa is not vegetarianism plus extras. It is a complete moral framework, of which vegetarianism is one consistent application.
      </blockquote>

      <div className="rounded-md p-5 mt-12 mb-4 font-ui text-[0.82rem] leading-relaxed" style={{ background: 'var(--bg-elev-2)', border: '1px solid var(--border-2)' }}>
        <h4 className="font-display font-semibold text-[0.7rem] tracking-[0.18em] uppercase text-accent m-0 mb-3">Sources cited</h4>
        <ul className="list-none m-0 p-0">
          <Cite id="cite1" n="1." source="Tattvartha Sutra 7.8 — definition of himsā">
            <em>&ldquo;Pramatta-yogāt prāṇa-vyaparopaṇaṁ hiṁsā&rdquo;</em> — Severance of life-energies through careless activity is <em>hiṁsā</em>. The definition is technical: harm caused even by carelessness counts.
          </Cite>
          <Cite id="cite2" n="2." source="Tattvartha Sutra 7.1, 7.4">
            On <em>vrata</em> (vows), with ahimsa as the first and foundational. The five great vows of monks (mahāvrata) and the lesser vows of laity (anuvrata) both begin with ahimsa.
          </Cite>
          <Cite id="cite3" n="3." source="Acharanga Sutra (Shvetambara canonical)">
            One of the most extensive early treatments of ahimsa, with detailed analysis of injury to one-sensed and multi-sensed beings.
          </Cite>
        </ul>
      </div>
      <DraftNote />
    </>
  );
}

function AparigrahaArticle() {
  return (
    <>
      <p className="font-display font-medium text-[1.4rem] leading-snug text-ink m-0 mb-6 -tracking-[0.005em]">
        Marie Kondo, on the surface. Underneath: a complete philosophical analysis of how possessions distort the mind.
      </p>

      <H3>What aparigraha actually is</H3>
      <P>
        <em>Parigraha</em> means &ldquo;grasping&rdquo; — taking hold of, claiming as one&apos;s own. <em>Aparigraha</em> is its negation: non-grasping, non-attachment, non-possessiveness. It is the fifth and final great vow of Jain monastic life.<CiteMark id="cite1" label="1" />
      </P>
      <P>
        For Jain monks, this is taken to its logical conclusion: a Digambara monk owns literally nothing — no clothes, no money, no property. Even shelter is borrowed; even food is consumed only as it is given. The practice is austere because the principle is uncompromising.
      </P>

      <H3>Why possessions matter</H3>
      <P>
        The Jain analysis is more interesting than &ldquo;possessions are bad.&rdquo; The argument is structural: possessions, when held with attachment, distort the mind&apos;s relationship with reality. They produce <em>moha</em> (delusion) — the false sense that the soul is identified with what it owns.<CiteMark id="cite2" label="2" />
      </P>
      <P>
        A person attached to wealth fears its loss; the fear shapes their decisions. Attached to status, they pursue it; the pursuit shapes their character. The possessions are not the problem; the <em>attachment</em> is. <em>Aparigraha</em> targets the attachment, not the possessions per se.
      </P>

      <H3>Two kinds of parigraha</H3>
      <P>
        Jain analysis distinguishes <em>bāhya parigraha</em> (external possessions — money, property, clothes, relationships) and <em>antaraṅga parigraha</em> (internal possessions — attachments, aversions, false views, deluded passions). Both bind karma.
      </P>
      <P>
        For lay practitioners, the limit on external possessions is <em>parigraha-parimāṇa-vrata</em> — voluntarily setting an upper limit on how much one will own. Beyond that limit, the surplus is given away. The principle: you choose what you need, not what you can accumulate.<CiteMark id="cite3" label="3" />
      </P>

      <H3>Why this is more than minimalism</H3>
      <P>
        Modern minimalism is largely aesthetic and psychological — fewer possessions for clarity, calm, focus. Useful, but not the same.
      </P>
      <P>
        Jain aparigraha is metaphysical: possessions actually obscure the soul&apos;s perception of reality. The minimalist asks: <em>does this spark joy?</em> The Jain practitioner asks: <em>does this attach my soul to the conditions of samsāra?</em> Different question, different stakes.
      </P>
      <P>
        For a modern reader, the deeper insight is this: every possession comes with a corresponding mental state of holding-it. The Jain tradition was working out the cognitive cost of ownership for over two millennia.
      </P>

      <H3>Aparigraha as economic critique</H3>
      <P>
        For a society organized around consumption, aparigraha is a serious challenge. The Jain principle applied at scale would be incompatible with consumer capitalism in roughly its current form. It is no accident that traditional Jain communities have produced unusually high concentrations of careful, restrained, philanthropic wealth — the principle works as a brake on accumulation, not a prohibition on it.
      </P>

      <div className="rounded-md p-5 mt-12 mb-4 font-ui text-[0.82rem] leading-relaxed" style={{ background: 'var(--bg-elev-2)', border: '1px solid var(--border-2)' }}>
        <h4 className="font-display font-semibold text-[0.7rem] tracking-[0.18em] uppercase text-accent m-0 mb-3">Sources cited</h4>
        <ul className="list-none m-0 p-0">
          <Cite id="cite1" n="1." source="Tattvartha Sutra 7.1 — five vows">
            Aparigraha as the fifth of the five great vows (mahāvrata) for monks; with anuvrata version for lay practitioners.
          </Cite>
          <Cite id="cite2" n="2." source="Tattvartha Sutra 7.12 — definition">
            <em>&ldquo;Mūrcchā parigrahaḥ&rdquo;</em> — &ldquo;Parigraha is delusion (mūrcchā).&rdquo; The most precise Jain analysis: it is not the object but the mental state that constitutes parigraha.
          </Cite>
          <Cite id="cite3" n="3." source="Ratnakaranda Shravakachara">
            On <em>parigraha-parimāṇa-vrata</em> — the lay vow of voluntarily setting limits on possessions.
          </Cite>
        </ul>
      </div>
      <DraftNote />
    </>
  );
}

function AnekantavadaArticle() {
  return (
    <>
      <p className="font-display font-medium text-[1.4rem] leading-snug text-ink m-0 mb-6 -tracking-[0.005em]">
        The doctrine of multiple viewpoints. Reality has many sides; any single perspective gives only a partial view. Built-in epistemic humility — and arguably Jainism&apos;s most important contribution to world philosophy.
      </p>

      <H3>What anekantavada says</H3>
      <P>
        <em>Aneka-anta-vāda</em> = &ldquo;the doctrine of not-one-sided.&rdquo; In Jain epistemology, no statement about reality is fully true on its own; every statement captures only one perspective among many. The reality of any complex thing is multi-aspected.<CiteMark id="cite1" label="1" />
      </P>
      <P>
        The classical example: a clay pot. From the standpoint of substance (<em>dravya-naya</em>), it is clay — the substance never changes; only the form changes. From the standpoint of mode (<em>paryāya-naya</em>), it is a pot — the clay is currently in pot-form, having previously been lump-form, and may later be shard-form. Both views are correct. Neither is complete.
      </P>

      <H3>The seven nayas</H3>
      <P>
        Classical Jain logic developed seven standpoints (<em>nayas</em>) from which any thing can be examined. Together with <em>pramāṇa</em> (full means of valid knowledge), they form the Jain epistemological apparatus.<CiteMark id="cite2" label="2" />
      </P>
      <P>
        The point is not that all views are equally true — that would be relativism. The point is that all true views are perspectival, and the wise mind holds the perspectival nature of its own knowing in awareness. Truth is not the absence of perspective; truth is the careful navigation of multiple perspectives.
      </P>

      <H3>Syādvāda — the language of qualified statements</H3>
      <P>
        Syādvāda (the doctrine of conditional predication) is the linguistic counterpart of anekantavāda. Every assertion is to be qualified with <em>syāt</em> — &ldquo;in some respect,&rdquo; &ldquo;from a certain standpoint.&rdquo; <em>The pot exists</em> becomes <em>in some respect, the pot exists</em>; <em>the pot does not exist</em> becomes <em>in some respect, the pot does not exist</em>. Both can be true — they refer to different aspects.<CiteMark id="cite3" label="3" />
      </P>
      <P>
        This is not equivocation. It is precision. Jain logicians worked out a sevenfold predication — the <em>saptabhaṅgī</em> — that handles assertion, negation, both, neither, and the inexpressible across multiple standpoints simultaneously.
      </P>

      <H3>Why this matters historically</H3>
      <P>
        Anekantavāda gave Jainism a built-in protection against the kind of dogmatism that produces violent religious conflict. If your own doctrine assures you that every statement is perspectival, you cannot easily claim absolute certainty against another tradition.
      </P>
      <P>
        The historical record bears this out. Jainism, alone among major traditions, has essentially no history of religious warfare against other faiths. Internal disagreements (Digambara/Shvetambara, Bispanthi/Terapanthi) exist; missionary aggression and sectarian violence largely do not. Anekantavāda is part of the reason.
      </P>

      <H3>Why this matters now</H3>
      <P>
        We live in a time of unprecedented epistemic polarization. Algorithms reward certainty; social media incentivizes the loudest position; political life is conducted as if every issue admits one correct answer.
      </P>
      <P>
        Anekantavāda is, in this context, almost subversive. It says: <em>even when you are right, you are not telling the whole story</em>. It says: <em>the perspective from which you see is real, but it is one among many</em>. It says: <em>the wise mind cultivates the discipline of holding multiple views at once, not the discipline of defeating opponents</em>.
      </P>
      <P>
        For a modern reader, this is one of the most important contributions any religious tradition has ever made to the question of <em>how to think about thinking</em>. The fact that Jain thinkers worked out the formal logic of perspectival truth two thousand years before Western philosophy got there is, frankly, remarkable.
      </P>
      <blockquote className="my-6 pl-5 italic text-[1.15rem] leading-[1.55] text-text font-display" style={{ borderLeft: '3px solid var(--accent)' }}>
        Anekantavāda is not the claim that you are wrong. It is the claim that even when you are right, you are not entirely right.
      </blockquote>

      <div className="rounded-md p-5 mt-12 mb-4 font-ui text-[0.82rem] leading-relaxed" style={{ background: 'var(--bg-elev-2)', border: '1px solid var(--border-2)' }}>
        <h4 className="font-display font-semibold text-[0.7rem] tracking-[0.18em] uppercase text-accent m-0 mb-3">Sources cited</h4>
        <ul className="list-none m-0 p-0">
          <Cite id="cite1" n="1." source="Tattvartha Sutra 1.6 — pramāṇa and naya">
            Knowledge of categories is achieved through both pramāṇa (full means of valid knowledge) and naya (perspectival standpoints). This sutra is the seed from which anekantavāda develops.
          </Cite>
          <Cite id="cite2" n="2." source="Pramāṇa-naya-tattvāloka (Vādideva Sūri)">
            Classical Jain epistemological text systematizing the seven-naya analysis. Jain logic developed extensively through the medieval period as a counter-tradition to Buddhist and Hindu logical schools.
          </Cite>
          <Cite id="cite3" n="3." source="Aapta-mīmāṁsā (Acharya Samantabhadra)">
            The classical defense of syādvāda and the saptabhaṅgī (sevenfold predication). Samantabhadra&apos;s argument that any consistent ontology requires perspectival language.
          </Cite>
        </ul>
      </div>
      <DraftNote />
    </>
  );
}

function HardQuestionsArticle() {
  return (
    <>
      <p className="font-display font-medium text-[1.4rem] leading-snug text-ink m-0 mb-6 -tracking-[0.005em]">
        Some traditions paper over their hard questions. This one does not. Here are the genuinely difficult positions in Jain doctrine — the ones that get debated within the tradition itself.
      </p>

      <H3>Why this article exists</H3>
      <P>
        A library that only presents the appealing parts of a tradition is doing apologetics, not scholarship. The Jain tradition is rigorous and ancient; it also includes positions that modern readers — and many practitioners — find genuinely difficult. We address them here directly.
      </P>

      <H3>1. Female ordination and the Mallinath question</H3>
      <P>
        Digambara doctrine traditionally holds that final mokṣa in the present birth requires the male body and the complete <em>digambara</em> (sky-clad) state. Women, in the Digambara view, can advance very far on the path but must take a male body in the next birth to attain final liberation.
      </P>
      <P>
        Shvetambara tradition rejects this position and holds that women can attain mokṣa directly. The most famous illustration of the difference is <strong>Mallinath</strong>, the 19th Tirthankara — male in Digambara tradition, female in Shvetambara. (See <Link href="/tirthankaras" className="text-accent">the Tirthankaras page</Link>.)
      </P>
      <P>
        For a modern reader, the Digambara position is genuinely hard to receive — and is debated even within the broader Jain community. We do not paper over the difference. The library follows Digambara tradition while acknowledging that this is the most-contested doctrinal position between the two traditions.
      </P>

      <H3>2. Digambara monastic nudity</H3>
      <P>
        Digambara male monks practice complete nudity as the visible expression of total <em>aparigraha</em> (non-possession). They own no clothes, no shelter, no money. They eat only what is given, only once a day, only with bare hands.
      </P>
      <P>
        For a modern reader, this is challenging — a practice that is illegal in many countries, considered indecent by mainstream culture, and difficult to comprehend without a sympathetic understanding of the underlying logic.
      </P>
      <P>
        The logic: if aparigraha means non-possession, then any clothing is a possession; any concealment is a form of social attachment. The Digambara monk takes the principle to its consistent conclusion. It is austere because the principle, fully applied, demands austerity. The community treats the practice with utmost reverence; it is not exhibitionism in any sense recognizable to modern Western categories.
      </P>

      <H3>3. Sallekhana — the contested practice of fasting unto death</H3>
      <P>
        <em>Sallekhana</em> (also <em>santhārā</em>) is the traditional Jain practice in which a person who recognizes that death is near voluntarily undertakes a final fast — gradually withdrawing food, then water, while in deep meditation — until the body releases naturally.
      </P>
      <P>
        For modern readers and modern legal systems, this is genuinely difficult. Is it suicide? Is it euthanasia? Is it religious freedom? An Indian high court briefly criminalized it in 2015; the Supreme Court stayed that ruling. The community itself debates its proper application.
      </P>
      <P>
        The traditional position: sallekhana is performed only by those whose physical condition is already terminal or whose old age is irreversible, only with the consent of family and the community, only under the supervision of an acharya, and only as the culmination of a lifetime of spiritual practice. It is held to be entirely different from suicide (which arises from despair) and from euthanasia (which is administered to another). In its proper form, it is the final act of <em>nirjarā</em> — releasing the body without attachment.
      </P>
      <P>
        Whether modern frameworks of medical ethics can accommodate this is a live question. We do not resolve it here; we name it.
      </P>

      <H3>4. Treatment of one-sensed beings</H3>
      <P>
        Jain ahimsa extends to all life, including one-sensed beings (plants, water, fire, earth, air organisms). Traditional practice avoids root vegetables, filters water, restricts fire use. For a modern reader concerned about ecological coherence, this can look impractical — but it is the consistent application of the principle that <em>all</em> life matters.
      </P>
      <P>
        The hard question: where exactly is the line drawn? Different Jain communities draw it differently. Strict ascetics avoid even certain fruits and grains; ordinary lay practitioners eat them. The doctrine demands a distinction the doctrine does not fully resolve.
      </P>

      <H3>5. The role of women in Digambara ritual practice</H3>
      <P>
        Beyond the question of mokṣa, Digambara temple practice traditionally has different roles for women — for example, certain inner-sanctum approaches that are restricted. Shvetambara practice has different (and itself contested) restrictions.
      </P>
      <P>
        Modern Digambara communities are renegotiating these practices. The library acknowledges the traditional positions; the community works through what they look like in contemporary practice.
      </P>

      <H3>6. The historical reality of the 24 Tirthankaras</H3>
      <P>
        Of the 24 Tirthankaras, modern historical evidence supports the existence of Mahavir (24th, 6th c. BCE) and likely Parshvanath (23rd, ~9-8th c. BCE). The earlier 22 are not corroborated by external historical evidence; the traditional dates (Adinath at the dawn of the present time-cycle, billions of years ago) do not align with modern cosmology.
      </P>
      <P>
        For a modern reader: how to take these accounts? Different practitioners take different positions. Some hold them as literal history; others as sacred narrative whose function is doctrinal rather than historical; others as a layered text of multiple kinds of truth. The library does not adjudicate; it presents what the tradition holds.
      </P>

      <H3>Why this matters</H3>
      <P>
        Engaging seriously with a tradition means engaging with the parts that are hard. The Jain community has been working through these questions for centuries; modern readers come to them with new frameworks but the same questions.
      </P>
      <P>
        Honest naming is the first step. This page is the start of a longer conversation, not the end.
      </P>

      <DraftNote />
    </>
  );
}

function DraftNote() {
  return (
    <div className="font-ui text-[0.72rem] text-text-3 leading-relaxed py-3 px-4 rounded-md mt-6" style={{ background: 'var(--bg-elev-1)', border: '1px dashed var(--border-2)' }}>
      <strong className="text-accent">Draft note:</strong> This article is a project draft pending Digambara cultural reviewer. Citations to primary texts are real; the modern English framing is project work and may be revised.
    </div>
  );
}

function Cite({ id, n, source, children }: { id: string; n: string; source: string; children: React.ReactNode }) {
  return (
    <li id={id} className="text-text-2 pb-3 mb-3 last:mb-0 last:pb-0 last:border-0" style={{ borderBottom: '1px solid var(--border)' }}>
      <span className="font-display font-semibold text-ink mr-2">{n}</span>
      <strong className="text-text">{source}</strong> — {children}
    </li>
  );
}
