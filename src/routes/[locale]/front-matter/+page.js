import { LOCALE_CODES, DEFAULT_LOCALE } from '$lib/locales.js';

export const prerender = true;

// Nothing links to the bare front-matter list page (nav links straight to
// a specific slug), so unlike the other [locale] list pages it needs its
// own entries() rather than relying on the prerender crawler.
export function entries() {
  return LOCALE_CODES.filter((l) => l !== DEFAULT_LOCALE).map((locale) => ({ locale }));
}
