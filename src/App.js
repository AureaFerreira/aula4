//components
import Publicacao from './Publicacao';
import Mensagem from './Mensagem';
import Formulario from './Formulario';

import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [publicacoes, setPublicacoes] = useState([]);
  const [mensagem, setMensagem ] = useState(null)

  useEffect(() => {
    listar();
  }, []);

  function listar() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then((resposta) => {
        setPublicacoes(resposta.data);
      });
  }

  function salvarTexto(titulo, texto) {
    const carga = {
      userId: 1,
      title: titulo,
      body: texto
    };
    axios.post(`https://jsonplaceholder.typicode.com/posts`, carga)
      .then((resposta) => {
        setMensagem('Publicação criada');
      });
  }

  function aoFecharMensagem(){
    setMensagem(null);
  }

  function editarPubicacao(id, titulo, texto){
    const carga = {
      id: id, 
      userId: 1,
      title: titulo,
      body: texto
    };
    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, carga)
    .then((resposta) => {
      setMensagem('Publicação editada com sucesso')
    })
  }

  function excluirPublicacao(id){
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((resposta) => {
      setMensagem('Publicação excluida com sucesso')
      listar()
    })
  }

  return (
    <div className="App">
      {mensagem && <Mensagem texto={mensagem} aoFechar={aoFecharMensagem} />}
      <Formulario aoSalvar={salvarTexto} />
      <div>
        {publicacoes.map((publicacao) => {
          return <Publicacao 
            key={publicacao.id}
            id={publicacao.id}
            titulo={publicacao.title} 
            conteudo={publicacao.body}
            aoSalvar={editarPubicacao}
            aoExcluir={excluirPublicacao}
          />
        })}
      </div>
    </div>
    
  );
}

export default App;
