import React from 'react';

export default function Flex004() {
  const containerStyle = {
    backgroundColor: 'lightsalmon',
    display: 'flex',
    flexFlow: 'row wrap',
    height: '400px',
    alignItems: 'flex-start',
};

  const itemStyle = {
   backgroundColor: 'lightskyblue',
   border: '1px solid black',
   textAlign: 'center',
   padding: '20px',
  };

  const estiloDoI1 = {
    backgroundColor: 'lightskyblue',
    border: '1px solid black',
    textAlign: 'center',
    padding: '20px',
  };

  const estiloDoI2 = {
    backgroundColor: 'lightskyblue',
    border: '1px solid black',
    textAlign: 'center',
    padding: '20px',
    alignSelf: 'auto',
  };

  const estiloDoI3 = {
    backgroundColor: 'lightskyblue',
    border: '1px solid black',
    textAlign: 'center',
    padding: '20px',
    alignSelf: 'flex-end',
  };

  const estiloDoI4 = {
    backgroundColor: 'lightskyblue',
    border: '1px solid black',
    textAlign: 'center',
    padding: '20px',
  };

  const estiloDoI5 = {
    backgroundColor: 'lightskyblue',
    border: '1px solid black',
    textAlign: 'center',
    padding: '20px',
    alignSelf: 'center',
  };

  const estiloDoI6 = {
    backgroundColor: 'lightskyblue',
    border: '1px solid black',
    textAlign: 'center',
    padding: '20px',
    alignSelf: 'flex-start',
  };

  const estiloDoI7 = {
    backgroundColor: 'lightskyblue',
    border: '1px solid black',
    textAlign: 'center',
    padding: '20px',
    alignSelf: 'stretch',
  };
  return (
    <div>
      <h1>Exercício 8</h1>
            
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