import {useState} from 'react'
import {FiSearch} from 'react-icons/fi'
import './styles.css';

import api from './services/api'

function App() {

  const[input, setInput] = useState('')

  async function handleSearch(){

    if(input === ''){
      alert("Preencha algum CEP!")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      console.log(response)

    }catch{
      alert("Erro ao buscar o CEP!")
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input type="text"
        placeholder="Digite o CEP"
        value={input}
        onChange={(evento) => setInput(evento.target.value)}
        />
        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF"/></button>
      </div>

      <main className='main'>
        <h2>CEP: 04370030</h2>

        <span> Rua Teste</span>
        <span> Complemento: teste</span>
        <span> Bairro</span>
        <span> Cidade - Estado</span>
      </main>

    </div>
  );
}

export default App;
