import React from 'react';

export default function Flex004() {
  const containerStyle = {
    backgroundColor: 'lightsalmon',
    display: 'flex',
    flexFlow: 'row nowrap',
};

  const itemStyle = {
    backgroundColor: 'lightskyblue',
    border: '1px solid black',
    textAlign: 'center',
    flexBasis: '200px',
  };


  const cxA = {
    backgroundColor: 'lightskyblue',
    border: '1px solid black',
    textAlign: 'center',
    flex: '1 0 200px',
  };

  const cxB = {
    backgroundColor: 'lightskyblue',
    border: '1px solid black',
    textAlign: 'center',
    flex: '1 1 150px',
  };
  
  const cxC = {
    backgroundColor: 'lightskyblue',
    border: '1px solid black',
    textAlign: 'center',
    flex: '1 8 auto',
  };

  return (
    <div>
      <h1>Exercício 12</h1>
            
      <div style={containerStyle}>
        <div style={cxA}>A</div>
        <div style={cxB}>B</div>
        <div style={cxC}>C</div>

      </div>
    </div>
  );
}