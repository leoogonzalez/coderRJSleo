import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';

const ItemDetail = ({item}) => {
  const [selecionado,setSeleccionado] = useState(false)

const onAdd = (cantidadSeleccionada) => {
  console.log("agregar al carrito",cantidadSeleccionada)
  setSeleccionado(cantidadSeleccionada)
}

  return (
   <article className='itemDetail'>
<img src={item.image} alt=""/>
<div className='titulos'>
  <h3>{item.title}</h3>
  <p>Precio : $ {item.price} </p>
  <div>
  <Rate onChange={(val)=>{console.log(val)}} allowHalf={true} const={5} value={item.rating.rate}/>
  <span>Rates : {item.rating?.count}</span>
  <ItemCount stock={10} initial={1} onAdd={onAdd}/>
  </div>
</div>
<p className='descripcion'>{item.description}</p>
<Link to="/Carrito"/>
   </article>
  )
}

export default ItemDetail