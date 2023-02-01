import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utiu/request";
import { isValidCPF, IsValidaPISPASEP } from "../../utiu/validadores.ts";
import { Mascara, MascaraData, MascaraTelefone, MascaraPis } from "../../utiu/mascaras";
import './styles.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AppCadastro (){

   
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [pis, setPis] = useState('');

    isValidCPF(cpf);

    const inserirCadastro = (eve)=>{
        const verificaData = Date.parse(dataNascimento);
       
       if(isValidCPF(cpf) && IsValidaPISPASEP(pis) && verificaData){

            const data = {
                id:'',
                nome: nome,
                cpf: cpf,
                telefone: telefone,
                pis: pis,
                dataNascimento: dataNascimento,
            }
            console.log("deu certo")
            axios.post(`${BASE_URL}gbp/pessoa/inserir`, data).then(response => {
            });
            alert("Cadastro concluido com sucesso");
        }else{
            eve.preventDefault ()
            alert("Algo deu errado, verifique seus dados se estão corretos.");
        }
    }
//<DatePicker selected={dataNascimento}
//onChange={(date: Date) =>  setDataNascimento(date)}
//className="form-control"
//dateFormat="dd/MM/yyyy"
// /> dataNascimento.toISOString().slice(0, 10);

    return(
        <>
                <form onSubmit={inserirCadastro}>
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
                                <Mascara  type={Number}
                                    classname={"form-control"}
                                    value={cpf} 
                                    onchange={ (evento) =>{ setCpf(evento.target.value);}}  />
                                </div>
                                <div className="form-group">
                                    <label >Data Nascimento: Mês/Dia/Ano </label> <br/>
                                    <MascaraData type={Date}  classname={"form-control"} value={dataNascimento} onchange={(evento) => {setDataNascimento(evento.target.value);}} />
                                    
                                </div>
                                <div className="form-group">
                                    <label>Telefone: </label> <br/>
                                    <MascaraTelefone type={Number}  classname={"form-control"} value={telefone} onchange={(evento) => {setTelefone( evento.target.value);}}/>
                                </div>
                                <div className="form-group">
                                    <label >Pis/Pasep: </label> <br/>
                                    <MascaraPis type={Number}  classname={"form-control"} value={pis} onchange={(evento) => {setPis( evento.target.value);}}/>
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

export default AppCadastro;


