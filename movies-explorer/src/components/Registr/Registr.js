import { useState } from "react";
import Header from "../Header/Header.js";
import './registr.css';
import { Link } from "react-router-dom";

function Registr({ onSubmit }) {



  const [isValue, setIsValue] = useState({
    password: "",
    email: "",

  })

  const handleChange = (evt) => {

    const { name, value } = evt.target;

    setIsValue({

      ...isValue,

      [name]: value

    });

  }

  function handleSubmit(e) {
    e.preventDefault();
    const { password, email } = isValue
    onSubmit(password, email)
  };


  return (
    <>
      <section className="registr">
        <Header>
          {/*<Link to="/sign-in" className="header__link">Войти</Link>*/}
        </Header>
        <div className="registr__registr-container">
          <form className="registr__form" name="refistrForm" id="refistrForm" onSubmit={handleSubmit}>
            <h1 className="registr__heading">Добро пожаловать!</h1>
            <label htmlFor="userName" className="registr__field">
              <h3 className="registr__item-title">Имя</h3>
              <input type="text" className="registr__item registr__item_type_name" placeholder="Имя" name="name"
                id="userName" /*value={isValue.email || ''}*/ minLength="2" maxLength="30" required onChange={handleChange} />
              <span className="registrEmail-error registr__error"></span>
            </label>
            <label htmlFor="userEmail" className="registr__field">
              <h3 className="registr__item-title">Email</h3>
              <input type="email" className="registr__item registr__item_type_email" placeholder="Email" name="email"
                id="userEmail" value={isValue.email || ''} minLength="2" maxLength="30" required onChange={handleChange} />
              <span className="registrEmail-error registr__error"></span>
            </label>
            <label htmlFor="userPassword" className="registr__field">
              <h3 className="registr__item-title">Пароль</h3>
              <input type="password" className="registr__item registr__item_type_password" placeholder="Пароль" name="password"
                id="userPassword" value={isValue.password || ''} minLength="6 я" maxLength="30" required onChange={handleChange} />
              <span className="pictureName-error popup__error"></span>
            </label>
            <button type="submit" className="registr__button">Зарегистрироваться</button>
          </form>
          <Link to="/signin" className="registr__textLink">Уже зарегистрированы? <span className="registr__textLink-signin">Войти</span></Link>
        </div>
        
      </section>
    </>
  )
};
export default Registr;