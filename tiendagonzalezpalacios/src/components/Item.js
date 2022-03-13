import React from 'react'


const Item = ({producto}) => {

  return (
    <article>
  <h3>{producto.nombre}</h3>
  <p>precio : $ {producto.precio}</p>   
  </article>
  )
}

export default Item