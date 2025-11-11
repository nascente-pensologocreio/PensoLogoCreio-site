import React from "react";

export default function Post() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center text-white">
      <h1 className="text-4xl font-['Playfair_Display'] text-[#D4AF37] mb-4 animate-fade-in-down">
        Postagem Individual
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl animate-fade-in-up">
        Aqui será exibido o conteúdo completo de cada publicação — com título,
        imagem e texto integral.
      </p>
    </section>
  );
}
