import React from 'react'
import NavBar from './components/NavBar';
const Header = () => {
  return (
      <header id='layout-header' className='header'>
        <h1 className='header__title'>Mi E-commerce</h1>
        <NavBar/>
   
      </header>
  );
}

export default Header