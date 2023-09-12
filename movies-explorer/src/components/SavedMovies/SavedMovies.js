import React, { useEffect, useState } from 'react';
import './savedmovies.css';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';


function SavedMovies({ movies, handleDelteLike, filterMovies, moviesArr, SavedMoviesisQueryfailed, setSavedMoviesQueryfailed, isErrorSavedMovies }) {

  const [reload, setReload]= useState(false);
  function reloadSavedMovies (state) {
    setReload(state)
  }
  useEffect(() => {

  })
  return (
    <>

      <section className='savedmovies'>
        <SearchForm filterMovies={filterMovies} moviesArr={moviesArr} movies={movies} reloadSavedMovies={reloadSavedMovies} setSavedMoviesQueryfailed={setSavedMoviesQueryfailed}></SearchForm>
        <MoviesCardList parent='SavedMovies' movies={movies} handleDelteLike={handleDelteLike} SavedMoviesisQueryfailed={SavedMoviesisQueryfailed} setSavedMoviesQueryfailed={setSavedMoviesQueryfailed} isErrorSavedMovies={isErrorSavedMovies} reload={reload} moviesArr={moviesArr}></MoviesCardList>
      </section>

    </>
  )

};

export default SavedMovies;