// The book's chapters cross-link each other with ordinary relative Markdown
// links (e.g. "../chapters/01-00-foundations-of-measurement.md",
// "./style-rules.md", "index.md") — that's how they resolve in the source
// content repo's own build. Rewrite each into this site's route: strip the
// ".md"/".md#frag", resolve relative to the source file's own directory, and
// map the section's index.md to its bare section route ("/contributing/"
// rather than "/contributing/index/"). Leave external links, mailto:,
// anchors, and already-absolute paths untouched.
import path from 'node:path';
import { visit } from 'unist-util-visit';
import { localePrefix, LOCALE_CODES } from './locales.mjs';

const SECTIONS = new Set(['chapters', 'front-matter', 'examples', 'contributing', 'project']);

export function remarkResolveContentLinks() {
  return (tree, file) => {
    const sourcePath = file?.filename ?? file?.path ?? file?.history?.[0];
    if (!sourcePath) return;
    const sourceDir = path.dirname(sourcePath);

    // Find src/content/ in the source path so we can compute a
    // content-relative "<locale>/<section>/<slug>.md" for any resolved link.
    const contentRootMarker = `${path.sep}src${path.sep}content${path.sep}`;
    const markerIndex = sourcePath.indexOf(contentRootMarker);
    if (markerIndex === -1) return;
    const contentRoot = sourcePath.slice(0, markerIndex + contentRootMarker.length);

    // The file being processed lives at src/content/<locale>/..., so its own
    // locale prefix applies to every route this plugin generates for it.
    const ownLocale = sourcePath
      .slice(markerIndex + contentRootMarker.length)
      .split(path.sep)[0];
    const prefix = LOCALE_CODES.includes(ownLocale) ? localePrefix(ownLocale) : '';

    visit(tree, 'link', (node) => {
      const url = node.url;
      if (!url || /^([a-z]+:)?\/\//i.test(url) || url.startsWith('#') || url.startsWith('mailto:')) return;
      if (!url.includes('.md')) return;

      const [rawPath, fragment] = url.split('#');
      const resolved = path.resolve(sourceDir, rawPath);
      const relative = path.relative(contentRoot, resolved).split(path.sep).join('/');

      // "../../index.md" from a top-level section resolves to a locale's own
      // index.md — that's <locale>/index.md in the source repo, which this
      // site doesn't copy (its role is played by the hand-authored home page).
      const relParts = relative.split('/');
      if (relParts.length === 2 && relParts[1] === 'index.md') {
        node.url = fragment ? `${prefix}/#${fragment}` : `${prefix}/`;
        return;
      }

      const [locale, section, ...rest] = relParts;
      if (!LOCALE_CODES.includes(locale) || !SECTIONS.has(section)) return;

      const file2 = rest.join('/').replace(/\.md$/, '');
      const isIndex = file2 === 'index';
      const route =
        section === 'chapters'
          ? `${prefix}/chapters/${file2}/`
          : isIndex
            ? `${prefix}/${section}/`
            : `${prefix}/${section}/${file2}/`;

      node.url = fragment ? `${route}#${fragment}` : route;
    });
  };
}
