import React from "react";
import TemplateSeccao from "./TemplateSeccao";

export default function TemasDaVida() {
  return (
    <TemplateSeccao
      titulo="Temas da Vida"
      versiculo="Tudo tem o seu tempo determinado, e há tempo para todo propósito debaixo do céu."
      referencia="Eclesiastes 3:1"
      conteudo={
        <>
          <p className="mb-5 text-justify">
            A seção <b>Temas da Vida</b> se debruça sobre o cotidiano humano à luz da eternidade.
            Aqui, a fé se encontra com as emoções, o tempo e as contradições do existir — não como
            fuga, mas como lente de sentido.
          </p>

          <blockquote className="my-6 p-5 text-center text-yellow-400 border border-yellow-700 bg-black/25 rounded-md shadow-lg backdrop-blur-md animate-fade-in">
            “A fé não nega o mundo — ela o ilumina.”
          </blockquote>

          <p className="mb-4 text-justify">
            Nesta escuta dos dias, cada tema — o amor, o luto, a esperança, a dúvida — é
            atravessado pela presença silenciosa de Deus. O sagrado se esconde nos detalhes:
            na pausa, no gesto, na memória e no reencontro.
          </p>

          <div className="my-10 relative flex justify-center">
            <div className="absolute inset-0 blur-3xl opacity-40 bg-gradient-to-t from-yellow-600/30 to-transparent animate-pulse-slow"></div>
            <img
              src="/img/temas-da-vida.png"
              alt="Temas da Vida — imagem simbólica da jornada humana"
              className="rounded-lg shadow-[0_0_35px_rgba(212,175,55,0.5)] hover:scale-[1.03] transition-all duration-700 ease-in-out"
              style={{
                maxWidth: "720px",
                border: "1px solid rgba(212,175,55,0.3)",
              }}
            />
          </div>

          <p className="text-justify leading-relaxed italic">
            Que este espaço inspire o olhar sobre o que é simples e o devolva ao mistério.
            Pois a vida, quando tocada pela graça, deixa de ser apenas tempo —
            torna-se revelação contínua.
          </p>
        </>
      }
    />
  );
}
