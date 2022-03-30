import React from "react";
import { useAuth0, isAuthenticated } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const loginHandler = () => {
    loginWithRedirect();
  };
  const logoutHandler = () => {
    logout();
  };
  return (
    <div>
      <h1>Login</h1>
      {!isAuthenticated && <button onClick={loginHandler}>Login</button>}
      {isAuthenticated && <button onClick={logoutHandler}>Logout</button>}
    </div>
  );
};

export default Login;
