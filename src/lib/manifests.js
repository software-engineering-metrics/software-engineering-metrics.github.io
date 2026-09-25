// Static lookup across all four locale manifests. Static imports (not a
// runtime dynamic import) so adapter-static can prerender every locale
// without a server to resolve the lookup at request time.
import enUs from './manifest.json';
import enGbOxendict from './manifest/en-gb-oxendict.json';
import enGb from './manifest/en-gb.json';
import en001 from './manifest/en-001.json';
import { DEFAULT_LOCALE } from './locales.js';

/**
 * @typedef {object} Chapter
 * @property {number} part
 * @property {number} chapter
 * @property {string} decimal
 * @property {string} slug
 * @property {string} title
 * @property {string} heading
 * @property {string} file
 */
/**
 * @typedef {object} SimpleEntry
 * @property {string} slug
 * @property {string} title
 * @property {string} file
 */
/**
 * @typedef {object} Manifest
 * @property {{ number: number, title: string, chapters: Chapter[] }[]} parts
 * @property {Chapter[]} chapters
 * @property {Record<string, Chapter>} chaptersByDecimal
 * @property {string[]} order
 * @property {SimpleEntry[]} frontMatter
 * @property {SimpleEntry[]} examples
 * @property {SimpleEntry[]} contributing
 * @property {SimpleEntry[]} project
 * @property {{ parts: number, chapters: number }} totals
 */

/** @type {Record<string, Manifest>} */
const MANIFESTS = {
  'en-us': enUs,
  'en-gb-oxendict': enGbOxendict,
  'en-gb': enGb,
  'en-001': en001
};

/**
 * @param {string | undefined | null} locale
 * @returns {Manifest}
 */
export function getManifest(locale) {
  return MANIFESTS[locale ?? DEFAULT_LOCALE] ?? MANIFESTS[DEFAULT_LOCALE];
}
