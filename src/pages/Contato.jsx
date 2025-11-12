import React from "react";
// CAMINHO CORRIGIDO: Sobe um nível para acessar a pasta 'styles'
import "../styles/animations.css"; 
import "../styles/contato.css";

export default function Contato() {
  return (
    // Usa a classe CSS 'contato-section' para todo o estilo da seção
    <section className="contato-section">
      
      {/* Coluna Esquerda — Mensagem e Contatos */}
      <div className="contato-texto-coluna">
        
        <h1 className="contato-titulo">Contate-nos</h1>

        {/* Classe para a primeira citação (Branca, Itálico, Breathe) */}
        <p className="frase-principal"> 
          “Escrever é uma forma de oração. E, quando a oração nasce de um desabafo sincero, a alma respira e o espírito sussurra — inexprimível — aos ouvidos do Deus Eterno. Não há palavra verdadeira que Ele não escute: às vezes responde com o silêncio, outras, com alguém que te lê. Hoje, aqui estou eu, ao teu dispor. Capelão Nascente.”
        </p>

        <div className="contato-info-grupo">
          <div>
            {/* Título (Dourado, Negrito) */}
            <p className="info-titulo">✉️ E-mail</p>
            <a
              href="mailto:nascente@pensologocreio.com.br"
              className="info-link" // Link (Branco, Hover Dourado)
            >
              nascente@pensologocreio.com.br
            </a>
          </div>

          <div>
            {/* Título (Dourado, Negrito) */}
            <p className="info-titulo">💬 WhatsApp</p>
            <a
              href="https://wa.me/5534991046358"
              target="_blank"
              rel="noopener noreferrer"
              className="info-link"
            >
              (34) 99104-6358
            </a>
            {/* Nota de rodapé (Cinza, Pequeno) */}
            <p className="nota-rodape">
              Somente mensagens — sem chamadas.
            </p>
          </div>
        </div>

        {/* Classe para a citação de rodapé (Dourado, Brilho Forte) */}
        <p className="frase-rodape"> 
          “Toda boa conversa começa com silêncio e termina em luz.”
        </p>
      </div>

      {/* Coluna Direita — Formulário */}
      <div className="contato-formulario-coluna">
        <div className="contato-formulario-wrapper">
          
          <h2 className="formulario-titulo">Envie sua mensagem</h2>

          <form
            action="mailto:nascente@pensologocreio.com.br"
            method="post"
            encType="text/plain"
            className="formulario-contato"
          >
            <input type="text" name="nome" placeholder="Seu nome" className="contato-input" />
            <input type="email" name="email" placeholder="Seu e-mail" className="contato-input" />
            <textarea
              name="mensagem"
              rows="5"
              placeholder="Sua mensagem"
              className="contato-input contato-textarea"
            ></textarea>

            <button type="submit" className="contato-button">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}