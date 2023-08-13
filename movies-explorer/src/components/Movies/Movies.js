import React from 'react';
import './movies.css';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';


function Movies() {

  return (
      <div className='movies'>
        <SearchForm></SearchForm>
        <MoviesCardList></MoviesCardList>
        <button className='movies__button-more' type='button'>Ещё</button>
      </div>
  )

};

export default Movies;