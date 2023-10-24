import React, { useEffect, useState } from 'react';
import './savedmovies.css';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';


function SavedMovies({ movies, handleDelteLike, filterMovies, moviesArr, SavedMoviesisQueryfailed, setSavedMoviesQueryfailed, isErrorSavedMovies, setSavedMovies }) {
  console.log(movies)
  console.log(moviesArr)
  
  useEffect(() => {

  })
  return (
    <>

      <section className='savedmovies'>
        <SearchForm filterMovies={filterMovies} moviesArr={moviesArr} movies={movies}  setSavedMoviesQueryfailed={setSavedMoviesQueryfailed} setSavedMovies={setSavedMovies}></SearchForm>
        <MoviesCardList parent='SavedMovies' movies={movies} handleDelteLike={handleDelteLike} SavedMoviesisQueryfailed={SavedMoviesisQueryfailed} setSavedMoviesQueryfailed={setSavedMoviesQueryfailed} isErrorSavedMovies={isErrorSavedMovies}  moviesArr={moviesArr} setSavedMovies={setSavedMovies}></MoviesCardList>
      </section>

    </>
  )

};

export default SavedMovies;