import React from 'react';
import headerimage from '../../assets/headerimg.jpg';
import './Header.css';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <>
      <header className='header'>
        <h1>ReactMeals</h1>
        <HeaderCartButton/>
      </header>

      <div className='main-image'>
        <img src={headerimage} alt='header'/>
      </div>
    </>
  )
}

export default Header
