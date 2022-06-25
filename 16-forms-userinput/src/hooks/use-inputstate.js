import { useState } from "react";

const useInputstate = (validateValue) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValue(value);
  const hasError = !isValid && isTouched;

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  return {
    value,
    isValid,
    hasError,
    reset,
    changeHandler,
    blurHandler,
  };
};

export default useInputstate;
