import axios from "axios";
import { useEffect, useState, } from "react";
import { PessoaUn } from "../../modelos/pessoa";
import { BASE_URL } from "../../utiu/request";
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
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">bucar por nome</h2>
                <div>
                    <div className="dsmeta-form-control-container">
                        <input className="dsmeta-from-control" type="text"
                        value={busca}
                        onChange={(evento) => {setBusca(evento.target.value);}}
                        />
                    </div>
                </div>
                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Nome</th>
                                <th className="show992">Cpf</th>
                                <th className="show992">Data Nascimento</th>
                                <th className="show992">Pis/Pasep</th>
                                <th className="show992">Telefone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pessoas.map(colaborador =>{
                                    return (
                                        <tr key={colaborador.id}>
                                            <td className="show992">{colaborador.id}</td>
                                            <td>{colaborador.nome}</td>
                                            <td className="show992">{colaborador.cpf}</td>
                                            <td className="show992">{colaborador.dataNascimento}</td>
                                            <td className="show992"> {colaborador.pis}</td>
                                            <td className="show992">{colaborador.telefone} </td>
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

export default Pessoa