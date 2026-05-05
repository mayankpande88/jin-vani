import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AUTHORS, getAuthor } from '@/lib/authors';

export function generateStaticParams() {
  return AUTHORS.map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const a = getAuthor(id);
  return { title: `${a?.name ?? 'Author'} · Jin-vani` };
}

export default async function AuthorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const a = getAuthor(id);
  if (!a) notFound();

  return (
    <main className="max-w-[480px] lg:max-w-[36rem] mx-auto px-5 lg:px-8 pb-24 lg:pb-12" data-pagefind-body>
      <article className="my-10">
        <div className="font-ui text-[0.72rem] tracking-[0.16em] uppercase text-accent mb-3">
          <Link href="/authors" className="text-text-3 hover:text-accent">Authors</Link> · {a.era}
        </div>
        <h1 className="font-display font-semibold text-text leading-[1.2] m-0 mb-3 tracking-tight" style={{ fontSize: 'clamp(1.7rem, 4.5vw, 2.2rem)' }}>
          {a.name}
        </h1>
        <p className="font-sk text-ink text-[1.4rem] m-0 mb-6">{a.nameSk}</p>

        <p className="font-display font-medium text-[1.3rem] leading-snug text-ink m-0 mb-6 -tracking-[0.005em]">
          {a.short}
        </p>

        <p className="font-body text-[1.05rem] leading-[1.8] text-text mb-8">
          {a.long}
        </p>

        {/* Works */}
        <h2 className="font-display font-semibold text-text mt-10 mb-4 tracking-tight text-[1.4rem]">Works</h2>
        <ul className="list-none m-0 p-0">
          {a.works.map((w, i) => (
            <li
              key={i}
              className="rounded-md p-4 mb-3"
              style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)' }}
            >
              {w.href ? (
                <Link href={w.href} className="font-display font-semibold text-text text-[1.05rem] no-underline hover:text-accent">
                  {w.title} <span className="text-accent">→</span>
                </Link>
              ) : (
                <span className="font-display font-semibold text-text text-[1.05rem]">{w.title}</span>
              )}
              {w.note && <p className="font-body text-text-2 text-[0.92rem] leading-relaxed m-0 mt-2">{w.note}</p>}
            </li>
          ))}
        </ul>

        <h2 className="font-display font-semibold text-text mt-10 mb-4 tracking-tight text-[1.4rem]">Significance</h2>
        <p className="font-body text-[1.05rem] leading-[1.8] text-text mb-6">{a.significance}</p>

        {/* See also */}
        <div
          className="rounded-md p-5 mt-12 font-ui text-[0.85rem] leading-relaxed"
          style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)' }}
        >
          <h3 className="font-display font-semibold text-[0.7rem] tracking-[0.18em] uppercase text-accent m-0 mb-3">See also</h3>
          <ul className="list-none m-0 p-0 flex flex-col gap-2">
            <li>
              <Link href="/authors" className="text-text-2 hover:text-accent">All authors</Link>
            </li>
            <li>
              <Link href="/glossary" className="text-text-2 hover:text-accent">Glossary of terms</Link>
            </li>
            <li>
              <Link href="/foundations" className="text-text-2 hover:text-accent">Foundations articles</Link>
            </li>
            <li>
              <Link href="/" className="text-text-2 hover:text-accent">Library home</Link>
            </li>
          </ul>
        </div>

        <div className="font-ui text-[0.72rem] text-text-3 leading-relaxed py-3 px-4 rounded-md mt-6" style={{ background: 'var(--bg-elev-1)', border: '1px dashed var(--border-2)' }}>
          <strong className="text-accent">Draft note:</strong> Author pages are project drafts pending Digambara cultural reviewer. Biographical details follow the traditional accounts; specific dates and attributions are debated by scholars.
        </div>
      </article>
    </main>
  );
}
