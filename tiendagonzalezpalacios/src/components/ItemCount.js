
 import React from 'react'
 import { useState } from 'react'


const ItemCount = () => {

     const initial = 1
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
     setEstado(initial)
   }


  return (        
       <div className='contador'>    
              <h5>productos {estado}</h5>
         <button type="button" className="btn btn-primary" onClick = {Incrementar}>Sumar</button>
     <button type="button" className="btn btn-primary" onClick = {Decrementar}>Restar</button>
     <button type="button" className="btn btn-primary" onClick = {AgregarAlCarrito}>Agregar al carrito</button>
     
     
     </div>

 )
 
}

export default ItemCount