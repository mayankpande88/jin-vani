'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

export function Topbar() {
  const pathname = usePathname();
  const is = (path: string) => pathname === path || pathname?.startsWith(path);

  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between gap-4 px-5 py-5 backdrop-blur-xl backdrop-saturate-150 lg:max-w-[1400px] lg:mx-auto lg:px-8"
      style={{ background: 'var(--bg-overlay)' }}
    >
      <Link href="/" className="flex items-center gap-2 text-text font-display text-base font-semibold no-underline">
        <span
          className="inline-grid place-items-center w-7 h-7 rounded-full font-sk text-base"
          style={{
            background: 'linear-gradient(135deg, var(--accent) 0%, var(--ink-sk) 100%)',
            color: 'var(--bg)',
            boxShadow: 'var(--shadow-glow, 0 0 24px rgba(232, 137, 58, 0.18))',
          }}
        >
          ज
        </span>
        Jin-vani
      </Link>

      <nav className="hidden lg:flex items-center gap-1 font-ui text-[0.85rem] font-medium flex-1 justify-center">
        <NavLink href="/" active={is('/') && pathname === '/'}>Library</NavLink>
        <NavLink href="/foundations" active={is('/foundations')}>Foundations</NavLink>
        <NavLink href="/tirthankaras" active={is('/tirthankaras')}>Tirthankaras</NavLink>
        <NavLink href="/authors" active={is('/authors')}>Authors</NavLink>
        <NavLink href="/glossary" active={is('/glossary')}>Glossary</NavLink>
        <NavLink href="/what-is-jainism" active={is('/what-is-jainism')}>About</NavLink>
      </nav>

      <Link
        href="/search"
        className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-pill flex-shrink-0 no-underline transition-colors hover:border-accent"
        style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)', minWidth: '240px', color: 'var(--text-3)' }}
      >
        <span className="opacity-60 text-sm">⌕</span>
        <span className="font-ui text-[0.85rem]">Search verses, terms, texts…</span>
      </Link>

      <div className="flex items-center gap-2">
        <Link href="/search" className="icon-btn xl:hidden" aria-label="Search">⌕</Link>
        <ThemeToggle />
      </div>
    </header>
  );
}

function NavLink({ href, active, children }: { href: string; active?: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-pill no-underline transition-all duration-150 ${active ? 'text-text' : 'text-text-2 hover:text-text'}`}
      style={active ? { background: 'var(--bg-elev-1)' } : undefined}
    >
      {children}
    </Link>
  );
}
