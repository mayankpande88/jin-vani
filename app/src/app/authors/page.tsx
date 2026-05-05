import Link from 'next/link';
import { AUTHORS } from '@/lib/authors';

export const metadata = {
  title: 'Authors · Jin-vani',
  description: 'The acharyas, pandits, and seers whose works form the Jain library — Kundakunda, Umaswami, Pujyapada, Samantabhadra, Manatunga, Daulatram, and others.',
};

export default function AuthorsIndex() {
  return (
    <main className="max-w-[480px] lg:max-w-[920px] mx-auto px-5 lg:px-8 pb-24 lg:pb-12" data-pagefind-body>
      <section className="text-center pt-12 pb-8 mb-8" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="font-ui text-[0.7rem] font-bold tracking-[0.18em] uppercase text-accent mb-3">Authors</div>
        <h1 className="font-display font-semibold text-text leading-[1.15] m-0 mb-4 tracking-tight" style={{ fontSize: 'clamp(2rem, 5vw, 2.6rem)' }}>
          The Acharyas
        </h1>
        <p className="font-body text-[1.05rem] text-text-2 leading-relaxed max-w-[36rem] mx-auto m-0">
          The seers, scholars, and householders whose works form this library — what we know about them, what they wrote, and why their writing still matters today.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {AUTHORS.map((a) => (
          <Link
            key={a.id}
            href={`/authors/${a.id}`}
            className="rounded-lg p-6 no-underline text-text transition-all hover:-translate-y-0.5"
            style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)' }}
          >
            <div className="flex items-baseline gap-3 flex-wrap mb-2">
              <h2 className="font-display font-semibold text-text text-[1.15rem] m-0 tracking-tight">{a.name}</h2>
            </div>
            <p className="font-sk text-ink text-[1.1rem] m-0 mb-2">{a.nameSk}</p>
            <p className="font-body italic text-text-3 text-[0.85rem] m-0 mb-3">{a.era}</p>
            <p className="font-body text-text-2 text-[0.95rem] leading-relaxed m-0">{a.short}</p>
            <div className="font-ui text-[0.78rem] text-accent mt-4">Read more →</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
