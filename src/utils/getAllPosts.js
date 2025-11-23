export async function getAllPosts() {
  const modules = import.meta.glob("../content/**/*.js");

  const posts = {};

  for (const path in modules) {
    const mod = await modules[path]();
    const post = mod.default;

    if (!post || !post.categoria) continue;

    if (!posts[post.categoria]) {
      posts[post.categoria] = [];
    }

    posts[post.categoria].push(post);
  }

  // Ordena dentro das categorias
  Object.keys(posts).forEach(cat => {
    posts[cat].sort((a, b) => a.titulo.localeCompare(b.titulo));
  });

  return posts;
}
