import React from 'react';

export default function Flex002() {
  
  const bodyStyle = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    backgroundColor: 'lightgrey',
    minHeight: '100vh',
    width: '100vw',
    fontSize: '1em',
    margin: 0, // Importante zerar a margem do body
    padding: 0
  };

  const headerStyle = {
    backgroundColor: 'grey', // CORRIGIDO: Estava 'backgrouColor' e mudei pra cinza pra destacar os botões
    color: 'white',
    padding: '10px 20px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const h1Style = {
   // border: '1px dotted black', // Comentei pra ficar mais limpo
   margin: 0,
   flex: '1 0 200px', // Ocupa espaço fixo
  };

  const navStyle = {
    // border: '1px dotted black',
    display: 'flex',
    flexFlow: 'row wrap', // Mudei pra wrap pra não quebrar em telas pequenas
    justifyContent: 'flex-end',
    gap: '10px' // Espacinho entre os botões
    // CORRIGIDO: Tirei o 's' que estava solto aqui
  };

  const linkStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '5px',
    textDecoration :'none',
    textAlign: 'center',
    fontWeight: 'bold'
  };

  // --- O PAINO MAIN PRECISAVA SER FLEX ---
  const mainStyle = {
    backgroundColor: 'white',
    color: 'black',
    margin: '20px',
    padding: '20px',
    boxShadow: '2px 2px 5px rgba(0,0,0,0.2)', // Sombrainha básica
    
    // A MÁGICA DAS 3 COLUNAS:
    display: 'flex',      // Faltava isso!
    flexDirection: 'row', // Um ao lado do outro
    gap: '20px',          // Espaço entre as colunas
    alignItems: 'flex-start' // Alinha no topo
  };

  const h2Style = {
    minWidth: '150px', 
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 'bold'
  };

  const pStyle = {
    flex: 1, // Divide o espaço restante igualmente
    margin: 0,
    lineHeight: '1.5',
    fontSize: '1rem',
    textAlign: 'justify' // Texto justificado fica mais bonito em colunas
  };

  return (
    <div style={bodyStyle}> 
      
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
          {/* Coluna 1 */}
          <h2 style={h2Style}>Teste de FlexBox</h2>
          
          {/* Coluna 2 */}
          <p style={pStyle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde reiciendis, quia debitis nulla quam ex nemo rem soluta doloribus ullam dolorem vero, iure eos provident temporibus commodi ipsam. Accusantium, quod.
          </p>
          
          {/* Coluna 3 */}
          <p style={pStyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatum soluta, minima culpa aperiam dolores. Atque, quo iusto praesentium delectus harum maiores, deleniti, mollitia enim vitae voluptates facilis omnis! Qui.
          </p>
      </main>

    </div> 
  );
}