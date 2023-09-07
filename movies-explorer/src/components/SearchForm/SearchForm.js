import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../context/userContexts.js';
import './searchform.css';
import iconSearch from '../../images/iconsearch.svg'

function SearchForm({ filterMovies, moviesArr, isCurrentUserFormState }) {
  const { setCurrentUserFormState } = useContext(CurrentUserContext);
  const [isQuery, setQuery] = useState('')
  const [checked, setChecked] = useState(false);
  const [isDuration, setDuration] = useState(Infinity)
  const location = useLocation();
  const currLocation = location.pathname.toLowerCase()
  //const lastQuery = localStorage.getItem(`searchmoviesquery`).replace(/"/g, '');

  //value={((localStorage.getItem(`searchmoviesquery`)) && currLocation === '/movies' && lastQuery)}
  //(lastQuery && currLocation === '/movies' && lastQuery)
  useEffect(() => {

    if (localStorage.getItem(`searchmoviesquery`) && currLocation === '/movies') {
      const lastQuery = localStorage.getItem(`searchmoviesquery`).replace(/"/g, '');
      setQuery(lastQuery)
    }
    if (localStorage.getItem(`checkboxState`) === 'true') {
      setChecked(true)
    }
    if (currLocation === '/saved-movies') {
      setQuery('')
    }
    else {
      return
    }
  }, [currLocation === '/movies']);

  function shortsMoviesSwitch() {

    if (checked === false) {
      setChecked(prevState => !prevState)
      //setDuration(40)
      filterMovies(isQuery, currLocation, moviesArr, 40, checked);
      localStorage.setItem(`checkboxState`, JSON.stringify(true));
    }
    if (checked === true) {
      setChecked(prevState => !prevState)
      //setDuration(Infinity)
      filterMovies(isQuery, currLocation, moviesArr, Infinity, checked);
      localStorage.setItem(`checkboxState`, JSON.stringify(false));
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    filterMovies(isQuery, currLocation, moviesArr, isDuration, checked);
  }

  return (
    <form className='searchform' onSubmit={handleSubmit}>
      <label htmlFor='searchform__films' className='searchform__label'>
        <img src={iconSearch} className='searchform__icon' alt='Изображение лупы слева от строки поиска'></img>
        <input className='searchform__films' placeholder='Фильм' id='searchform__films' required onChange={(e) => {
          setQuery(e.target.value);
        }} value={`${(currLocation === '/movies') ? isQuery : isQuery}`}></input>
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
    </form >
  )

};

export default SearchForm;