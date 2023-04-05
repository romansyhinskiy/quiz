import { useState, useEffect } from "react";
import { ValidationItem } from "./validationItem.js";
import {
  PASSWORD_LEGTH,
  IS_LOWERCASE,
  IS_UPPERCASE,
  IS_NUMBER,
  IS_SPECIAL_CHAR,
} from "../strings.js";

export const ValidationWrapper = ({ password, setValid }) => {
  const [passwordLength, setPasswordLength] = useState(false);
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSpecialChar, setIsSpecialChar] = useState(false);

  const handleValidation = (password) => {
    // check for password length
    password.length >= 8 ? setPasswordLength(true) : setPasswordLength(false);

    // check for uppercase
    const upper = /[A-Z]/.test(password);
    upper ? setIsUpperCase(true) : setIsUpperCase(false);

    // check for lowercase
    const lower = /[a-z]/.test(password);
    lower ? setIsLowerCase(true) : setIsLowerCase(false);

    // check for number
    const num = /\d/.test(password);
    num ? setIsNumber(true) : setIsNumber(false);

    // check for special char
    const char = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
    char ? setIsSpecialChar(true) : setIsSpecialChar(false);

    // allow user submit the form if all values are valid
    if (
      passwordLength &&
      isLowerCase &&
      isUpperCase &&
      isNumber &&
      isSpecialChar
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  useEffect(() => {
    handleValidation(password);
  }, [password]);
  return (
    <>
      <ValidationItem icon={passwordLength} text={PASSWORD_LEGTH} />
      <ValidationItem icon={isLowerCase} text={IS_LOWERCASE} />
      <ValidationItem icon={isUpperCase} text={IS_UPPERCASE} />
      <ValidationItem icon={isNumber} text={IS_NUMBER} />
      <ValidationItem icon={isSpecialChar} text={IS_SPECIAL_CHAR} />
    </>
  );
};
