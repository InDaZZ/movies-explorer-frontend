import { useState } from "react";
import './login.css';
import { Link } from "react-router-dom";

function Login({ onSubmit }) {
 
  const [isValue, setIsValue] = useState({
    password: '',
    email: ''

  })

  const handleChange = (evt) => {

    const { name, value } = evt.target;

    setIsValue({

      ...isValue,

      [name]: value

    });

  }

  function handleSubmit(e) {
    e.preventDefault()
    const { password, email } = isValue
    onSubmit(password, email)
  }
  return (
    <section className="login">
      <div className="login__login-container">
        <form className="login__form" name="refistrForm" id="refistrForm">
          <h1 className="login__heading">Рады видеть!</h1>
          <label htmlFor="userEmail" className="login__field">
            <h3 className="login__item-title">E-mail</h3>
            <input type="text" className="login__item login__item_type_name" placeholder="Email" name="email"
              id="userEmail" defaultValue="" minLength="2" maxLength="30" required onChange={handleChange} />
            <span className="loginEmail-error login__error"></span>
          </label>
          <label htmlFor="userPassword" className="login__field">
            <h3 className="login__item-title">Пароль  </h3>
            <input type="password" className="login__item login__item_type_password" placeholder="Пароль" name="password"
              id="userPassword" defaultValue="" minLength="6" maxLength="30" required onChange={handleChange} />
          </label>
          <button type="submit" className="login__button" onClick={handleSubmit}>Войти</button>
        </form>
        <Link to="/signup" className="login__textLink">Ещё не зарегистрированы?<span className="login__textLink-signup">Регистрация</span></Link>
      </div>
    </section>
  )
};
export default Login;