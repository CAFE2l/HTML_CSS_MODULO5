import React from 'react';

// Aqui criamos apenas o componente do exercício
export default function Flex001() {
  return (
    <div style={{ 
      display: 'flex', 
      backgroundColor: 'lightsalmon', 
      border: '2px solid black',
      padding: '10px' 
    }}>
        <div style={{ backgroundColor: 'lightblue', flex: 'auto', padding: '20px', border: '1px solid black' }}>A</div>
        <div style={{ backgroundColor: 'lightblue', flex: 'auto', padding: '20px', border: '1px solid black' }}>B</div>
        <div style={{ backgroundColor: 'lightblue', flex: 'auto', padding: '20px', border: '1px solid black' }}>C</div>
    </div>
  );
}