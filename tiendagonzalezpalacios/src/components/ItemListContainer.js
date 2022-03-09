import React from 'react'
// import ItemCount from './ItemCount'
import { useState,useEffect } from 'react'
import ItemList from "./ItemList"

let productosIniciales = [
{
  id : 1,
  nombre : "producto 1",
 precio:100
},
{
  id : 2,
  nombre : "producto 2",
 precio:200
},
{
  id : 3,
  nombre : "producto 3",
 precio:300
}

];

const ItemListContainer = ()  => {

  const [loading,setloading] = useState(true)
  const [productos,setProductos] = useState([])

  useEffect(()=>{
console.log("Ejecutando userEffect")

const pedido = new Promise((res,rej)=>{
  setTimeout(()=>{
res(productosIniciales)
  },2000)
}) 

pedido
.then((resultado)=>{
  console.log("estuvo bien")
  setProductos(resultado)
})
.catch((error)=>{
  console.log("estuvo mal ")
})



 },[])


  return (
    <main>
       <h3 className ='contenido__main'></h3>
      <button className='carrito' onClick={() => setloading(!loading)}>productos</button>
  
      <ItemList productosIniciales={productos}></ItemList>
      {/* <ItemCount stock={10} initial={10}></ItemCount> */}
      </main>
  );
}

export default ItemListContainer