// src/pages/TemasDaVida.jsx
// Versão restaurada — fluxo original, estável, sem alterações estruturais.
// Funciona diretamente com carregarTema(tag).

import React, { useState } from "react";
import CarrosselTags from "../components/CarrosselTags";
import { carregarTema } from "../components/TemasLoader.jsx";

export default function TemasDaVida() {
  const [temaSelecionado, setTemaSelecionado] = useState(null);

  const conteudos = temaSelecionado
    ? carregarTema(temaSelecionado)
    : { devocional: null, oracao: null };

  return (
    <div className="min-h-screen w-full text-[#e8e8e8] py-16 px-6 font-serif">

      {/* TÍTULO */}
      <h1
        className="text-center text-4xl font-bold mb-10"
        style={{
          color: "#D4AF37",
          textShadow: "0 0 14px rgba(212,175,55,0.55)",
        }}
      >
        Temas da Vida
      </h1>

      {/* CARROSSEL DE TAGS */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-[90%] max-w-5xl bg-black/30 border border-yellow-600/30 rounded-xl shadow-lg p-6 backdrop-blur-sm">
          <CarrosselTags
            tags={[
              "amor",
              "ansiedade",
              "batalha",
              "depressao",
              "desemprego",
              "dividas",
              "doenca-morte",
              "duvida",
              "esperanca",
              "frustracao",
              "futuro",
              "insonia",
              "luto",
              "medo",
              "mudanca",
              "perdao",
              "separacao",
              "solidao",
              "sonho",
              "vicio",
            ]}
            onSelectTag={setTemaSelecionado}
          />
        </div>
      </div>

      {/* RESULTADO */}
      <div className="max-w-4xl mx-auto mt-16 font-serif">

        {!temaSelecionado && (
          <p className="text-center text-gray-400 text-lg">
            Selecione um tema acima.
          </p>
        )}

        {/* DEVOCIONAL */}
        {conteudos.devocional && (
          <section className="mb-16">
            <h2 className="text-3xl text-center text-yellow-500 mb-6 font-bold">
              Devocional
            </h2>

            <div className="whitespace-pre-line leading-relaxed opacity-90 text-justify">
              {conteudos.devocional.content}
            </div>
          </section>
        )}

        {/* ORAÇÃO */}
        {conteudos.oracao && (
          <section className="mb-16">
            <h2 className="text-3xl text-center text-yellow-500 mb-6 font-bold">
              Oração
            </h2>

            <div className="whitespace-pre-line leading-relaxed opacity-90 text-justify">
              {conteudos.oracao.content}
            </div>
          </section>
        )}

        {/* NADA ENCONTRADO */}
        {temaSelecionado &&
          !conteudos.devocional &&
          !conteudos.oracao && (
            <p className="text-center text-gray-500 text-lg italic">
              Nenhum conteúdo disponível para este tema ainda.
            </p>
          )}
      </div>
    </div>
  );
}
