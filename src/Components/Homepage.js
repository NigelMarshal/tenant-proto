import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import { Card, Layout, Row, Col } from "antd";
import UpcomingPayments from "./Widgets/UpcomingPayments";
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
          <UpcomingPayments />
        </Col>
        <Col className="gutter-row" span={8}>
          <Card>
            <Card.Meta
              avatar={<HomeOutlined />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
        <Col className="gutter-row" span={8}>
          <Card>
            <Card.Meta
              avatar={<HomeOutlined />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
      </Row>
    </Layout.Content>
  );
};

export default Homepage;
