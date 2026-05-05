import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllTexts, loadText, toDevanagariNum } from '@/lib/content';
import { Markdown } from '@/components/Markdown';

export function generateStaticParams() {
  return getAllTexts().map((t) => ({ slug: t.slug }));
}

export default async function TextPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const text = loadText(slug);
  if (!text) notFound();

  return (
    <main className="max-w-[480px] lg:max-w-[1100px] mx-auto px-5 lg:px-8 pb-24 lg:pb-12">

      <div className="block lg:grid lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-8 lg:items-start mb-16">

        <div>
          {/* Cover */}
          <section
            className="my-8 px-6 py-12 text-center rounded-xl relative overflow-hidden"
            style={{
              background: 'radial-gradient(ellipse 600px 300px at 50% 0%, var(--accent-glow), transparent 60%), var(--bg-elev-1)',
              border: '1px solid var(--border)',
            }}
          >
            <div
              className="w-16 h-16 mx-auto mb-5 rounded-full grid place-items-center font-sk text-[1.8rem] font-bold"
              style={{
                background: 'linear-gradient(135deg, var(--accent), var(--ink-sk))',
                color: 'var(--bg)',
                boxShadow: '0 0 24px rgba(232, 137, 58, 0.18)',
              }}
            >
              {text.title_sk.charAt(0)}
            </div>
            <div className="font-ui text-[0.7rem] font-bold tracking-[0.18em] uppercase text-accent mb-3">
              {text.category} · {text.tradition}
            </div>
            <h1 className="font-sk text-ink leading-[1.2] m-0 mb-3" style={{ fontSize: 'clamp(2.2rem, 7vw, 3rem)' }}>
              {text.title_sk}
            </h1>
            <p className="font-display font-medium text-base text-text-2 m-0 mb-6 tracking-wide">{text.title_en}</p>
            <div className="inline-flex gap-1 font-ui text-[0.78rem] flex-wrap justify-center">
              <Pill>{text.verseCount} {text.category === 'mantra' ? 'lines' : 'verses'}</Pill>
              <Pill>~{text.estReadingMinutes} min</Pill>
              <Pill>{text.author}</Pill>
            </div>
          </section>

          {/* Intro */}
          {text.intro_md && (
            <article className="rounded-lg p-6 mb-8 font-body text-base text-text-2 leading-relaxed" style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)' }}>
              <Markdown>{text.intro_md}</Markdown>
            </article>
          )}

          {/* Story link */}
          {text.storySlug && (
            <Link
              href={`/${slug}/story`}
              className="flex items-center gap-4 rounded-lg p-5 mb-6 no-underline text-text transition-all hover:-translate-y-0.5"
              style={{ background: 'var(--bg-elev-2)', border: '1px solid var(--border-2)' }}
            >
              <div className="w-12 h-12 rounded-full grid place-items-center flex-shrink-0 text-xl" style={{ background: 'linear-gradient(135deg, var(--accent), var(--ink-sk))', color: 'var(--bg)' }}>
                📖
              </div>
              <div className="flex-1">
                <div className="font-ui text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent mb-0.5">First time here?</div>
                <h3 className="font-display font-semibold text-base text-text m-0">Read the story behind it</h3>
              </div>
              <div className="text-accent text-xl flex-shrink-0">→</div>
            </Link>
          )}

          {/* Author card */}
          {text.authorCard_md && (
            <aside
              className="rounded-lg p-6 mb-6"
              style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)', borderLeft: '3px solid var(--ink-sk)' }}
            >
              <div className="font-ui text-[0.65rem] font-bold tracking-[0.18em] uppercase text-ink mb-2">About the Author</div>
              <h3 className="font-display font-semibold text-[1.2rem] text-text m-0 mb-1 tracking-tight">{text.author}</h3>
              <div className="font-body italic text-[0.85rem] text-text-3 m-0 mb-4">{text.era}</div>
              <div className="font-body text-[0.95rem] text-text-2 leading-relaxed">
                <Markdown>{text.authorCard_md}</Markdown>
              </div>
            </aside>
          )}

          {/* Begin reading */}
          <Link
            href={`/${slug}/1`}
            className="flex items-center justify-center gap-2 w-full font-ui font-semibold text-[0.95rem] py-5 px-6 rounded-pill no-underline transition-all hover:-translate-y-0.5"
            style={{ background: 'var(--accent)', color: 'var(--bg)', boxShadow: '0 0 24px rgba(232, 137, 58, 0.18)' }}
          >
            Begin reading · {text.category === 'mantra' ? 'Read now' : 'Verse 1'}
            <span className="text-xl">→</span>
          </Link>
        </div>

        {/* Verse grid (right side on desktop, sticky) */}
        <aside className="lg:sticky lg:top-24 mt-12 lg:mt-0">
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="font-display font-semibold text-[1.35rem] text-text m-0 tracking-tight">
              {text.category === 'mantra' ? 'Lines' : 'All Verses'}
            </h2>
            <span className="font-ui text-[0.78rem] text-text-3">
              {text.verseCount} {text.category === 'mantra' ? 'lines' : 'verses'}
            </span>
          </div>
          <div className="grid grid-cols-6 lg:grid-cols-6 gap-2 mb-12">
            {text.verses.map((v) => (
              <Link
                key={v.number}
                href={`/${slug}/${v.number}`}
                className={`aspect-square grid place-items-center rounded-md font-display font-medium text-[0.9rem] no-underline transition-all duration-150 hover:scale-105 ${v.isStub ? 'opacity-60' : ''}`}
                style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)', color: 'var(--text-2)' }}
              >
                {v.number}
              </Link>
            ))}
          </div>
        </aside>

      </div>

      {/* Footer */}
      <footer
        className="mt-12 pt-8 px-0 font-ui text-[0.78rem] text-text-3 leading-relaxed"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <h3 className="font-display text-[0.78rem] tracking-[0.16em] uppercase text-text-2 font-semibold m-0 mb-3">Sources</h3>
        <p>Devanagari · Bharatiya Jnanpith Digambara edition (verifying).</p>
        <p>Translations · Project translations awaiting Digambara reviewer.</p>
        <p className="mt-3 text-[0.7rem] opacity-70">Content draft pending Digambara cultural reviewer (D-004).</p>
      </footer>
    </main>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1.5 rounded-pill text-text-2" style={{ background: 'var(--bg-elev-2)', border: '1px solid var(--border)' }}>
      {children}
    </span>
  );
}
