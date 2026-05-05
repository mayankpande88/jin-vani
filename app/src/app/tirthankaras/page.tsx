import Link from 'next/link';
import { TIRTHANKARAS } from '@/lib/tirthankaras';

export const metadata = {
  title: 'The 24 Tirthankaras · Jin-vani',
  description: 'The 24 Tirthankaras of this time-cycle, with their lañchana (identifying symbol), complexion, parents, birthplace, and place of mokṣa. Digambara tradition.',
};

export default function TirthankarasPage() {
  return (
    <main className="max-w-[480px] lg:max-w-[1100px] mx-auto px-5 lg:px-8 pb-24 lg:pb-12" data-pagefind-body>
      <section className="text-center pt-12 pb-8 mb-8" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="font-ui text-[0.7rem] font-bold tracking-[0.18em] uppercase text-accent mb-3">The 24 Ford-Makers</div>
        <h1 className="font-display font-semibold text-text leading-[1.15] m-0 mb-4 tracking-tight" style={{ fontSize: 'clamp(2rem, 5vw, 2.6rem)' }}>
          The 24 Tirthankaras
        </h1>
        <p className="font-body text-[1.05rem] text-text-2 leading-relaxed max-w-[36rem] mx-auto m-0">
          The 24 Tirthankaras of the present <em>avasarpiṇī</em> time-cycle, in canonical order. Each shown with their <em>lāñchana</em> (identifying symbol), traditional complexion, parents, birthplace, and place of mokṣa.
        </p>
        <p className="font-body text-[0.9rem] text-text-3 mt-4 max-w-[36rem] mx-auto">
          Tirthankaras are not gods (see <Link href="/foundations/tirthankaras-and-gods" className="text-accent">Foundation 01</Link>). They are liberated souls who, in their final birth, established the four-fold <em>saṅgha</em> and showed the path of <em>mokṣa</em>.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {TIRTHANKARAS.map((t) => (
          <Link
            key={t.num}
            href={`/tirthankaras/${t.slug}`}
            className="rounded-lg p-5 flex flex-col no-underline text-text transition-all hover:-translate-y-0.5 hover:border-accent"
            style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)' }}
          >
            <div className="flex items-baseline justify-between mb-2">
              <span className="font-display font-semibold text-[0.78rem] tracking-[0.18em] text-accent">#{t.num}</span>
              <span className="font-ui text-[0.7rem] tracking-wider uppercase text-text-3">{t.complexion}</span>
            </div>
            <h2 className="font-display font-semibold text-text text-[1.1rem] m-0 leading-tight">{t.name}</h2>
            <p className="font-sk text-ink text-[1.15rem] m-0 mb-3">{t.nameSk}</p>

            <dl className="font-body text-[0.88rem] m-0 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5">
              <dt className="text-text-3 font-ui text-[0.72rem] uppercase tracking-wide self-center">Lāñchana</dt>
              <dd className="text-text m-0">
                {t.lanchhana}
                {t.lanchhanaSk && <span className="font-sk text-ink ml-2">({t.lanchhanaSk})</span>}
              </dd>
              <dt className="text-text-3 font-ui text-[0.72rem] uppercase tracking-wide self-center">Father</dt>
              <dd className="text-text m-0 font-sk text-ink">{t.fatherSk}</dd>
              <dt className="text-text-3 font-ui text-[0.72rem] uppercase tracking-wide self-center">Mother</dt>
              <dd className="text-text m-0 font-sk text-ink">{t.motherSk}</dd>
              {t.birthplace && (
                <>
                  <dt className="text-text-3 font-ui text-[0.72rem] uppercase tracking-wide self-center">Birthplace</dt>
                  <dd className="text-text m-0">{t.birthplace}</dd>
                </>
              )}
              {t.mokshaPlace && (
                <>
                  <dt className="text-text-3 font-ui text-[0.72rem] uppercase tracking-wide self-center">Mokṣa</dt>
                  <dd className="text-text m-0">{t.mokshaPlace}</dd>
                </>
              )}
            </dl>

            {t.note && (
              <p className="font-body text-[0.82rem] text-text-2 leading-relaxed m-0 mt-3 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                {t.note}
              </p>
            )}
            <div className="font-ui text-[0.78rem] text-accent mt-3">Read more →</div>
          </Link>
        ))}
      </div>

      <div className="font-ui text-[0.78rem] text-text-3 leading-relaxed py-4 px-5 rounded-md mt-12" style={{ background: 'var(--bg-elev-1)', borderLeft: '3px solid var(--accent)' }}>
        <strong className="text-text-2 block mb-1 font-semibold">Note on this table</strong>
        Names, lāñchanas, complexions, and parentage follow the Digambara tradition. The <Link href="/glossary#tirthankara" className="text-accent">Glossary entry on Tirthankara</Link> covers the doctrinal definition; <Link href="/foundations/tirthankaras-and-gods" className="text-accent">Foundation 01</Link> covers the misconception that Tirthankaras are gods. Most Tirthankaras attain mokṣa at <em>Sammed Shikhar</em> (in present-day Jharkhand), the most sacred Jain pilgrimage site.{' '}
        <strong className="text-accent">All entries draft pending Digambara cultural reviewer.</strong>
      </div>
    </main>
  );
}
