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
};

export function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }));
}

export default async function FoundationArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) notFound();

  return (
    <main className="max-w-[480px] lg:max-w-[36rem] mx-auto px-5 lg:px-8 pb-24 lg:pb-12">
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

function Cite({ id, n, source, children }: { id: string; n: string; source: string; children: React.ReactNode }) {
  return (
    <li id={id} className="text-text-2 pb-3 mb-3 last:mb-0 last:pb-0 last:border-0" style={{ borderBottom: '1px solid var(--border)' }}>
      <span className="font-display font-semibold text-ink mr-2">{n}</span>
      <strong className="text-text">{source}</strong> — {children}
    </li>
  );
}
