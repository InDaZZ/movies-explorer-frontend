import React from 'react';
import './techs.css';

function Techs() {
  return (
    <section className='techs'>
      <h2 className='techs__title' id='techs__title'>Технологии</h2>
      <h2 className='techs__title-technologies'>7 технологий</h2>
      <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className='techs__technologies-container'>
        <p className='techs__technology'>HTML</p>
        <p className='techs__technology'>CSS</p>
        <p className='techs__technology'>JS</p>
        <p className='techs__technology'>React</p>
        <p className='techs__technology'>Git</p>
        <p className='techs__technology'>Express.js</p>
        <p className='techs__technology'>mongoDB</p>
      </div>
    </section>
  )
}

export default Techs;
