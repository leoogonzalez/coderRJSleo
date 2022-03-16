import React from 'react'
import ItemDetail from './ItemDetail'
import {useState, useEffect} from 'react'

let productosPrincipales =[{
    id: 1,
    nombre: "Violin 4/4 Guarnerius",
precio: 100.000,
descripcion:"Violin 4/4 hecho con madera de Ebano traido de Italia",
}
]
 



const ItemDetailContainer = () => {
    const [loading,setLoading] = useState(true)
    const [productos,setProductos] = useState([])

    useEffect(()=>{
        const pedido = new Promise ((res,rej)=>{
            setTimeout(()=>{
                res(productosPrincipales)
            },2000)
        })
        pedido 
        .then((resultado)=>{
            console.log("todo salio bien")
            setProductos(resultado)
        })
        .catch((error)=>{
console.log("hubo un error")
        })

    },[])






  return (
    <div>
        <h3>Detalles del producto</h3>
        <ul>
           {productos.map((producto)=>{
             return <ItemDetail key={producto.id} producto={producto}/>
           }
           )}
      </ul>



    </div>
  )
}

export default ItemDetailContainer