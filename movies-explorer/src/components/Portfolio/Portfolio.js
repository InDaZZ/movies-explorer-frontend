import React from 'react';
import './portfolio.css';
import linkMark from '../../images/link-mark.svg';

function Portfolio() {

  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <div className='portfolio__links-container'>
        <div className='portfolio__link-container'>
          <a href='https://github.com/InDaZZ/how-to-learn' rel="noreferrer" target="_blank" className='portfolio__link'>Статичный сайт</a>
          <a href='https://github.com/InDaZZ/how-to-learn' rel="noreferrer" target="_blank" className='portfolio__link-mark'><img src={linkMark} alt='Статичный сайт ссылка'></img></a>
        </div>

        <div className='portfolio__link-container'>
          <a href='https://indazz.github.io/russian-travel/Index.html' rel="noreferrer" target="_blank" className='portfolio__link'>Адаптивный сайт</a>
          <a href='https://indazz.github.io/russian-travel/Index.html' rel="noreferrer" target="_blank" className=' portfolio__link-mark'><img src={linkMark} alt='Адаптивный сайт ссылка'></img></a>
        </div>

        <div className='portfolio__link-container'>
          <a href='https://indazz.github.io/mesto/' rel="noreferrer" target="_blank" className='portfolio__link'>Одностраничное приложение</a>
          <a href='https://indazz.github.io/mesto/' rel="noreferrer" target="_blank" className='portfolio__link-mark'><img src={linkMark} alt='Одностраничное приложение ссылка'></img></a>
        </div>
      </div>
    </section>
  )

}

export default Portfolio;