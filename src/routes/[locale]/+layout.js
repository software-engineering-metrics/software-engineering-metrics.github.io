import { error } from '@sveltejs/kit';
import { LOCALE_CODES, DEFAULT_LOCALE } from '$lib/locales.js';

export const prerender = true;

// `entries()` isn't a valid export in +layout.js (only +page.js), so the
// locale values this segment prerenders are seeded by [locale]/+page.js's
// own entries(); every other page under [locale]/ is then reached either by
// the prerender crawler following that home page's real <a href> links, or,
// for [slug] leaves, by its own entries() (see spec/locales.md in the
// sibling content repo).
export function load({ params }) {
  if (!LOCALE_CODES.includes(params.locale) || params.locale === DEFAULT_LOCALE) {
    error(404, 'Locale not found');
  }
  return { locale: params.locale };
}
