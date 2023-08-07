import React from 'react';
import './promo.css';
import Header from '../Header/Header.js';
import promoLogo from '../../images/promo-logo.svg';

function Promo() {
  return (
    <section className="promo">
      <Header></Header>
      <div className='promo__logo-container'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.
        </h1>
        <img src={promoLogo} alt='Логотип проекта' className='promo__logo'></img>
      </div>
    </section>
  )
};

export default Promo;