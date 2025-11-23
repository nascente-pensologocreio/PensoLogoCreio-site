// src/pages/Home.jsx

// // Home.jsx → loadHomePosts.js → ArticleCard.jsx
// Esses três definem o “modelo oficial” dos posts mostrados na home. 

import React, { useEffect, useState } from "react";
import ReflexaoDiaria from "../components/ReflexaoDiaria.jsx";
import { ArticleCard } from "../components/ArticleCard.jsx";
import ArvoreDePostagens from "../components/ArvoreDePostagens.jsx";
import { getHomePosts } from "../utils/loadHomePosts";

export default function Home() {
  const fundoHero = "/Mockup da Homepage.png";
  const [postsHome, setPostsHome] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const posts = await getHomePosts();
        setPostsHome(posts);
      } catch (err) {
        console.error("ERRO NO LOAD():", err);
      }
    }
    load();
  }, []);

  // ============================================
  // ORDEM CORRETA DEFINITIVA — SEM RISCO DE ERRO
  // ============================================
  const ordemDesejada = ["devocional", "mensagem-pastoral", "oracao"];

  const postsOrdenados =
    postsHome.length === 3
      ? [...postsHome].sort(
          (a, b) =>
            ordemDesejada.indexOf(a.slug) -
            ordemDesejada.indexOf(b.slug)
        )
      : postsHome;

  const mainPost = postsOrdenados[0] || null;
  const secondaryPosts = postsOrdenados.slice(1);

  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-[80vh] bg-cover bg-center flex flex-col justify-center items-center text-center text-white px-6 overflow-hidden pt-32 md:pt-40"
        style={{
          backgroundImage: `url("${fundoHero}")`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10"></div>

        <div className="relative z-30 flex flex-col items-center w-full">
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-['Playfair_Display'] font-bold mb-3 animate-glow"
            style={{
              color: "#fff",
              textShadow:
                "0 0 25px rgba(212,175,55,0.8), 0 0 10px rgba(255,255,255,0.4), 0 0 4px #D4AF37",
            }}
          >
            Bem-vindo ao Penso Logo Creio
          </h1>

          <p
            className="text-lg sm:text-xl lg:text-2xl font-['Inter'] mt-2 mb-3 animate-glow"
            style={{
              color: "#E0E0E0",
              textShadow:
                "0 0 8px rgba(212,175,55,0.4), 0 1px 2px rgba(0,0,0,0.3)",
            }}
          >
            Um espaço para reflexão sobre fé, vida e teologia.
          </p>
        </div>
      </section>

      {/* REFLEXÃO DIÁRIA */}
      <div className="my-16">
        <ReflexaoDiaria />
      </div>

      {/* POSTS DINÂMICOS */}
      <main className="relative z-20 container mx-auto px-4 my-24 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <div className="flex flex-col items-center gap-[6rem] w-full">

              {/* Post principal */}
              <div className="w-full flex justify-center">
                {mainPost && (
                  <ArticleCard
                    post={mainPost}
                    isMain={true}
                    delay={0.1}
                  />
                )}
              </div>

              {/* Post secundário 01 */}
              {secondaryPosts[0] && (
                <div className="w-[65%] self-start">
                  <ArticleCard
                    post={secondaryPosts[0]}
                    isMain={false}
                    delay={0.2}
                  />
                </div>
              )}

              {/* Post secundário 02 */}
              {secondaryPosts[1] && (
                <div className="w-[65%] self-end">
                  <ArticleCard
                    post={secondaryPosts[1]}
                    isMain={false}
                    delay={0.3}
                  />
                </div>
              )}

            </div>
          </div>
        </div>
      </main>

      <ArvoreDePostagens />
    </>
  );
}
