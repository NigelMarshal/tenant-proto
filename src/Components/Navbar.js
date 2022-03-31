import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Typography, Avatar } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        top: 0,
        left: 0,
      }}
    >
      <div className="logo-container">
        <Avatar src={<HomeOutlined />} size="large" />
        <Typography.Title level={3} className="logo">
          <Link to="/">ATP</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to="/receipts">Receipts</Link>
        </Menu.Item>
        <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">User 1</Menu.Item>
          <Menu.Item key="4">User 2</Menu.Item>
          <Menu.Item key="5">User 3</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="6" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Navbar;
