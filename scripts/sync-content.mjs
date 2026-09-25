#!/usr/bin/env node
// Copies the book's Markdown source from the sibling `software-engineering-metrics`
// content repository into src/content/<locale>/ here, one subdirectory per
// published locale (see spec/locales.md in that repo). The copied files are
// committed — this script exists to regenerate them after the source repo
// changes. Never hand-edit files under src/content/; edit the source repo
// and re-run `pnpm run content` instead.
import { existsSync, mkdirSync, readdirSync, rmSync, copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { LOCALE_CODES } from './locales.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const sourceLocales = path.resolve(root, '../software-engineering-metrics/locales');
const targetContent = path.resolve(root, 'src/content');

const SECTIONS = ['chapters', 'front-matter', 'examples', 'contributing', 'project'];

if (!existsSync(sourceLocales)) {
  console.error(`Source locales directory not found: ${sourceLocales}`);
  console.error('Expected the software-engineering-metrics content repo as a sibling directory.');
  process.exit(1);
}

for (const locale of LOCALE_CODES) {
  const sourceLocale = path.join(sourceLocales, locale);
  if (!existsSync(sourceLocale)) {
    console.error(`Missing locale in source repo: ${locale} (${sourceLocale})`);
    process.exit(1);
  }
  for (const section of SECTIONS) {
    const from = path.join(sourceLocale, section);
    const to = path.join(targetContent, locale, section);
    if (!existsSync(from)) {
      console.warn(`Skipping missing source section: ${locale}/${section}`);
      continue;
    }
    rmSync(to, { recursive: true, force: true });
    mkdirSync(to, { recursive: true });
    const files = readdirSync(from).filter((f) => f.endsWith('.md'));
    for (const file of files) {
      copyFileSync(path.join(from, file), path.join(to, file));
    }
    console.log(`Synced ${files.length} file(s) into src/content/${locale}/${section}/`);
  }
}

console.log('Content sync complete. Run `pnpm run manifest` (or `pnpm run content` next time) to rebuild the navigation manifests.');
