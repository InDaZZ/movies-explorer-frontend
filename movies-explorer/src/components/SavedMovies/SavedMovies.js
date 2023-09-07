import React from 'react';
import './savedmovies.css';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';


function SavedMovies({ movies, handleDelteLike, filterMovies, moviesArr, SavedMoviesisQueryfailed }) {
  return (
    <>

      <section className='savedmovies'>
        <SearchForm filterMovies={filterMovies} moviesArr={moviesArr}></SearchForm>
        <MoviesCardList parent='SavedMovies' movies={movies} handleDelteLike={handleDelteLike} SavedMoviesisQueryfailed={SavedMoviesisQueryfailed}></MoviesCardList>
      </section>

    </>
  )

};

export default SavedMovies;