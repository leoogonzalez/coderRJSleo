import React from 'react'
import Item from './Item'




const ItemList = ({productosIniciales}) => {


  return (
    <div>
            <ul>
           {productosIniciales.map((producto)=>{
             return <li key={producto.id}>{producto.nombre}{producto.precio}</li> 
           }
           )}
      </ul>
      <Item></Item> 
    </div>
  )
}

export default ItemList