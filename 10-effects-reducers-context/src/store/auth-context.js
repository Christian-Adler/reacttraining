import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, // Dummy - damit die IDE das in Autocompletion anzeigt.
});

export default AuthContext;
