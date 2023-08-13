import React from 'react';
import './savedmovies.css';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';


function SavedMovies() {
  
  return (
    <>
      <section className='savedmovies'>
        <SearchForm></SearchForm>
        <MoviesCardList>
          <MoviesCard></MoviesCard>
        </MoviesCardList>
      </section>
    </>
  )

};

export default SavedMovies;