import useInputstate from "../hooks/use-inputstate";

const BasicForm = (props) => {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    reset: nameReset,
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
  } = useInputstate((value) => value.trim().length > 0);
  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    reset: lastNameReset,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
  } = useInputstate((value) => value.trim().length > 0);
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    reset: emailReset,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
  } = useInputstate((value) => value.includes("@"));

  const formIsValid = nameIsValid && lastNameIsValid && emailIsValid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    console.log(name, lastName, email);

    nameReset();
    lastNameReset();
    emailReset();
  };

  const nameClassName = `form-control ${nameHasError ? "invalid" : ""}`;
  const lastNameClassName = `form-control ${lastNameHasError ? "invalid" : ""}`;
  const emailClassName = `form-control ${emailHasError ? "invalid" : ""}`;

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameClassName}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasError && (
            <p className="error-text">Please enter your name.</p>
          )}
        </div>
        <div className={lastNameClassName}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Please enter your last name.</p>
          )}
        </div>
      </div>
      <div className={emailClassName}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
