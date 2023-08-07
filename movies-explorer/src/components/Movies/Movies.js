import React from 'react';
import './movies.css';
import Header from '../Header/Header.js';
import Navigation from '../Navigation/Navigation.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';

function Movies() {

  return (
      <div className='movies'>
        <Header>
          
        </Header>
        <SearchForm></SearchForm>
        <MoviesCardList></MoviesCardList>
        <button className='movies__button-more' type='button'>Ещё</button>
      </div>
  )

};

export default Movies;