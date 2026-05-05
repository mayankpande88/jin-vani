'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Tabbar() {
  const pathname = usePathname();
  const is = (m: (p: string) => boolean) => m(pathname || '');

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 backdrop-blur-xl backdrop-saturate-150 py-2"
      style={{
        background: 'var(--bg-overlay)',
        borderTop: '1px solid var(--border)',
        paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))',
      }}
      aria-label="Primary"
    >
      <div className="grid grid-cols-4 max-w-[480px] mx-auto">
        <TabItem href="/" icon="⌂" label="Library" active={pathname === '/'} />
        <TabItem href="/search" icon="⌕" label="Search" active={pathname === '/search'} />
        <TabItem href="/foundations" icon="◈" label="Foundations" active={pathname?.startsWith('/foundations') || false} />
        <TabItem href="/me" icon="☰" label="You" active={pathname === '/me'} />
      </div>
    </nav>
  );
}

function TabItem({ href, icon, label, active }: { href: string; icon: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center justify-center px-2 py-2 no-underline font-ui text-[0.65rem] font-medium tracking-wide gap-0.5 ${active ? 'text-accent' : 'text-text-3'} hover:text-accent transition-colors`}
    >
      <span className="text-xl leading-none">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}
