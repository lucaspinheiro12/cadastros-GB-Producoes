import axios from "axios";
import {  useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../../util/request";
import  editar  from "../../assests/img/editar.png"
import "./styles-editar.css";
import { PessoaUn } from "../../util/pessoa";


function editarBanco (pessoaValor:PessoaUn) {
    const resposta = confirm(`deseja editar  ${pessoaValor.nome}?`)
    if(!resposta){
        return;
    }

    const nome = prompt("digite o nome",pessoaValor.nome)
    const cpf = prompt("digite o CPF",pessoaValor.cpf)
    const email = prompt("digite o email",pessoaValor.email)
    const telefone = prompt("digite o telefone",pessoaValor.telefone)
    const pix = prompt("digite o pix",pessoaValor.pix)
    const dataNascimento = prompt("digite a dataNascimento",pessoaValor.dataNascimento)

    const pessoa = {
        id: pessoaValor.id, 
        nome:nome,
        cpf: cpf,
        telefone: telefone , 
        email: email,
        dataNascimento: dataNascimento, 
        pix: pix
    }
    axios.put(`${BASE_URL}/gbp/pessoa/alterar/${pessoa.id}`,pessoa).then( resposta => {
        toast.info(`${pessoa.nome} Alterado com sucesso`)
    })

}

function BotaoEditar( pessoa : PessoaUn){
    return (
        <>
            <div className="botao_editar" onClick = {() => 
                editarBanco(pessoa)}>
                <img src={editar} alt="editar" />
            </div>
        </>
    )
}

export default BotaoEditar;