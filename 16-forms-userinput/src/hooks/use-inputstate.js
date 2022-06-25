import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  const actionType = action.type;
  if (actionType === "INPUT") {
    return { ...state, value: action.value };
  } else if (actionType === "BLUR") {
    return { ...state, isTouched: true };
  } else if (actionType === "RESET") {
    return { ...initialInputState };
  }
  return initialInputState;
};

const useInputstate = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const isValid = validateValue(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const changeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const blurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  return {
    value: inputState.value,
    isValid,
    hasError,
    reset,
    changeHandler,
    blurHandler,
  };
};

export default useInputstate;
