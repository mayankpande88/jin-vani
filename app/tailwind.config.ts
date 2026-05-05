import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-1': 'var(--bg-elev-1)',
        'bg-2': 'var(--bg-elev-2)',
        'bg-3': 'var(--bg-elev-3)',
        text: 'var(--text)',
        'text-2': 'var(--text-2)',
        'text-3': 'var(--text-3)',
        ink: 'var(--ink-sk)',
        'ink-soft': 'var(--ink-sk-soft)',
        accent: 'var(--accent)',
        'accent-soft': 'var(--accent-soft)',
        vermillion: 'var(--vermillion)',
        border: 'var(--border)',
        'border-2': 'var(--border-2)',
      },
      fontFamily: {
        sk: ['"Tiro Devanagari Sanskrit"', '"Noto Serif Devanagari"', 'serif'],
        hi: ['"Noto Serif Devanagari"', '"Tiro Devanagari Sanskrit"', 'serif'],
        display: ['"Fraunces"', '"Source Serif 4"', 'Georgia', 'serif'],
        body: ['"Source Serif 4"', 'Georgia', 'serif'],
        ui: ['"Manrope"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '8px',
        md: '14px',
        lg: '22px',
        xl: '32px',
        pill: '999px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.4)',
        md: '0 4px 16px rgba(0,0,0,0.4), 0 0 0 1px rgba(74, 61, 42, 0.5)',
        lg: '0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(74, 61, 42, 0.5)',
        glow: '0 0 24px rgba(232, 137, 58, 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
