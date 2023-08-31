import React, { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../context/userContexts.js';

import './profile.css';

function Profile({ exit, openPopup }) {
  const { isCurrentUser, isCurrentUserProfileChangeStatus, setCurrentUserProfileChangeStatus } = useContext(CurrentUserContext);
  useEffect(() => {
    setCurrentUserProfileChangeStatus({
      state: false,
      message: '',
      error: '',
    })
  }, [])
  const success = String.fromCodePoint(0x2714);
  const failure = String.fromCodePoint(0x2716);

  return (
    <section className='profile'>
      <h1 className='profile__title'>
        Привет, {isCurrentUser.name}!
      </h1>
      <div className='profile__info-container'>
        <div className='profile__user-data-container'>
          <p className='profile__user-name-title'>Имя</p>
          <p className='profile__user-name-value'>{isCurrentUser.name}</p>

        </div>
        <div className='profile__user-data-container'>
          <p className='profile__user-email-title'>E-mail</p>
          <p className='profile__user-email-value'>{isCurrentUser.email}</p>
        </div>
      </div>
      <div className='profile__management'>

        <button className='profile__button-edit' type='button' onClick={openPopup}>Редактировать</button>
        <button className='profile__button-exit' type='button' onClick={exit}>Выйти из аккаунта</button>
      </div>
      <span className={`profile__change-status profile__change-status_visible`}>{`${isCurrentUserProfileChangeStatus.state ? `${isCurrentUserProfileChangeStatus.message}${success}` : `${isCurrentUserProfileChangeStatus.error}`}`}</span>
    </section>
  )

};

export default Profile;