import {useContext, useRef, useState} from 'react';

import classes from './AuthForm.module.css';
import AuthContext from "../../store/auth-context";
import {useHistory} from "react-router-dom";

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  
  const authCtx = useContext(AuthContext);
  
  const history = useHistory();
  
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  
  const submitHandler = (event) => {
    event.preventDefault();
    
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    // add validation...
    
    setIsLoading(true);
    const apiKey = 'AIzaSyAd8YWyXwKsY1aojIg_ObbE8N-KA2Znlw0';
    let url;
    if (isLogin)  // SignIn
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + apiKey;
    else  // SignUp
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + apiKey;
    
    fetch(url,
      {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
      setIsLoading(false);
      if (res.ok) {
        return res.json();
      }
      else {
        return res.json().then(data => {
          let errorMessage = 'auth failed';
          if (data && data.error && data.error.message) errorMessage = data.error.message;
          throw new Error(errorMessage);
        });
      }
    }).then(data => {
      // console.log(data);
      const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000));
      authCtx.login(data.idToken, expirationTime.toISOString());
      history.replace('/');
    }).catch(err => {
      alert(err.message);
    });
  }
  
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef}/>
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;