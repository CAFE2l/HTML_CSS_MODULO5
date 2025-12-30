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
   padding: '20px',
  };

  const estiloDoI1 = {
    backgroundColor: 'red', // O i1 vai ser vermelho
    order:0,              // E vai furar a fila
    padding: '20px',
    border: '1px solid black',
  };

  const estiloDoI2 = {
    backgroundColor: 'red', // O i1 vai ser vermelho
    order: -2,              // E vai furar a fila
    padding: '20px',
    border: '1px solid black',
  };

  const estiloDoI3 = {
    backgroundColor: 'red', // O i1 vai ser vermelho
    order: 4,              // E vai furar a fila
    padding: '20px',
    border: '1px solid black',
  };

  const estiloDoI4 = {
    backgroundColor: 'red', // O i1 vai ser vermelho
    order: 8,              // E vai furar a fila
    padding: '20px',
    border: '1px solid black',
  };

  const estiloDoI5 = {
    backgroundColor: 'red', // O i1 vai ser vermelho
    order: 2,              // E vai furar a fila
    padding: '20px',
    border: '1px solid black',
  };

  const estiloDoI6 = {
    backgroundColor: 'red', // O i1 vai ser vermelho
    order: 0,              // E vai furar a fila
    padding: '20px',
    border: '1px solid black',
  };

  const estiloDoI7 = {
    backgroundColor: 'red', // O i1 vai ser vermelho
    order: -4,              // E vai furar a fila
    padding: '20px',
    border: '1px solid black',
  };
  return (
    <div>
      <h1>Exercício 7: EU TE ODEIO GUANABARA</h1>
            
      <div style={containerStyle}>
        <div id="i1" style={estiloDoI1}>A</div>
        <div id="i2" style={estiloDoI2}>B</div>
        <div id="i3" style={estiloDoI3}>C</div>
        <div id="i4" style={estiloDoI4}>D</div>
        <div id="i5" style={estiloDoI5}>E</div>
        <div id="i6" style={estiloDoI6}>F</div>
        <div id="i7" style={estiloDoI7}>G</div>
      </div>
    </div>
  );
}