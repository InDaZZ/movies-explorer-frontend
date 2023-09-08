import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './moviescard.css';

function MoviesCard({ movie, handleLikeFilm, handleDelteLike, savedMovies, handleDelteLikeTwo, key }) {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const currLocation = location.pathname;
  const [isSavedMovies, setSavedMovies] = useState(false);

  const openTrailerLink = () => {
    window.open(`${movie.trailerLink}`);
  };


  useEffect(() => {
    if (currLocation === '/movies') {
      const savedMoviesId = savedMovies.map((movie) => {
        return movie.movieId
      });
      if (savedMoviesId.includes(movie.id)) {
        setIsActive(true)
      }
      else {
        return
      }
    }

  }, [currLocation === '/movies',])

  useEffect(() => {
    if (currLocation === '/saved-movies') {
      setSavedMovies(true)
    }
    else { setSavedMovies(false) }
  }, [location.pathname === '/saved-movies'])

  const handleLikeClick = () => {
    //setIsActive((prevState) => !prevState);
    handleLikeFilm(movie, setIsActive)
  };

  const handleDeletClick = () => {
    handleDelteLike(movie._id)
  };

  const handleDeletLike = () => {
    setIsActive((prevState) => !prevState);
    handleDelteLikeTwo(savedMovies, movie.id)
  };

  function filmDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}ч ${mins < 10 ? "0" : ""}${mins} м`;
  }
  return (
    <>
      <div className='moviescard' key={key}>
        <img src={isSavedMovies ? `${movie.image}` : `https://api.nomoreparties.co${movie.image.url}`} alt='Постер фильма' className="moviescard__image" onClick={() => openTrailerLink()} />
        <div className="moviescard__content">
          <div>
            <h2 className="moviescard__film-name">{movie.nameRU}</h2>
            <h2 className="moviescard__film-duration">{filmDuration(movie.duration)}</h2>
          </div>
          <div className="moviescard__like-container">
            <button type="button" className={isSavedMovies ? (`moviescard__button-delet-like`) : (`moviescard__button-like ${isActive ? "moviescard__button-like_active" : ""}`)}
              onClick={isSavedMovies ? handleDeletClick : (isActive ? handleDeletLike : handleLikeClick)}></button>
          </div>
        </div>
      </div>
    </>

  )

};

export default MoviesCard;