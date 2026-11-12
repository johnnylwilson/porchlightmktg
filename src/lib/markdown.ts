// Tiny Markdown renderer for short front matter text (like a post's closing section).
// Supports paragraphs (blank line between), [links](/path), **bold**, and *italics*.
const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function inlineMarkdown(md: string): string {
  return md
    .trim()
    .split(/\n\s*\n/)
    .map((para) => {
      let html = escape(para.replace(/\s*\n\s*/g, ' '));
      html = html.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');
      html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      html = html.replace(/(^|[^*])\*([^*]+)\*/g, '$1<em>$2</em>');
      return `<p>${html}</p>`;
    })
    .join('');
}
