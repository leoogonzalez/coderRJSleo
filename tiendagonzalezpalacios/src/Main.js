 import React from 'react'
 import { Route, Routes } from 'react-router-dom'
 import ItemListContainer from './components/ItemListContainer'
import CartWidget from './components/CartWidget'
import ItemDetailContainer from "./components/ItemDetailContainer"

 const Main = () => {
   return (
    <main as="main">
            
  
      <Routes>
      <Route path="/" element={<ItemListContainer/>} /> 
       <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} /> 
       <Route path="/producto/:idProducto" element={<ItemDetailContainer/>} /> 
       <Route path="/carrito" element={<CartWidget/>} /> 
      </Routes>

    </main>
  );
}

 export default Main