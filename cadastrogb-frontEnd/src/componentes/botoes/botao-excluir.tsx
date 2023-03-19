import axios from "axios";
import { toast } from "react-toastify";
import lixeira from "../../assests/img/excluir.png"
import { PessoaUn } from "../../util/pessoa";
import { BASE_URL } from "../../util/request";
import "./styles-excluir.css";

function excluiDoBanco (pessoa : PessoaUn) {
    const id = pessoa.id;
    const nome = pessoa.nome;
    const resposta = confirm(`deseja excluir ${nome}?`)
    if(!resposta){
        return;
    }
    axios.delete(`${BASE_URL}/gbp/pessoa/deletar/${id}`).then( resposta => {
        toast.info(`${nome} excluido com sucesso`)
    })

}
function BotaoExcluir( pessoaExcluir: PessoaUn) {
    return (
        <>
            <div className="botao" onClick = {() => 
                excluiDoBanco(pessoaExcluir )}>
                <img src={lixeira} alt="excluir" />
            </div>
        </>
    )
}

export default BotaoExcluir;
