'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type Progress = { slug: string; verse: number; texts: number };

export function ContinueCard() {
  const [p, setP] = useState<Progress | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const raw = localStorage.getItem('jinvani.progress');
      if (raw) setP(JSON.parse(raw));
      else setP({ slug: 'bhaktamara-stotra', verse: 1, texts: 48 });
    } catch {
      setP({ slug: 'bhaktamara-stotra', verse: 1, texts: 48 });
    }
  }, []);

  if (!p) return null;

  const pct = Math.min(100, Math.round((p.verse / p.texts) * 100));
  const conicAngle = (pct / 100) * 360;

  return (
    <Link
      href={`/${p.slug}/${p.verse}`}
      className="flex items-center gap-4 rounded-lg p-4 px-5 no-underline text-text transition-all hover:-translate-y-0.5"
      style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)' }}
    >
      <div
        className="w-12 h-12 rounded-full grid place-items-center relative flex-shrink-0"
        style={{
          background: `conic-gradient(var(--accent) 0deg ${conicAngle}deg, var(--bg-elev-3) ${conicAngle}deg 360deg)`,
        }}
      >
        <div className="absolute inset-1 rounded-full" style={{ background: 'var(--bg-elev-1)' }} />
        <span className="relative font-ui text-[0.7rem] font-bold text-accent">{p.verse}/{p.texts}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-ui text-[0.65rem] font-bold tracking-[0.16em] uppercase text-text-3 mb-0.5">Continue</div>
        <h3 className="font-display font-semibold text-[1.05rem] text-text m-0 truncate">Bhaktamara Stotra</h3>
        <div className="font-ui text-[0.78rem] text-text-3 mt-0.5">Verse {p.verse} · {pct}% complete</div>
      </div>
      <div className="text-accent text-xl flex-shrink-0">→</div>
    </Link>
  );
}
