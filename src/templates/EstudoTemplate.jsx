// src/templates/EstudoTemplate.jsx
import React from "react";

export default function EstudoTemplate({ titulo = 'Sem título', subtitulo, secoes = [] }) {
  return (
    <article className="max-w-6xl mx-auto px-10 py-16 font-serif text-[#eaeaea] leading-relaxed">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-playfair text-[#D4AF37] mb-2 drop-shadow-[0_0_25px_rgba(212,175,55,0.6)]">
          {titulo}
        </h1>
        {subtitulo && (
          <h2 className="text-xl italic text-[#bfb26b]">{subtitulo}</h2>
        )}
        <div className="w-32 h-[2px] bg-[#D4AF37] mx-auto mt-4"></div>
      </header>

      <section className="space-y-12">
        {secoes && Array.isArray(secoes) && secoes.map((secao, index) => (
          secao && (
            <div key={index}>
              <h3 className="text-2xl text-[#cdbf7b] mb-2">{secao.titulo || 'Sem título'}</h3>
              <p className="whitespace-pre-line">{secao.texto || ''}</p>
              {secao.citacao && (
                <blockquote className="border-l-4 border-[#D4AF37] pl-4 italic text-[#d9d9d9] mt-4">
                  "{secao.citacao}"
                </blockquote>
              )}
            </div>
          )
        ))}
      </section>
    </article>
  );
}
