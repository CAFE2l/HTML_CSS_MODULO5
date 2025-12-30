import React from 'react';

export default function Flex004() {
  const containerStyle = {
    backgroundColor: 'lightsalmon',
    height: '300px', // Altura fixa para podermos alinhar verticalmente
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-around', // O segredo do espaçamento horizontal
    alignItems: 'center'            // O segredo do alinhamento vertical
  };

  const itemStyle = {
    backgroundColor: 'lightskyblue',
    border: '1px solid black',
    textAlign: 'center',
    padding: '20px', // Adicionei um padding pra ficar bonitinho igual um botão
    width: '50px'    // Largura fixa pra ver o espaço entre eles
  };

  return (
    <div>
      <h1>Exercício 4: Alinhamento Perfeito</h1>
      <p>justify-content: space-around | align-items: center</p>
      
      <div style={containerStyle}>
        <div style={itemStyle}>A</div>
        <div style={itemStyle}>B</div>
        <div style={itemStyle}>C</div>
        <div style={itemStyle}>D</div>
        <div style={itemStyle}>E</div>
        <div style={itemStyle}>F</div>
        <div style={itemStyle}>G</div>
      </div>
    </div>
  );
}