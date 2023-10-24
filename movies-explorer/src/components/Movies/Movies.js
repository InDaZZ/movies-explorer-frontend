import React, { useContext, useEffect } from 'react';
import './movies.css';
import { CurrentUserContext } from '../../context/userContexts.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';


function Movies({ movies, savedMovies, handleLikeFilm, filterMovies, setMovies, moviesArr, handleDelteLikeTwo, isLoading, isError, isQueryfailed, setError, setQueryfailed }) {
  const { isCurrentUserFormState, setCurrentUserFormState } = useContext(CurrentUserContext);
  return (
    <div className='movies'>
      <SearchForm filterMovies={filterMovies} setMovies={setMovies} moviesArr={moviesArr} isCurrentUserFormState={isCurrentUserFormState} isError={isError} isQueryfailed={isQueryfailed} movies={movies}></SearchForm>
      <MoviesCardList movies={movies} savedMovies={savedMovies} handleLikeFilm={handleLikeFilm} handleDelteLikeTwo={handleDelteLikeTwo} isLoading={isLoading} isError={isError} isQueryfailed={isQueryfailed} setError={setError} setQueryfailed={setQueryfailed} setMovies={setMovies}></MoviesCardList>
    </div>
  )

};

export default Movies;