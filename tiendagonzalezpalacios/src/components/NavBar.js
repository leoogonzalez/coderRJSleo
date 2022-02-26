import React from 'react'
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className='nav'>
    <a href='#' className='nav__link'>Inicio</a>
   <a href='#' className='nav__link'>Quienes Somos</a>
   <a href='#' className='nav__link'>Contacto</a>
   <CartWidget/>
 </nav>

  )
}


export default NavBar