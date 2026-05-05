'use client';

import { useEffect, useState } from 'react';

const LS_KEY = 'jinvani.onboarded';

export function OnboardingModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onboarded = localStorage.getItem(LS_KEY);
    if (!onboarded) {
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  // Allow Shift+R to reset onboarding for testing
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === 'R') {
        localStorage.removeItem(LS_KEY);
        localStorage.removeItem('jinvani.level');
        location.reload();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  function close(level: string | null) {
    setVisible(false);
    localStorage.setItem(LS_KEY, 'true');
    if (level) localStorage.setItem('jinvani.level', level);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboard-title"
      className="fixed inset-0 z-[200] grid place-items-center p-5 backdrop-blur-md transition-opacity duration-250"
      style={{ background: 'rgba(14, 11, 8, 0.7)' }}
      onClick={() => close(null)}
    >
      <div
        className="relative w-full max-w-md rounded-xl p-10 pb-8 text-center"
        style={{ background: 'var(--bg-elev-2)', border: '1px solid var(--border-2)', boxShadow: 'var(--shadow-lg)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="w-16 h-16 mx-auto mb-5 grid place-items-center rounded-full font-sk text-2xl"
          style={{
            background: 'linear-gradient(135deg, var(--accent), var(--ink-sk))',
            color: 'var(--bg)',
            boxShadow: '0 0 24px rgba(232, 137, 58, 0.18)',
          }}
        >
          ज
        </div>
        <div className="font-ui text-[0.7rem] font-bold tracking-[0.2em] uppercase text-accent mb-3">
          ॥ णमो अरिहंताणं ॥
        </div>
        <h2 id="onboard-title" className="font-display text-2xl font-semibold text-text mb-3 leading-tight">
          Welcome to Jin-vani
        </h2>
        <p className="font-body text-text-2 text-[0.95rem] leading-relaxed mb-8">
          A reading library for Digambara Jain texts. Pick the level that fits — we&apos;ll set up your reading view to match. You can change this anytime.
        </p>
        <div className="flex flex-col gap-3 mb-6 text-left">
          <Option title="I'm new to Jain texts" desc="Start with the story behind Bhaktamara, then read with simple meanings and tap-to-define help." onClick={() => close('new')} />
          <Option title="I know some, learning more" desc="Default to word-by-word and Hindi meanings. Skip the introductions; jump into reading." onClick={() => close('learning')} />
          <Option title="I read these regularly" desc="Default to Sanskrit + Hindi translation. Minimal scaffolding. Audio when available." onClick={() => close('experienced')} />
        </div>
        <button onClick={() => close(null)} className="font-ui text-text-3 text-[0.85rem] underline underline-offset-4 hover:text-accent">
          Skip — I&apos;ll explore on my own
        </button>
      </div>
    </div>
  );
}

function Option({ title, desc, onClick }: { title: string; desc: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-md p-4 px-5 cursor-pointer text-left transition-all duration-150 hover:border-accent"
      style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)' }}
    >
      <span className="font-display font-semibold text-base block mb-1 text-text">{title}</span>
      <span className="text-[0.85rem] text-text-3 font-body">{desc}</span>
    </button>
  );
}
