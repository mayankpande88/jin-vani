import { notFound } from 'next/navigation';
import { getAllTexts, loadText, loadVerse, loadTextMeta } from '@/lib/content';
import { VerseReader } from '@/components/VerseReader';

// Generate a page per verse file that actually exists. verseCount in index.md
// is display metadata (for mantras it counts lines) and can exceed the number
// of verse files; iterating 1..verseCount emitted 404 pages and dead "next" links.
export function generateStaticParams() {
  const params: { slug: string; verse: string }[] = [];
  for (const t of getAllTexts()) {
    for (const v of loadText(t.slug)?.verses ?? []) {
      params.push({ slug: t.slug, verse: v.number.toString() });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; verse: string }> }) {
  const { slug, verse: verseStr } = await params;
  const text = loadTextMeta(slug);
  return { title: text ? `${text.title_en} · Verse ${parseInt(verseStr, 10)}` : undefined };
}

export default async function VersePage({ params }: { params: Promise<{ slug: string; verse: string }> }) {
  const { slug, verse: verseStr } = await params;
  const verseNum = parseInt(verseStr, 10);
  const text = loadTextMeta(slug);
  const verse = loadVerse(slug, verseNum);
  if (!text || !verse) notFound();

  // For navigation, get sibling verses from the verse files that exist
  const nums = (loadText(slug)?.verses ?? []).map((v) => v.number);
  const idx = nums.indexOf(verseNum);
  const total = nums.length || 1;
  const prevNum = idx > 0 ? nums[idx - 1] : null;
  const nextNum = idx >= 0 && idx < nums.length - 1 ? nums[idx + 1] : null;

  return (
    <div data-pagefind-body data-pagefind-meta={`title:${text.title_en} · Verse ${verse.number}`}>
      <VerseReader
        text={text}
        verse={verse}
        total={total}
        prevNum={prevNum}
        nextNum={nextNum}
      />
    </div>
  );
}
