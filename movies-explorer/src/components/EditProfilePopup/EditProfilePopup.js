import React from 'react';
import { useState } from "react";
import Popup from '../Popup/Popup.js';
import './editprofilepopup.css';
//import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function EditProfilePopup ( {isOpen, onClose, onUpdateUser,isLoading} ) {

  //const currentUser = React.useContext(CurrentUserContext);

  const [name,setName] = useState('');

  const [email,setEmail] = useState('');

  //React.useEffect(() => {
  //  setName(currentUser.name);
  //  setEmail(currentUser.about);
 // }, [currentUser,isOpen]); 

  function handleChangeName (e) {
    setName(e.target.value);
  };

  function handleChangeEmail (e) {
    setEmail(e.target.value);
  }

  function handleSubmit (evt) {
    evt.preventDefault();
    
    onUpdateUser({
      name: name,
      email: email,
    })
  }

  

  return(
    <Popup popupId="popupProfile" formName="editProfile" formId="popupFormProfile" title="Редактировать профиль" buttonText={isLoading? 'Сохранение...' : 'Сохранить'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
    <label htmlFor="name" className="popup__field">
      <input type="text" className="popup__item popup__item_type_name" placeholder="Имя" name="name" id="name"
        value={name || ''} minLength="2" maxLength="40" required onChange={handleChangeName} />
      <span className="fullName-error popup__error"></span>
    </label>
    <label htmlFor="email" className="popup__field">
      <input type="text" className="popup__item popup__item_type_email" placeholder="О себе" name="email"
        id="email" value={email || ''} minLength="2" maxLength="200" required onChange={handleChangeEmail}/>
      <span className="activity-error popup__error"></span>
    </label>
  </Popup>
  );

  };
  export default EditProfilePopup;