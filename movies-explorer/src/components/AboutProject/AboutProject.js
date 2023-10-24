import React from 'react';
import './aboutproject.css';

function AboutProject() {
  return (
    <section className='aboutproject'>
      <h2 className='aboutproject__title' id='aboutproject__title'>О проекте</h2>
      <div className='aboutproject__info-container'>
        <div className='aboutproject__item-container'>
          <h3 className='aboutproject__info-title'>Дипломный проект включал 5 этапов</h3>
          <p className='aboutproject__info-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='aboutproject__item-container'>
          <h3 className='aboutproject__info-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='aboutproject__info-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='aboutproject__time-container'>
        <div className='aboutproject__backend-container'>
          <p className='aboutproject__time-line aboutproject__time-line_backend'>1 неделя</p>
          <p className='aboutproject__text'>Back-end</p>
        </div>
        <div className='aboutproject__frontend-container'>
          <p className='aboutproject__time-line aboutproject__time-line_frontend'>4 недели</p>
          <p className='aboutproject__text'>Front-end</p>
        </div>
      </div>
    </section>
  )
};

export default AboutProject;