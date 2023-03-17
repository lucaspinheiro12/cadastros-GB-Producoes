import { ToastContainer } from 'react-toastify';
import'react-toastify/dist/ReactToastify.css';
import Header from "./componentes/Header"
import Pessoa from "./componentes/pessoas"

function App() {
return (
  <>
  <ToastContainer/>
    <Header/>
    <main>
        <section id="pessoas" className="app_pessoas-tabela">
          <div className="app_pessoas-tabela-container">
          <Pessoa/>
          </div>
        </section>  
    </main>
    </>
)
}

export default App
