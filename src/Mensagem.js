export default function Mensagem ({ texto, aoFechar }){
    return (
        <div className="mensagem">
            {texto}
            <span onClick={aoFechar} className="fecharMensagem">X</span>
            </div>
    );
}


