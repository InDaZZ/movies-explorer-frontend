import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import NotFound from '../NotFound/NotFound.js';
import Profile from '../Profile/Profile.js';
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup.js';
import Registr from '../Registr/Registr.js';
import Login from '../Login/Login.js';
import SideMenu from '../SideMenu/SideMenu.js';
import Preloader from '../Preloader/Preloader.js';




function App() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const [isMainHeader, setMainHeader] = useState(false);
  const [isСenteredHeader, setСenteredHeader] = useState(false);
  const [isOpenSideMenu, setOpenSideMenu] = useState(false);
  const showFooter = (isLoading === false) && ['/', '/movies', '/saved-movies'].includes(location.pathname);
  const showHeader = (isLoading === false) && ['/', '/movies', '/saved-movies', '/profile', '/signup', '/signin'].includes(location.pathname);

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

  function openSeidMenu () {
    setOpenSideMenu(true);
  };

  function closeSeidMenu () {
    setOpenSideMenu(false);
  }

  useEffect(() => {
    showMainHeader();
    showСenteredHeader();
  });


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className='page'>
      {showHeader && <Header isMainHeader={isMainHeader} isСenteredHeader={isСenteredHeader} openSeidMenu={openSeidMenu}></Header>}
      {isLoading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile userExit={userExit} />} />
          <Route path='/signup' element={<Registr />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/test' element={<Preloader />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      )}

      <EditProfilePopup></EditProfilePopup>
      <SideMenu isOpenSideMenu={isOpenSideMenu} openSeidMenu={openSeidMenu} closeSeidMenu={closeSeidMenu}></SideMenu>
      {showFooter && <Footer></Footer>}
    </div>
  )
}

export default App;
