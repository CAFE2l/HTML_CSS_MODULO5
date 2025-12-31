import React from 'react';

export default function Flex002() {
  
  // 1. O container principal (fingindo ser o body)
  const bodyStyle = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '1em',
    backgroundColor: 'grey',
    minHeight: '100vh', // Ocupa a altura total da tela
    width: '100vw',
    display: 'flex',      // Já deixei preparado pra você brincar
    flexDirection: 'column',
    margin: 0,
    padding: 0
  };

  const headerStyle = {
    backgroundColor: 'lightgrey',
    color: 'black',
    padding: '20px',
  };

  const mainStyle = {
    backgroundColor: 'white',
    margin: '20px',
    padding: '20px',
    borderRadius: '10px',
    // Havia um erro de parênteses aqui embaixo
    boxShadow: '2px 2px 3px rgba(0, 0, 0, 0.336)', 
  };

  const h1Style = {
    border: '1px dotted black',
    margin: 0, // Tirar margem padrão do navegador
  };

  const navStyle = {
    border: '1px dotted red', // Mudei pra vermelho pra você ver melhor
    marginTop: '10px',
    padding: '10px'
  };

  // Estilo extra para os links não ficarem colados
  const linkStyle = {
    marginRight: '15px',
    textDecoration: 'none',
    color: 'blue',
    fontWeight: 'bold'
  };

  return (
    // 2. NUNCA use a tag <body> aqui dentro. Use uma <div>.
    <div style={bodyStyle}> 
      
      {/* 3. Você precisa conectar a variável de estilo na tag usando style={} */}
      <header style={headerStyle}>
          <h1 style={h1Style}>Meu site</h1>
          
          <nav style={navStyle}>
            <a href="#" style={linkStyle}>Opção 1</a>
            <a href="#" style={linkStyle}>Opção 2</a>
            <a href="#" style={linkStyle}>Opção 3</a>
            <a href="#" style={linkStyle}>Opção 4</a>
            <a href="#" style={linkStyle}>Opção 5</a>
            <a href="#" style={linkStyle}>Opção 6</a>
          </nav>
      </header>

      <main style={mainStyle}>
          <h2>Teste de FlexBox</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde reiciendis, quia debitis nulla quam ex nemo rem soluta doloribus ullam dolorem vero.</p>
          <br/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatum soluta, minima culpa aperiam dolores.</p>
      </main>

    </div> 
  );
}