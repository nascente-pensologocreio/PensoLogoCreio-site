import matter from "gray-matter";

/**
 * Lê TODAS as orações existentes no projeto,
 * seja em /content/tags/ ou /content/biblia/.
 *
 * O glob procura nas DUAS estruturas ao mesmo tempo.
 */
export async function getTodasOracoes() {
  const modules = import.meta.glob(
    [
      "../content/tags/*/oracao.md",
      "../content/biblia/**/oracao.md"
    ],
    {
      query: "?raw",
      import: "default"
    }
  );

  // DEBUG: mostra exatamente o que o Vite encontrou
  console.log("ORACOES ENCONTRADAS:", Object.keys(modules));

  const lista = [];

  for (const path in modules) {
    try {
      const raw = await modules[path]();
      const { data, content } = matter(raw);

      lista.push({
        ...data,
        content,
        path
      });
    } catch (err) {
      console.error("ERRO AO LER ARQUIVO:", path, err);
    }
  }

  return lista;
}
