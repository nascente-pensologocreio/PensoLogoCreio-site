import React from "react";
import TemplateSeccao from "./TemplateSeccao";

export default function CaminhoDasEscrituras() {
  return (
    <TemplateSeccao
      titulo="Caminho das Escrituras"
      versiculo="A Palavra não é um mapa — é o caminho em si. E nela, quem lê também é lido."
      referencia="João 5:39"
      conteudo={
        <>
          <p className="mb-4 text-justify">
            O <b>“Caminho das Escrituras”</b> é uma jornada espiritual. Aqui o texto sagrado se
            revela como espelho e lâmina — refletindo o íntimo de quem lê e cortando as ilusões
            que o mundo fabrica sobre o que é fé.
          </p>

          <blockquote className="p-4 rounded-md my-6 text-center font-semibold border border-yellow-600 bg-black/20 shadow-lg text-yellow-400 backdrop-blur-sm">
            “Examinai as Escrituras, porque vós cuidais ter nelas a vida eterna, e são elas que de
            mim testificam.”
          </blockquote>

          <p className="mb-4 text-justify">
            Cada meditação publicada nesta seção será guiada pela busca de coerência entre o que
            cremos e como vivemos. A Bíblia será sempre o ponto de partida e o ponto de chegada.
          </p>
        </>
      }
    />
  );
}
