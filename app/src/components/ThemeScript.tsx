// Inline script to set theme + text-size before paint to avoid flash.
export function ThemeScript() {
  const code = `
    (function() {
      try {
        var t = localStorage.getItem('jinvani.theme');
        var s = localStorage.getItem('jinvani.textSize') || 'm';
        if (t === 'dark' || t === 'light') {
          document.documentElement.setAttribute('data-theme', t);
        }
        document.documentElement.classList.add('text-size-' + s);
      } catch (e) {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
