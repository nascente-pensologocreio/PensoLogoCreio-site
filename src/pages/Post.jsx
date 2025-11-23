// src/pages/Post.jsx - Versão Ultra-Refinada Premium

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// Import do CSS dedicado
import "../styles/post-page.css";

import { postData as beijoEspada } from "../content/beijo-e-espada.js";
import { postData as pomarEmChamas } from "../content/pomar-em-chamas.js";
import { postData as quandoOMenosEMais } from "../content/quando-o-menos-e-mais.js";

const postsBySlug = {
  [beijoEspada.slug]: beijoEspada,
  [pomarEmChamas.slug]: pomarEmChamas,
  [quandoOMenosEMais.slug]: quandoOMenosEMais,
};

export default function Post() {
  const { slug } = useParams();
  const post = postsBySlug[slug];

  // CORREÇÃO DO SCROLL: Executar IMEDIATAMENTE ao montar
  useEffect(() => {
    // Scroll instantâneo para o topo (sem smooth)
    window.scrollTo(0, 0);
    // Forçar novamente após um pequeno delay (garantia)
    setTimeout(() => window.scrollTo(0, 0), 0);
  }, [slug]); // Reexecutar quando slug mudar

  if (!post) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-gray-400 text-xl italic">
        Postagem não encontrada.
      </div>
    );
  }

  return (
    <main 
      className="post-page-main"
      style={{
        minHeight: '100vh',
        backgroundColor: '#010b0a',
        color: '#EDEDED',
        margin: 0,
        padding: 0,
        width: '100%',
        overflowX: 'hidden'
      }}
    >

      {/* HERO - Imagem luminosa e elegante */}
      <section 
        className="post-hero-container"
        style={{
          position: 'relative',
          width: '100%',
          height: '60vh',
          maxHeight: '520px',
          minHeight: '420px',
          overflow: 'hidden',
          margin: 0,
          padding: 0
        }}
      >
        {post.imageUrl && (
          <>
            <img
              src={post.imageUrl}
              alt={post.title}
              className="post-hero-image"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'brightness(1.02) contrast(1.05) saturate(1.08)'
              }}
            />
            {/* Overlay ainda mais suave */}
            <div 
              className="post-hero-overlay"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.45) 100%)',
                pointerEvents: 'none'
              }}
            />
          </>
        )}
      </section>

      {/* CABEÇALHO - Refinado e elegante */}
      <section 
        className="post-header-section"
        style={{
          width: '100%',
          maxWidth: '880px',
          margin: '0 auto',
          padding: '3rem 2rem 1.5rem',
          textAlign: 'center',
          boxSizing: 'border-box'
        }}
      >
        {/* TÍTULO - Mais refinado */}
        <h1 
          className="post-title"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.75rem, 5vw, 2.75rem)',
            fontWeight: 600,
            color: '#F5E3A1',
            textShadow: '0 0 16px rgba(245, 227, 161, 0.25), 0 1px 3px rgba(0,0,0,0.2)',
            marginBottom: '1rem',
            lineHeight: 1.25,
            letterSpacing: '0.02em'
          }}
        >
          {post.title}
        </h1>

        <p 
          className="post-meta"
          style={{
            color: '#A8A8A8',
            fontSize: 'clamp(0.875rem, 1.8vw, 0.95rem)',
            marginBottom: '1.25rem',
            letterSpacing: '0.04em',
            fontWeight: 300,
            opacity: 0.85
          }}
        >
          {post.date} • {post.readTime}
        </p>

        {post.tag && (
          <span 
            className="post-tag"
            style={{
              display: 'inline-block',
              padding: '0.35rem 1rem',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              borderRadius: '9999px',
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              color: '#D4AF37',
              fontWeight: 500,
              background: 'rgba(212, 175, 55, 0.06)',
              transition: 'all 0.3s ease'
            }}
          >
            {post.tag}
          </span>
        )}
      </section>

      {/* CORPO EDITORIAL - Premium e elegante */}
      <article 
        className="post-body-article"
        style={{
          width: '100%',
          maxWidth: '880px',
          margin: '0 auto',
          padding: '2.5rem 2rem 4.5rem',
          boxSizing: 'border-box'
        }}
      >
        <div 
          className="post-glass-container"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.32)',
            border: '1px solid rgba(212, 175, 55, 0.18)',
            borderRadius: '0.875rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(212, 175, 55, 0.08) inset',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            padding: 'clamp(2.5rem, 5vw, 3.5rem)',
            boxSizing: 'border-box'
          }}
        >
          <div
            className="post-content-prose"
            style={{
              color: '#E2E2E2',
              fontSize: 'clamp(1.02rem, 1.8vw, 1.08rem)',
              lineHeight: 1.8,
              textAlign: 'justify',
              wordSpacing: '0.02em',
              hyphens: 'auto',
              letterSpacing: '0.012em',
              fontWeight: 400
            }}
            dangerouslySetInnerHTML={{ __html: post.fullContent }}
          />
        </div>
      </article>

    </main>
  );
}