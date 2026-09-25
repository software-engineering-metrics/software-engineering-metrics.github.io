// The site's locale set, mirroring locales/*/ in the sibling content repo
// (see spec/locales.md there). Single source of truth for both the build
// scripts (sync-content.mjs, generate-manifest.mjs, the remark plugins) and
// the runtime UI ($lib/locales.js re-exports this).
export const LOCALES = [
  { code: 'en-us', label: 'English (US)' },
  { code: 'en-gb-oxendict', label: 'English (UK, Oxford spelling)' },
  { code: 'en-gb', label: 'English (UK)' },
  { code: 'en-001', label: 'English (international)' }
];

// en-us is served at unprefixed paths ("/chapters/x/"); the other three are
// served under a locale-prefixed path ("/en-gb/chapters/x/"). This keeps
// every existing URL on the site stable.
export const DEFAULT_LOCALE = 'en-us';

export const LOCALE_CODES = LOCALES.map((l) => l.code);

/** @param {string | undefined | null} locale */
export function isLocale(locale) {
  return !!locale && LOCALE_CODES.includes(locale);
}

/** @param {string | undefined | null} locale */
export function localePrefix(locale) {
  return locale && locale !== DEFAULT_LOCALE ? `/${locale}` : '';
}
