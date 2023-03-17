import axios from "axios";
import { useEffect, useState, } from "react";
import { PessoaUn } from "../../util/pessoa";
import { BASE_URL } from "../../util/request";
import './styles.css'


function Pessoa() {
    const [busca, setBusca] = useState("");
    const [pessoas, setPessoas] = useState<PessoaUn[]>([]);
    pessoas.sort((a, b) =>(a.nome < b.nome)? -1 : 1 )
    useEffect(() => {
            axios.get(`${BASE_URL}/gbp/pessoa/filtrar?nome=${busca}` ).then(response => {
                setPessoas(response.data);
             })
    }, [busca]); 

    return (
        <>
            <div className="container">
                <h2 className="container-titulo-busca">Buscar</h2>
                <div className="container-busca_input">
                    <input className="busca_input-valor" type="text" placeholder="Pesquisar por nome"
                        value={busca}
                        onChange={(evento) => {setBusca(evento.target.value);}}
                    />
                </div>
                <div className="container-tabela">
                    <table className="tabela-pessoas">
                        <thead>
                            <tr>
                                <th className="pessoas-dado">ID</th>
                                <th className="pessoas-dado">Nome</th>
                                <th className="pessoas-dado">CPF</th>
                                <th className="pessoas-dado">Email</th>
                                <th className="pessoas-dado">Telefone</th>
                                <th className="pessoas-dado">pix</th>
                                <th className="pessoas-dado">Data Nascimento</th>     
                            </tr>
                        </thead>
                        <tbody >
                            {
                                pessoas.map(colaborador =>{
                                    return (
                                    <> 
                                    <tr className="mobile" key={colaborador.id}>
                                        <th className="mobile-th">ID: </th>
                                        <th className="pessoas-dado">
                                            {colaborador.id}</th>
                                        <th className="mobile-th">nome:</th>
                                        <th className="pessoas-dado">  
                                            {colaborador.nome}</th>
                                        <th className="mobile-th">cpf:</th>
                                        <th className="pessoas-dado"> 
                                            {colaborador.cpf}</th>
                                        <th className="mobile-th">email:</th>
                                        <th className="pessoas-dado">
                                            {colaborador.email}</th>
                                        <th className="mobile-th">telefone:</th>
                                        <th className="pessoas-dado">
                                            {colaborador.telefone}</th>
                                        <th className="mobile-th">pix:</th>
                                        <th className="pessoas-dado">
                                            {colaborador.pix}</th>
                                        <th className="mobile-th">Data Nascimento:</th>
                                        <th className="pessoas-dado">
                                            {colaborador.dataNascimento} </th>
                                    </tr>
                                        </> 
                                    )   
                                })
                             } 
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Pessoa;