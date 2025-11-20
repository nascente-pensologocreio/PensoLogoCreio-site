// src/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";

// Layout e páginas principais
import LayoutPrincipal from "./layouts/LayoutPrincipal.jsx";
import Home from "./pages/Home.jsx";
import CaminhoDasEscrituras from "./pages/CaminhoDasEscrituras.jsx";
import EscadariaDoConhecimento from "./pages/EscadariaDoConhecimento.jsx";
import DevocionalDiaria from "./pages/DevocionalDiaria.jsx";
import TemasDaVida from "./pages/TemasDaVida.jsx";
import Contato from "./pages/Contato.jsx";

// Página de postagens da Home (layout premium que trabalhamos)
import Post from "./pages/Post.jsx";

// Página de postagens da Biblioteca / Firebase
import PostPage from "./pages/PostPage.jsx";

// Orações
import Oracoes from "./pages/Oracoes.jsx";

// Biblioteca editorial
import Biblioteca from "./pages/Biblioteca.jsx";

// Calendário
import ArvoreDePostagens from "./components/ArvoreDePostagens.jsx";

// 404
import PaginaNaoEncontrada from "./pages/PaginaNaoEncontrada.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<LayoutPrincipal />}>
        <Route index element={<Home />} />
        <Route
          path="caminho-das-escrituras"
          element={<CaminhoDasEscrituras />}
        />
        <Route
          path="escadaria-do-conhecimento"
          element={<EscadariaDoConhecimento />}
        />
        <Route path="devocional-diaria" element={<DevocionalDiaria />} />
        <Route path="temas-da-vida" element={<TemasDaVida />} />
        <Route path="contato" element={<Contato />} />

        {/* Postagens da Home → layout premium (Post.jsx) */}
        <Route path="artigo/:slug" element={<Post />} />

        {/* Postagens da Biblioteca / Firebase (PostPage.jsx) mantém rota atual */}
        <Route path="post/:slug" element={<PostPage />} />

        {/* Orações */}
        <Route path="oracoes" element={<Oracoes />} />

        {/* Biblioteca */}
        <Route path="biblioteca" element={<Biblioteca />} />

        {/* Calendário */}
        <Route path="calendario" element={<ArvoreDePostagens />} />
      </Route>

      {/* 404 */}
      <Route
        path="*"
        element={<PaginaNaoEncontrada mensagem="Página não encontrada." />}
      />
    </Routes>
  );
}
