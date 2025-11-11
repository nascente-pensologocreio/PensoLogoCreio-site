// src/templates/DevocionalTemplate.jsx
import React from "react";

export default function DevocionalTemplate({ titulo = 'Sem título', subtitulo, versiculo, texto = '', autor }) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12 text-justify leading-relaxed font-serif text-[#e4e4e4]">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-playfair text-[#D4AF37] drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">
          {titulo}
        </h1>
        {subtitulo && (
          <h2 className="text-xl text-[#c5b673] italic mt-2 font-light">
            {subtitulo}
          </h2>
        )}
        {versiculo && (
          <p className="mt-4 text-[#fff] text-lg font-medium">
            <span className="text-[#D4AF37]">📖 </span>{versiculo}
          </p>
        )}
      </header>

      <section className="text-lg whitespace-pre-line">
        {texto || 'Conteúdo não disponível'}
      </section>

      {autor && (
        <footer className="mt-10 text-right text-[#D4AF37] italic text-base">
          — {autor}
        </footer>
      )}
    </article>
  );
}
