// src/components/TemasLoader.jsx
import matter from "gray-matter";

// IMPORTA TODAS AS DEVOCIONAIS
const devocionais = import.meta.glob(
  "../content/tags/**/devocional.md",
  { eager: true, as: "raw" }
);

// IMPORTA TODAS AS ORAÇÕES
const oracoes = import.meta.glob(
  "../content/tags/**/oracao.md",
  { eager: true, as: "raw" }
);

export function carregarTema(tag) {
  // Normaliza para corresponder às pastas (case sensitive)
  const t = tag.toLowerCase();

  const caminhoDev = `../content/tags/${t}/devocional.md`;
  const caminhoOra = `../content/tags/${t}/oracao.md`;

  const devRaw = devocionais[caminhoDev];
  const oraRaw = oracoes[caminhoOra];

  return {
    devocional: devRaw ? matter(devRaw) : null,
    oracao: oraRaw ? matter(oraRaw) : null,
  };
}
