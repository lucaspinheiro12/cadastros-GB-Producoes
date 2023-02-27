import { useState } from "react";
import './styleApp.css';
import { addBanco, camposValidos, isValidateEmail, isValidCPF, verificaCpfBanco } from "./utiu/validadores";
import ReactInputMask from "react-input-mask"


function App (){
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [pix, setPix] = useState('');

    const validarCadastro = async()=>{

        const verificaData = Date.parse(dataNascimento);
       
        if(  isValidCPF(cpf) &&  verificaData &&  camposValidos(nome, telefone, pix),isValidateEmail(email)){
            if( await verificaCpfBanco(cpf)){
               addBanco(nome, cpf, telefone, email, dataNascimento);
               window.location.reload();
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
                                        <br/>
                                        <ReactInputMask
                                            placeholder="123.123.123-12"
                                            mask="999.999.999-99"
                                            value={cpf}
                                            onChange={(evento) => {setCpf( evento.target.value);}}
                                            className="form-control"
                                            type="text"
                                            required
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
                                        <ReactInputMask
                                            placeholder="(dd) 98765-4321"
                                            mask="(99)99999-9999"
                                            value={telefone}
                                            onChange={(evento) => {setTelefone(evento.target.value);}}
                                            className="form-control"
                                            type="tel"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label >Email: </label>
                                        <br/>
                                        <input type="email" className="form-control" id="email" name="email" placeholder="email@email.com" 
                                        value={email}
                                        onChange={(evento) => {setEmail(evento.target.value);}}
                                        required />
                                    </div>
                                    <div className="form-group">
                                        <label>PIX: </label> <br/>
                                        <input type="text" className="form-control" id="pix" name="pix" placeholder="PIX" 
                                        value={pix}
                                        onChange={(evento) => {setPix( evento.target.value);}}
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
