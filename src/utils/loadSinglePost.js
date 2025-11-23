// src/utils/loadSinglePost.js
// Carrega um único post .md de /content/home/ com base no slug do frontmatter.
// Sem gray-matter. Sem markdown-it. Usa o mesmo parser raso da Home.

/// Importa todos os .md da pasta home
const globHome = import.meta.glob(
  "../content/home/*.md",
  {
    eager: true,
    as: "raw",
  }
);

/// Parser raso de front-matter (idêntico ao usado em getHomePosts e ConteudoDoDia)
function parseFrontMatter(raw) {
  if (typeof raw !== "string") {
    return { data: {}, content: "" };
  }

  const txt = raw.trimStart();

  if (!txt.startsWith("---")) {
    return { data: {}, content: raw };
  }

  const end = txt.indexOf("\n---", 3);
  if (end === -1) {
    return { data: {}, content: raw };
  }

  const fmBlock = txt.slice(3, end).trim();
  const body = txt.slice(end + 4).replace(/^\r?\n/, "");

  const data = {};

  fmBlock
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#"))
    .forEach((line) => {
      const sepIndex = line.indexOf(":");
      if (sepIndex === -1) return;
      const key = line.slice(0, sepIndex).trim();
      const value = line.slice(sepIndex + 1).trim();
      data[key] = value;
    });

  return { data, content: body };
}

/**
 * Carrega um único post pelo slug.
 * Procurado em: /content/home/*.md
 * Retorna:
 * {
 *   ...frontmatter,
 *   content,
 *   path
 * }
 */
export async function loadSinglePost(slug) {
  try {
    for (const [path, raw] of Object.entries(globHome)) {
      const { data, content } = parseFrontMatter(raw);

      if (data.slug === slug) {
        return {
          ...data,
          content,
          path,
        };
      }
    }

    console.warn(`Post com slug "${slug}" não encontrado em /content/home/`);
    return null;

  } catch (err) {
    console.error("❌ ERRO EM loadSinglePost():", err);
    return null;
  }
}
