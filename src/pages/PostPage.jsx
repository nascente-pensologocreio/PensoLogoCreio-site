// src/pages/PostPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getPostBySlug } from '../utils/getPostBySlug.js';
import DevocionalTemplate from '../templates/DevocionalTemplate.jsx';
import EstudoTemplate from '../templates/EstudoTemplate.jsx';
import PregacaoTemplate from '../templates/PregacaoTemplate.jsx';

export default function PostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(undefined); // undefined = carregando, null = não encontrado

  useEffect(() => {
    let mounted = true;
    (async () => {
      const p = await getPostBySlug(slug);
      if (!mounted) return;
      setPost(p || null);
    })();
    return () => (mounted = false);
  }, [slug]);

  if (post === undefined) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-[#e6e6e6]">
        <span>Carregando postagem…</span>
      </div>
    );
  }

  if (post === null) {
    // Não encontrado — redireciona para 404 (aqui encaminho para /)
    return <Navigate to="/" replace />;
  }

  // Se existir campo categoria, usamos o template correspondente.
  const categoria = post.categoria ? post.categoria.toLowerCase() : null;

  if (categoria === 'devocional' || post.template === 'devocional') {
    return <DevocionalTemplate titulo={post.title || post.titulo} subtitulo={post.subtitulo} versiculo={post.versiculo} texto={post.fullContent || post.texto || ''} autor={post.autor} />;
  }

  if (categoria === 'estudos' || post.template === 'estudo') {
    return <EstudoTemplate titulo={post.title || post.titulo} subtitulo={post.subtitulo} secoes={post.secoes || []} />;
  }

  if (categoria === 'pregacao' || post.template === 'pregacao' || post.tipo === 'Pregação') {
    const pontos = post.pontos || [];
    return <PregacaoTemplate titulo={post.title || post.titulo} referencia={post.referencia} introducao={post.introducao} pontos={pontos} conclusao={post.conclusao} />;
  }

  // Fallback: exibir HTML bruto (seguro se você confia no conteúdo)
  return (
    <article className="max-w-4xl mx-auto px-6 py-12 text-[#e6e6e6]">
      <header className="mb-8">
        <h1 className="text-4xl font-['Playfair_Display'] text-[#D4AF37] mb-2">{post.title || post.titulo}</h1>
        {post.date && <p className="text-sm text-gray-400">{post.date}</p>}
      </header>
      <section dangerouslySetInnerHTML={{ __html: post.fullContent || post.conteudo || '<p>Sem conteúdo.</p>' }} />
    </article>
  );
}
