import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './moviescardlist.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import Preloader from '../Preloader/Preloader.js';
import { DEVICE_PARAMETERS } from '../utils/Constants.js';

function MoviesCardList({ movies, handleLikeFilm, handleDelteLike, savedMovies, handleDelteLikeTwo, isLoading, isError, isQueryfailed, SavedMoviesisQueryfailed }) {
  const location = useLocation();
  const currLocation = location.pathname.toLowerCase();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth >= 851, window.innerWidth === 850, window.innerWidth === 55,]);

  const [visibleCards, setVisibleCards] = useState(DEVICE_PARAMETERS.desktop.cards.total); // Количество отображаемых карточек

  const [loadMoreCards, setLoadMoreCards] = useState(); // Количество загружаемых карточек кнопкой еще


  const handleResize = () => {
    const width = window.innerWidth;

    if (width >= DEVICE_PARAMETERS.desktop.width) {
      setVisibleCards(DEVICE_PARAMETERS.desktop.cards.total);
      setLoadMoreCards((prevValue) => DEVICE_PARAMETERS.desktop.cards.more)
    } if (width <= DEVICE_PARAMETERS.tablet.width) {
      setVisibleCards(DEVICE_PARAMETERS.tablet.cards.total);
      setLoadMoreCards(DEVICE_PARAMETERS.tablet.cards.more);
    }
    if (width <= DEVICE_PARAMETERS.mobile.width) {
      setVisibleCards(DEVICE_PARAMETERS.mobile.cards.total);
      setLoadMoreCards(DEVICE_PARAMETERS.mobile.cards.more);
    }

  };


  function renderMovies(loadMoreCards) {
    if (movies.length > 0) {
      return movies
        .slice(0, loadMoreCards)
        .map((movie) => {
          return (
            <MoviesCard key={movie.id} movie={movie} handleLikeFilm={handleLikeFilm} handleDelteLike={handleDelteLike} savedMovies={savedMovies} handleDelteLikeTwo={handleDelteLikeTwo} />
          );
        });
    }
    if (JSON.parse(localStorage.getItem(`searchmovies`)) && currLocation === '/movies') {
      const lastQueryMovies = JSON.parse(localStorage.getItem(`searchmovies`));

      if (lastQueryMovies.length > 0) {
        return lastQueryMovies
          .slice(0, loadMoreCards)
          .map((lastQueryMovies) => {
            return (
              <MoviesCard movie={lastQueryMovies} handleLikeFilm={handleLikeFilm} handleDelteLike={handleDelteLike} savedMovies={savedMovies} handleDelteLikeTwo={handleDelteLikeTwo} />
            );
          });
      }

    }
  };

  const showMoreItems = () => {
    setVisibleCards((prevValue) => (prevValue + loadMoreCards))
  };

  return (
    <>
      {isLoading ? <Preloader /> : isError ? (
        <p>
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз.
        </p>
      ) : isQueryfailed ? (
        <p>
          Ничего не найдено.
        </p>
      ) : SavedMoviesisQueryfailed ? (
      <p>
        Ничего не найдено.
      </p>
      ) : <>
        <section className='moviescardlist'>
          {renderMovies(visibleCards)}
        </section >
        {location.pathname !== '/saved-movies' && ((movies.length !== 0) && (movies.length >= 16)) && (movies.length > visibleCards) && <button className='movies__button-more' type='button' onClick={showMoreItems}>Ещё</button>}
      </>}
    </>
  )

};

export default MoviesCardList;
