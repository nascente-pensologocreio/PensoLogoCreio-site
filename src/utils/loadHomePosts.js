// src/utils/loadHomePosts.js
// Ordem fixa: devocional → mensagem-pastoral → oracao

const globHome = import.meta.glob(
  "../content/home/*.md",
  {
    eager: true,
    query: "?raw",
    import: "default",
  }
);

// Parser simples front-matter
function parseFrontMatter(raw) {
  if (typeof raw !== "string") return { data: {}, content: "" };

  const txt = raw.trimStart();
  if (!txt.startsWith("---")) return { data: {}, content: raw };

  const end = txt.indexOf("\n---", 3);
  if (end === -1) return { data: {}, content: raw };

  const fmBlock = txt.slice(3, end).trim();
  const body = txt.slice(end + 4).replace(/^\r?\n/, "");

  const data = {};
  fmBlock.split("\n").forEach((line) => {
    line = line.trim();
    if (!line || line.startsWith("#")) return;
    const i = line.indexOf(":");
    if (i === -1) return;
    data[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  });

  return { data, content: body };
}

export async function getHomePosts() {
  try {
    const posts = Object.entries(globHome).map(([path, raw]) => {
      const { data, content } = parseFrontMatter(raw);
      return {
        ...data,
        content,
        path,
        filename: path.split("/").pop().toLowerCase(),
      };
    });

    // ordem exata por nome dos arquivos
    const ordemFixa = ["devocional.md", "mensagem-pastoral.md", "oracao.md"];

    return posts.sort(
      (a, b) => ordemFixa.indexOf(a.filename) - ordemFixa.indexOf(b.filename)
    );
  } catch (err) {
    console.error("ERRO EM getHomePosts():", err);
    return [];
  }
}
