#!/usr/bin/env node
// Scans src/content/ and writes src/lib/manifest.json: the structured table of
// contents (parts, chapters, prev/next order) that drives navigation, the
// table-of-contents page, and the "chapter N.M" auto-linking remark plugin.
// Regenerate after `pnpm run content`, or whenever src/content/ changes:
//   pnpm run manifest
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const contentDir = path.resolve(root, 'src/content');
const outFile = path.resolve(root, 'src/lib/manifest.json');

// Matches spec/structure.md / tests/validate.py PART_TITLES in the content repo.
const PART_TITLES = {
  1: 'Foundations of Measurement',
  2: 'Delivery and Flow Metrics',
  3: 'Developer Experience and the SPACE Framework',
  4: 'Code and Quality Metrics',
  5: 'Product and Business Metrics',
  6: 'Reliability, Operations, and Security Metrics',
  7: 'Metrics in the Age of AI',
  8: 'Building a Metrics Program',
  9: 'Appendices'
};

function firstH1Title(text) {
  const line = text.split('\n').find((l) => l.startsWith('# '));
  return line ? line.slice(2).trim() : '';
}

function readSectionFiles(section) {
  const dir = path.join(contentDir, section);
  let names;
  try {
    names = readdirSync(dir).filter((f) => f.endsWith('.md'));
  } catch {
    return [];
  }
  return names.sort();
}

// --- Chapters (docs/chapters/PP-CC-slug.md) ---
const chapterFiles = readSectionFiles('chapters');
const chapterRe = /^(\d{2})-(\d{2})-(.+)\.md$/;
const chapters = [];
for (const file of chapterFiles) {
  const m = chapterRe.exec(file);
  if (!m) {
    console.warn(`Skipping chapter file with unexpected name: ${file}`);
    continue;
  }
  const [, pp, cc, slugRest] = m;
  const part = Number(pp);
  const chapter = Number(cc);
  const text = readFileSync(path.join(contentDir, 'chapters', file), 'utf-8');
  const h1 = firstH1Title(text);
  // H1 is "P.C Title" — strip the leading decimal to get the display title.
  const decimal = `${part}.${chapter}`;
  const title = h1.startsWith(decimal) ? h1.slice(decimal.length).trim() : h1;
  chapters.push({
    part,
    chapter,
    decimal,
    slug: file.replace(/\.md$/, ''),
    title,
    heading: h1,
    file: `chapters/${file}`
  });
}
chapters.sort((a, b) => a.part - b.part || a.chapter - b.chapter);

const partNumbers = [...new Set(chapters.map((c) => c.part))].sort((a, b) => a - b);
const parts = partNumbers.map((number) => ({
  number,
  title: PART_TITLES[number] ?? `Part ${number}`,
  chapters: chapters.filter((c) => c.part === number)
}));

const chaptersByDecimal = Object.fromEntries(chapters.map((c) => [c.decimal, c]));

// --- Flat, prev/next order across the whole book ---
const order = chapters.map((c) => c.decimal);

// --- Other sections: front-matter, examples, contributing, project ---
function readSimpleSection(section) {
  const files = readSectionFiles(section);
  return files
    .filter((f) => f !== 'index.md')
    .map((file) => {
      const text = readFileSync(path.join(contentDir, section, file), 'utf-8');
      return {
        slug: file.replace(/\.md$/, ''),
        title: firstH1Title(text),
        file: `${section}/${file}`
      };
    });
}

const frontMatter = readSimpleSection('front-matter');
const examples = readSimpleSection('examples');
const contributing = readSimpleSection('contributing');
const project = readSimpleSection('project');

const manifest = {
  generatedBy: 'scripts/generate-manifest.mjs',
  parts,
  chapters,
  chaptersByDecimal,
  order,
  frontMatter,
  examples,
  contributing,
  project,
  totals: {
    parts: parts.length,
    chapters: chapters.length
  }
};

writeFileSync(outFile, JSON.stringify(manifest, null, 2) + '\n');
console.log(`Wrote ${outFile}: ${parts.length} parts, ${chapters.length} chapters.`);
