import Link from 'next/link';
import { getAllTexts, type TextMeta } from '@/lib/content';
import { ContinueCard } from '@/components/ContinueCard';

export default function HomePage() {
  const all = getAllTexts();
  const byCategory: Record<string, TextMeta[]> = {};
  for (const t of all) {
    (byCategory[t.category] ||= []).push(t);
  }

  return (
    <main className="max-w-[480px] lg:max-w-[1100px] mx-auto px-5 lg:px-8 pb-24 lg:pb-12">
      <div className="font-ui text-[0.78rem] font-medium tracking-[0.16em] uppercase text-accent pt-8 pb-3">
        Welcome <span className="text-text-3 ml-2 font-normal">· to Jin-vani</span>
      </div>

      {/* Hero grid: VoD + side rail on desktop */}
      <div className="block lg:grid lg:grid-cols-[1fr_320px] lg:gap-6 lg:items-stretch mb-12">
        <Link
          href="/bhaktamara-stotra/1"
          className="relative block rounded-xl overflow-hidden no-underline text-text mb-12 lg:mb-0 lg:flex lg:flex-col lg:justify-center lg:min-h-[360px] transition-transform duration-200 hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(155deg, var(--bg-elev-2) 0%, var(--bg-elev-1) 100%)',
            border: '1px solid var(--border)',
            padding: '2rem 1.5rem',
          }}
        >
          <div className="absolute -top-10 -right-10 w-[200px] h-[200px] pointer-events-none"
            style={{ background: 'radial-gradient(circle, var(--accent-glow), transparent 70%)' }} />
          <div className="font-ui text-[0.7rem] font-bold tracking-[0.18em] uppercase text-accent flex items-center gap-2 mb-5">
            <span className="w-6 h-px bg-accent"></span>
            Verse of the Day
          </div>
          <p className="font-sk text-ink text-[1.4rem] lg:text-[1.65rem] leading-[1.6] mb-4">
            भक्तामर-प्रणत-मौलि-मणि-प्रभाणा-<br />
            मुद्योतकं दलित-पाप-तमो-वितानम्।
          </p>
          <p className="font-body text-[0.95rem] text-text-2 italic leading-relaxed mb-6 lg:max-w-[38rem]">
            &ldquo;Having truly bowed to the pair of feet of the first Jina — feet that illumine the radiance of the jewels in the crowns of bowing devotees, that dispel the spreading darkness of sin...&rdquo;
          </p>
          <div className="font-ui text-[0.78rem] text-text-3 flex items-center justify-between">
            <span className="text-text-2 font-medium">Bhaktamara Stotra · Verse 1</span>
            <span className="text-accent font-semibold">Read more →</span>
          </div>
        </Link>

        <div className="flex flex-col gap-3">
          <ContinueCard />
          <div className="flex gap-3">
            <Stat num="5" label="Day streak" />
            <Stat num="12" label="Verses read" />
            <Stat num="2" label="Memorized" />
          </div>
        </div>
      </div>

      {/* What is Jainism — newcomer entry */}
      <Link
        href="/what-is-jainism"
        className="flex items-center gap-4 rounded-lg p-5 mb-3 no-underline text-text transition-all hover:-translate-y-0.5"
        style={{ background: 'var(--bg-elev-2)', border: '1px solid var(--border-2)' }}
      >
        <div
          className="w-12 h-12 rounded-full grid place-items-center flex-shrink-0 font-display font-semibold text-lg"
          style={{ background: 'linear-gradient(135deg, var(--ink-sk), var(--accent))', color: 'var(--bg)' }}
        >
          ?
        </div>
        <div className="flex-1">
          <div className="font-ui text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent mb-1">New here?</div>
          <h3 className="font-display font-semibold text-base m-0 text-text">What is Jainism?</h3>
          <div className="font-ui text-[0.78rem] text-text-3 mt-0.5">A clear 5-minute introduction · honest, not promotional</div>
        </div>
        <div className="text-accent text-xl flex-shrink-0">→</div>
      </Link>

      {/* Foundations entry */}
      <Link
        href="/foundations"
        className="flex items-center gap-4 rounded-lg p-5 mb-12 no-underline text-text transition-all hover:-translate-y-0.5"
        style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border-2)' }}
      >
        <div
          className="w-12 h-12 rounded-full grid place-items-center flex-shrink-0 font-semibold"
          style={{ background: 'linear-gradient(135deg, var(--accent), var(--ink-sk))', color: 'var(--bg)' }}
        >
          ◈
        </div>
        <div className="flex-1">
          <div className="font-ui text-[0.65rem] font-bold tracking-[0.16em] uppercase text-accent mb-1">Foundations</div>
          <h3 className="font-display font-semibold text-base m-0 text-text">What Jainism Actually Says</h3>
          <div className="font-ui text-[0.78rem] text-text-3 mt-0.5">8 things often misunderstood — answered honestly</div>
        </div>
        <div className="text-accent text-xl flex-shrink-0">→</div>
      </Link>

      {/* Library by category */}
      {[
        ['stotra', 'Stotras'],
        ['mantra', 'Mantras & Prayers'],
        ['daily', 'Daily Reading'],
        ['sutra', 'Sutras & Philosophy'],
      ].map(([cat, title]) => {
        const texts = byCategory[cat] || [];
        if (texts.length === 0) return null;
        return (
          <section key={cat}>
            <div className="flex items-baseline justify-between mt-12 mb-5">
              <h2 className="font-display font-semibold text-[1.35rem] text-text m-0 tracking-tight">{title}</h2>
              <span className="font-ui text-[0.78rem] text-accent font-medium">
                {texts.length} {texts.length === 1 ? 'text' : 'texts'}
              </span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4 mb-12">
              {texts.map((t) => (
                <LibCard key={t.slug} text={t} />
              ))}
            </div>
          </section>
        );
      })}

      {/* About footer */}
      <footer
        className="mt-16 pt-8 px-0 font-ui text-[0.78rem] text-text-3 leading-relaxed"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <h3 className="font-display text-[0.78rem] tracking-[0.16em] uppercase text-text-2 font-semibold m-0 mb-3">About Jin-vani</h3>
        <p>
          A Digambara Jain reading library — built by a community member for the community.
          Texts are presented in their Digambara recensions with translations and meanings in Hindi and English.
        </p>
        <p className="mt-3 text-[0.7rem] opacity-60">MVP build · Content draft pending Digambara cultural reviewer</p>
      </footer>
    </main>
  );
}

function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex-1 p-4 rounded-md" style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)' }}>
      <div className="font-display text-[1.6rem] font-semibold text-accent leading-none">{num}</div>
      <div className="font-ui text-[0.7rem] tracking-wider uppercase text-text-3 mt-0.5">{label}</div>
    </div>
  );
}

function LibCard({ text }: { text: TextMeta }) {
  return (
    <Link
      href={`/${text.slug}`}
      className="rounded-xl p-5 no-underline text-text flex flex-col gap-3 min-h-[200px] transition-all duration-200 hover:-translate-y-0.5"
      style={{ background: 'var(--bg-elev-1)', border: '1px solid var(--border)' }}
    >
      <div
        className="w-16 h-16 rounded-md grid place-items-center font-sk text-[1.6rem] flex-shrink-0 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--bg-elev-3), var(--bg-elev-2))',
          color: 'var(--ink-sk)',
          border: '1px solid var(--border-2)',
        }}
      >
        <span className="relative z-10">{text.title_sk.charAt(0)}</span>
      </div>
      <h3 className="font-display font-semibold text-base text-text m-0 leading-tight">{text.title_en}</h3>
      <p className="font-body text-[0.8rem] text-text-3 m-0 italic leading-snug">{text.author}</p>
      <div className="mt-auto font-ui text-[0.7rem] text-text-3 flex items-center gap-2">
        <span
          className="font-bold text-[0.65rem] tracking-[0.1em] uppercase px-2 py-0.5 rounded-pill"
          style={{ background: 'var(--bg-elev-3)', color: 'var(--accent)' }}
        >
          {text.verseCount} {text.category === 'mantra' ? 'lines' : 'verses'}
        </span>
        <span>·</span>
        <span>{text.estReadingMinutes} min</span>
      </div>
    </Link>
  );
}
