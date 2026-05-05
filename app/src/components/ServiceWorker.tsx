'use client';

import { useEffect } from 'react';

export function ServiceWorker() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!('serviceWorker' in navigator)) return;
    if (process.env.NODE_ENV !== 'production') return;
    // Defer registration so it doesn't block first paint
    const t = setTimeout(() => {
      const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
      navigator.serviceWorker.register(base + '/sw.js', { scope: base + '/' }).catch(() => {});
    }, 1500);
    return () => clearTimeout(t);
  }, []);
  return null;
}
