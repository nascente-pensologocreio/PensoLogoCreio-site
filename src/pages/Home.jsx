import React from "react";
import ReflexaoDiaria from "../components/ReflexaoDiaria.jsx";
import { ArticleCard } from "../components/ArticleCard.jsx";
import ArvoreDePostagens from "../components/ArvoreDePostagens.jsx";
import { mainPost, secondaryPosts } from "../content/index.js";

export default function Home() {
  const fundoHero = "/Mockup da Homepage.png";

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
        {/* Sobreposição escura */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10"></div>

        {/* TÍTULO PRINCIPAL */}
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

      {/* POSTS */}
      <main className="relative z-20 container mx-auto px-4 my-24 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <div className="flex flex-col items-center gap-[6rem] w-full">
              <div className="w-full flex justify-center">
                {mainPost && (
                  <ArticleCard post={mainPost} isMain={true} delay={0.1} />
                )}
              </div>
              {secondaryPosts && secondaryPosts[0] && (
                <div className="w-[65%] self-start">
                  <ArticleCard
                    post={secondaryPosts[0]}
                    isMain={false}
                    delay={0.2}
                  />
                </div>
              )}
              {secondaryPosts && secondaryPosts[1] && (
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

      {/* ÁRVORE DE POSTAGENS */}
      <ArvoreDePostagens />

      {/* ESTILOS GLOBAIS */}
      <style>{`
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px);} to { opacity: 1; transform: translateY(0);} }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: translateY(0);} }
        @keyframes float { 0%,100% { opacity: 0; transform: translateY(0);} 50% { opacity: 0.8; transform: translateY(-20px);} }
        @keyframes spin-slow { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }

        .animate-glow {
          animation: fadeInUp 1.8s ease both;
        }

        html { scroll-behavior: smooth; }
        @supports (backdrop-filter: blur(1px)) {
          .backdrop-blur-xl { backdrop-filter: blur(20px); }
        }
      `}</style>
    </>
  );
}
