import type { ReactNode } from "react";

/**
 * Renders a blog post body written in the small markdown subset the posts use:
 * `##`/`###` headings, `-` and `1.` lists (optionally after a lead line such as
 * "**Safe removal method:**"), `|` tables, and inline **bold** and
 * [links](/path). Post bodies are our own static content, so inline HTML
 * output is trusted.
 */

const BRAND = "#00B8E6";

function inline(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong class='text-white'>$1</strong>")
    .replace(
      /\[([^\]]+)\]\(([^)\s]+)\)/g,
      `<a href="$2" class="font-semibold underline decoration-[#00B8E6]/40 underline-offset-2 hover:decoration-[#00B8E6]" style="color:${BRAND}">$1</a>`,
    );
}

const UL_ITEM = /^- /;
const OL_ITEM = /^\d+\.\s/;

function renderTable(lines: string[], key: number) {
  const rows = lines
    .filter((r) => !/^\|\s*:?-{3,}/.test(r))
    .map((r) => r.split("|").slice(1, -1).map((c) => c.trim()));
  const [head, ...body] = rows;
  return (
    <div key={key} className="overflow-x-auto my-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-white/20 font-bold text-white text-left">
            {head.map((cell, ci) => (
              <th key={ci} className="px-3 py-2" dangerouslySetInnerHTML={{ __html: inline(cell) }} />
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr key={ri} className="border-b border-white/10 text-gray-300">
              {row.map((cell, ci) => (
                <td key={ci} className="px-3 py-2" dangerouslySetInnerHTML={{ __html: inline(cell) }} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** A block may mix plain lines with a run of list items; group them in order. */
function renderMixed(lines: string[], key: number) {
  const out: ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const ordered = OL_ITEM.test(lines[i]);
    if (ordered || UL_ITEM.test(lines[i])) {
      const pattern = ordered ? OL_ITEM : UL_ITEM;
      const items: string[] = [];
      while (i < lines.length && pattern.test(lines[i])) items.push(lines[i++].replace(pattern, ""));
      out.push(
        ordered ? (
          <ol key={i} className="space-y-2 my-4">
            {items.map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-gray-300">
                <span className="mt-0.5 shrink-0 font-bold tabular-nums" style={{ color: BRAND }}>
                  {j + 1}.
                </span>
                <span dangerouslySetInnerHTML={{ __html: inline(item) }} />
              </li>
            ))}
          </ol>
        ) : (
          <ul key={i} className="space-y-2 my-4">
            {items.map((item, j) => (
              <li key={j} className="flex items-start gap-2 text-gray-300">
                <span style={{ color: BRAND }} className="mt-0.5 shrink-0">•</span>
                <span dangerouslySetInnerHTML={{ __html: inline(item) }} />
              </li>
            ))}
          </ul>
        ),
      );
    } else {
      const para: string[] = [];
      while (i < lines.length && !OL_ITEM.test(lines[i]) && !UL_ITEM.test(lines[i])) para.push(lines[i++]);
      out.push(
        <p
          key={i}
          className="text-gray-300 leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: para.map(inline).join("<br />") }}
        />,
      );
    }
  }
  return <div key={key}>{out}</div>;
}

export default function BlogBody({ body }: { body: string }) {
  const blocks = body.split("\n\n").map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;
    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={i} className="text-xl font-bold text-white mt-8 mb-3">
          {trimmed.slice(4)}
        </h3>
      );
    }
    // `#` and `##` both render as h2: the page title is the only h1.
    if (/^#{1,2} /.test(trimmed)) {
      return (
        <h2 key={i} className="text-2xl font-black text-white mt-10 mb-4">
          {trimmed.replace(/^#{1,2} /, "")}
        </h2>
      );
    }
    const lines = trimmed.split("\n");
    if (lines.every((l) => l.trim().startsWith("|"))) return renderTable(lines.map((l) => l.trim()), i);
    return renderMixed(lines, i);
  });

  return <div className="prose-content">{blocks}</div>;
}
