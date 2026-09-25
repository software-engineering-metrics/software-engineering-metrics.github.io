<script>
  // Lily Design System class-hook component: a single kebab-case class,
  // `.locale-picker`, is the whole styling contract (see static/assets/style.css).
  // Lily itself ships no markup or behaviour for this pattern, so this is a
  // small hand-built native <select>, styled to Lily's conventions like the
  // rest of this site's chrome (Sidebar, Breadcrumb, ChapterPager).
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import { LOCALES, DEFAULT_LOCALE, localePrefix } from '$lib/locales.js';

  let currentLocale = $derived(page.params.locale ?? DEFAULT_LOCALE);

  /** @param {Event} event */
  function onChange(event) {
    const target = /** @type {HTMLSelectElement} */ (event.currentTarget);
    const nextLocale = target.value;
    const currentPrefix = localePrefix(currentLocale);
    const remainder = currentPrefix && page.url.pathname.startsWith(currentPrefix)
      ? page.url.pathname.slice(currentPrefix.length) || '/'
      : page.url.pathname;
    goto(`${localePrefix(nextLocale)}${remainder}`);
  }
</script>

<select class="locale-picker" aria-label="Locale" value={currentLocale} onchange={onChange}>
  {#each LOCALES as locale (locale.code)}
    <option value={locale.code}>{locale.label}</option>
  {/each}
</select>
