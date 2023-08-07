import React from 'react';
import { Link } from "react-router-dom";
import './sidemenu.css';
import Navigation from '../Navigation/Navigation.js';
import profileIcon from '../../images/icon__COLOR_icon-main.svg';

function SideMenu() {

  return (
    <div className='sidemenu'>
      
      <div className='sidemenu__container'>
      <button type="button" className="sidemenu__button-close"></button>
        <Link to='/' rel="noreferrer" target="_blank" className='sidemenu__page'><p className='navigation__profile-page'>Главная</p></Link>

        <Link to='/movies' rel="noreferrer" target="_blank" className='sidemenu__page'><p className='navigation__profile-page'>Фильмы</p></Link>

        <Link to='/saved-movies' rel="noreferrer" target="_blank" className='sidemenu__page'><p className='navigation__profile-page'>Сохранённые фильмы</p></Link>

        <button type='button' className='sidemenu__profile-button'><img src={profileIcon} alt='иконка аккаунта'></img><p className='sidemenu__profile-text'>Аккаунт</p></button>
      </div>
    </div>
  )

};
export default SideMenu;

