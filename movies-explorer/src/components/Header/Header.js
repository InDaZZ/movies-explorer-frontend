import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import headerLogo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation.js';

function Header() {
  const headerLocation = useLocation();
  const headercurrentLocation = headerLocation.pathname;

  function headerRender() {
    if (headercurrentLocation === '/') {
      return <div className='header__button-container'>
        <Link to='/signup' className="header__registration-button">Регистрация</Link>
        <Link to='/signin' className="header__signin-button">Войти</Link>
      </div>
    }
    if (headercurrentLocation === '/movies' || headercurrentLocation === '/saved-movies' || headercurrentLocation === '/profile') {
      return <Navigation></Navigation>
    }
    else {
      return
    }
  };

  return (
    <header className="header">
      <Link to='/'><img src={headerLogo} alt='Логотип шапки сайта' className='header__logo'></img></Link>
      {headerRender()}
    </header>
  )
};

export default Header;