import React from 'react';
import { Link } from "react-router-dom";
import './notfound.css';

function NotFound() {

  return (
    <section className='notfound'>  
      <h1 className='notfound__title'>404</h1>
      <p className='notfound__text'>Страница не найдена</p>
      <div className='notfound__button-back-container'>
      <Link to='/' className='notfound__button-back'>Назад</Link>
      </div>
      
    </section>
  )

};

export default NotFound;