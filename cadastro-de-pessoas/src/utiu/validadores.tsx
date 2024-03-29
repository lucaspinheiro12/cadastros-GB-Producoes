import axios from "axios"
import { BASE_URL } from "./request"

export function isValidCPF(cpf:string) {
    if (typeof cpf !== "string"){
        return false;
    } 
    cpf = cpf.replace(/[\s.-]*/igm, '');
    if (
        !cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" 
    ) {
        return false;
    }
    let soma = 0;
    let resto;
    for (let i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    }    
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11)){
        resto = 0;
    }  
    if (resto != parseInt(cpf.substring(9, 10)) ){
        return false;
    } 
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    }  
    resto = (soma * 10) % 11;
    if ((resto == 10) || (resto == 11))  resto = 0;
    if (resto != parseInt(cpf.substring(10, 11) ) ){
        return false;
    } 
    return true;
};

export function IsValidaPISPASEP(pis:string){

    pis = pis.replaceAll(/[\s.-]*/igm, '');
    const ftap = "3298765432";

    let total=0;
    let i;
    let resto=0;
    let strResto="";


    if (pis == "" || pis ==null) {
        return false;
    };

    for( i=0;i<=9;i++) {
        let resultado = parseInt(pis.slice(i, i+1)) * parseInt(ftap. slice(i, i+1));
        total += resultado;
    };

    resto = (total % 11)

    if (resto != 0){
        resto=11-resto;
    };

    if (resto==10 || resto==11) {
        strResto = resto+"";
        resto = parseInt(strResto.slice(1,2));
    };

    if (resto!=parseInt(pis.slice(10,11))){
        return false;
    };
    return true;
};

export function isValidateEmail(email:string) {
    var re = /\S+@\S+\.\S+/;
    if(! re.test(email)){
        return false;

    }else{
        return true;
    }
  };

export function camposValidos(nome:string, telefone:string, pix:string){
    if( nome != "" && telefone != "" && pix != ""){
        return true;
    }else{
        return false;
    }
};

export async function addBanco(nome:string, cpf:string, telefone:string, email:string, dataNascimento:string, pix:string)  {
    const pessoa = {
        id: "" ,
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        email: email,
        dataNascimento: dataNascimento,
        pix: pix
    };
    try{
        await axios.post(`${BASE_URL}/gbp/pessoas/inserir`, pessoa);
        alert("Cadastro concluido com sucesso"); 
    }catch{
        alert("Esse cpf já foi cadastrado");
        return;
    }
};


