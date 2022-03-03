import React from 'react'
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <header id="layout-header" className='nav'>
         <h1 className='header__title'>Mi E-commerce</h1>
    <a href='#' className='nav__link'>Inicio</a>
   <a href='#' className='nav__link'>Productos</a>
   <a href='#' className='nav__link'>Contacto</a>
   <CartWidget/>
 </header>

  )
}


export default NavBar