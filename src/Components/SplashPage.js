import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SplashPage = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const loginHandler = () => {
    loginWithRedirect();
  };
  return (
    <div>
      SplashPage
      {!isAuthenticated && (
        <button type="primary" onClick={loginHandler}>
          Login
        </button>
      )}
    </div>
  );
};

export default SplashPage;
