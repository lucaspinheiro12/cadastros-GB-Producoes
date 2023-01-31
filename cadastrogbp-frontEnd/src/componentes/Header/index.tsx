import logo from '../../assests/img/gbProducoes.jpg'
import './styles.css'
function Header () {
    return(
        <header>
            <div className="gbp-logo-container">
                <img className='gbp-logo-container img' src={logo} alt="gbProduções"/>
                <h1>GB Produções</h1>
                <p>  
                   <a href="../../cadastro.html">Link para cadastros</a>
                </p>
            </div>
        </header>
    )
}

export default Header