
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


const ItemCount = () => {
    
    const [estado, setEstado] = useState(0)

const Incrementar = () => {

  if(estado < 10 ){

    setEstado(estado + 1)

  }
}

const Decrementar = () => {

  if(estado > 0){
    setEstado(estado - 1)
  }
}

const AgregarAlCarrito = () => {
  setEstado(0)
}

  return (

    <div>        
      <h3>Mi contador va : {estado}</h3>
      <button  onClick = {Incrementar}>Sumar</button>
      <button  onClick = {AgregarAlCarrito}>Agregar al carrito</button>
      <button  onClick = {Decrementar}>Restar</button>
      </div>

 )
 
}

export default ItemCount

