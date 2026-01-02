import React from 'react';

export default function Flex002() {
  // Dica de React: Podemos criar o estilo aqui fora para o return ficar mais limpo
  const containerStyle = {
    backgroundColor: 'lightsalmon',
    display: 'flex',
    flexDirection: 'row', // flex-direction virou flexDirection
    flexWrap: 'wrap',     // flex-wrap virou flexWrap
    height: '300px'       // Dei uma altura para visualizar melhor
  };

  const itemStyle = {
    backgroundColor: 'lightblue',
    border: '1px solid black',
    padding: '10px',
    textAlign: 'center',
    width: '150px', // Coloquei largura para forçar o Wrap (quebra de linha)
    margin: '5px'
  };

  return (
    <div>
      <h2>Exercício 2: Flex Wrap</h2>
      
      {/* Aqui aplicamos o estilo criado acima */}
      <div style={containerStyle}>
        <div style={itemStyle}>A</div>
        <div style={itemStyle}>B</div>
        <div style={itemStyle}>C</div>
        <div style={itemStyle}>D</div>
        <div style={itemStyle}>E</div>
        <div style={itemStyle}>F</div>
        <div style={itemStyle}>G</div>
        <div style={itemStyle}>H</div>
        <div style={itemStyle}>I</div>
      </div>
    </div>
  );
}