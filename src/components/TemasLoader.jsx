// src/components/TemasLoader.jsx
// Versão restaurada, compatível com Vite, sem gray-matter,
// mantendo a mesma API: carregarTema(tag) → { devocional, oracao }

/// IMPORTA TODAS AS DEVOCIONAIS DAS TAGS
const devocionais = import.meta.glob("../content/tags/**/devocional.md", {
  eager: true,
  as: "raw",
});

/// IMPORTA TODAS AS ORAÇÕES DAS TAGS
const oracoes = import.meta.glob("../content/tags/**/oracao.md", {
  eager: true,
  as: "raw",
});

/// Parser simples de front-matter (equivalente ao comportamento do matter)
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
      if (!key) return;
      data[key] = value;
    });

  return { data, content: body };
}

/**
 * Carrega devocional.md e oracao.md da tag informada.
 * Ex.: tag = "amor" → /content/tags/amor/devocional.md e oracao.md
 *
 * Retorna:
 * {
 *   devocional: { data, content },
 *   oracao:     { data, content }
 * }
 * ou nulls se não existir.
 */
export function carregarTema(tag) {
  try {
    const t = String(tag || "").toLowerCase();

    const caminhoDev = `../content/tags/${t}/devocional.md`;
    const caminhoOra = `../content/tags/${t}/oracao.md`;

    const devRaw = devocionais[caminhoDev];
    const oraRaw = oracoes[caminhoOra];

    const devocional = devRaw ? parseFrontMatter(devRaw) : null;
    const oracao = oraRaw ? parseFrontMatter(oraRaw) : null;

    if (!devocional && !oracao) {
      console.warn(`Nenhum conteúdo encontrado para a tag "${t}".`);
    }

    return { devocional, oracao };
  } catch (err) {
    console.error("ERRO CRÍTICO em carregarTema():", err);
    return { devocional: null, oracao: null };
  }
}
