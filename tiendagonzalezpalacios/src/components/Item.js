import React from 'react'
import { Link } from 'react-router-dom';


const Item = ({producto}) => {

  return (
    <article>
  <h3>{producto.nombre}</h3>
  <img src="https://picsum.photos/160/100"/>
  <p>precio : $ {producto.precio}</p>   
  <Link to={`/producto/${producto.id}`}>Ver detalle</Link>
  </article>
  )
}

export default Item