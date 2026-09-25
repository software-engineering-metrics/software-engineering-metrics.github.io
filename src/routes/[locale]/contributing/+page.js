export const prerender = true;

export async function load({ params }) {
  const mod = await import(`$content/${params.locale}/contributing/index.md`);
  return { content: mod.default };
}
