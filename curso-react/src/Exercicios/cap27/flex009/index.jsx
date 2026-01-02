import React from 'react';

export default function Flex004() {
  const containerStyle = {
    backgroundColor: 'lightsalmon',
    display: 'flex',
    flexFlow: 'row wrap', 
};

  const itemStyle = {
   backgroundColor: 'lightskyblue',
   border: '1px solid black',
   textAlign: 'center',
   flexBasis: '150px',
  };


  return (
    <div>
      <h1>Exercício 9</h1>
            
      <div style={containerStyle}>
        <div id="i1" style={itemStyle}>A</div>
        <div id="i2" style={itemStyle}>Outro Conteúdo</div>
        <div id="i3" style={itemStyle}>C</div>
        <div id="i4" style={itemStyle}>Conteúdo um pouco maior</div>
        <div id="i5" style={itemStyle}>E</div>
        <div id="i6" style={itemStyle}>Conteúdo maior aidna que vai ocupar mais espaço</div>
        <div id="i7" style={itemStyle}>G</div>
      </div>
    </div>
  );
}