import Link from 'next/link';
import { notFound } from 'next/navigation';
import { TIRTHANKARAS, getTirthankara } from '@/lib/tirthankaras';

export function generateStaticParams() {
  return TIRTHANKARAS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = getTirthankara(slug);
  return { title: `${t?.name ?? 'Tirthankara'} · Jin-vani` };
}

export default async function TirthankaraPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = getTirthankara(slug);
  if (!t) notFound();

  const prev = TIRTHANKARAS.find((x) => x.num === t.num - 1);
  const next = TIRTHANKARAS.find((x) => x.num === t.num + 1);

  return (
    <main className="max-w-[480px] lg:max-w-[36rem] mx-auto px-5 lg:px-8 pb-24 lg:pb-12" data-pagefind-body>
      <article className="my-10">
        <div className="font-ui text-[0.72rem] tracking-[0.16em] uppercase text-accent mb-3">
          <Link href="/tirthankaras" className="text-text-3 hover:text-accent">Tirthankaras</Link> · #{t.num} of 24
        </div>
        <h1 className="font-display font-semibold text-text leading-[1.15] m-0 mb-3 tracking-tight" style={{ fontSize: 'clamp(1.8rem, 4.8vw, 2.4rem)' }}>
          {t.name}
        </h1>
        <p className="font-sk text-ink text-[1.5rem] m-0 mb-8">{t.nameSk}</p>

        {/* Tradition data card */}
        <aside
          className="rounded-lg p-6 mb-8"
          style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)', borderLeft: '3px solid var(--ink-sk)' }}
        >
          <div className="font-ui text-[0.65rem] font-bold tracking-[0.18em] uppercase text-ink mb-4">Tradition data (Digambara)</div>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 font-body text-[0.95rem]">
            <Datum label="Lāñchana" value={<>{t.lanchhana}{t.lanchhanaSk && <span className="font-sk text-ink ml-2">({t.lanchhanaSk})</span>}</>} />
            <Datum label="Complexion" value={t.complexion} />
            <Datum label="Father" value={<span className="font-sk text-ink">{t.fatherSk}</span>} />
            <Datum label="Mother" value={<span className="font-sk text-ink">{t.motherSk}</span>} />
            {t.birthplace && <Datum label="Birthplace" value={t.birthplace} />}
            {t.mokshaPlace && <Datum label="Mokṣa place" value={t.mokshaPlace} />}
          </dl>
        </aside>

        {/* Bio (rich content) */}
        {t.bio ? (
          <div className="font-body text-[1.05rem] leading-[1.8] text-text">
            {t.bio.split('\n\n').map((para, i) => (
              <p key={i} className="mb-5" dangerouslySetInnerHTML={{ __html: applyEm(para) }} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg p-6 font-body text-[0.95rem] text-text-2 leading-relaxed" style={{ background: 'var(--bg-elev-1)', border: '1px dashed var(--border)' }}>
            {t.note ? (
              <p className="m-0">{t.note}</p>
            ) : (
              <p className="m-0">
                Detailed biographical content for {t.name} is held by the Mahapurana tradition (Adipurana / Uttarapurana) and other Digambara sources.
                The basic data above — lāñchana, parentage, birthplace, and place of mokṣa — follows the canonical lists.
                A fuller biographical entry will be added as the library expands; reviewer to verify specific details before publishing extended content.
              </p>
            )}
          </div>
        )}

        {/* Connections / cross-links */}
        {t.connections && t.connections.length > 0 && (
          <div
            className="rounded-md p-5 mt-10 font-ui text-[0.85rem] leading-relaxed"
            style={{ background: 'var(--bg-elev-2)', border: '1px solid var(--border-2)' }}
          >
            <h3 className="font-display font-semibold text-[0.7rem] tracking-[0.18em] uppercase text-accent m-0 mb-3">In this library</h3>
            <ul className="list-none m-0 p-0 flex flex-col gap-2">
              {t.connections.map((c, i) => (
                <li key={i}>
                  <Link href={c.href} className="text-text-2 hover:text-accent">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Prev / Next */}
        <nav className="flex justify-between items-center mt-10 gap-4 font-ui text-[0.85rem]" style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
          {prev ? (
            <Link href={`/tirthankaras/${prev.slug}`} className="text-text-2 hover:text-accent flex flex-col gap-0.5">
              <span className="text-text-3 text-[0.72rem] tracking-wider uppercase">← #{prev.num}</span>
              <span>{prev.name}</span>
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/tirthankaras/${next.slug}`} className="text-text-2 hover:text-accent flex flex-col gap-0.5 text-right">
              <span className="text-text-3 text-[0.72rem] tracking-wider uppercase">#{next.num} →</span>
              <span>{next.name}</span>
            </Link>
          ) : <span />}
        </nav>

        {/* See also */}
        <div
          className="rounded-md p-5 mt-8 font-ui text-[0.85rem] leading-relaxed"
          style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)' }}
        >
          <h3 className="font-display font-semibold text-[0.7rem] tracking-[0.18em] uppercase text-accent m-0 mb-3">See also</h3>
          <ul className="list-none m-0 p-0 flex flex-col gap-2">
            <li><Link href="/tirthankaras" className="text-text-2 hover:text-accent">All 24 Tirthankaras</Link></li>
            <li><Link href="/foundations/tirthankaras-and-gods" className="text-text-2 hover:text-accent">Foundation 01: What a Tirthankara is</Link></li>
            <li><Link href="/glossary#tirthankara" className="text-text-2 hover:text-accent">Glossary: Tirthankara</Link></li>
            <li><Link href="/what-is-jainism" className="text-text-2 hover:text-accent">What is Jainism?</Link></li>
          </ul>
        </div>

        <div className="font-ui text-[0.72rem] text-text-3 leading-relaxed py-3 px-4 rounded-md mt-6" style={{ background: 'var(--bg-elev-1)', border: '1px dashed var(--border-2)' }}>
          <strong className="text-accent">Draft note:</strong> Tirthankara pages are draft pending Digambara cultural reviewer. Tradition data follows canonical Digambara lists; biographical content (where present) follows the Mahapurana tradition and is interpretive in places.
        </div>
      </article>
    </main>
  );
}

function Datum({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <>
      <dt className="text-text-3 font-ui text-[0.72rem] uppercase tracking-wide self-center">{label}</dt>
      <dd className="text-text m-0">{value}</dd>
    </>
  );
}

// Replaces simple Markdown emphasis (*foo*) and bold (**foo**) for inline rendering.
function applyEm(text: string): string {
  return text
    .replace(/&lt;/g, '&lt;') // already escaped by React in this context, defensive
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[\s(])\*([^*]+)\*([\s,.!?:;)]|$)/g, '$1<em>$2</em>$3');
}
