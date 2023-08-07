import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';
import profileIcon from '../../images/icon__COLOR_icon-main.svg';

function Navigation() {

  return (
    <nav className='navigation'>
      <div className='navigation__pages-container'>
        <Link to='/movies' rel="noreferrer" target="_blank" className='navigation__page'><p className='navigation__profile-page'>Фильмы</p></Link>

        <Link to='/saved-movies' rel="noreferrer" target="_blank" className='navigation__page'><p className='navigation__profile-page'>Сохранённые фильмы</p></Link>
      </div>
      <button type='button' className='navigation__profile-button'><img src={profileIcon} alt='иконка для кнопки аккаунта'></img><p className='navigation__profile-text'>Аккаунт</p></button>
      <button type='button' className='navigation__menu-button'></button>
    </nav>
  )

};

export default Navigation;