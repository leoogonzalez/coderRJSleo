import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = (greeting)  => {
   
  return (
    <main>
      <h3 className='contenido__main'>{greeting.titulo}</h3>
      <ItemCount stock={5} initial={1} ></ItemCount>
      </main>
  )
}

export default ItemListContainer