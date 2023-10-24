import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';
import profileIcon from '../../images/icon__COLOR_icon-main.svg';

function Navigation({ profileButtonClick, openSeidMenu }) {

  return (
    <nav className='navigation'>
      <div className='navigation__pages-container'>
        <Link to='/movies' rel="noreferrer" className='navigation__page'><p className='navigation__profile-page'>Фильмы</p></Link>
        <Link to='/saved-movies' rel="noreferrer" className='navigation__page'><p className='navigation__profile-page'>Сохранённые фильмы</p></Link>
      </div>
      <Link to='/profile' className='navigation__profile-button'><img src={profileIcon} alt='иконка для кнопки аккаунта' className='navigation__profile-icon'></img><p className='navigation__profile-text'>Аккаунт</p></Link>
      <button type='button' className='navigation__menu-button' onClick={openSeidMenu}></button>
    </nav>
  )

};

export default Navigation;