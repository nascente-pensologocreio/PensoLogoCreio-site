// src/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';

// Layouts e páginas principais
import LayoutPrincipal from './layouts/LayoutPrincipal.jsx';
import Home from './pages/Home.jsx';
import CaminhoDasEscrituras from './pages/CaminhoDasEscrituras.jsx';
import EscadariaDoConhecimento from './pages/EscadariaDoConhecimento.jsx';
import DevocionalDiaria from './pages/DevocionalDiaria.jsx';
import TemasDaVida from './pages/TemasDaVida.jsx';
import Contato from './pages/Contato.jsx';
import PostPage from './pages/PostPage.jsx';

// Novo componente do calendário
import ArvoreDePostagens from './components/ArvoreDePostagens.jsx';

// Página de erro genérica
import PaginaNaoEncontrada from './pages/PaginaNaoEncontrada.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<LayoutPrincipal />}>
        <Route index element={<Home />} />
        <Route path="caminho-das-escrituras" element={<CaminhoDasEscrituras />} />
        <Route path="escadaria-do-conhecimento" element={<EscadariaDoConhecimento />} />
        <Route path="devocional-diaria" element={<DevocionalDiaria />} />
        <Route path="temas-da-vida" element={<TemasDaVida />} />
        <Route path="contato" element={<Contato />} />
        <Route path="post/:slug" element={<PostPage />} />

        {/* ✅ Rota do calendário */}
        <Route path="calendario" element={<ArvoreDePostagens />} />
      </Route>

      {/* Rota de fallback */}
      <Route
        path="*"
        element={<PaginaNaoEncontrada mensagem="Página não encontrada." />}
      />
    </Routes>
  );
}
