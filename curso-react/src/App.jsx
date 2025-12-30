import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// SEUS IMPORTES
import Flex001 from './Exercicios/ex027/flex001/index';
import Flex002 from './Exercicios/ex027/flex002/index'; // <--- NOVO
import Flex003 from './Exercicios/ex027/flex003/index';
import Flex004 from './Exercicios/ex027/flex004/index';


function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px' }}>
        
        {/* MENU */}
        <nav style={{ borderBottom: '1px solid white', paddingBottom: '10px', marginBottom: '20px' }}>
          <h2>Menu do Curso</h2>
          <Link to="/" style={{ color: 'white', marginRight: '15px' }}>🏠 Início</Link>
          <Link to="/ex01" style={{ color: 'yellow', marginRight: '15px' }}>Flex 01</Link>
          <Link to="/ex02" style={{ color: 'lightgreen' }}>Flex 02 (Wrap)</Link>
          <Link to="/ex03" style={{ color: 'cyan', marginLeft: '10px' }}>Flex 03</Link>
          <Link to="/ex04" style={{ color: 'orange', marginLeft: '10px' }}>Flex 04</Link>
        </nav>

        {/* ROTAS */}
        <Routes>
          <Route path="/" element={<h1>Bem-vindo ao Curso!</h1>} />
          <Route path="/ex01" element={<Flex001 />} />
          <Route path="/ex02" element={<Flex002 />} />
          <Route path="/ex03" element={<Flex003 />} />
          <Route path="/ex04" element={<Flex004 />} />
          <Route path="*" element={<h2>Página não encontrada</h2>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;