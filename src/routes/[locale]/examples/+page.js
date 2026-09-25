export const prerender = true;

export async function load({ params }) {
  const mod = await import(`$content/${params.locale}/examples/index.md`);
  return { content: mod.default };
}
