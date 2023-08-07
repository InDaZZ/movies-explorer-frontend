import React from 'react';
import './aboutme.css';
import avatar from '../../images/pic__COLOR_pic.svg';

function AboutMe () {

  return (
    <section className='aboutme'>
      <h2 className='aboutme__title' id='aboutme__title'>Студент</h2>
      <div className='aboutme__container'>
        <div className='aboutme__student-info'>
          <p className='aboutme__name'>Виталий</p>
          <p className='aboutme__briefly'>Фронтенд-разработчик, 30 лет</p>
          <p className='aboutme__expanded'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a href='https://github.com/InDaZZ' rel="noreferrer" target="_blank" className='aboutme__link'>Github</a>
        </div>
        <img src={avatar} alt='Фото студента' className='aboutme__photo'></img>
      </div>
    </section>
  )

};

export default AboutMe;