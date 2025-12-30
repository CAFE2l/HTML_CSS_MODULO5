function App() {
  // O CSS vira um objeto JavaScript
  const estiloMain = {
    backgroundColor: 'lightgreen', // background-color virou backgroundColor
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',      // justify-content virou justifyContent
    alignItems: 'center'
  };

  return (
    <main style={estiloMain}>
      <section style={{ backgroundColor: 'lightseagreen', width: '200px', height: '200px' }}>
        <h2>Tela de Login</h2>
      </section>
    </main>
  );
}