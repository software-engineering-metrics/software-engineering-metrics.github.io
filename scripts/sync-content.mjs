#!/usr/bin/env node
// Copies the book's Markdown source from the sibling `software-engineering-metrics`
// content repository into src/content/ here. The copied files are committed —
// this script exists to regenerate them after the source repo changes. Never
// hand-edit files under src/content/; edit the source repo and re-run
// `pnpm run content` instead.
import { existsSync, mkdirSync, readdirSync, rmSync, copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const sourceDocs = path.resolve(root, '../software-engineering-metrics/docs');
const targetContent = path.resolve(root, 'src/content');

const SECTIONS = ['chapters', 'front-matter', 'examples', 'contributing', 'project'];

if (!existsSync(sourceDocs)) {
  console.error(`Source docs directory not found: ${sourceDocs}`);
  console.error('Expected the software-engineering-metrics content repo as a sibling directory.');
  process.exit(1);
}

for (const section of SECTIONS) {
  const from = path.join(sourceDocs, section);
  const to = path.join(targetContent, section);
  if (!existsSync(from)) {
    console.warn(`Skipping missing source section: ${section}`);
    continue;
  }
  rmSync(to, { recursive: true, force: true });
  mkdirSync(to, { recursive: true });
  const files = readdirSync(from).filter((f) => f.endsWith('.md'));
  for (const file of files) {
    copyFileSync(path.join(from, file), path.join(to, file));
  }
  console.log(`Synced ${files.length} file(s) into src/content/${section}/`);
}

console.log('Content sync complete. Run `pnpm run manifest` (or `pnpm run content` next time) to rebuild the navigation manifest.');
