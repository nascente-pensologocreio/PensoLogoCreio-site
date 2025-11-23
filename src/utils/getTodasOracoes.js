// src/utils/getTodasOracoes.js
import { parseFrontmatter } from "./parseFrontmatter.js";

/**
 * Lê TODAS as orações existentes no projeto,
 * seja em /content/tags/ ou em /content/biblia/.
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

      // parser manual seguro (SEM gray-matter)
      const { data, content } = parseFrontmatter(raw);

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
