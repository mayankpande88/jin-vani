'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light' | null>(null);

  useEffect(() => {
    const cur = document.documentElement.getAttribute('data-theme') as 'dark' | 'light' | null;
    setTheme(cur);
  }, []);

  function toggle() {
    const root = document.documentElement;
    const cur = root.getAttribute('data-theme');
    let next: 'dark' | 'light';
    if (cur === 'dark') next = 'light';
    else if (cur === 'light') next = 'dark';
    else next = window.matchMedia('(prefers-color-scheme: light)').matches ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('jinvani.theme', next);
    setTheme(next);
  }

  return (
    <button onClick={toggle} className="icon-btn" aria-label="Toggle theme" title="Toggle light/dark">
      ◐
    </button>
  );
}
