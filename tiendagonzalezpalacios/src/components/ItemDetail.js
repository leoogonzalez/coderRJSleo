import React from 'react'
import ItemCount from './ItemCount'
const ItemDetail = ({producto}) => {
  return (
    <div id="tarjeta">
  <article className='contenidoTarjeta'>
  <h3>{producto.nombre}</h3>
  <img src="https://picsum.photos/160/100"/>
  <p>precio: $ {producto.precio}</p>
  <p>{producto.descripcion}</p>
  <ItemCount/>
  </article>
    </div>
  )
}

export default ItemDetail