import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import { Card, Layout, Row, Col } from "antd";
import UpcomingPayments from "./Widgets/UpcomingPayments";
import MaintenanceStatus from "./Widgets/MaintenanceStatus";
import PropertyStats from "./Widgets/PropertyStats";
const Homepage = () => {
  return (
    <Layout.Content
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      <Row gutter={16} style={{ padding: "20px" }}>
        <Col className="gutter-row" span={8}>
          <MaintenanceStatus />
        </Col>
        <Col className="gutter-row" span={8}>
          <UpcomingPayments />
        </Col>
        <Col className="gutter-row" span={8}>
          <PropertyStats />
        </Col>
      </Row>
    </Layout.Content>
  );
};

export default Homepage;
