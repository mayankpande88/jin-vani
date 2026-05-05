import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type Citation = { ref: string; text: string };

export type VerseContent = {
  number: number;
  numberDevanagari: string;
  sanskrit: string;          // Devanagari, with line breaks
  transliteration: string;   // IAST
  simple_hi?: string;
  simple_en?: string;
  translation_hi?: string;
  bhavarth_hi?: string;
  translation_en?: string;
  meaning_en?: string;
  today_title?: string;
  today_md?: string;
  glosses?: { sk: string; translit: string; gloss: string }[];
  word_by_word?: { sk: string; translit: string; gloss: string }[];
  citations?: Citation[];
  isStub?: boolean;
};

export type TextMeta = {
  slug: string;
  title_en: string;
  title_sk: string;
  category: 'mantra' | 'stotra' | 'sutra' | 'philosophy' | 'daily';
  author: string;
  era?: string;
  verseCount: number;
  estReadingMinutes: number;
  tradition: 'digambara' | 'universal' | 'shvetambara';
  intro_md?: string;
  authorCard_md?: string;
  storySlug?: string;
};

export type Text = TextMeta & { verses: VerseContent[] };

const CONTENT_ROOT = path.join(process.cwd(), 'content');

export function getAllTexts(): TextMeta[] {
  const textsDir = path.join(CONTENT_ROOT, 'texts');
  if (!fs.existsSync(textsDir)) return [];
  return fs
    .readdirSync(textsDir)
    .filter((d) => fs.statSync(path.join(textsDir, d)).isDirectory())
    .map((slug) => loadTextMeta(slug))
    .filter(Boolean) as TextMeta[];
}

export function loadTextMeta(slug: string): TextMeta | null {
  const file = path.join(CONTENT_ROOT, 'texts', slug, 'index.md');
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  return {
    slug,
    title_en: data.title_en,
    title_sk: data.title_sk,
    category: data.category,
    author: data.author,
    era: data.era,
    verseCount: data.verseCount,
    estReadingMinutes: data.estReadingMinutes,
    tradition: data.tradition,
    intro_md: content,
    authorCard_md: data.authorCard,
    storySlug: data.storySlug,
  };
}

export function loadText(slug: string): Text | null {
  const meta = loadTextMeta(slug);
  if (!meta) return null;
  const versesDir = path.join(CONTENT_ROOT, 'texts', slug, 'verses');
  let verses: VerseContent[] = [];
  if (fs.existsSync(versesDir)) {
    const files = fs.readdirSync(versesDir).filter((f) => f.endsWith('.md'));
    verses = files
      .map((f) => loadVerse(slug, parseInt(f.replace(/\D/g, ''), 10)))
      .filter(Boolean) as VerseContent[];
    verses.sort((a, b) => a.number - b.number);
  }
  return { ...meta, verses };
}

export function loadVerse(slug: string, num: number): VerseContent | null {
  const padded = num.toString().padStart(2, '0');
  const file = path.join(CONTENT_ROOT, 'texts', slug, 'verses', `${padded}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  return {
    number: num,
    numberDevanagari: data.numberDevanagari || toDevanagariNum(num),
    sanskrit: data.sanskrit,
    transliteration: data.transliteration,
    simple_hi: data.simple_hi,
    simple_en: data.simple_en,
    translation_hi: data.translation_hi,
    bhavarth_hi: data.bhavarth_hi,
    translation_en: data.translation_en,
    meaning_en: data.meaning_en,
    today_title: data.today_title,
    today_md: content || data.today_md,
    glosses: data.glosses || [],
    word_by_word: data.word_by_word || [],
    citations: data.citations || [],
    isStub: data.isStub === true,
  };
}

const DEV_NUMS = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
export function toDevanagariNum(n: number): string {
  return n.toString().split('').map((d) => DEV_NUMS[parseInt(d, 10)]).join('');
}

export function getMemorizedKey(slug: string, verseNum: number) {
  return `jinvani.${slug}.${verseNum}.memorized`;
}
