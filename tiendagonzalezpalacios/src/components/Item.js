import React from 'react'
import { Link } from 'react-router-dom';


const Item = ({producto}) => {

  return (
    <article>
  <h2>{producto.title}</h2>
  <img src={producto.image}/>
  <p>precio : $ {producto.price}</p>   
  <Link to={`/producto/${producto.id}`}>Ver detalle</Link>
  </article>
  )
}

export default Item