import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Layout, Menu, Typography, Avatar } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const menuHandler = () => {
    setCollapsed(!collapsed);
  };

  const loginHandler = () => {
    loginWithRedirect();
  };
  const logoutHandler = () => {
    logout();
  };
  return (
    <>
      <Layout>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={menuHandler}>
            <div className="logo-container">
              <Avatar src={<HomeOutlined />} size="large" />
              <Typography.Title level={3} className="logo">
                <Link to="/">ATP</Link>
              </Typography.Title>
            </div>
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                <Link to="/receipts">Receipts</Link>
              </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="3">User 1</Menu.Item>
                <Menu.Item key="4">User 2</Menu.Item>
                <Menu.Item key="5">User 3</Menu.Item>
              </SubMenu>
              <Menu.Item key="9" icon={<FileOutlined />}>
                Files
              </Menu.Item>
            </Menu>
          </Sider>

          <Layout className="site-layout">
            <Header className="header">
              {isAuthenticated && (
                <Typography.Title level={1}>
                  Hello, {user.name}!
                </Typography.Title>
              )}
              {isAuthenticated && (
                <Avatar
                  style={{ float: "right" }}
                  src={user.picture}
                  size="large"
                />
              )}
              <div>
                {!isAuthenticated && (
                  <button onClick={loginHandler}>Login</button>
                )}
                {isAuthenticated && (
                  <button onClick={logoutHandler}>Logout</button>
                )}
              </div>
            </Header>
            <Content style={{ margin: "0 16px" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <p>Dummy Data</p>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Test footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Navbar;
