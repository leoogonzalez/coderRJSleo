import React from 'react'


const Item = () => {

  return (
    <div style={{width:"18rem"}}>
       <img variant="top" src=""></img>
       <div className='cardBody'>
       <h3 className='cardTitle'>Titulo del producto</h3>
       <p className='cardText'>descripcion</p>
       <button className='primary'>lo quiero</button>
       </div>
      
  </div>
  )
}

export default Item