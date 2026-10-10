'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type Progress = { slug: string; verse: number; texts: number; fresh?: boolean };
export type ContinueTextInfo = { title: string; total: number };

export function ContinueCard({ texts }: { texts: Record<string, ContinueTextInfo> }) {
  const [p, setP] = useState<Progress | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const fallback: Progress = { slug: 'bhaktamara-stotra', verse: 1, texts: 48, fresh: true };
    try {
      const raw = localStorage.getItem('jinvani.progress');
      const saved = raw ? (JSON.parse(raw) as Progress) : null;
      setP(saved && texts[saved.slug] ? saved : fallback);
    } catch {
      setP(fallback);
    }
  }, [texts]);

  if (!p) return null;

  // Prefer the current verse count over the one stored at read time.
  const info = texts[p.slug];
  const total = info?.total || p.texts || 1;
  const pct = p.fresh ? 0 : Math.min(100, Math.round((p.verse / total) * 100));
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
        <span className="relative font-ui text-[0.7rem] font-bold text-accent">{p.verse}/{total}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-ui text-[0.65rem] font-bold tracking-[0.16em] uppercase text-text-3 mb-0.5">{p.fresh ? 'Start reading' : 'Continue'}</div>
        <h3 className="font-display font-semibold text-[1.05rem] text-text m-0 truncate">{info?.title ?? 'Bhaktamara Stotra'}</h3>
        <div className="font-ui text-[0.78rem] text-text-3 mt-0.5">Verse {p.verse}{p.fresh ? '' : ` · ${pct}% complete`}</div>
      </div>
      <div className="text-accent text-xl flex-shrink-0">→</div>
    </Link>
  );
}

// Counts of what the reader has actually saved on this device.
export function ReaderStats() {
  const [counts, setCounts] = useState<{ memorized: number; bookmarked: number } | null>(null);

  useEffect(() => {
    let memorized = 0;
    let bookmarked = 0;
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i) || '';
        if (!k.startsWith('jinvani.')) continue;
        if (k.endsWith('.memorized')) memorized++;
        else if (k.endsWith('.bookmark')) bookmarked++;
      }
    } catch {}
    setCounts({ memorized, bookmarked });
  }, []);

  return (
    <div className="flex gap-3">
      <Stat num={counts ? String(counts.memorized) : '–'} label="Memorized" />
      <Stat num={counts ? String(counts.bookmarked) : '–'} label="Bookmarked" />
    </div>
  );
}

function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex-1 min-w-0 p-4 rounded-md" style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)' }}>
      <div className="font-display text-[1.6rem] font-semibold text-accent leading-none">{num}</div>
      <div className="font-ui text-[0.7rem] tracking-wider uppercase text-text-3 mt-0.5">{label}</div>
    </div>
  );
}
