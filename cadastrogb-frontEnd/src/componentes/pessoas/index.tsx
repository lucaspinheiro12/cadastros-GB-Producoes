import axios from "axios";
import { useEffect, useState, } from "react";
import { PessoaUn } from "../../util/pessoa";
import { BASE_URL } from "../../util/request";
import './styles.css'

function Pessoa() {
    const [busca, setBusca] = useState("");
    const [pessoas, setPessoas] = useState<PessoaUn[]>([]);

    useEffect(() => {

            let nome = busca;
            axios.get(`${BASE_URL}/gbp/pessoa/filtrar?nome=${nome}` ).then(response => {
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
                                <th className="pessoas-dado576">Nome</th>
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
                                        <tr key={colaborador.id}>
                                            <td className="pessoas-dado">{colaborador.id}</td>
                                            <td>{colaborador.nome}</td>
                                            <td className="pessoas-dado">{colaborador.cpf}</td>
                                            <td className="pessoas-dado">{colaborador.email}</td>
                                            <td className="pessoas-dado"> {colaborador.telefone}</td>
                                            <td className="pessoas-dado"> {colaborador.pix}</td>
                                            <td className="pessoas-dado">{colaborador.dataNascimento} </td>           
                                        </tr> 
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