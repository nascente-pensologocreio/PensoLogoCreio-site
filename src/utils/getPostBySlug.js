// src/utils/getPostBySlug.js
export async function getPostBySlug(slug) {
  const modules = import.meta.glob('../content/**/*.js');
  for (const path in modules) {
    try {
      const mod = await modules[path]();
      // alguns arquivos exportam `postData`, outros `default`
      const post = mod.postData || mod.default || mod;
      if (!post) continue;
      if (post.slug && post.slug === slug) return post;
      // fallback: talvez existam casos com title -> ignoramos
    } catch (err) {
      // ignore; continuar procurando
      // console.error('erro em', path, err);
    }
  }
  return null;
}
