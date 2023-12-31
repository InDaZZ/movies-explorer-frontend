import React from "react";
import './popup.css';

function Popup({ isOpen, popupId, formName, formId, onClose, title, children, buttonText, onSubmit, isValid }) {
  return (
    <div className={`popup ${isOpen ? "popup_active" : ""}`} id={popupId} >
      <div className="popup__container">
        <form className="popup__form" name={formName} id={formId} onSubmit={onSubmit}>
          <button type="button" className="popup__button-close" onClick={onClose}></button>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button disabled={!isValid} type="submit" className={`popup__button-submit ${isValid ? "" : "popup__button_inactive"} `}>{buttonText}</button>
        </form>

      </div>
    </div>
  )
};

export default Popup;