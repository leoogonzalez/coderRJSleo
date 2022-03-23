 import React, {useContext} from 'react'
 import { Link } from 'react-router-dom'
import {contexto} from '../contexto/CartContext'
import Carrito from "./Carrito"

 const CartWidget = () => {


  const {cantidad} = useContext(contexto)

   return (
     <Link to="/Carrito">
     <span className='material-icons'>
     shopping_cart
     </span>
     {cantidad}    

     </Link>
   )
 }

 export default CartWidget