// src/templates/PregacaoTemplate.jsx
import React from "react";

export default function PregacaoTemplate({ titulo = 'Sem título', referencia = '', introducao, pontos = [], conclusao }) {
  return (
    <article className="max-w-5xl mx-auto px-8 py-14 text-justify font-serif text-[#e9e9e9] leading-relaxed">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-playfair text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]">
          {titulo}
        </h1>
        {referencia && (
          <p className="mt-4 text-[#cfcfcf] italic text-lg">{referencia}</p>
        )}
        <div className="h-[2px] w-24 bg-[#D4AF37] mx-auto mt-3 opacity-70"></div>
      </header>

      <section className="space-y-10">
        {introducao && (
          <div>
            <h2 className="text-2xl text-[#D4AF37] mb-2">Introdução</h2>
            <p className="whitespace-pre-line">{introducao}</p>
          </div>
        )}

        {pontos && Array.isArray(pontos) && pontos.map((p, i) => (
          p && (
            <div key={i}>
              <h3 className="text-xl text-[#c9b86a] mb-2 font-semibold">
                {i + 1}. {p.titulo || 'Sem título'}
              </h3>
              <p className="whitespace-pre-line">{p.texto || ''}</p>
            </div>
          )
        ))}

        {conclusao && (
          <div>
            <h2 className="text-2xl text-[#D4AF37] mt-6 mb-2">Conclusão</h2>
            <p className="whitespace-pre-line">{conclusao}</p>
          </div>
        )}
      </section>
    </article>
  );
}
