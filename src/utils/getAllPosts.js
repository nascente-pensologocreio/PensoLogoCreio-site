// src/utils/getAllPosts.js

// Este módulo faz a leitura automática de todos os posts do content/
// Ele usa import.meta.glob (função nativa do Vite) para importar dinamicamente

export async function getAllPosts() {
  const modules = import.meta.glob('../content/**/*.js');

  const posts = {
    devocional: [],
    teologia: [],
    estudos: []
  };

  for (const path in modules) {
    try {
      const mod = await modules[path]();
      const post = mod.default;
      if (post && post.categoria) {
        // Criar categoria dinamicamente se não existir
        if (!posts[post.categoria]) {
          posts[post.categoria] = [];
        }
        posts[post.categoria].push({
          id: post.id,
          titulo: post.titulo,
          data: post.data,
          autor: post.autor,
          categoria: post.categoria,
          excerpt: post.excerpt,
          conteudo: post.conteudo
        });
      }
    } catch (error) {
      console.error(`Erro ao carregar post de ${path}:`, error);
    }
  }

  // Ordena alfabeticamente dentro de cada categoria
  Object.keys(posts).forEach(categoria => {
    posts[categoria].sort((a, b) => a.titulo.localeCompare(b.titulo));
  });

  return posts;
}
