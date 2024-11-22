
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <h1>Aplicações React</h1>
      <h2>Lista de Contatos</h2>
      <ListaDeContatos />
      <h2>Calculadora de IMC</h2>
      <CalculadoraIMC peso={70} altura={1.75} />
    </div>
  );
}

export default App;
