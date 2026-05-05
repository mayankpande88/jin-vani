import { notFound } from 'next/navigation';
import { getAllTexts, loadText, loadVerse, loadTextMeta } from '@/lib/content';
import { VerseReader } from '@/components/VerseReader';

export function generateStaticParams() {
  const params: { slug: string; verse: string }[] = [];
  for (const t of getAllTexts()) {
    for (let i = 1; i <= t.verseCount; i++) {
      params.push({ slug: t.slug, verse: i.toString() });
    }
  }
  return params;
}

export default async function VersePage({ params }: { params: Promise<{ slug: string; verse: string }> }) {
  const { slug, verse: verseStr } = await params;
  const verseNum = parseInt(verseStr, 10);
  const text = loadTextMeta(slug);
  const verse = loadVerse(slug, verseNum);
  if (!text || !verse) notFound();

  // For navigation, get sibling verses
  const all = loadText(slug);
  const total = all?.verseCount || 1;
  const prevNum = verseNum > 1 ? verseNum - 1 : null;
  const nextNum = verseNum < total ? verseNum + 1 : null;

  return (
    <VerseReader
      text={text}
      verse={verse}
      total={total}
      prevNum={prevNum}
      nextNum={nextNum}
    />
  );
}
