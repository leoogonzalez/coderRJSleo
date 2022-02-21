// 1) necesitamos la variable React en scope
import React from 'react'
// 2) Necesitamos la variable ReactDOM en scope 
import ReactDOM from 'react-dom'
// 3) Necesitamos la variable App en scope
import App from './App'
import "./estilos.css"
// 4) Necesitamos el componente en el DOM
ReactDOM.render(<App/>,document.getElementById("root"))