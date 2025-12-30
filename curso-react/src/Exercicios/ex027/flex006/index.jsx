import React from 'react';

export default function Flex004() {
  const containerStyle = {
    backgroundColor: 'lightsalmon',
    display: 'flex',
    flexFlow: 'row wrap',
    height: '400px',
    alignContent: 'space-around',
};

  const itemStyle = {
   backgroundColor: 'lightskyblue',
   border: '1px solid black',
   textAlign: 'center',
   padding: '40px',
  };

  return (
    <div>
      <h1>Exercício 6: React é muito f*da</h1>
            
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
        <div style={itemStyle}>J</div>
        <div style={itemStyle}>L</div>
        <div style={itemStyle}>M</div>
        <div style={itemStyle}>N</div>
      </div>
    </div>
  );
}