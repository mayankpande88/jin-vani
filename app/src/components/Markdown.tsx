// Minimal markdown renderer — paragraphs, **bold**, *italic*, > blockquote.
// Optionally auto-links curated glossary terms (first occurrence per page).

import { autolinkText } from '@/lib/glossary';

export function Markdown({ children, autolink = true }: { children: string; autolink?: boolean }) {
  const blocks = children.split(/\n\n+/).filter((b) => b.trim().length > 0);
  const linked = new Set<string>(); // Tracks already-linked glossary terms per render
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  return (
    <>
      {blocks.map((block, i) => {
        if (block.startsWith('> ')) {
          const text = block.replace(/^>\s?/gm, '');
          return (
            <blockquote key={i} className="my-5 pl-5 italic text-text-2 font-display text-[1.1rem] leading-relaxed" style={{ borderLeft: '3px solid var(--accent)' }}>
              {renderInline(text, autolink, basePath, linked)}
            </blockquote>
          );
        }
        return (
          <p key={i} className="mb-4 last:mb-0">
            {renderInline(block, autolink, basePath, linked)}
          </p>
        );
      })}
    </>
  );
}

function renderInline(text: string, autolink: boolean, basePath: string, linked: Set<string>): React.ReactNode {
  // First pass: split on bold/italic/code markers. Keep formatted segments
  // intact (don't autolink inside `code` for example), and autolink the
  // plain text segments only.
  const parts: React.ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      pushPlain(parts, text.slice(lastIndex, match.index), autolink, basePath, linked, key);
      key += 1000;
    }
    const m = match[0];
    if (m.startsWith('**')) parts.push(<strong key={key++}>{m.slice(2, -2)}</strong>);
    else if (m.startsWith('`')) parts.push(<code key={key++} className="font-mono text-[0.9em] px-1 rounded" style={{ background: 'var(--bg-elev-3)' }}>{m.slice(1, -1)}</code>);
    else parts.push(<em key={key++}>{m.slice(1, -1)}</em>);
    lastIndex = match.index + m.length;
  }
  if (lastIndex < text.length) {
    pushPlain(parts, text.slice(lastIndex), autolink, basePath, linked, key);
  }
  return <>{parts}</>;
}

function pushPlain(
  parts: React.ReactNode[],
  text: string,
  autolink: boolean,
  basePath: string,
  linked: Set<string>,
  baseKey: number
) {
  if (!autolink) {
    parts.push(text);
    return;
  }
  const tokens = autolinkText(text, basePath, linked);
  let k = 0;
  for (const tok of tokens) {
    if (typeof tok === 'string') {
      parts.push(tok);
    } else {
      parts.push(
        <a
          key={`${baseKey}-${k++}`}
          href={tok.href}
          className="underline decoration-dotted decoration-1 underline-offset-[3px] decoration-text-3 hover:decoration-accent hover:text-accent transition-colors"
        >
          {tok.text}
        </a>
      );
    }
  }
}
