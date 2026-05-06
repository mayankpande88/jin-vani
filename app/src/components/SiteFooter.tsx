import Link from 'next/link';

export function SiteFooter() {
  const repoUrl = 'https://github.com/mayankpande88/jin-vani';
  const newIssueUrl = `${repoUrl}/issues/new?template=&body=Page%3A%20%5Bpaste%20URL%5D%0A%0AIssue%20type%3A%20%5Btranslation%20%2F%20Sanskrit%20text%20%2F%20factual%20error%20%2F%20doctrinal%20%2F%20typo%20%2F%20other%5D%0A%0ADetails%3A%0A`;

  return (
    <footer
      className="lg:max-w-[1100px] mx-auto px-5 lg:px-8 py-10 mt-16"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start font-ui text-[0.82rem] text-text-3 leading-relaxed">

        {/* Project status */}
        <div className="flex-1">
          <div className="font-display font-semibold text-[0.7rem] tracking-[0.18em] uppercase text-accent mb-2">Project status</div>
          <p className="m-0 mb-2 text-text-2">
            <strong className="text-accent">Draft.</strong> All content is awaiting review by the Digambara community. Until that&apos;s complete, treat translations and interpretive framings as provisional.
          </p>
          <p className="m-0 text-text-3">
            Built by a single Digambara practitioner. Not a wiki. Not authoritative. Use, but verify against your trusted sources.
          </p>
        </div>

        {/* Feedback */}
        <div className="flex-1">
          <div className="font-display font-semibold text-[0.7rem] tracking-[0.18em] uppercase text-accent mb-2">Found an error?</div>
          <p className="m-0 mb-3 text-text-2">
            Translation off? Sanskrit text wrong? Doctrinal misframing? Please flag it — feedback from people who know the texts is exactly what this project needs.
          </p>
          <a
            href={newIssueUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-ui text-[0.85rem] font-semibold no-underline px-4 py-2 rounded-pill"
            style={{ background: 'var(--accent)', color: 'var(--bg)' }}
          >
            Report an issue on GitHub →
          </a>
        </div>

        {/* Project links */}
        <div className="flex-1">
          <div className="font-display font-semibold text-[0.7rem] tracking-[0.18em] uppercase text-accent mb-2">About</div>
          <ul className="list-none m-0 p-0 flex flex-col gap-1.5">
            <li><Link href="/what-is-jainism" className="text-text-2 hover:text-accent">What is Jainism?</Link></li>
            <li><Link href="/foundations" className="text-text-2 hover:text-accent">Foundations</Link></li>
            <li><Link href="/glossary" className="text-text-2 hover:text-accent">Glossary</Link></li>
            <li>
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-text-2 hover:text-accent">
                Source code (GitHub) ↗
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="font-ui text-[0.7rem] text-text-3 mt-8 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
        <span style={{ fontFamily: 'var(--type-display)' }}>Jin-vani</span> · A Digambara Jain reading library · Draft, community feedback in progress
      </div>
    </footer>
  );
}
