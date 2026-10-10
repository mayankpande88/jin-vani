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

// Content files carry HTML entities (&apos;, &ldquo;, ...) that React would
// otherwise render literally, since every field is rendered as plain text.
// Single-quoted YAML strings also keep "\n" as two literal characters; turn
// those into real line breaks so paragraph splitting works.
const NAMED_ENTITIES: Record<string, string> = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: '\u00A0',
  lsquo: '\u2018', rsquo: '\u2019', ldquo: '\u201C', rdquo: '\u201D',
  ndash: '\u2013', mdash: '\u2014', hellip: '\u2026',
};
export function decodeEntities<T>(v: T): T {
  if (typeof v !== 'string') return v;
  return v.replace(/&(#x[0-9a-f]+|#[0-9]+|[a-z]+);/gi, (m, e: string) => {
    if (e[0] === '#') {
      const code = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : m;
    }
    return NAMED_ENTITIES[e.toLowerCase()] ?? m;
  }).replace(/\\n/g, '\n') as T;
}

type Gloss = { sk: string; translit: string; gloss: string };
function decodeGlosses(list: unknown): Gloss[] {
  if (!Array.isArray(list)) return [];
  return list.map((g) => ({ sk: decodeEntities(g?.sk), translit: decodeEntities(g?.translit), gloss: decodeEntities(g?.gloss) }));
}

// Citation files use either `ref:` or `source:` for the label.
function decodeCitations(list: unknown): Citation[] {
  if (!Array.isArray(list)) return [];
  return list.map((c) => ({ ref: decodeEntities(c?.ref ?? c?.source ?? ''), text: decodeEntities(c?.text ?? '') }));
}

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
    title_en: decodeEntities(data.title_en),
    title_sk: decodeEntities(data.title_sk),
    category: data.category,
    author: decodeEntities(data.author),
    era: decodeEntities(data.era),
    verseCount: data.verseCount,
    estReadingMinutes: data.estReadingMinutes,
    tradition: data.tradition,
    intro_md: decodeEntities(content),
    authorCard_md: decodeEntities(data.authorCard),
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
    sanskrit: decodeEntities(data.sanskrit),
    transliteration: decodeEntities(data.transliteration),
    simple_hi: decodeEntities(data.simple_hi),
    simple_en: decodeEntities(data.simple_en),
    translation_hi: decodeEntities(data.translation_hi),
    bhavarth_hi: decodeEntities(data.bhavarth_hi),
    translation_en: decodeEntities(data.translation_en),
    meaning_en: decodeEntities(data.meaning_en),
    today_title: decodeEntities(data.today_title),
    today_md: decodeEntities(content || data.today_md),
    glosses: decodeGlosses(data.glosses),
    word_by_word: decodeGlosses(data.word_by_word),
    citations: decodeCitations(data.citations),
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
