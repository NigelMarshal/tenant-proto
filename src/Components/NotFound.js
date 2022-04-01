import React from "react";
import { Link } from "react-router-dom";
import { Layout, Typography } from "antd";
const NotFound = () => (
  <Layout className="notfound-container">
    <Typography.Title>Whoops! 404</Typography.Title>
    <Link style={{ fontSize: "2rem" }} to="/">
      Go Home
    </Link>
  </Layout>
);

export default NotFound;
