import React, {useCallback, useEffect, useState} from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {
  },
  logout: () => {
  },
});

const calcRemainingTime = (expirationTime) => {
  const now = new Date().getTime();
  const adjExpiratinTime = new Date(expirationTime).getTime();
  return adjExpiratinTime - now; // = remainingTime
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token',);
  const storedExpirationTime = localStorage.getItem('expirationTime');
  
  const remainingTime = calcRemainingTime(storedExpirationTime);
  
  if (remainingTime <= 60000) {
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('token');
    return null;
  }
  
  return { storedToken, remainingTime };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.storedToken;
  }
  
  const [token, setToken] = useState(initialToken);
  console.log('token:', token);
  const userIsLoggedIn = !!token;
  console.log('isLoggedIn:', userIsLoggedIn);
  
  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    if (logoutTimer)
      clearTimeout(logoutTimer);
  }, []);
  
  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', expirationTime);
    
    const remainingTime = calcRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };
  
  useEffect(() => {
    if (tokenData) {
      console.log('tokenData.remainingTime', tokenData.remainingTime);
      logoutTimer = setTimeout(logoutHandler, tokenData.remainingTime);
    }
  }, [tokenData, logoutHandler]);
  
  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  };
  
  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;
