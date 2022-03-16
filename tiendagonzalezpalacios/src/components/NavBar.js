import React from 'react'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header id="layout-header" className='nav'>
      <Link to="/">
      <h1 className='header__title'>Mi E-commerce</h1>
      </Link>
    <Link to='/categoria/instrumentos' className='nav__link'>Instrumentos</Link>
   <Link to='/categoria/accesorios' className='nav__link'>Accesorios</Link>
   <Link to='/categoria/metodos' className='nav__link'>Metodos</Link>
  
   <Link to="/carrito">
   <CartWidget/>
   </Link>
   
 </header>

  )
}

export default NavBar