import React from 'react'
import ItemCount from './ItemCount'
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';

const ItemDetail = ({item}) => {

const onAdd = (cantidadSeleccionada) => {
  console.log("agregar al carrito",cantidadSeleccionada)
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
  </div>
</div>
<p className='descripcion'>{item.description}</p>
<ItemCount stock={10} initial={1} onAdd={onAdd}/>
   </article>
  )
}

export default ItemDetail