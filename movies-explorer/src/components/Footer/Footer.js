import React from 'react';
import './footer.css';

function Footer() {
 
  return (
    <footer className='footer'>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__container'>
        <p className='footer__copyright'>© 2023</p>
        <div className='footer__link-container footer__link-container_practicum'>
          <a href='https://indazz.github.io/russian-travel/Index.html' rel="noreferrer" target="_blank" className='footer__link'>Яндекс.Практикум</a>
        </div>
        <div className='footer__link-container footer__link-container-github'>
          <a href='https://indazz.github.io/russian-travel/Index.html' rel="noreferrer" target="_blank" className='footer__link footer__link_git'>Github</a>
        </div>
      </div>
    </footer >
  )

};

export default Footer;