import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllTexts, loadTextMeta } from '@/lib/content';

export function generateStaticParams() {
  return getAllTexts()
    .filter((t) => t.storySlug)
    .map((t) => ({ slug: t.slug }));
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const text = loadTextMeta(slug);
  if (!text || !text.storySlug) notFound();

  // For now, only Bhaktamara has a story; render inline
  if (text.storySlug !== 'bhaktamara') notFound();

  return (
    <main className="max-w-[480px] lg:max-w-[760px] mx-auto px-5 lg:px-8 pb-24 lg:pb-12">

      <section className="text-center pt-12 pb-8">
        <div
          className="w-24 h-24 mx-auto mb-6 rounded-full grid place-items-center"
          style={{
            background: 'radial-gradient(circle at 50% 50%, var(--accent-glow), transparent 70%), var(--bg-elev-2)',
            border: '1px solid var(--border-2)',
            color: 'var(--ink-sk)',
            boxShadow: '0 0 24px rgba(232, 137, 58, 0.18)',
          }}
        >
          <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
            <path d="M16 28 Q14 20 18 16 Q22 14 24 18 L26 24 L38 24 L40 18 Q42 14 46 16 Q50 20 48 28 L46 36 Q48 44 44 50 Q40 54 32 54 Q24 54 20 50 Q16 44 18 36 Z"
                  stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
            <circle cx="26" cy="34" r="1.5" fill="currentColor"/>
            <circle cx="38" cy="34" r="1.5" fill="currentColor"/>
            <path d="M28 42 Q32 44 36 42" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="font-ui text-[0.7rem] font-bold tracking-[0.18em] uppercase text-accent mb-3">The Story Behind</div>
        <h1 className="font-display font-semibold text-text leading-[1.15] m-0 mb-3 tracking-tight" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.6rem)' }}>
          {text.title_en}
        </h1>
        <p className="font-body italic text-base text-text-2 m-0">
          A traditional account of Acharya Manatunga and the 48 chains
        </p>
      </section>

      <StorySection num="Part One · The Acharya" title="An Acharya in Ujjayini">
        <p>Long ago — more than a thousand years ago, in the city of Ujjayini in central India — there lived a Digambara <em>Acharya</em> named <strong>Manatunga</strong>.</p>
        <p>An Acharya is a senior monk — someone who has spent a lifetime in study and meditation, and who guides others on the path. Acharya Manatunga had given up everything: his family, his possessions, even his clothes. He owned nothing. He held nothing back.</p>
        <p>What he did have was deep <strong>bhakti</strong> — devotion — for <strong>Bhagavan Adinath</strong>, the very first Tirthankara of our time. To him, the example of Adinath was the only thing worth holding onto in life.</p>
      </StorySection>

      <StorySection num="Part Two · The Court" title="The King Wanted Proof">
        <p>Tradition tells us that there was a powerful king in Ujjayini — often remembered as <strong>King Bhoja</strong>. His court was filled with famous poets: Mayura, who praised the sun-god Surya; Bana, who praised the goddess Chandi. Both had composed beautiful hymns and were said to have shown miraculous powers through their devotion.</p>
        <p>The king had heard of Acharya Manatunga, the Digambara monk who lived without anything, who praised the Jina above all else. The king wanted to know: <em>was Manatunga&apos;s devotion as powerful as the others?</em></p>
        <p>&ldquo;Show me,&rdquo; the king said. &ldquo;Show me the power of your Jain teachings. Show me what your Adinath can do.&rdquo;</p>
      </StorySection>

      <StorySection num="Part Three · The Challenge" title="Forty-eight Chains">
        <p>To make the test impossible, the king ordered Acharya Manatunga to be bound — not in one chain, not in ten, but in <strong>forty-eight iron chains</strong>. He was locked in a room behind forty-eight locked doors.</p>
        <p>&ldquo;If your devotion is real,&rdquo; the king said, &ldquo;let your Jina free you now.&rdquo;</p>
        <SymbolRow />
      </StorySection>

      <StorySection num="Part Four · The Stotra Begins" title="Each Verse, One Chain">
        <p>But Acharya Manatunga was not afraid. Sitting in chains, in the dark, he closed his eyes and began to compose verses praising Bhagavan Adinath.</p>
        <p>The first verse was this:</p>
        <Callout
          sk={`भक्तामर-प्रणत-मौलि-मणि-प्रभाणा-\nमुद्योतकं दलित-पाप-तमो-वितानम्।`}
          translit={`bhaktāmara-praṇata-mauli-maṇi-prabhāṇām\nudyotakaṁ dalita-pāpa-tamo-vitānam`}
        />
        <p><em>&ldquo;I bow to the feet of the first Jina — feet whose radiance lights up even the jewels in the crowns of bowing celestials, feet that dispel the darkness of sin...&rdquo;</em></p>
        <p>As Acharya Manatunga finished the verse — <strong>one chain broke.</strong></p>
        <p>He kept going. Verse two. Another chain broke. Verse three. Another. The verses came one after another, each one a praise of the Jina&apos;s qualities — his calmness, his wisdom, his light, his compassion. With each verse, one more chain fell away. With each verse, one more door unlocked.</p>
      </StorySection>

      <StorySection num="Part Five · Free" title="The Forty-eighth Verse">
        <p>At the forty-eighth verse, the last chain fell. The last door swung open. Acharya Manatunga stood up, walked out of the prison — without weapons, without anger, without even a single possession.</p>
        <p>Just words. Just a stotra.</p>
        <p>The king watched, stunned. He understood something he had not understood before: <strong>true power is not in miracles. True power is bhakti</strong> — devotion that is pure, focused, unshakeable. Devotion that does not depend on chains being broken or doors being opened. Devotion that simply is.</p>
      </StorySection>

      <StorySection num="Part Six · Today" title="Why we read it">
        <p>The stotra Acharya Manatunga composed in that prison cell is the same Bhaktamara Stotra we read today — all <strong>forty-eight verses</strong> of it. Across the Digambara tradition, it is recited daily in temples, in homes, by elders, and by children just learning their first prayers.</p>
        <p>Every time we read it, we are doing what Acharya Manatunga did. We are turning toward the Jina&apos;s example. We are turning away from fear. And we are turning into <em>bhakti</em> — that pure, quiet devotion that is stronger than any chain.</p>
      </StorySection>

      <div
        className="rounded-xl p-10 px-6 text-center my-12"
        style={{ background: 'linear-gradient(155deg, var(--bg-elev-3), var(--bg-elev-2))', border: '1px solid var(--border-2)' }}
      >
        <h3 className="font-display font-semibold text-[1.3rem] text-text m-0 mb-3">Begin reading the Bhaktamara Stotra</h3>
        <p className="font-body text-text-2 text-base m-0 mb-6 leading-relaxed">All 48 verses · Sanskrit, Hindi, English · Tap any word to learn what it means.</p>
        <Link
          href={`/${slug}/1`}
          className="inline-flex items-center justify-center gap-2 font-ui font-semibold text-[0.95rem] py-5 px-8 rounded-pill no-underline"
          style={{ background: 'var(--accent)', color: 'var(--bg)', maxWidth: '320px', boxShadow: '0 0 24px rgba(232, 137, 58, 0.18)' }}
        >
          Read Verse 1
          <span className="text-xl">→</span>
        </Link>
      </div>

      <div
        className="font-ui text-[0.78rem] text-text-3 leading-relaxed py-4 px-5 rounded-md mt-12"
        style={{ background: 'var(--bg-elev-1)', borderLeft: '3px solid var(--accent)' }}
      >
        <strong className="text-text-2 block mb-1 font-semibold">Note on this account</strong>
        The story of the 48 chains is a traditional account told widely across the Digambara community for many centuries. Specific details — the exact identity of the king, the precise circumstances — vary across sources, and the historical Manatunga predates the famous King Bhoja of Dhar by some centuries. What is consistent across the tradition is the central image: an Acharya bound in 48 chains, freed by 48 verses of devotion.{' '}
        <strong className="text-accent">This page is a draft pending review by the project&apos;s Digambara cultural reviewer.</strong>
      </div>
    </main>
  );
}

function StorySection({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <div className="font-display font-semibold text-[0.78rem] tracking-[0.18em] uppercase text-accent flex items-center gap-3 mb-3">
        <span className="w-6 h-px bg-accent opacity-60" />
        {num}
      </div>
      <h2 className="font-display font-semibold text-text leading-[1.3] tracking-tight m-0 mb-4" style={{ fontSize: 'clamp(1.3rem, 3.5vw, 1.7rem)' }}>{title}</h2>
      <div className="font-body text-base lg:text-[1.05rem] leading-[1.8] text-text-2 [&>p]:mb-4 [&>p]:m-0 [&>p:last-child]:mb-0 [&>p_strong]:text-text">
        {children}
      </div>
    </section>
  );
}

function Callout({ sk, translit }: { sk: string; translit: string }) {
  return (
    <div
      className="rounded-lg p-6 my-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(155deg, var(--bg-elev-2), var(--bg-elev-1))', border: '1px solid var(--border-2)' }}
    >
      <span className="absolute -top-2 left-3 font-display text-[5rem] text-accent opacity-30 leading-none">&ldquo;</span>
      <p className="font-sk text-ink text-[1.1rem] leading-[1.7] text-center m-0 mb-2">
        {sk.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
      </p>
      <p className="font-body italic text-[0.85rem] text-text-3 text-center m-0">
        {translit.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
      </p>
    </div>
  );
}

function SymbolRow() {
  return (
    <div className="flex items-center justify-center gap-4 my-8" style={{ color: 'var(--accent)' }}>
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 opacity-60">
        <ellipse cx="8" cy="12" rx="4" ry="6" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="16" cy="12" rx="4" ry="6" stroke="currentColor" strokeWidth="2" />
      </svg>
      <span className="w-1 h-1 rounded-full opacity-40" style={{ background: 'currentColor' }} />
      <span className="w-1 h-1 rounded-full opacity-40" style={{ background: 'currentColor' }} />
      <span className="w-1 h-1 rounded-full opacity-40" style={{ background: 'currentColor' }} />
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 opacity-60">
        <ellipse cx="8" cy="12" rx="4" ry="6" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="16" cy="12" rx="4" ry="6" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  );
}
