import React from 'react';
import './savedmovies.css';
import Header from '../Header/Header.js';
import Navigation from '../Navigation/Navigation.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';

function SavedMovies() {
  return (
    <>
      <section className='savedmovies'>
        <Header>
        </Header>
        <SearchForm></SearchForm>
        <MoviesCardList>
          <MoviesCard></MoviesCard>
        </MoviesCardList>
      </section>
      <Footer></Footer>
    </>
  )

};

export default SavedMovies;