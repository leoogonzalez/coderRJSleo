
 import React from 'react'
 import { useState } from 'react'


const ItemCount = ({initial, stock, onAdd}) => {

  
       const [estado, setEstado] = useState(initial)
  
   const Incrementar = () => {
  
    if(estado < stock ){
  
       setEstado(estado + 1)
  
     }
   }
  
   const Decrementar = () => {
  
     if(estado > initial){
       setEstado(estado - 1)
     }
   }
  
   const AgregarAlCarrito = () => {
      setEstado(initial)
    onAdd()
   }


  return (
    <div className='encabezado' >
      <h5>Productos</h5>
      <h4>{estado}</h4>
      <div className="contador">
      <button type="button" className="btn btn-success" onClick={Incrementar}>
        Sumar
      </button>
      <button
        type="button"
        className="btn btn-light"
        onClick={AgregarAlCarrito}>
        Agregar al carrito
      </button>
      <button type="button" className="btn btn-danger" onClick={Decrementar}>
        Restar
      </button>
      </div>
    </div>
  );
 
}

export default ItemCount