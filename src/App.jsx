import React from 'react';
import CadastroJogadores from './components/CadastroJogadores';
import logo from './assets/ECBahia.png'

function App() {
  return (
    <div className="App">

      <img src={logo} alt="Logo do Bahia"/>
      <CadastroJogadores />
    </div>
  );
}

export default App;



