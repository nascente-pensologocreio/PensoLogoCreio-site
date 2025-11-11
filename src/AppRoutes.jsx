import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutPrincipal from './layouts/LayoutPrincipal.jsx';
import Home from './pages/Home.jsx';
import CaminhoDasEscrituras from './pages/CaminhoDasEscrituras.jsx';
import EscadariaDoConhecimento from './pages/EscadariaDoConhecimento.jsx';
import DevocionalDiaria from './pages/DevocionalDiaria.jsx';
import TemasDaVida from './pages/TemasDaVida.jsx';
import Contato from './pages/Contato.jsx';
import PostPage from './pages/PostPage.jsx';

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
      </Route>

      <Route
        path="*"
        element={
          <div className="min-h-[60vh] flex items-center justify-center text-white text-xl">
            Página não encontrada.
          </div>
        }
      />
    </Routes>
  );
}
