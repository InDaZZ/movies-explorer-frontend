import React from 'react';
import './profile.css';
import Header from '../Header/Header.js';

function Profile() {

  return (
      <section className='profile'>
        <Header></Header>
        <h1 className='profile__title'>
          Привет, Виталий!
        </h1>
        <div className='profile__info-container'>
          <div className='profile__user-data-container'>
            <p className='profile__user-name-title'>Имя</p>
            <p className='profile__user-name-value'>Виталий</p>
          </div>
          <div className='profile__user-data-container'>
            <p className='profile__user-email-title'>E-mail</p>
            <p className='profile__user-email-value'>pochta@yandex.ru</p>
          </div>
        </div>

        <button className='profile__button-edit' type='button'>Редактировать</button>
        <button className='profile__button-exit' type='button'>Выйти из аккаунта</button>
      </section>
  )

};

export default Profile;