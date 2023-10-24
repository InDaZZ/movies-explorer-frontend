import React from 'react';
import './navtab.css';


function NavTab() {
  return (
    <nav className='navtab'>
      <a href='#aboutproject__title' className='navtab__link'>О проекте</a>
      <a href='#techs__title' className='navtab__link'>Технологии</a>
      <a href='#aboutme__title' className='navtab__link'>Студент</a>
    </nav>
  )
}

export default NavTab;
