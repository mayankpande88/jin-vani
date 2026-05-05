import Link from 'next/link';
import { GLOSSARY, CATEGORY_LABELS, type GlossaryEntry } from '@/lib/glossary';

export const metadata = {
  title: 'Glossary · Jin-vani',
  description: 'A glossary of key Sanskrit, Prakrit, and Jain terms used across the library — soul, karma, moksha, anekantavada, and others, with citations to primary texts.',
};

export default function GlossaryPage() {
  const byCategory: Record<string, GlossaryEntry[]> = {};
  for (const e of GLOSSARY) {
    (byCategory[e.category] ||= []).push(e);
  }

  const orderedCategories: GlossaryEntry['category'][] = [
    'philosophy', 'people', 'cosmology', 'practice', 'ethics', 'tradition',
  ];

  return (
    <main className="max-w-[480px] lg:max-w-[920px] mx-auto px-5 lg:px-8 pb-24 lg:pb-12" data-pagefind-body>

      <section className="text-center pt-12 pb-8 mb-8" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="font-ui text-[0.7rem] font-bold tracking-[0.18em] uppercase text-accent mb-3">Glossary</div>
        <h1 className="font-display font-semibold text-text leading-[1.15] m-0 mb-4 tracking-tight" style={{ fontSize: 'clamp(2rem, 5vw, 2.6rem)' }}>
          Key Terms in Jainism
        </h1>
        <p className="font-body text-[1.05rem] text-text-2 leading-relaxed max-w-[36rem] mx-auto m-0">
          {GLOSSARY.length} terms used across this library — Sanskrit, Prakrit, and English. Tap any to read its definition. Where the term has citations to primary texts, those are listed.
        </p>
      </section>

      {/* Quick jump nav */}
      <nav className="flex flex-wrap gap-2 mb-12 justify-center">
        {orderedCategories.map((cat) => (
          <a
            key={cat}
            href={`#${cat}`}
            className="font-ui text-[0.78rem] no-underline px-4 py-2 rounded-pill transition-all"
            style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)', color: 'var(--text-2)' }}
          >
            {CATEGORY_LABELS[cat]}
          </a>
        ))}
      </nav>

      {orderedCategories.map((cat) => {
        const entries = (byCategory[cat] || []).sort((a, b) => a.term.localeCompare(b.term));
        if (entries.length === 0) return null;
        return (
          <section key={cat} id={cat} className="mb-12 scroll-mt-24">
            <h2 className="font-display font-semibold text-text text-[1.5rem] tracking-tight mb-6 pb-3" style={{ borderBottom: '1px solid var(--border)' }}>
              {CATEGORY_LABELS[cat]}
              <span className="ml-3 font-ui text-[0.78rem] text-text-3 font-normal">({entries.length})</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {entries.map((e) => (
                <article
                  key={e.id}
                  id={e.id}
                  className="rounded-lg p-5 scroll-mt-24"
                  style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)' }}
                >
                  <div className="flex items-baseline gap-3 flex-wrap mb-2">
                    <h3 className="font-display font-semibold text-text text-[1.05rem] m-0">{e.term}</h3>
                    {e.termSk && <span className="font-sk text-ink text-[1.1rem]">{e.termSk}</span>}
                  </div>
                  <p className="font-body text-[0.95rem] text-text leading-relaxed m-0 mb-3">{e.short}</p>
                  {e.long && <p className="font-body text-[0.88rem] text-text-2 leading-relaxed m-0 mb-3">{e.long}</p>}
                  {e.notUse && (
                    <p className="font-ui text-[0.78rem] text-text-3 m-0 mb-3">
                      <strong className="text-vermillion">Not:</strong> {e.notUse}
                    </p>
                  )}
                  {e.citedIn && e.citedIn.length > 0 && (
                    <div className="font-ui text-[0.7rem] text-text-3 mb-2">
                      <strong className="font-semibold tracking-wide uppercase text-accent">Cited in: </strong>
                      {e.citedIn.map((c, i) => (
                        <span key={i}>{i > 0 && ' · '}{c.source}</span>
                      ))}
                    </div>
                  )}
                  {e.seeAlso && e.seeAlso.length > 0 && (
                    <div className="font-ui text-[0.78rem] text-text-3 flex flex-wrap gap-x-2 gap-y-1 items-center">
                      <span className="font-semibold tracking-wide uppercase text-[0.65rem] text-accent">See also:</span>
                      {e.seeAlso.map((id) => (
                        <a key={id} href={`#${id}`} className="text-text-2 hover:text-accent">
                          {GLOSSARY.find((x) => x.id === id)?.term || id}
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        );
      })}

      <div className="font-ui text-[0.78rem] text-text-3 leading-relaxed py-4 px-5 rounded-md mt-12" style={{ background: 'var(--bg-elev-1)', borderLeft: '3px solid var(--accent)' }}>
        <strong className="text-text-2 block mb-1 font-semibold">Note</strong>
        Definitions and translations are draft pending Digambara cultural reviewer. Where terms have multiple legitimate translations or contested usages across sub-traditions, the entry uses the form most common in the Digambara-focused texts of this library. <Link href="/what-is-jainism" className="text-accent">See &ldquo;What is Jainism?&rdquo;</Link> for context on how these terms fit together, and <Link href="/foundations" className="text-accent">Foundations</Link> for deeper treatments.
      </div>
    </main>
  );
}
