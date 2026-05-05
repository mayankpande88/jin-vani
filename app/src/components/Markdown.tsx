// Minimal markdown renderer — paragraphs, **bold**, *italic*, > blockquote.
// Avoids adding a full MDX runtime to keep MVP build simple.
// For richer needs, swap to remark/rehype later.

export function Markdown({ children }: { children: string }) {
  const blocks = children.split(/\n\n+/).filter((b) => b.trim().length > 0);

  return (
    <>
      {blocks.map((block, i) => {
        if (block.startsWith('> ')) {
          const text = block.replace(/^>\s?/gm, '');
          return (
            <blockquote key={i} className="my-5 pl-5 italic text-text-2 font-display text-[1.1rem] leading-relaxed" style={{ borderLeft: '3px solid var(--accent)' }}>
              {renderInline(text)}
            </blockquote>
          );
        }
        return (
          <p key={i} className="mb-4 last:mb-0">
            {renderInline(block)}
          </p>
        );
      })}
    </>
  );
}

function renderInline(text: string): React.ReactNode {
  // Process **bold** and *italic* and `code`
  const parts: (string | React.ReactNode)[] = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    const m = match[0];
    if (m.startsWith('**')) parts.push(<strong key={key++}>{m.slice(2, -2)}</strong>);
    else if (m.startsWith('`')) parts.push(<code key={key++} className="font-mono text-[0.9em] px-1 rounded" style={{ background: 'var(--bg-elev-3)' }}>{m.slice(1, -1)}</code>);
    else parts.push(<em key={key++}>{m.slice(1, -1)}</em>);
    lastIndex = match.index + m.length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return <>{parts}</>;
}
