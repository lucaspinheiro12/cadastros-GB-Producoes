import { useState } from "react";
import './styleApp.css';
import { addBanco, camposValidos, isValidateEmail, isValidCPF } from "./utiu/validadores";
import ReactInputMask from "react-input-mask"


function App (){
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [pix, setPix] = useState('');

    const separaData = dataNascimento.split("-");
    const formataData = separaData[2] +"/" + separaData[1] +"/" +separaData[0]
    const validarCadastro =()=>{

       
        if(isValidCPF(cpf) &&  formataData &&  camposValidos(nome, telefone, pix) && isValidateEmail(email)){
            addBanco(nome, cpf, telefone, email, formataData, pix);
            window.location.reload();  
        }else{
            alert("Algo deu errado, verifique seus dados se estão corretos.");
        }
    }
    return(
        <> 
            <div className="conteiner">
                <div className="formulario">
                    <div className="formulario_titulo">
                        <h3 className="formulario_titulo-texto">Cadastro de Colaborador</h3>
                    </div>
                    <div className="formulario_grupo">
                        <div className="formulario_grupo_div_input">
                            <label >Nome Completo:</label> <br/>
                            <input type="text" className="input-valor" id="nome" name="nome" placeholder="Seu nome" required 
                                value={nome}
                                onChange={(evento) => {setNome(evento.target.value);}}
                            />
                        </div>
                        <div className="formulario_grupo_div_input">
                            <label>CPF: </label> <br/>       
                            <ReactInputMask
                                placeholder="123.123.123-12"
                                mask="999.999.999-99"
                                value={cpf}
                                onChange={(evento) => {setCpf( evento.target.value);}}
                                className="input-valor"
                                type="text"
                                required
                            />
                        </div>
                        <div className="formulario_grupo_div_input">
                            <label >Data Nascimento: </label> <br/>
                                <input type="date" className="input-valor" id="data" name="data"  required
                                    value={dataNascimento}
                                    onChange={(evento) => {setDataNascimento(evento.target.value);}}
                                />
                        </div>
                        <div className="formulario_grupo_div_input">
                            <label>Telefone: </label> <br/>
                                <ReactInputMask
                                    placeholder="(dd) 98765-4321"
                                    mask="(99)99999-9999"
                                    value={telefone}
                                    onChange={(evento) => {setTelefone(evento.target.value);}}
                                    className="input-valor"
                                    type="tel"
                                    required
                                />
                        </div>
                        <div className="formulario_grupo_div_input">
                            <label >Email: </label> <br/>
                            <input type="email" className="input-valor" id="email" name="email" placeholder="email@email.com" 
                                value={email}
                                onChange={(evento) => {setEmail(evento.target.value);}}
                                required />
                        </div>
                        <div className="formulario_grupo_div_input">
                            <label>PIX: </label> <br/>
                            <input type="text" className="input-valor" id="pix" name="pix" placeholder="PIX" 
                                value={pix}
                                onChange={(evento) => {setPix( evento.target.value);}}
                                required />
                        </div>
                        <div className="formulario_grupo_div_input texto-centro">
                            <button type="button" onClick={validarCadastro}
                                className="texto-centro-botao">Enviar</button>
                        </div>
                    </div>
                </div>    
            </div>                                                   
        </>
    )
}

export default App
