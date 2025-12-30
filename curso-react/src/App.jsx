import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// IMPORTES
import Flex001 from './Exercicios/ex027/flex001/index';
import Flex002 from './Exercicios/ex027/flex002/index';
import Flex003 from './Exercicios/ex027/flex003/index';
import Flex004 from './Exercicios/ex027/flex004/index';
import Flex005 from './Exercicios/ex027/flex005/index'; // <--- NOVO
import Flex006 from './Exercicios/ex027/flex006/index'; // <--- NOVO

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px' }}>
        
        {/* MENU */}
        <nav style={{ borderBottom: '1px solid white', paddingBottom: '10px', marginBottom: '20px' }}>
          <h2>Menu do Curso</h2>
          <Link to="/" style={{ color: 'white', marginRight: '10px' }}>🏠</Link>
          <Link to="/ex01" style={{ color: 'yellow', marginRight: '10px' }}>01</Link>
          <Link to="/ex02" style={{ color: 'lightgreen', marginRight: '10px' }}>02</Link>
          <Link to="/ex03" style={{ color: 'cyan', marginRight: '10px' }}>03</Link>
          <Link to="/ex04" style={{ color: 'orange', marginRight: '10px' }}>04</Link>
          
          {/* LINKS NOVOS */}
          <Link to="/ex05" style={{ color: 'hotpink', marginRight: '10px' }}>05 (Center)</Link>
          <Link to="/ex06" style={{ color: 'violet', marginRight: '10px' }}>06 (Content)</Link>
        </nav>

        {/* ROTAS */}
        <Routes>
          <Route path="/" element={<h1>Bem-vindo!</h1>} />
          <Route path="/ex01" element={<Flex001 />} />
          <Route path="/ex02" element={<Flex002 />} />
          <Route path="/ex03" element={<Flex003 />} />
          <Route path="/ex04" element={<Flex004 />} />
          
          {/* ROTAS NOVAS */}
          <Route path="/ex05" element={<Flex005 />} />
          <Route path="/ex06" element={<Flex006 />} />

          <Route path="*" element={<h2>Página não encontrada</h2>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;