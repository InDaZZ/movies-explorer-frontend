import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import NotFound from '../NotFound/NotFound.js';
import Profile from '../Profile/Profile.js';
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup.js';
import Registr from '../Registr/Registr.js';
import Login from '../Login/Login.js';
import SideMenu from '../SideMenu/SideMenu.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import { CurrentUserContext } from '../../context/userContexts.js';
import * as moviesBeatApi from '../utils/MoviesApi.js'
import { api } from '../utils/MainApi.js';
import Movies from '../Movies/Movies.js';

function App() {
  const navigate = useNavigate();

  const [isCurrentUser, setCurrentUser] = useState({});
  const [isCurrentUserRegistrErr, setCurrentUserRegistrEr] = useState('');
  const [isCurrentUserProfileChangeStatus, setCurrentUserProfileChangeStatus] = useState({
    state: false,
    message: '',
    error: ''
  });
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const location = useLocation();
  const currLocation = location.pathname;
  const [editProfilePopupActive, setEditProfilePopupActive] = useState(false)
  const [isMainHeader, setMainHeader] = useState(false);
  const [isСenteredHeader, setСenteredHeader] = useState(false);
  const [isOpenSideMenu, setOpenSideMenu] = useState(false);
  const showFooter = ['/', '/movies', '/saved-movies'].includes(location.pathname);
  const showHeader = ['/', '/movies', '/saved-movies', '/profile', '/signup', '/signin'].includes(location.pathname);
  const [isError, setError] = useState(false);
  const [isQueryfailed, setQueryfailed] = useState(false);

  function showСenteredHeader() {
    if (['/signup', '/signin'].includes(location.pathname)) {
      setСenteredHeader(true)
    }
    else {
      setСenteredHeader(false)
    }
  };

  function showMainHeader() {
    if (['/'].includes(location.pathname)) {
      setMainHeader(true)
    }
    else {
      setMainHeader(false)
    }
  };

  function userExit() {
    navigate("/", { replace: true });
  };

  function openSeidMenu() {
    setOpenSideMenu(true);
  };

  function closeSeidMenu() {
    setOpenSideMenu(false);
  }

  useEffect(() => {
    handleTokenCheck();
  }, [isLogged]);

  useEffect(() => {
    showMainHeader();
    showСenteredHeader();
  }, [currLocation]);



  function handleLoginSubmit(email, password) {
    setIsLoading(true);

    api.authorize(email, password)//
      .then((res) => {
        if (res.token) {
          console.log(`authorize отработала`)
          console.log(res.token)
          setIsLogged(true)
          localStorage.setItem("token", res.token)
          navigate("/movies", { replace: true });
          console.log(`пользователь вошел`)
        }
      })
      .catch((error) => {
        console.log(`Ошибка :( ${error})`)
      })
      .finally(() => setIsLoading(false))
  };
  
  function handleTokenCheck() {
    let token = localStorage.getItem("token")
    if (token) {
      setIsLoading(true);
      api.getUserInfo()
        .then((res) => {
          if (res) {
            setCurrentUser(res)
            setIsLogged(true)
            navigate("/movies", { replace: true });
            moviesBeatApi
              .getMovies()
              .then(setAllMovies)
              .catch(console.error);
            api.getSavedMovies()
              .then(setSavedMovies)
              .catch((error) => {
                console.log(`Ошибка ${error})`)
              })
          }
          else {
            return
          }
        })
        .catch((error) => console.log(`Ошибка ${error})`))
        .finally(() => setIsLoading(false))
    }
  };

  function exit() {
    setIsLogged(false);
    setMovies([]);
    localStorage.clear();
    navigate("/", { replace: true });
  };

  function handleRegisterSubmit({ name, email, password }) {
    setIsLoading(true);
    api.register({ name, email, password })
      .then((res) => {
        if (res) {
          handleLoginSubmit({ email, password })
        }
      })
      .catch((err) => {
        setCurrentUserRegistrEr(err)
      })
      .finally(() => setIsLoading(false))
  };

  function filterMovies(query, page, moviesArr, duration) {
    const lowerCase = query.toLowerCase();
    setIsLoading(true);

    if (moviesArr.length > 0) {
      const filteredMovies =
        moviesArr.filter(function searchShorts(movie) {
          return (movie.nameRU.toLowerCase().indexOf(lowerCase) !== -1 && movie.duration <= duration) ||
            (movie.nameEN.toLowerCase().indexOf(lowerCase) !== -1 && movie.duration <= duration)
        });

      if (filteredMovies.length <= 0) {
        setQueryfailed(true);
        setIsLoading(false);
        return
      }

      if (page === "/movies" || filteredMovies.length > 0) {
        setIsLoading(false);
        setQueryfailed(false);
        setMovies(filteredMovies);
        localStorage.setItem(`searchmovies`, JSON.stringify(filteredMovies));
      }

      if (page === "/saved-movies") {
        setIsLoading(false);
        setQueryfailed(false);
        setSavedMovies(filteredMovies);
      }
    }
    else {
      setIsLoading(false);
      setError(true);
    }
  };

  function handleLikeFilm(movie) {
    api.saveMovie(movie)
      .then((res) => {
        setSavedMovies([res, ...savedMovies])
      })
      .catch((error) => {
        console.log(`Ошибка :( ${error})`)
      })
  }

  function handleDelteLike(movieId) {
    api.deleteMovie(movieId)
      .then((res) => {
        setSavedMovies((state) => state.filter((film) => film._id !== movieId))
      })
      .catch((error) => {
        console.log(`Ошибка :( ${error})`)
      })
  }

  function handleDelteLikeTwo(savedMoviesArr, movieID) {
    const deletedMovies = savedMoviesArr.find((item) => item.movieId === movieID)

    api.deleteMovie(deletedMovies._id)
      .then((res) => {
        setSavedMovies((state) => state.filter((film) => film._id !== deletedMovies._id))
      })
      .catch((error) => {
        console.log(`Ошибка :( ${error})`)
      })
  };
  const openPopup = () => {
    setEditProfilePopupActive(true)
  };

  const closePopup = () => {
    setEditProfilePopupActive(false)
  };

  function handleUpdateUser(data) {

    api.setUserInfo({ data }).then((newInfo) => {
      setCurrentUserProfileChangeStatus({
        state: true,
        message: 'Данные успешно измененны',
        error: '',
      })
      setCurrentUser(newInfo)
      closePopup()
    })
      .catch((error) => {
        setCurrentUserProfileChangeStatus({
          state: false,
          message: '',
          error: `${error}`,
        })
        closePopup()
        console.log(`Ошибка :( ${error})`)
      })
  };
  return (
    <CurrentUserContext.Provider value={{ isCurrentUser, isCurrentUserRegistrErr, isCurrentUserProfileChangeStatus, setCurrentUserProfileChangeStatus }}>
      <div className='page'>
        {showHeader && <Header isMainHeader={isMainHeader} isСenteredHeader={isСenteredHeader} openSeidMenu={openSeidMenu} isLogged={isLogged}></Header>}
        <Routes>
          <Route path='/signup' element={<Registr onSubmit={handleRegisterSubmit} />} />
          <Route path='/signin' element={<Login onSubmit={handleLoginSubmit} />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Main />} />
          <Route element={<ProtectedRoute isLogged={isLogged} />}>
            <Route path='/movies' element={<Movies movies={movies} savedMovies={savedMovies} handleLikeFilm={handleLikeFilm} filterMovies={filterMovies} setMovies={setMovies} moviesArr={allMovies} handleDelteLikeTwo={handleDelteLikeTwo} isLoading={isLoading} isError={isError} isQueryfailed={isQueryfailed} />} />
            <Route path='/saved-movies' element={<SavedMovies movies={savedMovies} handleDelteLike={handleDelteLike} filterMovies={filterMovies} moviesArr={savedMovies} isLoading={isLoading} isQueryfailed={isQueryfailed} />} />
            <Route path='/profile' element={<Profile exit={exit} openPopup={openPopup} />} />
          </Route>
        </Routes>
        <EditProfilePopup isOpen={editProfilePopupActive} onClose={closePopup} onUpdateUser={handleUpdateUser}></EditProfilePopup>
        <SideMenu isOpenSideMenu={isOpenSideMenu} openSeidMenu={openSeidMenu} closeSeidMenu={closeSeidMenu}></SideMenu>
        {showFooter && <Footer></Footer>}
      </div >
    </CurrentUserContext.Provider>
  )
};
export default App;
