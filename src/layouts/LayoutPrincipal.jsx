// src/layouts/LayoutPrincipal.jsx

import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function LayoutPrincipal() {
  const backgroundTemplate =
    "/Template Verde espelhado Listas brancas verticais 300 DPI.png";
  const logo = "/logo-site-fundo-transparene.png";
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col text-white relative bg-[#010b0a] overflow-x-hidden">
      {/* HEADER + NAVBAR DENTRO DO HEADER (SEM FAIXA PRETA) */}
      <header
        className="relative w-full z-40 flex flex-col items-center justify-center pt-8 pb-6"
        style={{
          backgroundImage: `url("${backgroundTemplate}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "0 6px 25px rgba(28, 75, 28, 0.7)",
        }}
      >
        {/* LOGO */}
        <img
          src={logo}
          alt="Penso Logo Creio"
          className="mx-auto drop-shadow-[0_0_35px_rgba(212,175,55,0.7)] animate-fadeIn"
          style={{
            objectFit: "contain",
            maxHeight: "200px",
            maxWidth: "90%",
            transition: "transform 0.5s ease, filter 0.5s ease",
            filter: "drop-shadow(0 0 35px rgba(212,175,55,0.6))",
          }}
        />

        {/* NAVBAR ENCAIXADA NO FINAL DO HEADER, SEM FUNDO PRÓPRIO */}
        <div className="w-full mt-2">
          <NavBar />
        </div>

        {/* LUZ DE FUNDO SUAVE */}
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(212,175,55,0.25), transparent 60%)",
          }}
        />
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main
        className="flex-grow relative z-10"
        style={{
          marginTop: isHome ? "40px" : "60px",
          paddingBottom: "120px",
        }}
      >
        <Outlet />
      </main>

      <Footer />

      {/* ANIMAÇÃO DA LOGO */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in-out;
        }

        header img:hover {
          transform: scale(1.04);
          filter: drop-shadow(0 0 45px rgba(212,175,55,0.85));
        }

        header::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4), transparent);
        }
      `}</style>
    </div>
  );
}
