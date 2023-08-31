import { useState } from "react";
import './login.css';
import { Link } from "react-router-dom";
import { REGEXP_EMAIL } from '../utils/Constants.js';
import useFormAndValidation from '../Validate/Validate.js'

function Login({ onSubmit }) {

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

  function handleChangePassword(evt) {
    handleChange(evt);
    const { name, value } = evt.target;
    if (value.length <= 0) {
      setErrors((errors) => {
        return {
          ...errors,
          password: 'Это поле обязательно',
        };
      });
    }

  }

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
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log({ password: values.password, email: values.email })
    onSubmit({ email: values.email, password: values.password })
  }

  return (
    <section className="login">
      <div className="login__login-container">
        <form className="login__form" name="refistrForm" id="refistrForm">
          <h1 className="login__heading">Рады видеть!</h1>
          <label htmlFor="userEmail" className="login__field">
            <h3 className="login__item-title">E-mail</h3>
            <input type="email" className="login__item login__item_type_name" placeholder="Email" name="email"
              id="userEmail" value={values.email || ''} minLength="2" maxLength="30" required onChange={handleChangeEmail} />

          </label>
          <span className="login__error">{errors.email}</span>
          <label htmlFor="password" className="login__field">
            <h3 className="login__item-title">Пароль  </h3>
            <input type="password" className="login__item login__item_type_password" placeholder="Пароль" name="password"
              id="password" defaultValue="" required onChange={handleChangePassword} />
            <span className="login__error">{errors.password}</span>
          </label>
          <button disabled={!isValid} type="submit" className={`login__button ${isValid ? "" : "login__button_inactive"}`} onClick={handleSubmit}>Войти</button>
        </form>
        <Link to="/signup" className="login__textLink">Ещё не зарегистрированы?<span className="login__textLink-signup">Регистрация</span></Link>
      </div>
    </section>
  )
};
export default Login;