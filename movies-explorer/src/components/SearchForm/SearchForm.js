import React from 'react';
import './searchform.css';
import iconSearch from '../../images/iconsearch.svg'

function SearchForm() {

  return (
    <form className='searchform'>
      <label htmlFor='searchform__films' className='searchform__label'>
        <img src={iconSearch} className='searchform__icon' alt='Изображение лупы слева от строки поиска'></img>
        <input className='searchform__films' placeholder='Фильм' id='searchform__films' required></input>
      </label>
      <div className='searchform__submit-button-container'>
        <button type='submit' className='searchform__submit-button'>Найти</button>
      </div>
      <span className='searchform__separator'></span>
      <label className='searchform__checkbox-label' for='searchform__checkbox'>
        <input className='searchform__checkbox' type='checkbox' id='searchform__checkbox'></input>
        <span className='searchform__checkbox-custom'>
        </span>
      </label>
      <span className='searchform__checkbox-text'>Короткометражки</span>
    </form>
  )

};

export default SearchForm;