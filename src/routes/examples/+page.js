export const prerender = true;

export async function load() {
  const mod = await import('$content/en-us/examples/index.md');
  return { content: mod.default };
}
