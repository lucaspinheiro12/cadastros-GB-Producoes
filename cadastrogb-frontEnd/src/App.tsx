import Header from "./componentes/Header"
import Pessoa from "./componentes/pessoas"

function App() {
return (
  <>
    <Header/>
    <main>
        <section id="sales">
          <div className="dsmeta-container">
          <Pessoa/>
          </div>
        </section>  
    </main>
    </>
)
}

export default App
