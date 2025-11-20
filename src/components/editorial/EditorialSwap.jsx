import React, { useState } from "react";
import "./editorial-swap.css";

export default function EditorialSwap({ principal, alternativo }) {
  const [ativo, setAtivo] = useState("principal");

  const trocar = () => {
    setAtivo((a) => (a === "principal" ? "alternativo" : "principal"));
  };

  const ativoConteudo = ativo === "principal" ? principal : alternativo;
  const cardConteudo = ativo === "principal" ? alternativo : principal;

  return (
    <div className="editorialSwapGrid">
      <div className="editorialPrincipal fadeIn">
        {ativoConteudo.component}
      </div>

      <div className="editorialCard" onClick={trocar}>
        <h3>{cardConteudo.titulo}</h3>
        {cardConteudo.imagem && (
          <img
            src={cardConteudo.imagem}
            alt="preview"
            className="editorialCardImg"
          />
        )}
        <p className="editorialCardResumo">{cardConteudo.resumo}</p>
        <span className="editorialCardHint">(clique para abrir)</span>
      </div>
    </div>
  );
}
