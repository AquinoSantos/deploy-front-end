// novo-projeto\src\components\TelaCadastro\index.jsx
import React, { useState } from 'react';
import './style.css';

const CadastroJogadores = () => {
  
  const [nome, setNome] = useState('');
  const [camisa, setCamisa] = useState('');
  const [jogadores, setJogadores] = useState([]);

  /** 
   
   * @param {React.FormEvent} event - O evento de envio do formulário.
   */
  const adicionarJogador = (event) => {
    
    event.preventDefault();

    
    if (!nome.trim() || !camisa.trim()) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    
    const novoJogador = {
      id: Date.now(), 
      nome,
      camisa,
    };

    
    setJogadores([...jogadores, novoJogador]);

    
    setNome('');
    setCamisa('');
  };

  return (
    <div className="container">
      <header>
        <h1>Cadastro de Jogadores</h1>
      </header>

      <form onSubmit={adicionarJogador}>
        <div className="form-group">
          <label htmlFor="nome">Nome do Jogador:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite o nome"
          />
        </div>
        <div className="form-group">
          <label htmlFor="camisa">Número da Camisa:</label>
          <input
            type="number"
            id="camisa"
            value={camisa}
            onChange={(e) => setCamisa(e.target.value)}
            placeholder="Digite o número"
          />
        </div>
        <button type="submit">Adicionar Jogador</button>
      </form>

      <div className="lista-jogadores">
        <h2>Lista de Jogadores</h2>
        <ul>
          {jogadores.map((jogador) => (
            <li key={jogador.id}>
              <span className="nome">{jogador.nome}</span>
              <span className="camisa">#{jogador.camisa}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CadastroJogadores;
