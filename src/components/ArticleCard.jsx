// src/components/ArticleCard.jsx

import React from 'react';
import { Link } from "react-router-dom";

export const ArticleCard = ({ post, isMain = false, delay = 0.1 }) => {

  if (!post) return null;

  // Gera um pequeno resumo a partir do conteúdo bruto
  const gerarExcerpt = (texto) => {
    if (!texto) return "";
    const limpo = texto.replace(/[#>*_`~\-]/g, "").trim();
    return limpo.substring(0, 200) + "...";
  };

  // Conteúdo para cards secundários
  const excerptFinal = gerarExcerpt(post.conteudo);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <>
      <style>{`
        .article-card {
          backdrop-filter: blur(20px) !important;
          background: rgba(0, 0, 0, 0.3) !important;
          border: 1px solid rgba(212, 175, 55, 0.3) !important;
          border-radius: 1rem !important;
          overflow: hidden !important;
          position: relative !important;
          transition: all 0.5s ease-out !important;
          animation: slideInUp 0.8s ease-out both;
          cursor: pointer;
          --mouse-x: 50%;
          --mouse-y: 50%;
        }

        .article-spotlight {
          position: absolute;
          top: var(--mouse-y);
          left: var(--mouse-x);
          width: 400px;
          height: 400px;
          background: radial-gradient(circle at center, rgba(212, 175, 55, 0.35) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.3s ease-out;
        }

        .article-card:hover .article-spotlight {
          opacity: 1 !important;
        }

        .article-card.is-main {
          max-width: 700px !important;
          margin: 0 auto !important;
          display: flex !important;
          flex-direction: column !important;
          padding: 0 !important;
        }

        .main-image-top {
          width: 100%;
          height: 400px;
          object-fit: cover;
          display: block;
        }

        .article-card.is-main .article-content {
          padding: 2.5rem !important;
        }

        .article-card:not(.is-main) {
          max-width: 850px;
          margin: 0 auto !important;
          display: flex;
          flex-direction: column;
          padding: 0 !important;
          height: auto;
          min-height: 420px;
        }

        .secondary-image-top {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
          border-bottom: 2px solid rgba(212, 175, 55, 0.3);
        }

        .article-card:not(.is-main) .article-content {
          padding: 2rem !important;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .article-card:hover {
          border-color: rgba(212, 175, 55, 0.7) !important;
          transform: translateY(-12px) scale(1.02) !important;
          box-shadow: 0 25px 60px rgba(212, 175, 55, 0.25) !important;
        }

        .article-card:not(.is-main):hover {
          min-height: 480px !important;
        }

        .article-title-main {
          font-family: 'Playfair Display', serif !important;
          font-size: 2rem !important;
          font-weight: 700 !important;
          color: #D4AF37 !important;
          margin-bottom: 1rem !important;
        }

        .article-title-secondary {
          font-family: 'Playfair Display', serif !important;
          font-size: 1.5rem !important;
          font-weight: 700 !important;
          color: #D4AF37 !important;
          margin-bottom: 1rem !important;
        }

        .article-meta {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(212, 175, 55, 0.2) !important;
        }

        .article-meta span {
          font-family: 'Inter', sans-serif !important;
          font-size: 0.8rem !important;
          color: #D1D5DB !important;
        }

        .article-meta .dot {
          width: 5px;
          height: 5px;
          background-color: #D4AF37 !important;
          border-radius: 50%;
        }

        .article-text {
          font-family: 'Inter', sans-serif !important;
          flex-grow: 1;
          font-size: 1rem !important;
          color: #E5E7EB !important;
          line-height: 1.7 !important;
          text-align: justify;
          margin-bottom: 1.5rem;
        }

        .article-text-secondary {
          font-family: 'Inter', sans-serif !important;
          font-size: 0.95rem !important;
          color: #D1D5DB !important;
          line-height: 1.6 !important;
          flex-grow: 1;
        }

        .article-footer {
          padding-top: 1.5rem;
          border-top: 1px solid rgba(212, 175, 55, 0.2) !important;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }

        .article-button {
          font-family: 'Inter', sans-serif !important;
          font-size: 0.85rem !important;
          font-weight: 600 !important;
          padding: 0.6rem 1.5rem;
          border: 1px solid rgba(212, 175, 55, 0.5) !important;
          color: #D4AF37 !important;
          border-radius: 0.5rem;
          background-color: transparent !important;
          transition: all 0.3s ease !important;
        }

        .article-button:hover {
          background-color: rgba(212, 175, 55, 0.15) !important;
          color: white !important;
          border-color: rgba(212, 175, 55, 0.9) !important;
        }

        @media (max-width: 1024px) {
          .article-card.is-main {
            max-width: 100% !important;
          }

          .main-image-top {
            height: 250px;
          }

          .secondary-image-top {
            height: 180px;
          }

          .article-card:not(.is-main) {
            max-width: 100% !important;
            min-height: 380px;
          }

          .article-card:not(.is-main):hover {
            min-height: 420px !important;
          }
        }
      `}</style>

      <article
        className={`article-card ${isMain ? "is-main" : ""}`}
        style={{ animationDelay: `${delay}s` }}
        onMouseMove={handleMouseMove}
      >
        <div className="article-spotlight"></div>

        {post.imagem && (
          <img
            src={post.imagem}
            alt={post.titulo}
            className={isMain ? "main-image-top" : "secondary-image-top"}
          />
        )}

        <div className="article-content">

          <h2 className={isMain ? "article-title-main" : "article-title-secondary"}>
            {post.titulo}
          </h2>

          {isMain && (
            <div className="article-meta">
              <span className="article-date">{post.data}</span>
              <span className="dot"></span>
              <span style={{ color: "#D4AF37", fontWeight: 600 }}>
                {post.readTime}
              </span>
            </div>
          )}

          <p className={isMain ? "article-text" : "article-text-secondary"}>
            {isMain ? excerptFinal : excerptFinal}
          </p>

          {isMain && (
            <div className="article-footer">
              {/* ROTA PREMIUM CORRETA */}
              <Link
                to={`/artigo/${post.slug}`}
                className="article-button"
                style={{ textDecoration: "none", display: "inline-block" }}
              >
                Ler Mais
              </Link>

              <span className="article-meta" style={{ border: "none", padding: 0, margin: 0 }}>
                <span>{post.readTime}</span>
              </span>
            </div>
          )}
        </div>
      </article>
    </>
  );
};
