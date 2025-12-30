// src/Exercicios/ex027/flex005/index.jsx
import React from 'react';

export default function Flex005() {
  const estiloMain = {
    backgroundColor: 'lightgreen',
    height: '100vh', // Ocupa a tela toda
    width: '100%',
    display: 'flex',
    justifyContent: 'center', // Centraliza na horizontal (eixo principal)
    alignItems: 'center'      // Centraliza na vertical (eixo transversal)
  };

  return (
    <div style={estiloMain}>
      <section style={{ 
          backgroundColor: 'lightseagreen', 
          width: '200px', 
          height: '200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '5px 5px 10px rgba(0,0,0,0.3)', // Uma sombrinha pra dar charme
          borderRadius: '10px' // Borda arredondada
      }}>
        <h2>Login</h2>
      </section>
    </div>
  );
}