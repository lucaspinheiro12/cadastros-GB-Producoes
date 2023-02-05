import { useState } from "react";
import './styleApp.css';
import { IsValidaPISPASEP, isValidCPF } from "./utiu/validadores";
import { BASE_URL } from "./utiu/request";
import axios from "axios";



function App (){
 
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [pis, setPis] = useState('');


    const validarCadastro = ()=>{
        isValidCPF(cpf);
        const verificaData = Date.parse(dataNascimento);
       
        if(isValidCPF(cpf) && IsValidaPISPASEP(pis) && verificaData){
            const pessoa = {
                id:'',
                nome: nome,
                cpf: cpf,
                telefone: telefone,
                pis: pis,
                dataNascimento: dataNascimento
            }
             axios.post(`https://gbp-cadastros.herokuapp.com/gbp/pessoas/inserir`, pessoa).then(Response =>{  
                alert("Cadastro concluido com sucesso");
             })

        }else{
            alert("Algo deu errado, verifique seus dados se estão corretos.");
        }
    }

    return(
        <>
            <form onSubmit={validarCadastro}>  
                    <div className="conteiner">
                        <div className="formulario">
                            <div className="titulo">
                                <h3 className="texto">Cadastro de Colaborador</h3>
                            </div>
                                <div className="card-boby">
                                    <div className="form-group">
                                        <label >Nome Completo:</label> <br/>
                                        <input type="text" className="form-control" id="nome" name="nome" placeholder="Seu nome" 
                                        value={nome}
                                        onChange={(evento) => {setNome(evento.target.value);}}
                                        required />
                                    </div>
                                    <div className="form-group">
                                        <label>CPF: </label> <br/>
                                        <input type="text" className="form-control" id="cpf" name="cpf" placeholder="000.000.000.00" 
                                        value={cpf}
                                        onChange={(evento) => {setCpf(evento.target.value);}}
                                        required />
                                    </div>
                                    <div className="form-group">
                                        <label >Data Nascimento: Mês/Dia/Ano </label> <br/>
                                        <input type="date" className="form-control" id="data" name="data"  
                                        value={dataNascimento}
                                        onChange={(evento) => {setDataNascimento(evento.target.value);}}
                                        required />
                                    </div>
                                    <div className="form-group">
                                        <label>Telefone: </label> <br/>
                                        <input type="text" className="form-control" id="telefone" name="nome" placeholder="48 9 9999 9999" 
                                        value={telefone}
                                        onChange={(evento) => {setTelefone(evento.target.value);}}
                                        required />
                                    </div>
                                    <div className="form-group">
                                        <label >Pis/Pasep: </label> <br/>
                                        <input type="text" className="form-control" id="pis" name="pis" placeholder="Seu nome" 
                                        value={pis}
                                        onChange={(evento) => {setPis(evento.target.value);}}
                                        required />
                                    </div>
                                    <div className="form-group text-center">
                                        <button type="submit"
                                        className="btn-primary">Enviar</button>
                                    </div>
                               </div>
                        </div>    
                </div> 
            </form>                                                       
        </>
    )
}

export default App
