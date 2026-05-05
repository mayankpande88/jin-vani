'use client';

import { useEffect } from 'react';

export function ServiceWorker() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!('serviceWorker' in navigator)) return;
    if (process.env.NODE_ENV !== 'production') return;
    // Defer registration so it doesn't block first paint
    const t = setTimeout(() => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }, 1500);
    return () => clearTimeout(t);
  }, []);
  return null;
}
