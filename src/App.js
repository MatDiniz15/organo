import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

const times = [
  {
    nome: 'Jedi',
    corPrimaria: '#5770c2',
    corSecundaria: '#d9e5f7'
  },
  {
    nome: 'Sith',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF'
  },
  {
    nome: 'Data Science',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2'
  },
  {
    nome: 'Devops',
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8'
  },
  {
    nome: 'UX e Design',
    corPrimaria: '#D86EBF',
    corSecundaria: '#FAE5F5'
  },
  {
    nome: 'Mobile',
    corPrimaria: '#FEBA05',
    corSecundaria: '#FFF5D9'
  },
  {
    nome: 'Inovação e Gestão',
    corPrimaria: '#FF8A29',
    corSecundaria: '#FFEEDF'
  }
];

const [personagens, setPersonagens] = useState([])

const aoNovoPersonagemAdicionado = (personagem) => {
  setPersonagens([...personagens, personagem])
}

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoPersonagemCadastrado={personagem => aoNovoPersonagemAdicionado(personagem)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        personagens={personagens.filter(personagem => personagem.time === time.nome)}
      />)}

      <Rodape />
    
    </div>
  );
}

export default App;
