import React from 'react'
import ReactDOM from 'react-dom/client'
import AppCadastro from './componentes/cadastro/appCadastro'

ReactDOM.createRoot(document.getElementById('container') as HTMLElement).render(
  <React.StrictMode>
    <AppCadastro/>
  </React.StrictMode>,
)