import { useState } from "react";
import './styleApp.css';
import { camposValidos, IsValidaPISPASEP, isValidCPF } from "./utiu/validadores";
import { BASE_URL } from "./utiu/request";
import axios from "axios";



function App (){
    let id = 0;
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [pix, setPix] = useState('');


    const validarCadastro = ()=>{
        const verificaData = Date.parse(dataNascimento);
       
        if(isValidCPF(cpf) && verificaData && camposValidos(nome, telefone, email)){
            if(! axios.get(`${BASE_URL}/gbp/pessoa/validar?cpf=${cpf}`)){
                const pessoa = {
                    id: id++ ,
                    nome: nome,
                    cpf: cpf,
                    telefone: telefone,
                    email: email,
                    dataNascimento: dataNascimento
                }
                axios.post(`${BASE_URL}/gbp/pessoas/inserir`, pessoa);
                alert("Cadastro concluido com sucesso");
            }else{
                alert("Esse cpf já foi cadastrado");
            }
        }else{
            alert("Algo deu errado, verifique seus dados se estão corretos.");
        }
    }
    return(
        <> 
                    <div className="conteiner">
                        <div className="formulario">
                            <div className="titulo">
                                <h3 className="texto">Cadastro de Colaborador</h3>
                            </div>
                                <div className="card-boby">
                                    <div className="form-group">
                                        <label >Nome Completo:</label> <br/>
                                        <input type="text" className="form-control" id="nome" name="nome" placeholder="Seu nome" required 
                                        value={nome}
                                        onChange={(evento) => {setNome(evento.target.value);}}
                                         />
                                    </div>
                                    <div className="form-group">
                                        <label>CPF: </label> 
                                        <label className="separar">   Separar por . ou - </label> <br/>
                                        <input type="text" className="form-control" id="cpf" name="cpf" placeholder="000.000.000-00" required
                                        value={cpf}
                                        onChange={(evento) => {setCpf( evento.target.value);}}
                                         />
                                    </div>
                                    <div className="form-group">
                                        <label >Data Nascimento: </label> <br/>
                                        <input type="date" className="form-control" id="data" name="data"  required
                                        value={dataNascimento}
                                        onChange={(evento) => {setDataNascimento(evento.target.value);}}
                                         />
                                    </div>
                                    <div className="form-group">
                                        <label>Telefone: </label> <br/>
                                        <input type="text" className="form-control" id="telefone" name="nome" placeholder="48 9 9999 9999" required
                                        value={telefone}
                                        onChange={(evento) => {setTelefone(evento.target.value);}}
                                         />
                                    </div>
                                    <div className="form-group">
                                        <label >Email: </label>
                                        <br/>
                                        <input type="text" className="form-control" id="email" name="email" placeholder="email@email.com" 
                                        value={email}
                                        onChange={(evento) => {setEmail(evento.target.value);}}
                                        required />
                                    </div>
                                    <div className="form-group">
                                        <label>PIX: </label> <br/>
                                        <input type="text" className="form-control" id="pix" name="pix" placeholder="PIX" 
                                        value={pix}
                                        onChange={(evento) => {setPix(evento.target.value);}}
                                        required />
                                    </div>
                                    <div className="form-group text-center">
                                        <button type="button" onClick={validarCadastro}
                                        className="btn-primary">Enviar</button>
                                    </div>
                               </div>
                        </div>    
                </div>                                                   
        </>
    )
}

export default App
