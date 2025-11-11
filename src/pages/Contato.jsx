import React from "react";

export default function Contato() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-black text-[#EDEDED] overflow-hidden">
      {/* Luz difusa de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[300px] h-[300px] bg-gradient-to-r from-[#D4AF37]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-gradient-to-l from-[#D4AF37]/10 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      {/* Caixa central — menor e mais contida */}
      <div className="relative z-20 w-full max-w-xl bg-black/50 backdrop-blur-md border border-[#D4AF37]/30 rounded-3xl shadow-[0_0_25px_rgba(212,175,55,0.12)] overflow-hidden px-10 py-12">
        <h1 className="text-3xl md:text-4xl font-['Playfair_Display'] text-center text-[#D4AF37] mb-8 drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">
          Fale Conosco
        </h1>

        <p className="text-gray-300 text-center text-base leading-relaxed mb-10 max-w-sm mx-auto">
          Um espaço discreto, para quem deseja partilhar ideias ou apenas
          deixar ecoar uma reflexão.
        </p>

        <form
          action="mailto:nascente@pensologocreio.com.br"
          method="post"
          encType="text/plain"
          className="flex flex-col space-y-5"
        >
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            className="w-full px-4 py-3 rounded-md bg-transparent border border-[#D4AF37]/40 text-[#EDEDED] placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]/80 transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            className="w-full px-4 py-3 rounded-md bg-transparent border border-[#D4AF37]/40 text-[#EDEDED] placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]/80 transition-all"
          />
          <textarea
            name="mensagem"
            rows="5"
            placeholder="Sua mensagem"
            className="w-full px-4 py-3 rounded-md bg-transparent border border-[#D4AF37]/40 text-[#EDEDED] placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]/80 transition-all resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 mt-3 border border-[#D4AF37]/60 text-[#D4AF37] font-semibold tracking-wide rounded-md hover:bg-[#D4AF37]/20 transition-all duration-300"
          >
            Enviar Mensagem
          </button>
        </form>

        <div className="mt-10 text-center space-y-3">
          <div>
            <p className="text-[#D4AF37] font-semibold text-base mb-1">
              ✉️ E-mail
            </p>
            <a
              href="mailto:nascente@pensologocreio.com.br"
              className="text-[#EDEDED] hover:text-[#D4AF37] text-sm transition-all"
            >
              nascente@pensologocreio.com.br
            </a>
          </div>

          <div>
            <p className="text-[#D4AF37] font-semibold text-base mb-1">
              💬 WhatsApp
            </p>
            <a
              href="https://wa.me/5534991046358"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EDEDED] hover:text-[#D4AF37] text-sm transition-all"
            >
              (34) 99104-6358
            </a>
            <p className="text-xs italic text-gray-500">
              Somente mensagens — sem chamadas.
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 italic mt-8">
          “Toda boa conversa começa com silêncio e termina em luz.”
        </p>
      </div>
    </section>
  );
}
