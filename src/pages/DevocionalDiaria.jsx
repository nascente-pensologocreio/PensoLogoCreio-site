import React from "react";
import TemplateSeccao from "./TemplateSeccao";

export default function DevocionalDiaria() {
  return (
    <TemplateSeccao
      titulo="Devocional Diária"
      versiculo="Dá-nos hoje o pão nosso de cada dia."
      referencia="Mateus 6:11"
      conteudo={
        <>
          <p className="mb-5 text-justify">
            A <b>Devocional Diária</b> é o momento em que a alma se inclina diante do invisível e
            reconhece sua fome de eternidade. É aqui que o tempo desacelera, o ruído se dissipa e a
            Palavra se torna pão — vivo e cotidiano.
          </p>

          <blockquote className="my-6 p-5 text-center text-yellow-400 border border-yellow-700 bg-black/25 rounded-md shadow-lg backdrop-blur-md animate-fade-in">
            “O coração que ora em silêncio transforma o instante em eternidade.”
          </blockquote>

          <p className="mb-4 text-justify">
            O devocional não é um ritual, mas uma conversa. É o espaço onde a fé se aquece e o
            coração encontra repouso. Cada leitura é uma centelha que reacende o amor e a confiança
            na providência divina.
          </p>

          <div className="my-10 relative flex justify-center">
            <div className="absolute inset-0 blur-3xl opacity-35 bg-gradient-to-t from-yellow-500/30 to-transparent animate-pulse-slow"></div>
            <img
              src="/img/devocional-luz-vela.png"
              alt="Devocional Diária — vela acesa simbolizando a oração"
              className="rounded-lg shadow-[0_0_35px_rgba(212,175,55,0.5)] hover:scale-[1.03] transition-all duration-700 ease-in-out"
              style={{
                maxWidth: "700px",
                border: "1px solid rgba(212,175,55,0.3)",
              }}
            />
          </div>

          <p className="text-justify leading-relaxed italic">
            Que cada oração nasça da simplicidade.  
            Pois é no pequeno gesto, na palavra murmurada e na fé que não precisa provar nada,
            que o céu se faz íntimo e desce ao cotidiano.
          </p>
        </>
      }
    />
  );
}
