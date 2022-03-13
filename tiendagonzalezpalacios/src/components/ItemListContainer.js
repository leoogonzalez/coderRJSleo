import React from 'react'
// import ItemCount from './ItemCount'
import { useState,useEffect } from 'react'
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer"

let productosIniciales = [
{
  id : 1,
  nombre: "Producto 1",
 precio:100
},
{
  id : 2,
  nombre: "Producto 2",
 precio:200
},
{
  id : 3,
  nombre: "Producto 3",
 precio:300
}

];

const ItemListContainer = ()  => {

  const [loading,setLoading] = useState(true)
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
    <main as="main">
       <h1 className ='contenido__main'>Bienvenido</h1>
      {/* <button className='carrito' onClick={() => setloading(!loading)}>toggle</button> */}
      <ItemList productos={productos}/>
      {/* <ItemCount stock={10} initial={10}></ItemCount> */}
   <ItemDetailContainer/>
      </main>
  );
}

export default ItemListContainer