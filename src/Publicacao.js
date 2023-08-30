
import { useState } from "react";
import Formulario from "./Formulario";

export default function Publicacao({ id, titulo, conteudo, aoSalvar, aoExcluir}) {
  const[estahEditando, setEstahEditanto] = useState(false);


  function salvarEdicao ( novoTitulo, novoConteudo ) {
    aoSalvar(id, novoTitulo, novoConteudo);
    setEstahEditanto(false);
  }

  function aoClicarEmEditar(){
    setEstahEditanto(true);
  }
  
  function aoClicarEmExcluir(){
    aoExcluir();
  }

  return (
    <div className="pub">
    {estahEditando && <Formulario aoSalvar={salvarEdicao} tituloPadrao={titulo} textoPadrao={conteudo}/>}
      <h2>{titulo}</h2>
      <p>{conteudo}</p>
      <div>
        <button type="button" className="editar" onClick={aoClicarEmEditar}>Editar</button>
        <button type="button" className="excluir" onClick={aoClicarEmExcluir}>Excluir </button>
      </div>
    </div>
  );
}