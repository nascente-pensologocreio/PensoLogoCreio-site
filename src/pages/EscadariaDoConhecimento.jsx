import React from "react";
import TemplateSeccao from "./TemplateSeccao";

export default function EscadariaDoConhecimento() {
  return (
    <TemplateSeccao
      titulo="Escadaria do Conhecimento"
      versiculo="O temor do Senhor é o princípio da sabedoria."
      referencia="Provérbios 9:10"
      conteudo={
        <>
          <p className="mb-5 text-justify">
            A <b>Escadaria do Conhecimento</b> é um convite a subir — não no sentido de se elevar
            sobre os outros, mas de se aproximar da luz. Cada degrau representa uma entrega,
            um abandono de certezas, um avanço em humildade.
          </p>

          <blockquote className="my-6 p-5 text-center text-yellow-400 border border-yellow-700 bg-black/25 rounded-md shadow-lg backdrop-blur-md animate-fade-in">
            “O verdadeiro saber nasce quando o espírito se ajoelha diante do mistério.”
          </blockquote>

          <p className="mb-4 text-justify">
            Aqui, o conhecimento não é troféu — é ponte. Não é posse — é passagem.  
            O aprendizado é visto como um caminho que exige reverência, silêncio e atenção
            às entrelinhas divinas.
          </p>

          <div className="my-10 relative flex justify-center">
            <div className="absolute inset-0 blur-3xl opacity-40 bg-gradient-to-t from-yellow-600/30 to-transparent animate-pulse-slow"></div>
            <img
              src="/img/escadaria-luminosa.png"
              alt="Escadaria do Conhecimento — símbolo da ascensão espiritual"
              className="rounded-lg shadow-[0_0_35px_rgba(212,175,55,0.5)] hover:scale-[1.03] transition-all duration-700 ease-in-out"
              style={{
                maxWidth: "720px",
                border: "1px solid rgba(212,175,55,0.3)",
              }}
            />
          </div>

          <p className="text-justify leading-relaxed italic">
            Que cada passo nesta escada seja guiado não pela vaidade do saber,
            mas pela fome de sentido.  
            Subir aqui é descer em si mesmo — até tocar o chão onde a sabedoria nasce.
          </p>
        </>
      }
    />
  );
}
