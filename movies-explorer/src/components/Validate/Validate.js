import { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';


const useFormAndValidation = (initialValues = {}, initialErrors = {}, initialValid = false) => {
  const location = useLocation();
  const currLocation = location.pathname.toLowerCase();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setValid] = useState(initialValid);
  const [isValidinp, setValidinp] = useState({});
  
  const handleChange = (evt) => {
    const input = evt.target;
    const { name, value } = evt.target;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: evt.target.validationMessage });
    if (currLocation === '/signin' && errors.email === '') {
      console.log(123131312)
      setValid(evt.target.closest('form').checkValidity());
     }
    if (errors.name === '' && errors.email === '') {
      setValid(evt.target.closest('form').checkValidity());
    }
    else {
      return
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setValid(newIsValid);
    },
    [setValues, setErrors, setValid]
  );

  return { values, errors, isValid, handleChange, resetForm, setValues, setValid, setErrors };
};

export default useFormAndValidation;