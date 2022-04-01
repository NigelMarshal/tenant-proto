import React from "react";
import { Layout, Row, Col } from "antd";
import { UpcomingPayments, MaintenanceStatus, PropertyStats } from "./Widgets";
import News from "./Widgets/News";
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
      <Layout.Content>
        <News />
      </Layout.Content>
    </Layout.Content>
  );
};

export default Homepage;
