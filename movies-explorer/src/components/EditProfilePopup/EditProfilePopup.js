import React, { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../../context/userContexts.js';
import Popup from '../Popup/Popup.js';
import './editprofilepopup.css';
import { REGEXP_EMAIL, REGEXP_USER_NAME } from '../utils/Constants.js';
import useFormAndValidation from '../Validate/Validate.js'

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const { isCurrentUser } = useContext(CurrentUserContext);


  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
    setValues,
    setValid,
    setErrors
  } = useFormAndValidation();

  useEffect(() => {
    setValues({
      name: isCurrentUser.name,
      email: isCurrentUser.email
    })
  }, [isOpen]);
  useEffect(() => {
    if (values.email === isCurrentUser.email && values.name === isCurrentUser.name) {
      setValid(false)
    }
  }, [values])

  function handleChangeName(evt) {
    const { name, value } = evt.target;

    handleChange(evt);
    if (name === 'name' && REGEXP_USER_NAME.test(value)) {
      setValid(false);
      setErrors((errors) => {
        return {
          ...errors,
          name: 'Может содержать латиницу, кириллицу, пробел или дефис.',
        };
      });
    }
    if (value.length <= 0) {
      setValid(false);
      setErrors((errors) => {
        return {
          ...errors,
          name: 'Это поле обязательно',
        };
      });
    };

  };

  function handleChangeEmail(evt) {
    handleChange(evt);

    const { name, value } = evt.target;

    if (name === 'email' && !REGEXP_EMAIL.test(value)) {
      setValid(false);
      setErrors((errors) => {
        return {
          ...errors,
          email: 'Пример правильной почты: name@mail.com/ru',
        };
      });
    }
    if (value.length <= 0) {
      setValid(false);
      setErrors((errors) => {
        return {
          ...errors,
          email: 'Это поле обязательно',
        };
      });
    };

  };

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({ name: values.name, email: values.email })
  }

  return (
    <Popup popupId="popupProfile" formName="editProfile" formId="popupFormProfile" title="Редактировать профиль" buttonText={isLoading ? 'Сохранение...' : 'Сохранить'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} isValid={isValid}>
      <label htmlFor="name" className="popup__field">
        <input type="text" className="popup__item popup__item_type_name" placeholder="Имя" name="name" id="name"
          value={values.name || ''} minLength="2" maxLength="40" required onChange={handleChangeName} />
        <span className="fullName-error popup__error">{errors.name}</span>
      </label>
      <label htmlFor="email" className="popup__field">
        <input type="email  " className="popup__item popup__item_type_email" placeholder="E-mail" name="email"
          id="email" value={values.email || ''} minLength="2" maxLength="200" required onChange={handleChangeEmail} />
        <span className="activity-error  popup__error ">{errors.email}</span>
      </label>
    </Popup>
  );

};
export default EditProfilePopup;