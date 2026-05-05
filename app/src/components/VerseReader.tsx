'use client';

import Link from 'next/link';
import { useEffect, useState, useCallback, useRef } from 'react';
import type { TextMeta, VerseContent } from '@/lib/content';
import { Markdown } from './Markdown';

type Layer = 'simple' | 'today' | 'words' | 'hindi' | 'english' | 'meaning';

const ALL_LAYERS: { id: Layer; label: string }[] = [
  { id: 'simple', label: 'Simple' },
  { id: 'today', label: 'Today' },
  { id: 'words', label: 'Word-by-word' },
  { id: 'hindi', label: 'हिन्दी' },
  { id: 'english', label: 'English' },
  { id: 'meaning', label: 'Deeper' },
];

// Build the visible-tabs list dynamically from what the verse actually has.
function getAvailableLayers(verse: VerseContent): { id: Layer; label: string }[] {
  const has: Record<Layer, boolean> = {
    simple: !!(verse.simple_hi || verse.simple_en),
    today: !!verse.today_md,
    words: !!(verse.word_by_word && verse.word_by_word.length > 0),
    hindi: !!(verse.translation_hi || verse.bhavarth_hi),
    english: !!verse.translation_en,
    meaning: !!verse.meaning_en,
  };
  return ALL_LAYERS.filter((l) => has[l.id]);
}

export function VerseReader({
  text,
  verse,
  total,
  prevNum,
  nextNum,
}: {
  text: TextMeta;
  verse: VerseContent;
  total: number;
  prevNum: number | null;
  nextNum: number | null;
}) {
  const layers = getAvailableLayers(verse);
  const defaultLayer = layers[0]?.id ?? 'simple';
  const [layer, setLayer] = useState<Layer>(defaultLayer);
  const [memorizing, setMemorizing] = useState(false);
  const [popover, setPopover] = useState<{ x: number; y: number; sk: string; translit: string; gloss: string } | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Persist progress
  useEffect(() => {
    localStorage.setItem('jinvani.progress', JSON.stringify({ slug: text.slug, verse: verse.number, texts: total }));
  }, [text.slug, verse.number, total]);

  // Dismiss popover on outside click / scroll / resize.
  // Guard against dismissing when the click landed on a gloss span (which
  // is what triggered showing the popover) or inside the popover itself.
  useEffect(() => {
    function dismiss(e: Event) {
      const target = e.target as HTMLElement | null;
      if (!target) { setPopover(null); return; }
      if (target.closest?.('[data-gloss="true"]')) return;
      if (target.closest?.('[data-popover="true"]')) return;
      setPopover(null);
    }
    function dismissNoTarget() { setPopover(null); }
    document.addEventListener('click', dismiss);
    window.addEventListener('scroll', dismissNoTarget, { passive: true });
    window.addEventListener('resize', dismissNoTarget);
    return () => {
      document.removeEventListener('click', dismiss);
      window.removeEventListener('scroll', dismissNoTarget);
      window.removeEventListener('resize', dismissNoTarget);
    };
  }, []);

  const showGloss = useCallback((e: React.MouseEvent, sk: string, translit: string, gloss: string) => {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    setPopover({
      x: r.left + r.width / 2,
      y: r.top - 8,
      sk,
      translit,
      gloss,
    });
  }, []);

  const progressPct = (verse.number / total) * 100;

  return (
    <div className="min-h-[100dvh] flex flex-col relative" style={{ minHeight: 'calc(100dvh - 60px)' }}>

      {/* Top bar — back, progress, counter */}
      <div className="sticky top-[68px] lg:top-[76px] z-30 flex items-center gap-3 px-5 py-4 backdrop-blur-xl backdrop-saturate-150" style={{ background: 'var(--bg-overlay)' }}>
        <Link href={`/${text.slug}`} className="grid place-items-center w-9 h-9 rounded-full text-text-2 no-underline text-base flex-shrink-0" style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)' }} aria-label="Back to all verses">
          ←
        </Link>
        <div className="flex-1 h-1 rounded-pill overflow-hidden relative" style={{ background: 'var(--bg-elev-1)' }}>
          <div className="absolute top-0 left-0 h-full rounded-pill" style={{ width: `${progressPct}%`, background: 'linear-gradient(90deg, var(--ink-sk), var(--accent))' }} />
        </div>
        <div className="font-ui text-[0.78rem] text-text-2 font-semibold">{verse.number} / {total}</div>
      </div>

      {/* Verse card */}
      <article className="flex-1 px-5 lg:px-6 pt-6 pb-8 lg:pt-10 lg:pb-12 max-w-[520px] lg:max-w-[640px] mx-auto w-full">

        <div className="text-center font-display font-semibold text-[0.85rem] tracking-[0.16em] uppercase text-accent mb-6 flex items-center justify-center gap-3">
          <span className="w-4 h-px bg-accent opacity-50"></span>
          Verse {verse.numberDevanagari}
          <span className="w-4 h-px bg-accent opacity-50"></span>
        </div>

        {/* Sanskrit, with tappable glossed words */}
        <div className="font-sk text-ink text-center leading-[1.95] mb-5" style={{ fontSize: 'clamp(1.4rem, 4.6vw, 1.85rem)' }}>
          {renderGlossedSanskrit(verse.sanskrit, verse.glosses || [], showGloss)}
        </div>

        {!verse.isStub && (
          <p className="font-body italic text-[0.9rem] text-text-3 text-center leading-relaxed pb-8 mb-8" style={{ borderBottom: '1px solid var(--border)' }}>
            {verse.transliteration.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < verse.transliteration.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
        )}

        {verse.isStub ? (
          <div
            className="rounded-lg p-6 text-center"
            style={{ background: 'var(--bg-elev-1)', border: '1px dashed var(--border-2)' }}
          >
            <p className="font-body text-text-2 m-0">
              This verse is being prepared. Sanskrit text and translations will be added in a future content batch.
            </p>
          </div>
        ) : (
          <>
            {/* Layer tabs */}
            <div className="flex gap-1 rounded-pill p-1 mb-6 overflow-x-auto" style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)', scrollbarWidth: 'none' }}>
              {layers.map((l) => (
                <button
                  key={l.id}
                  onClick={() => setLayer(l.id)}
                  className={`flex-1 whitespace-nowrap font-ui text-[0.82rem] font-medium px-4 py-2 rounded-pill border-none cursor-pointer transition-all duration-200 ${
                    layer === l.id ? 'text-text' : 'text-text-3'
                  }`}
                  style={layer === l.id ? { background: 'var(--bg-elev-3)', boxShadow: 'var(--shadow-sm)' } : {}}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* Layer panels */}
            {layer === 'simple' && (
              <Panel label="Simple Meaning · सरल अर्थ">
                {verse.simple_hi && <p className="font-hi text-[1.05rem] leading-[1.95] m-0 mb-4 text-text">{verse.simple_hi}</p>}
                {verse.simple_hi && verse.simple_en && <hr className="my-4" style={{ border: 'none', borderTop: '1px solid var(--border)' }} />}
                {verse.simple_en && <p className="font-body text-[1.05rem] leading-relaxed m-0 text-text">{verse.simple_en}</p>}
                <p className="font-ui text-[0.78rem] text-text-3 mt-4">
                  <span className="text-accent font-bold">→</span> Tap any underlined Sanskrit word above to learn what it means.
                </p>
              </Panel>
            )}

            {layer === 'today' && verse.today_md && (
              <div
                className="rounded-lg p-6 mb-6"
                style={{
                  background: 'linear-gradient(155deg, var(--bg-elev-2), var(--bg-elev-1))',
                  border: '1px solid var(--border-2)',
                  borderLeft: '3px solid var(--accent)',
                }}
              >
                <div className="font-ui text-[0.65rem] font-bold tracking-[0.18em] uppercase text-accent mb-3 flex items-center gap-2">
                  <span className="w-4 h-px bg-accent" />
                  Today · Why this matters now
                </div>
                {verse.today_title && (
                  <h3 className="font-display font-semibold text-[1.2rem] tracking-tight text-text mb-4 leading-tight">
                    {verse.today_title}
                  </h3>
                )}
                <div className="font-body text-base leading-[1.75] text-text">
                  <Markdown>{verse.today_md}</Markdown>
                </div>
              </div>
            )}

            {layer === 'words' && (
              <Panel label="Word by Word">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(verse.word_by_word || []).map((w, i) => (
                    <div key={i} className="rounded-md p-3 px-4" style={{ background: 'var(--bg-elev-2)', border: '1px solid var(--border)' }}>
                      <div className="font-sk text-ink text-[1.1rem] leading-[1.4]">{w.sk}</div>
                      <div className="font-body italic text-text-3 text-[0.78rem] mt-0.5">{w.translit}</div>
                      <div className="font-body text-text text-[0.88rem] mt-2 leading-snug">{w.gloss}</div>
                    </div>
                  ))}
                </div>
              </Panel>
            )}

            {layer === 'hindi' && (
              <>
                {verse.translation_hi && (
                  <Panel label="हिन्दी अनुवाद · Hindi Translation">
                    <p className="font-hi leading-[1.95] m-0 text-text">
                      {verse.translation_hi.split('\n').filter(Boolean).map((line, i) => <span key={i} className="block mb-2">{line}</span>)}
                    </p>
                  </Panel>
                )}
                {verse.bhavarth_hi && (
                  <Panel label="भावार्थ · Bhavarth">
                    <p className="font-hi leading-[1.95] m-0 text-text-2">
                      {verse.bhavarth_hi.split('\n').filter(Boolean).map((line, i) => <span key={i} className="block mb-2">{line}</span>)}
                    </p>
                  </Panel>
                )}
              </>
            )}

            {layer === 'english' && (
              <Panel label="English Translation">
                <p className="font-body leading-relaxed m-0 text-text">{verse.translation_en}</p>
              </Panel>
            )}

            {layer === 'meaning' && verse.meaning_en && (
              <Panel label="Deeper Meaning &amp; Context">
                <div className="font-body leading-relaxed text-text-2"><Markdown>{verse.meaning_en}</Markdown></div>
              </Panel>
            )}

            {/* Citations */}
            {verse.citations && verse.citations.length > 0 && (
              <div className="rounded-md p-5 mt-8 mb-4 font-ui text-[0.82rem] leading-relaxed" style={{ background: 'var(--bg-elev-2)', border: '1px solid var(--border-2)' }}>
                <h4 className="font-display font-semibold text-[0.7rem] tracking-[0.18em] uppercase text-accent m-0 mb-3">Sources</h4>
                <ul className="list-none m-0 p-0">
                  {verse.citations.map((c, i) => (
                    <li key={i} className="text-text-2 pb-3 mb-3 last:mb-0 last:pb-0 last:border-0" style={{ borderBottom: '1px solid var(--border)' }}>
                      <span className="font-display font-semibold text-ink mr-2">{i + 1}.</span>
                      <strong className="text-text">{c.ref}</strong> — {c.text}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        {/* Draft flag */}
        <div className="font-ui text-[0.72rem] text-text-3 leading-relaxed py-3 px-4 rounded-md mt-6" style={{ background: 'var(--bg-elev-1)', border: '1px dashed var(--border-2)' }}>
          <strong className="text-accent">Draft note:</strong> This verse&apos;s content is a project draft pending the Digambara cultural reviewer (D-004). Citations point to primary Jain texts; the modern English framing and verse numbering are project work.
        </div>
      </article>

      {/* Settings strip */}
      <div className="flex items-center gap-3 px-5 py-3 font-ui text-[0.78rem] text-text-3 flex-wrap" style={{ background: 'var(--bg-elev-1)', borderTop: '1px solid var(--border)' }}>
        <span className="tracking-widest uppercase font-bold text-[0.65rem]">Aa</span>
        <SizeSelector />
        <button
          onClick={() => setMemorizing(true)}
          disabled={verse.isStub}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-pill font-ui text-[0.82rem] font-medium cursor-pointer transition-all whitespace-nowrap ${memorizing ? 'is-active' : ''}`}
          style={{
            background: memorizing ? 'var(--accent)' : 'var(--bg-elev-2)',
            border: '1px solid ' + (memorizing ? 'var(--accent)' : 'var(--border-2)'),
            color: memorizing ? 'var(--bg)' : 'var(--text-2)',
            opacity: verse.isStub ? 0.4 : 1,
            cursor: verse.isStub ? 'not-allowed' : 'pointer',
          }}
        >
          <span>◇</span> Memorize
        </button>
        <span className="ml-auto font-ui text-[0.7rem] text-text-3 tracking-wider uppercase">{text.title_en} · {verse.number}/{total}</span>
      </div>

      {/* Reader bottom: actions */}
      <div className="sticky bottom-0 z-30 backdrop-blur-xl backdrop-saturate-150 px-4 py-3" style={{ background: 'var(--bg-overlay)', borderTop: '1px solid var(--border)', paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}>
        <div className="flex items-center gap-2 max-w-[520px] mx-auto">
          {prevNum ? (
            <Link href={`/${text.slug}/${prevNum}`} className="action-btn-circle" aria-label="Previous verse">‹</Link>
          ) : (
            <button className="action-btn-circle is-disabled" aria-label="No previous verse" disabled>‹</button>
          )}
          <BookmarkBtn slug={text.slug} verse={verse.number} />
          <div className="flex-1" />
          <ShareBtn text={text} verse={verse} />
          {nextNum ? (
            <Link href={`/${text.slug}/${nextNum}`} className="action-btn-circle" aria-label="Next verse">›</Link>
          ) : (
            <button className="action-btn-circle is-disabled" disabled>›</button>
          )}
        </div>
      </div>

      {/* Popover for tap-to-define */}
      {popover && (
        <PopoverPositioned
          popoverRef={popoverRef}
          popover={popover}
          onClose={() => setPopover(null)}
        />
      )}

      {/* Memorize overlay */}
      {memorizing && !verse.isStub && (
        <MemorizeOverlay verse={verse} onClose={() => setMemorizing(false)} slug={text.slug} />
      )}

      <style jsx>{`
        .action-btn-circle {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: var(--bg-elev-1);
          border: 1px solid var(--border);
          display: grid; place-items: center;
          color: var(--text-2);
          cursor: pointer;
          font-size: 1.2rem;
          transition: all 0.2s ease;
          flex-shrink: 0;
          text-decoration: none;
          font-family: var(--type-display, 'Fraunces', serif);
        }
        .action-btn-circle:hover {
          color: var(--accent);
          border-color: var(--border-2);
        }
        .action-btn-circle.is-disabled { opacity: 0.3; pointer-events: none; }
        .action-btn-circle.action-play {
          width: 56px; height: 56px;
          background: var(--accent);
          color: var(--bg);
          border: none;
          font-size: 1.4rem;
          box-shadow: var(--shadow-glow, 0 0 24px rgba(232, 137, 58, 0.18));
        }
      `}</style>
    </div>
  );
}

function Panel({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg p-6 mb-6" style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)' }}>
      <div className="font-ui text-[0.65rem] font-bold tracking-[0.18em] uppercase text-accent mb-3" dangerouslySetInnerHTML={{ __html: label }} />
      {children}
    </div>
  );
}

function SizeSelector() {
  const [size, setSize] = useState<'s' | 'm' | 'l' | 'xl'>('m');

  useEffect(() => {
    const stored = (localStorage.getItem('jinvani.textSize') as typeof size) || 'm';
    setSize(stored);
    document.documentElement.classList.remove('text-size-s', 'text-size-m', 'text-size-l', 'text-size-xl');
    document.documentElement.classList.add('text-size-' + stored);
  }, []);

  const set = (s: typeof size) => {
    document.documentElement.classList.remove('text-size-s', 'text-size-m', 'text-size-l', 'text-size-xl');
    document.documentElement.classList.add('text-size-' + s);
    localStorage.setItem('jinvani.textSize', s);
    setSize(s);
  };

  return (
    <div className="inline-flex gap-1 rounded-pill p-[3px]" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
      {(['s', 'm', 'l', 'xl'] as const).map((s) => (
        <button
          key={s}
          onClick={() => set(s)}
          className="border-none w-[30px] h-[26px] rounded-pill font-display font-semibold text-[0.82rem] cursor-pointer transition-all"
          style={size === s ? { background: 'var(--accent)', color: 'var(--bg)' } : { background: 'transparent', color: 'var(--text-3)' }}
        >
          {s === 's' ? '−' : s === 'm' ? '●' : s === 'l' ? '+' : '++'}
        </button>
      ))}
    </div>
  );
}

function BookmarkBtn({ slug, verse }: { slug: string; verse: number }) {
  const [bookmarked, setBookmarked] = useState(false);
  const key = `jinvani.${slug}.${verse}.bookmark`;

  useEffect(() => {
    setBookmarked(localStorage.getItem(key) === '1');
  }, [key]);

  const toggle = () => {
    const next = !bookmarked;
    if (next) localStorage.setItem(key, '1');
    else localStorage.removeItem(key);
    setBookmarked(next);
  };

  return (
    <button onClick={toggle} className="action-btn-circle" aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark this verse'} style={bookmarked ? { color: 'var(--accent)', borderColor: 'var(--accent)' } : {}}>
      {bookmarked ? '★' : '☆'}
      <style jsx>{`
        button {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: var(--bg-elev-1);
          border: 1px solid var(--border);
          display: grid; place-items: center;
          cursor: pointer;
          font-size: 1.2rem;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
      `}</style>
    </button>
  );
}

function ShareBtn({ text, verse }: { text: TextMeta; verse: VerseContent }) {
  const share = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const shareText = `${text.title_en} · Verse ${verse.number}\n\n${verse.simple_en || verse.translation_en || ''}\n\n${url}`;
    if (typeof navigator !== 'undefined' && (navigator as Navigator & { share?: (data: ShareData) => Promise<void> }).share) {
      (navigator as Navigator & { share: (data: ShareData) => Promise<void> }).share({ title: `${text.title_en} · Verse ${verse.number}`, text: shareText, url }).catch(() => {});
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(shareText);
    }
  };

  return (
    <button onClick={share} className="action-btn-circle" aria-label="Share verse">
      ↗
      <style jsx>{`
        button {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: var(--bg-elev-1);
          border: 1px solid var(--border);
          display: grid; place-items: center;
          cursor: pointer;
          font-size: 1.2rem;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
      `}</style>
    </button>
  );
}

function MemorizeOverlay({ verse, onClose, slug }: { verse: VerseContent; onClose: () => void; slug: string }) {
  const [revealed, setRevealed] = useState<number[]>([]);
  const lines = verse.sanskrit.split('\n').filter(Boolean);

  const revealNext = () => {
    setRevealed((r) => {
      for (let i = 0; i < lines.length; i++) {
        if (!r.includes(i)) return [...r, i];
      }
      return r;
    });
  };

  const revealAll = () => setRevealed(lines.map((_, i) => i));

  const markMemorized = () => {
    localStorage.setItem(`jinvani.${slug}.${verse.number}.memorized`, '1');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col px-5 py-6" style={{ background: 'var(--bg)' }}>
      <div className="flex justify-between items-center mb-8 font-ui text-[0.85rem] text-text-3">
        <span>Memorize Mode · Verse {verse.number}</span>
        <button onClick={onClose} className="grid place-items-center w-9 h-9 rounded-full text-text cursor-pointer text-base" style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)' }} aria-label="Close memorize mode">
          ✕
        </button>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-6 max-w-[560px] mx-auto w-full">
        <div className="text-center">
          <h2 className="font-display font-semibold text-[1.3rem] text-text m-0 mb-1">Recite Verse {verse.number}</h2>
          <p className="font-body text-text-2 text-[0.95rem] m-0">Try to recite from memory. Reveal lines if you need help.</p>
        </div>
        <div
          className="font-sk text-ink text-[1.5rem] leading-[2] text-center px-6 py-8 rounded-lg w-full"
          style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)', letterSpacing: '0.04em' }}
        >
          {lines.map((line, i) => (
            <div key={i} className="mb-2">
              {revealed.includes(i) ? (
                line
              ) : (
                <span style={{ background: 'var(--border)', borderRadius: 4, color: 'transparent', userSelect: 'none', padding: '0 8px' }}>
                  {line}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="flex gap-3 flex-wrap justify-center">
          <button onClick={revealNext} className="font-ui text-[0.88rem] font-medium text-text px-5 py-3 rounded-pill cursor-pointer" style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border-2)' }}>Reveal next line</button>
          <button onClick={revealAll} className="font-ui text-[0.88rem] font-medium text-text px-5 py-3 rounded-pill cursor-pointer" style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border-2)' }}>Reveal all</button>
          <button onClick={markMemorized} className="font-ui text-[0.88rem] font-medium px-5 py-3 rounded-pill cursor-pointer" style={{ background: 'var(--accent)', border: '1px solid var(--accent)', color: 'var(--bg)' }}>I know this ✓</button>
        </div>
      </div>
    </div>
  );
}

function clamp(n: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, n));
}

// Render Sanskrit with glossable spans for known terms.
function PopoverPositioned({
  popoverRef,
  popover,
  onClose,
}: {
  popoverRef: React.RefObject<HTMLDivElement | null>;
  popover: { x: number; y: number; sk: string; translit: string; gloss: string };
  onClose: () => void;
}) {
  // Position smartly: prefer above, but flip below if too close to top
  const [pos, setPos] = useState<{ left: number; top: number; arrow: 'up' | 'down' }>({ left: popover.x - 140, top: popover.y - 80, arrow: 'down' });

  useEffect(() => {
    if (!popoverRef.current) return;
    const w = popoverRef.current.offsetWidth || 280;
    const h = popoverRef.current.offsetHeight || 80;
    let left = popover.x - w / 2;
    left = Math.max(12, Math.min(window.innerWidth - w - 12, left));
    let top = popover.y - h - 12;
    let arrow: 'up' | 'down' = 'down';
    if (top < 16) {
      top = popover.y + 32; // flip below
      arrow = 'up';
    }
    setPos({ left, top, arrow });
  }, [popover.x, popover.y, popoverRef]);

  return (
    <div
      ref={popoverRef}
      data-popover="true"
      role="tooltip"
      onClick={(e) => { e.stopPropagation(); onClose(); }}
      className="fixed z-[100] rounded-md py-3 px-4 font-body text-[0.9rem] text-text leading-relaxed cursor-pointer"
      style={{
        left: pos.left,
        top: pos.top,
        maxWidth: 280,
        minWidth: 200,
        background: 'var(--bg-elev-2)',
        border: '1px solid var(--border-2)',
        boxShadow: 'var(--shadow-lg)',
      }}
    >
      <span className="font-sk text-ink text-[1.1rem] block mb-1">{popover.sk}</span>
      <span className="font-body italic text-text-3 text-[0.78rem] block mb-2">{popover.translit}</span>
      <span className="text-text text-[0.88rem]">{popover.gloss}</span>
    </div>
  );
}

function renderGlossedSanskrit(
  sanskrit: string,
  glosses: { sk: string; translit: string; gloss: string }[],
  showGloss: (e: React.MouseEvent, sk: string, translit: string, gloss: string) => void
): React.ReactNode {
  if (glosses.length === 0) {
    return sanskrit.split('\n').map((line, i) => (
      <div key={i} className="mb-2 last:mb-0">{line}</div>
    ));
  }
  // Sort glosses by length descending so longer terms match first
  const sorted = [...glosses].sort((a, b) => b.sk.length - a.sk.length);
  const lines = sanskrit.split('\n');
  return lines.map((line, lineIdx) => {
    const tokens: React.ReactNode[] = [];
    let remaining = line;
    let key = 0;
    while (remaining.length > 0) {
      let matched = false;
      for (const g of sorted) {
        if (remaining.startsWith(g.sk)) {
          tokens.push(
            <span
              key={`${lineIdx}-${key++}`}
              data-gloss="true"
              role="button"
              tabIndex={0}
              onClick={(e) => showGloss(e, g.sk, g.translit, g.gloss)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  showGloss(e as unknown as React.MouseEvent, g.sk, g.translit, g.gloss);
                }
              }}
              className="cursor-pointer transition-colors hover:text-accent focus:text-accent focus:outline-none"
              style={{ borderBottom: '1px dashed var(--border-2)' }}
            >
              {g.sk}
            </span>
          );
          remaining = remaining.slice(g.sk.length);
          matched = true;
          break;
        }
      }
      if (!matched) {
        tokens.push(<span key={`${lineIdx}-${key++}`}>{remaining[0]}</span>);
        remaining = remaining.slice(1);
      }
    }
    return <div key={lineIdx} className="mb-2 last:mb-0">{tokens}</div>;
  });
}
