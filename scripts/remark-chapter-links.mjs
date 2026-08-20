// A remark plugin that auto-links plain-text chapter cross-references, e.g.
// "see chapter 2.1" or "chapters 2.3 and 2.4", to the matching /chapters/
// route. This mirrors the guide_xref-style linking used by the sibling
// software-engineering-guide.github.io site, reimplemented for the mdsvex
// build here.
//
// It intentionally does NOT link version numbers or bare quantities — only
// text that reads as "chapter" / "chapters" immediately followed by one or
// more N.M references.
import { visit } from 'unist-util-visit';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const manifestPath = path.resolve(here, '../src/lib/manifest.json');

function loadChapterSlugs() {
  if (!existsSync(manifestPath)) return {};
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));
  return manifest.chaptersByDecimal ?? {};
}

// "chapter(s) 1.2" / "chapter(s) 1.2 and 3.4" / "chapter(s) 1.2, 3.4, and 5.6"
const MENTION_RE = /\bchapters?\s+(\d{1,2}\.\d{1,2})((?:\s*(?:,|and)\s*\d{1,2}\.\d{1,2})*)/gi;
const DECIMAL_RE = /\d{1,2}\.\d{1,2}/g;

export function remarkChapterLinks() {
  const chaptersByDecimal = loadChapterSlugs();
  if (Object.keys(chaptersByDecimal).length === 0) return () => {};

  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      if (!parent || index == null) return;
      // Skip text inside links/code — visit only reaches plain text nodes,
      // but guard anyway in case a future mdsvex version nests differently.
      if (parent.type === 'link' || parent.type === 'inlineCode') return;

      const value = node.value;
      MENTION_RE.lastIndex = 0;
      if (!MENTION_RE.test(value)) return;
      MENTION_RE.lastIndex = 0;

      const newChildren = [];
      let lastIndex = 0;
      let match;
      while ((match = MENTION_RE.exec(value))) {
        const [full] = match;
        const start = match.index;
        const end = start + full.length;
        if (start > lastIndex) {
          newChildren.push({ type: 'text', value: value.slice(lastIndex, start) });
        }

        // Link each decimal reference found within this mention span.
        let cursor = 0;
        let dm;
        DECIMAL_RE.lastIndex = 0;
        const segments = [];
        while ((dm = DECIMAL_RE.exec(full))) {
          const decimal = dm[0];
          const target = chaptersByDecimal[decimal];
          if (dm.index > cursor) segments.push({ type: 'text', value: full.slice(cursor, dm.index) });
          if (target) {
            segments.push({
              type: 'link',
              url: `/chapters/${target.slug}/`,
              title: target.heading,
              children: [{ type: 'text', value: decimal }]
            });
          } else {
            segments.push({ type: 'text', value: decimal });
          }
          cursor = dm.index + decimal.length;
        }
        if (cursor < full.length) segments.push({ type: 'text', value: full.slice(cursor) });
        newChildren.push(...segments);

        lastIndex = end;
      }
      if (lastIndex < value.length) {
        newChildren.push({ type: 'text', value: value.slice(lastIndex) });
      }

      parent.children.splice(index, 1, ...newChildren);
      return index + newChildren.length;
    });
  };
}
