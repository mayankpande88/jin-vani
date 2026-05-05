import { notFound } from 'next/navigation';

const ARTICLES: Record<string, { num: string; title: string; readingMinutes: number; render: () => React.ReactNode }> = {
  'tirthankaras-and-gods': {
    num: '01',
    title: 'Tirthankaras and the question of "gods"',
    readingMinutes: 6,
    render: () => <TirthankarasArticle />,
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

function Cite({ id, n, source, children }: { id: string; n: string; source: string; children: React.ReactNode }) {
  return (
    <li id={id} className="text-text-2 pb-3 mb-3 last:mb-0 last:pb-0 last:border-0" style={{ borderBottom: '1px solid var(--border)' }}>
      <span className="font-display font-semibold text-ink mr-2">{n}</span>
      <strong className="text-text">{source}</strong> — {children}
    </li>
  );
}
