import React from 'react'

const ItemDetail = ({producto}) => {
  return (
    <div id="tarjeta">
  <article className='contenidoTarjeta'>
  <h3>{producto.nombre}</h3>
  <div>{producto.img}</div>  
  <p>precio: $ {producto.precio}</p>
  <p>{producto.descripcion}</p>
  <button type="button" className="btn btn-primary">Botón</button>
  </article>
    </div>
  )
}

export default ItemDetail