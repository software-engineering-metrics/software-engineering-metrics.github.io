import { LOCALE_CODES, DEFAULT_LOCALE } from '$lib/locales.js';

export const prerender = true;

// Seeds prerendering for each non-default locale's home page; the prerender
// crawler then discovers that locale's other list pages (front-matter,
// examples, contributing, project, table-of-contents) by following the real
// <a href> links this page renders. See [locale]/+layout.js.
export function entries() {
  return LOCALE_CODES.filter((l) => l !== DEFAULT_LOCALE).map((locale) => ({ locale }));
}
