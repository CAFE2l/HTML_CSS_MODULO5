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
    flexBasis: '200px',
    flexShrink: "0",
    flexGrow: "1",
  };

  const cxB = {
        backgroundColor: 'lightskyblue',
    border: '1px solid black',
    textAlign: 'center',
    flexBasis: '200px',
    flexShrink: "1",
    flexGrow: "1",
  };
  
  const cxC = {
        backgroundColor: 'lightskyblue',
    border: '1px solid black',
    textAlign: 'center',
    flexBasis: '200px',
    flexShrink: "8",
    flexGrow: "1",
  };

  return (
    <div>
      <h1>Exercício 11 React é muito f*da</h1>
            
      <div style={containerStyle}>
        <div style={cxA}>A</div>
        <div style={cxB}>B</div>
        <div style={cxC}>C</div>

      </div>
    </div>
  );
}