import Link from 'next/link';

const FOUNDATIONS = [
  {
    num: '01',
    slug: 'tirthankaras-and-gods',
    title: 'Tirthankaras and the question of "gods"',
    summary:
      'What the Jain texts actually say. Yes, Jainism has devas (Tattvartha Ch. 4) — but Tirthankaras are something different. With citations from Tattvartha, Samayasara, Ratnakaranda, and Bhaktamara itself.',
    status: 'published',
  },
  { num: '02', title: 'Karma is not fate — it&apos;s accountability', summary: 'Why Jainism\'s strict-cause-and-effect karma is closer to physics than to "what goes around comes around."' },
  { num: '03', title: 'There is no creator god — and that\'s not a bug', summary: 'Jainism has no creator. The world is eternal, governed by natural laws. What this means, and why it has been so for 2500 years.' },
  { num: '04', title: 'Liberation is by your own effort', summary: 'Not by grace. Not by belief. Not by ritual alone. The implication for how you live today.' },
  { num: '05', title: 'Ahimsa is not just diet', summary: 'Vegetarianism is the most visible part of ahimsa — but ahimsa is a complete ethic of harm reduction in thought, speech, and action.' },
  { num: '06', title: 'Aparigraha is not just minimalism', summary: 'Non-attachment looks like Marie Kondo on the surface. Underneath, it\'s a critique of how possessions distort the mind itself.' },
  { num: '07', title: 'Anekantavada means you might be wrong', summary: 'The doctrine of "many-sided viewpoint" — built-in epistemic humility, and arguably Jainism\'s most important contribution to world philosophy.' },
  { num: '08', title: 'The tradition has hard questions', summary: 'Digambara nudity, female ordination, sallekhana fasts. Real, contested, debated within the tradition itself. We don\'t paper over these.' },
];

export default function FoundationsIndex() {
  return (
    <main className="max-w-[480px] lg:max-w-[1100px] mx-auto px-5 lg:px-8 pb-24 lg:pb-12">
      <section className="text-center pt-12 pb-8 mb-12" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="font-ui text-[0.7rem] font-bold tracking-[0.18em] uppercase text-accent mb-3">Foundations</div>
        <h1 className="font-display font-semibold text-text leading-[1.15] m-0 mb-4 tracking-tight" style={{ fontSize: 'clamp(2rem, 5vw, 2.6rem)' }}>
          What Jainism Actually Says
        </h1>
        <p className="font-body text-[1.05rem] text-text-2 leading-relaxed max-w-[32rem] mx-auto m-0">
          Eight things often misunderstood — answered honestly. No apologetics. No claims that ancient texts predicted modern science. Just what the tradition holds, what it doesn&apos;t, and where the genuinely hard questions still are.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-12">
        {FOUNDATIONS.map((f) => {
          const card = (
            <article
              className={`rounded-lg p-6 flex flex-col gap-3 relative h-full ${f.status === 'published' ? 'transition-all duration-200 hover:-translate-y-0.5' : 'opacity-55'}`}
              style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)' }}
            >
              <span className="font-display font-semibold text-[0.75rem] tracking-[0.2em] text-accent">{f.num}</span>
              <h3 className="font-display font-semibold text-[1.15rem] leading-snug text-text m-0 tracking-tight" dangerouslySetInnerHTML={{ __html: f.title }} />
              <p className="font-body text-[0.92rem] text-text-2 leading-relaxed m-0">{f.summary}</p>
              <span
                className="font-ui text-[0.62rem] tracking-[0.16em] uppercase font-bold py-1 px-2.5 rounded-pill self-start mt-auto"
                style={{
                  background: f.status === 'published' ? 'var(--bg-elev-3)' : 'var(--bg-elev-2)',
                  color: f.status === 'published' ? 'var(--accent)' : 'var(--text-3)',
                }}
              >
                {f.status === 'published' ? 'Read · cited' : 'Coming'}
              </span>
            </article>
          );
          if (f.status === 'published' && f.slug) {
            return (
              <Link key={f.num} href={`/foundations/${f.slug}`} className="no-underline text-text">
                {card}
              </Link>
            );
          }
          return <div key={f.num}>{card}</div>;
        })}
      </div>
    </main>
  );
}
