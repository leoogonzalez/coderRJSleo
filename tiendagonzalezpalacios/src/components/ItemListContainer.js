// import ItemCount from './ItemCount'
import ItemList from "./ItemList"
import { useState,useEffect} from 'react'
import{useParams} from "react-router-dom"
// import ItemDetailContainer from "./ItemDetailContainer"


const ItemListContainer = ()  => {

  const [loading,setLoading] = useState(true)
  const [productos,setProductos] = useState([])
  const {idCategoria} = useParams()
  

  useEffect(()=>{  

    fetch('/productosPublic.json')
    .then((response)=>{
      return response.json()
    })
    .then((resultado)=>{
      console.table(resultado)
      setProductos(resultado)
    })
    .catch(()=>{
console.log("error al cargar los productos")
    })
  .finally(()=>{
setLoading(false)
  })

// const pedido = new Promise((res,rej)=>{
  
//   setTimeout(()=>{
//     console.log(idCategoria)
// res(productosIniciales)

//   },2000)
// }) 

// pedido
// .then((resultado)=>{
// console.log("todo bien")
//   setProductos(resultado)
// })
// .catch((error)=>{
//   console.log("error al cargar los productos")

// })



 },[idCategoria])


  return (
    <fragment >
       <h1 className ='contenido__main'>Bienvenido</h1>
      <ItemList productos={productos}/> 
   
      
      
      </fragment>
  );
}

export default ItemListContainer