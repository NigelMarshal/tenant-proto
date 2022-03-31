import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Layout, Typography, Avatar } from "antd";
const { Header } = Layout;

const AtpHeader = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const loginHandler = () => {
    loginWithRedirect();
  };
  const logoutHandler = () => {
    logout();
  };
  return (
    <Header className="header">
      {isAuthenticated && (
        <Typography.Title level={1}>Hello, {user.name}!</Typography.Title>
      )}
      {isAuthenticated && (
        <Avatar style={{ float: "right" }} src={user.picture} size="large" />
      )}
      <div>
        {!isAuthenticated && <button onClick={loginHandler}>Login</button>}
        {isAuthenticated && <button onClick={logoutHandler}>Logout</button>}
      </div>
    </Header>
  );
};

export default AtpHeader;
