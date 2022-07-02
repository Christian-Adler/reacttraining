import classes from './Auth.module.css';
import {useRef} from "react";
import {useDispatch} from "react-redux";
import {authActions} from "../store/auth";

const Auth = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const pwRef = useRef();
  
  const submitHandler = (event) => {
    event.preventDefault();
    
    const email = emailRef.current.value;
    const pw = pwRef.current.value;
    
    if (email.trim().length === 0 || pw.trim().length === 0) {
      console.log("invalid login");
      return;
    }
    
    console.log("Login ok");
    dispatch(authActions.login());
  };
  
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailRef}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={pwRef}/>
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
