import React from 'react';
import './savedmovies.css';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';


function SavedMovies({ movies, handleDelteLike, filterMovies, moviesArr }) {

  return (
    <>
      <section className='savedmovies'>
        <SearchForm filterMovies={filterMovies} moviesArr={moviesArr}></SearchForm>
        <MoviesCardList parent='SavedMovies' movies={movies} handleDelteLike={handleDelteLike}></MoviesCardList>

      </section>
    </>
  )

};

export default SavedMovies;