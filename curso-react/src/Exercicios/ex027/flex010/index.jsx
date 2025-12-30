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
   flexShrink: '1',
   flexBasis: '250px',
   flexGrow: '1',
  };

  return (
    <div>
      <h1>Exercício 10 React é muito f*da</h1>
            
      <div style={containerStyle}>
        <div style={itemStyle}>A</div>
        <div style={itemStyle}>B</div>
        <div style={itemStyle}>C</div>
    
      </div>
    </div>
  );
}