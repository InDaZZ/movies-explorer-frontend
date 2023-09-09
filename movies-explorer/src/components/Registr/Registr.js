import { useContext, useEffect, useState } from "react";
import './registr.css';
import { Link } from "react-router-dom";
import { REGEXP_EMAIL, REGEXP_USER_NAME } from '../utils/Constants.js';
import useFormAndValidation from '../Validate/Validate.js'
import { CurrentUserContext } from '../../context/userContexts.js';

function Registr({ onSubmit }) {
  const { isCurrentUserRegistrErr } = useContext(CurrentUserContext);

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
    setValues,
    setValid,
    setErrors,
  } = useFormAndValidation();
  
  function handleChangeName(evt) {
    handleChange(evt);

    const { name, value } = evt.target;

    if (name === 'name' && REGEXP_USER_NAME.test(value)) {
      setValid(false)
      setErrors((errors) => {
        return {
          ...errors,
          name: 'Может содержать латиницу, кириллицу, пробел или дефис.',
        };
      });
    }
    if (value.length <= 0) {
      setValid(false)
      setErrors((errors) => {
        return {
          ...errors,
          name: 'Это поле обязательно',
        };
      });
    }
    if (errors.name === '') {
      console.log('имя валиден')
    }
  };

  function handleChangeEmail(evt) {
    handleChange(evt);

    const { name, value } = evt.target;

    if (name === 'email' && !REGEXP_EMAIL.test(value)) {
      setValid(false)
      setErrors((errors) => {
        return {
          ...errors,
          email: 'Пример правильной почты: name@mail.com/ru',
        };
      });
    }
    if (value.length <= 0) {
      setValid(false)
      setErrors((errors) => {
        return {
          ...errors,
          email: 'Это поле обязательно',
        };
      });
    }
    if (errors.email === '') {
      console.log('email валиден')
    }
  };

  function handleChangePassword(evt) {
    handleChange(evt);
    const { name, value } = evt.target;
    if (value.length <= 0) {
      setValid(false)
      setErrors((errors) => {
        return {
          ...errors,
          password: 'Это поле обязательно',
        };
      });
    }
    if (errors.password === '') {
      console.log('пароль валиден')
    }
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log({ name: values.name, email: values.email, password: values.password })
    onSubmit({ name: values.name, email: values.email, password: values.password })
  }


  return (
    <>
      <section className="registr">
        <div className="registr__registr-container">
          <form className="registr__form" name="refistrForm" id="refistrForm" autocomplete="off" onSubmit={handleSubmit} noValidate>
            <h1 className="registr__heading">Добро пожаловать!</h1>
            <label htmlFor="userName" className="registr__field">
              <h3 className="registr__item-title">Имя</h3>
              <input type="text" className="registr__item registr__item_type_name" placeholder="Имя" name="name"
                id="userName" minLength="2" maxLength='30' required onChange={handleChangeName} />
            </label>
            <span className="registr__error-message">{errors.name}</span>
            <label htmlFor="userEmail" className="registr__field">
              <h3 className="registr__item-title">E-mail</h3>
              <input type="email" className="registr__item registr__item_type_email" placeholder="Email" name="email"
                id="userEmail" required onChange={handleChangeEmail} />
            </label>
            <span className="registr__error-message">{errors.email}</span>
            <label htmlFor="userPassword" className="registr__field">
              <h3 className="registr__item-title">Пароль</h3>
              <input type="password" className="registr__item registr__item_type_password" placeholder="Пароль" name="password"
                id="userPassword" minLength="6"  required onChange={handleChangePassword} />
            </label>
            <span className="registr__error-message">{errors.password}.</span>
            <div className="registr__button-container">
              <span className="registr__error-message registr__error-message_submit">{isCurrentUserRegistrErr}.</span>
              <button type="submit" className={`registr__button ${isValid ? '' : "registr__button_inactive"}`} disabled={!isValid}>Зарегистрироваться</button>
            </div>
          </form>
          <Link to="/signin" className="registr__textLink">Уже зарегистрированы? <span className="registr__textLink-signin">Войти</span></Link>
        </div>

      </section>
    </>
  )
};
export default Registr;