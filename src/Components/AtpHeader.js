import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Layout, Typography, Avatar, Button } from "antd";
const { Header } = Layout;

const AtpHeader = () => {
  const { user, logout } = useAuth0();
  const logoutHandler = () => {
    logout({ returnTo: window.location.origin });
  };
  return (
    <Header className="header">
      <Typography.Title style={{ color: "white", padding: "0 1rem" }} level={3}>
        Hello, {user.name}!
      </Typography.Title>
      <Avatar style={{ float: "right" }} src={user.picture} size="large" />
      <div className="log-action-container">
        <Button type="primary" onClick={logoutHandler}>
          Logout
        </Button>
      </div>
    </Header>
  );
};

export default AtpHeader;
