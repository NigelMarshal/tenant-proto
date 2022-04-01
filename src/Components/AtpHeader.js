import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Layout, Typography, Avatar, Button } from "antd";
const { Header } = Layout;

const AtpHeader = () => {
  const { user, isAuthenticated, logout } = useAuth0();
  const logoutHandler = () => {
    logout();
  };
  return (
    <Header className="header">
      {isAuthenticated && (
        <Typography.Title
          style={{ color: "white", padding: "0 1rem" }}
          level={3}
        >
          Hello, {user.name}!
        </Typography.Title>
      )}
      {isAuthenticated && (
        <Avatar style={{ float: "right" }} src={user.picture} size="large" />
      )}
      <div className="log-action-container">
        {isAuthenticated && (
          <Button type="primary" onClick={logoutHandler}>
            Logout
          </Button>
        )}
      </div>
    </Header>
  );
};

export default AtpHeader;
