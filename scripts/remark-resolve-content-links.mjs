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

const SECTIONS = new Set(['chapters', 'front-matter', 'examples', 'contributing', 'project']);

export function remarkResolveContentLinks() {
  return (tree, file) => {
    const sourcePath = file?.filename ?? file?.path ?? file?.history?.[0];
    if (!sourcePath) return;
    const sourceDir = path.dirname(sourcePath);

    // Find src/content/ in the source path so we can compute a
    // content-relative "<section>/<slug>.md" for any resolved link.
    const contentRootMarker = `${path.sep}src${path.sep}content${path.sep}`;
    const markerIndex = sourcePath.indexOf(contentRootMarker);
    if (markerIndex === -1) return;
    const contentRoot = sourcePath.slice(0, markerIndex + contentRootMarker.length);

    visit(tree, 'link', (node) => {
      const url = node.url;
      if (!url || /^([a-z]+:)?\/\//i.test(url) || url.startsWith('#') || url.startsWith('mailto:')) return;
      if (!url.includes('.md')) return;

      const [rawPath, fragment] = url.split('#');
      const resolved = path.resolve(sourceDir, rawPath);
      const relative = path.relative(contentRoot, resolved).split(path.sep).join('/');

      // "../index.md" from a top-level section resolves to src/content's own
      // index.md — that's docs/index.md in the source repo, which this site
      // doesn't copy (its role is played by the hand-authored home page).
      if (relative === 'index.md') {
        node.url = fragment ? `/#${fragment}` : '/';
        return;
      }

      const [section, ...rest] = relative.split('/');
      if (!SECTIONS.has(section)) return;

      const file2 = rest.join('/').replace(/\.md$/, '');
      const isIndex = file2 === 'index';
      const route =
        section === 'chapters'
          ? `/chapters/${file2}/`
          : isIndex
            ? `/${section}/`
            : `/${section}/${file2}/`;

      node.url = fragment ? `${route}#${fragment}` : route;
    });
  };
}
