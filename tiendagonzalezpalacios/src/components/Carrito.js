 import { useContext } from 'react'
 import {contexto} from "../contexto/CartContext"

 function Carrito() {
    
    const {carrito,total} = useContext(contexto)

    const handleClick = () =>{
        console.log("Click")
    }

   return (
     <div>
<h2>Carrito</h2>
{carrito.map(producto =>(
  <div key={producto.id}>
              <p>{producto.nombre}</p> 
        <p>{producto.cantidad} x {producto.precio}</p>
        <p> Total parcial : {producto.cantidad} = {producto.precio}</p>
 <button onClick={handleClick}>borrar</button>
  </div>

        ))}

     </div>
   )
  
 }

 export default Carrito