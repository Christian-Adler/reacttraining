import classes from './ProfileForm.module.css';
import {useContext, useRef} from "react";
import AuthContext from "../../store/auth-context";
import {useHistory} from "react-router-dom";

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  
  const history = useHistory();
  
  const submitHandler = (event) => {
    event.preventDefault();
    
    const enteredNewPassword = newPasswordInputRef.current.value;
    // add validation
    
    const apiKey = 'AIzaSyAd8YWyXwKsY1aojIg_ObbE8N-KA2Znlw0';
    // https://identitytoolkit.googleapis.com/v1/accounts:update?key=[API_KEY]
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=' + apiKey, {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      // Assumption: always succes
      return res.json();
    }).then(data => {
      console.log(data);
      history.replace('/');
    });
  }
  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
