import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
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
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const showFooter = (isLoading === false) && ['/', '/movies', '/saved-movies'].includes(location.pathname);

  

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className='page'>
      
      {isLoading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signup' element={<Registr />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/test' element={<Preloader />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        )}
      
      <EditProfilePopup></EditProfilePopup>
      <SideMenu></SideMenu>
      {showFooter && <Footer></Footer>}
    </div>
  )
}

export default App;
