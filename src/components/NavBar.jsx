import React from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * NavBar.jsx
 * Versão refinada e funcional com React Router:
 * - Usa <Link> para navegação sem reload
 * - Mantém o efeito “palavra-lâmpada” dourada
 * - Responsiva e independente
 */

const links = [
  { to: "/", label: "Início" },
  { to: "/caminho-das-escrituras", label: "Caminho das Escrituras" },
  { to: "/escadaria-do-conhecimento", label: "Escadaria do Conhecimento" },
  { to: "/devocional-diaria", label: "Devocional Diária" },
  { to: "/temas-da-vida", label: "Temas da Vida" },
  { to: "/contato", label: "Contato" },
];

export default function NavBar() {
  const location = useLocation();
  const path = location.pathname || "/";

  return (
    <nav aria-label="Main navigation" className="w-full">
      <div className="max-w-6xl mx-auto px-4">
        <ul
          className="flex flex-wrap justify-center items-center gap-8 py-2"
          style={{ margin: 0, padding: 0, listStyle: "none", gap: "3.2rem" }}
        >
          {links.map((l) => {
            const active = path === l.to || (l.to !== "/" && path.startsWith(l.to));
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`nav-link ${active ? "active" : ""}`}
                  style={{ textDecoration: "none" }}
                >
                  <span>{l.label}</span>
                  <span aria-hidden="true" className="nav-underline" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <style>{`
        .nav-link {
          --gold: #D4AF37;
          display: inline-block;
          position: relative;
          color: var(--gold);
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          letter-spacing: 0.6px;
          padding: 6px 2px;
          transition: all 220ms ease;
          text-shadow: 0 0 6px rgba(212,175,55,0.25);
        }

        /* --- CÓDIGO DO EFEITO DE FOCO DE LUZ (HOVER/ACTIVE) --- */
        .nav-link:hover,
        .nav-link:focus {
          color: #fff;
          transform: translateY(-3px) scale(1.05);
          text-shadow:
            0 0 4px #fff,
            0 0 16px var(--gold),
            0 0 28px rgba(212,175,55,0.95);
        }

        .nav-link.active {
          color: #fff;
          text-shadow:
            0 0 5px #fff,
            0 0 20px var(--gold),
            0 0 32px rgba(212,175,55,0.95);
        }

        .nav-link .nav-underline {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          bottom: -6px;
          height: 2px;
          width: 70%;
          background: linear-gradient(90deg, rgba(212,175,55,1), rgba(255,255,255,0.6));
          border-radius: 2px;
          transition: transform 260ms cubic-bezier(.2,.9,.2,1), opacity 200ms;
          opacity: 0.85;
        }

        .nav-link:hover .nav-underline,
        .nav-link:focus .nav-underline,
        .nav-link.active .nav-underline {
          transform: translateX(-50%) scaleX(1);
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .nav-link {
            font-size: 0.95rem;
            padding: 8px 4px;
          }
          ul { gap: 1.5rem !important; }
        }

        @media (max-width: 640px) {
          .nav-link {
            font-size: 0.9rem;
          }
          ul { gap: 0.8rem !important; }
        }
      `}</style>
    </nav>
  );
}
