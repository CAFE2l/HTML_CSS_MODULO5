import React from 'react';

export default function Flex002() {
  
  const bodyStyle = {
    fontFamily: 'Arial, Helvetica, sans-serif',
    backgroundColor: 'lightgrey', // Cor do fundo da página
    minHeight: '100vh',
    width: '100vw',
    fontSize: '1em',
  };

  const headerStyle = {
    backgrouColor: 'black',
    color: 'white',
    padding: '10px',
    display: 'flex',
    flexFLow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const h1Style = {
   border: '1px dotted black',
   flex: '0 0 200px',
  };

  const navStyle = {
    border: '1px dotted black',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-end',s
  };

  // ESTILO DOS BOTÕES (PRETO COM TEXTO BRANCO)
    // Estilo extra para os links não ficarem colados
  const linkStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
    textDecoration :'none',
    textAlign: 'center',
  };

  // --- AQUI ESTÁ A MÁGICA DAS 3 COLUNAS ---
  const mainStyle = {
    backgroundColor: 'white',
    color: 'black',
    transition: 'background-color .5s',

};

  // Estilo específico pro Título H2 (Coluna 1)
  const h2Style = {
    minWidth: '150px', // Força ele a ter uma largura fixa pra não esmagar
    margin: 0,
    fontSize: '1.5rem',
    color: 'black',
    fontWeight: 'bold'
  };

  // Estilo pros Parágrafos (Colunas 2 e 3)
  const pStyle = {
    flex: 1, // "flex: 1" manda o parágrafo ocupar todo o espaço sobrando
    margin: 0,
    lineHeight: '1.5', // Altura da linha pra ficar legível
    fontSize: '1rem',
    color: '#333'
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

      {/* AGORA SÃO 3 FILHOS DIRETOS: H2, P, P */}
      <main style={mainStyle}>
          
          {/* Filho 1: Título */}
          <h2 style={h2Style}>Teste de FlexBox</h2>
          
          {/* Filho 2: Parágrafo 1 */}
          <p style={pStyle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde reiciendis, quia debitis nulla quam ex nemo rem soluta doloribus ullam dolorem vero, iure eos provident temporibus commodi ipsam. Accusantium, quod.
          </p>
          
          {/* Filho 3: Parágrafo 2 */}
          <p style={pStyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatum soluta, minima culpa aperiam dolores. Atque, quo iusto praesentium delectus harum maiores, deleniti, mollitia enim vitae voluptates facilis omnis! Qui.
          </p>
      
      </main>

    </div> 
  );
}