export async function getPostBySlug(slug) {
  const modules = import.meta.glob("../content/**/*.js");

  for (const path in modules) {
    const mod = await modules[path]();

    const post = mod.postData || mod.default;
    if (!post) continue;

    if (post.slug === slug) {
      return post;
    }
  }

  return null;
}
