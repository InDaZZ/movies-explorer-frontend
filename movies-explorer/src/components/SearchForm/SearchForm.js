import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './searchform.css';
import iconSearch from '../../images/iconsearch.svg'

function SearchForm({ filterMovies, moviesArr }) {
  const [isQuery, setQuery] = useState("")
  const [checked, setChecked] = useState(false);
  const [isDuration, setDuration] = useState(Infinity)
  const location = useLocation();
  const currLocation = location.pathname.toLowerCase()

  function shortsMoviesSwitch() {

    if (checked === false) {
      setChecked(prevState => !prevState)
      setDuration(40)
    }
    if (checked === true) {
      setChecked(prevState => !prevState)
      setDuration(Infinity)
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    filterMovies(isQuery, currLocation, moviesArr, isDuration);
  }

  return (
    <form className='searchform' onSubmit={handleSubmit}>
      <label htmlFor='searchform__films' className='searchform__label'>
        <img src={iconSearch} className='searchform__icon' alt='Изображение лупы слева от строки поиска'></img>
        <input className='searchform__films' placeholder='Фильм' id='searchform__films' required onChange={(e) => {
          setQuery(e.target.value);
        }}></input>
      </label>
      <div className='searchform__submit-button-container'>
        <button type='submit' className='searchform__submit-button'>Найти</button>
      </div>
      <span className='searchform__separator'></span>
      <label className='searchform__checkbox-label' htmlFor='searchform__checkbox' >
        <input className='searchform__checkbox' type='checkbox' checked={checked} readOnly id='searchform__checkbox' onClick={shortsMoviesSwitch}></input>
        <span className='searchform__checkbox-custom'>
        </span>
      </label>
      <span className='searchform__checkbox-text'>Короткометражки</span>
    </form>
  )

};

export default SearchForm;