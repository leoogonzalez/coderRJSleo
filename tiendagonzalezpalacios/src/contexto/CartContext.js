import { useState } from "react";
import {createContext} from "react";



 export const contexto = createContext()
const {Provider} = contexto

const MiProvider = ({children}) => {

     const [carrito, setCarrito] = useState([
      {
           id: 1,
           nombre: "Camisa",
           precio: 50,
           cantidad : 1
      },
      {
           id: 2,
           nombre: "Pantalon",
           precio: 100,
           cantidad: 1
      }
     ])

     const [cantidad, setCantidad] = useState(0)
     const [total, setTotal] = useState(false)
     
     const addItem = (producto,cantidad) => {
const copia = carrito.slice(0)
     }


     const yaExisteEnCarrito = (id) => {}

     const borrarProdDelCarrito = (id) => {

     }

     const limpiarCarrito = () => {
          setCarrito([])
     }

     
     const valorDelContexto = {
          carrito : carrito,
          cantidad : cantidad,
          total: total,
          addItem: addItem,
     }

     return(
<Provider value={valorDelContexto}>
{children}
</Provider>
     )
}

export default MiProvider