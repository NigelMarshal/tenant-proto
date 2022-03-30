import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  const loginHandler = () => {
    loginWithRedirect();
  };
  const logoutHandler = () => {
    logout();
  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={loginHandler}>Login</button>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Login;
