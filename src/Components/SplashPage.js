import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, Layout, Button } from "antd";
import splashAvatar from "../assets/images/splash-avatar.jpg";
import ParticleBackground from "./ParticleBackground";
const SplashPage = () => {
  //Auth0 login redirection handling
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const loginHandler = () => {
    loginWithRedirect();
  };
  return (
    <Layout className="splash-container">
      <ParticleBackground />
      {!isAuthenticated && (
        <Card
          title="Tenant Portal"
          className="splash-card"
          style={{ borderRadius: "10px" }}
          cover={<img alt="example" src={splashAvatar} />}
        >
          <Button type="primary" shape="round" onClick={loginHandler}>
            View your Tenant Dashboard
          </Button>
        </Card>
      )}
    </Layout>
  );
};

export default SplashPage;
