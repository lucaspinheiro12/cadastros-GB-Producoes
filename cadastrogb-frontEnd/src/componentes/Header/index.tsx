import { toast } from 'react-toastify';
import logo from '../../assests/img/gbProducoes.jpg'
import './styles.css'
function Header () {
    function copiarLinl(){
        navigator.clipboard.writeText("https://cadastro-gb-producoes.netlify.app/");
        toast.info("Link copiado com sucesso")
    }
    return(
        <header>
            <div className="gbp_logo_container">
                <img className="gbp_logo_container-img" src={logo} alt="gbProduções"/>
                <button type="button" className="gbp_logo_container-botao" onClick={copiarLinl} > 
                    Copiar link para cadastros
                </button>
            </div>
        </header>
    )
}

export default Header