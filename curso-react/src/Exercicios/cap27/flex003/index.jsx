import React from 'react';

export default function Flex003() {
  const containerStyle = {
    backgroundColor: 'lightsalmon',
    // No CSS: display: flex;
    display: 'flex',
    // No CSS: flex-flow: row wrap-reverse;
    flexFlow: 'row wrap-reverse', 
    padding: '10px',
    height: '400px' // Coloquei altura fixa pra você ver o reverse funcionando melhor
  };

  const itemStyle = {
    backgroundColor: 'lightskyblue',
    border: '1px solid black',
    textAlign: 'center',
    // No CSS: flex: auto;
    flex: 'auto', 
    padding: '15px',
    margin: '5px' // Margemzinha pra não grudar
  };

  return (
    <div>
      <h1>Exercício 3: Flow Wrap-Reverse</h1>
      <p>Observe que os itens começam de baixo para cima (Reverse) e quebram linha.</p>

      <div style={containerStyle}>
        <div style={itemStyle}>Exemplo de bloco A</div>
        <div style={itemStyle}>Exemplo de bloco B</div>
        <div style={itemStyle}>Exemplo de bloco C</div>
        <div style={itemStyle}>Exemplo de bloco D</div>
        <div style={itemStyle}>Exemplo de bloco E</div>
        <div style={itemStyle}>Exemplo de bloco F</div>
        <div style={itemStyle}>Exemplo de bloco G</div>
      </div>
    </div>
  );
}