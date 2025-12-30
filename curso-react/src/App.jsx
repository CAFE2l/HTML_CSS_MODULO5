import React from 'react';
// 1. Importando as ferramentas de link e rotas
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';

// 2. Importando seu exercício (O quadrado colorido)
import Flex001 from './Exercicios/ex027/flex001/index';

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px' }}>
        
        {/* === MENU DE NAVEGAÇÃO (Fica fixo no topo) === */}
        <nav style={{ borderBottom: '1px solid white', paddingBottom: '10px', marginBottom: '20px' }}>
          <h2>Menu do Curso</h2>
          {/* Link é igual a tag <a>, mas não recarrega a página */}
          <Link to="/" style={{ color: 'white', marginRight: '15px', fontWeight: 'bold' }}>🏠 Início</Link>
          <Link to="/ex01" style={{ color: 'yellow', fontWeight: 'bold' }}>Exercício 01 (Flexbox)</Link>
        </nav>

        {/* === ONDE AS PÁGINAS MUDAM === */}
        <Routes>
          {/* Rota da Home */}
          <Route path="/" element={
            <div style={{color: 'white'}}>
              <h1>Bem-vindo!</h1>
              <p>Clique nos links acima para ver seus exercícios.</p>
            </div>
          } />

          {/* Rota do Exercício 01 */}
          <Route path="/ex01" element={<Flex001 />} />
          
          {/* Rota para erro (se digitar url errada) */}
          <Route path="*" element={<h2 style={{color: 'red'}}>Página não encontrada</h2>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;