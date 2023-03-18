import axios from "axios";
import { toast } from "react-toastify";
import lixeira from "../../assests/img/excluir.png"
import { BASE_URL } from "../../util/request";
import "./styles-excluir.css";
type Props = {

    pessoaId: number;
}

function excluiDoBanco (id : number) {
    const resposta = confirm("deseja excluir?")
    if(!resposta){
        return;
    }
    axios.delete(`${BASE_URL}/gbp/pessoa/deletar/${id}`).then( resposta => {
        toast.info("excluido com sucesso")
    })

}
function BotaoExcluir( {pessoaId} : Props) {
    return (
        <>
            <div className="botao" onClick = {() => 
                excluiDoBanco(pessoaId )}>
                <img src={lixeira} alt="excluir" />
            </div>
        </>
    )
}

export default BotaoExcluir;
