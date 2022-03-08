
 import React from 'react'
 import { useState } from 'react'


const ItemCount = () => {

     const initial = 5
     const stock = 10 
      
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
     setEstado(0)
   }


  return (        
       <div>    
              <h5>Tu contador va : {estado}</h5>
         <button  onClick = {Incrementar}>Sumar</button>
     <button  onClick = {AgregarAlCarrito}>Agregar al carrito</button>
     <button  onClick = {Decrementar}>Restar</button></div>

 )
 
}

export default ItemCount