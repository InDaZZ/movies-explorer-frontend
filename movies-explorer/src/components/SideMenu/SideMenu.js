import React from 'react';
import { Link } from "react-router-dom";
import './sidemenu.css';
import profileIcon from '../../images/icon__COLOR_icon-main.svg';

function SideMenu({ isOpenSideMenu, openSeidMenu, closeSeidMenu }) {

  return (
    <div className={`sidemenu ${isOpenSideMenu ? "sidemenu_active" : ""}`}>

      <div className='sidemenu__container'>
        <button type="button" className="sidemenu__button-close" onClick={closeSeidMenu}></button>
        <Link to='/' rel="noreferrer" className='sidemenu__page'><p className='sidemenu__profile-page'>Главная</p></Link>

        <Link to='/movies' rel="noreferrer" className='sidemenu__page'><p className='sidemenu__profile-page'>Фильмы</p></Link>

        <Link to='/saved-movies' rel="noreferrer" className='sidemenu__page'><p className='sidemenu__profile-page'>Сохранённые фильмы</p></Link>

        <Link to='/profile' className='sidemenu__profile-button'><img src={profileIcon} alt='иконка аккаунта' className='sidemenu__profile-icon'></img><p className='sidemenu__profile-text'>Аккаунт</p></Link>
      </div>
    </div>
  )

};
export default SideMenu;

