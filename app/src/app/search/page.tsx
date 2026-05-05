'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    pagefind?: { search: (q: string) => Promise<{ results: Array<{ data: () => Promise<{ url: string; meta: { title: string }; excerpt: string }> }> }> };
  }
}

type Result = { url: string; title: string; excerpt: string };

// Pagefind result URLs may or may not include basePath depending on what
// was indexed. This helper ensures we end up with exactly one basePath prefix.
function normalizeSearchUrl(url: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  if (!base) return url;
  if (url === base || url.startsWith(base + '/')) return url; // already has basePath
  return base + url;
}

export default function SearchPage() {
  const [q, setQ] = useState('');
  const [results, setResults] = useState<Result[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'unavailable'>('idle');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!q || q.length < 2) {
      setResults([]);
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        if (typeof window !== 'undefined' && !window.pagefind) {
          setStatus('loading');
          // Pagefind is bundled at <basePath>/pagefind/pagefind.js after `pagefind --site out`.
          // GitHub Pages serves the project under /jin-vani/, so we must include basePath.
          const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
          const pf = await (Function('p', 'return import(p)')(`${base}/pagefind/pagefind.js`) as Promise<unknown>);
          window.pagefind = pf as Window['pagefind'];
        }
        if (!window.pagefind) {
          setStatus('unavailable');
          return;
        }
        setStatus('ready');
        const search = await window.pagefind.search(q);
        const data = await Promise.all(search.results.slice(0, 20).map((r) => r.data()));
        if (!cancelled) {
          setResults(data.map((d) => ({ url: d.url, title: d.meta.title, excerpt: d.excerpt })));
        }
      } catch {
        setStatus('unavailable');
      }
    })();
    return () => { cancelled = true; };
  }, [q]);

  return (
    <main className="max-w-[480px] lg:max-w-[760px] mx-auto px-5 lg:px-8 pb-24 lg:pb-12">
      <div className="pt-8 pb-6">
        <h1 className="font-display font-semibold text-text text-[1.6rem] lg:text-[2rem] tracking-tight m-0 mb-2">Search</h1>
        <p className="font-body text-text-2 m-0">Verses, Sanskrit terms, English translations — across all texts.</p>
      </div>

      <div
        className="flex items-center gap-3 rounded-pill px-5 py-3 mb-8"
        style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border-2)' }}
      >
        <span className="text-text-3 text-lg">⌕</span>
        <input
          ref={inputRef}
          type="search"
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search…"
          className="bg-transparent border-none outline-none flex-1 font-body text-base text-text placeholder:text-text-3"
        />
        {q && (
          <button onClick={() => setQ('')} className="text-text-3 hover:text-accent transition" aria-label="Clear">✕</button>
        )}
      </div>

      {status === 'unavailable' && q.length >= 2 && (
        <div
          className="rounded-md p-4 mb-6 font-body text-text-2 text-[0.9rem]"
          style={{ background: 'var(--bg-elev-1)', border: '1px dashed var(--border-2)' }}
        >
          Search is currently unavailable. Try refreshing the page, or use the topbar nav to browse Library, Foundations, Glossary, and Tirthankaras directly.
        </div>
      )}

      {results.length > 0 && (
        <ul className="list-none p-0 m-0 flex flex-col gap-3">
          {results.map((r, i) => (
            <li key={i}>
              <a
                href={normalizeSearchUrl(r.url)}
                className="block rounded-lg p-5 no-underline transition-all hover:-translate-y-0.5"
                style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)' }}
              >
                <h3 className="font-display font-semibold text-[1.05rem] text-text m-0 mb-2">{r.title}</h3>
                <p className="font-body text-text-2 text-[0.92rem] leading-relaxed m-0" dangerouslySetInnerHTML={{ __html: r.excerpt }} />
              </a>
            </li>
          ))}
        </ul>
      )}

      {q.length >= 2 && results.length === 0 && status === 'ready' && (
        <div className="font-body text-text-3 text-center py-8">No results.</div>
      )}

      {!q && (
        <div className="font-body text-text-3 leading-relaxed">
          <p>Try searching for:</p>
          <ul className="list-none p-0 m-0 mt-3 flex flex-wrap gap-2">
            {['Adinath', 'bhakti', 'samsara', 'Tirthankara', 'kevala-jnana'].map((s) => (
              <li key={s}>
                <button
                  onClick={() => setQ(s)}
                  className="px-3 py-1.5 rounded-pill text-text-2 text-[0.85rem] cursor-pointer hover:text-accent hover:border-accent transition"
                  style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)' }}
                >
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
