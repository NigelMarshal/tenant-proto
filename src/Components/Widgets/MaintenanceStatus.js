import React from "react";
import { ToolOutlined } from "@ant-design/icons";
import { Card, Typography } from "antd";
const MaintenanceStatus = () => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card title="Maintenance Status" bordered={true}>
        <Card.Meta avatar={<ToolOutlined />} title="Maintenance Requests" />
        <Typography.Paragraph type="success" style={{ paddingTop: "1rem" }}>
          No pending maintenance requests
        </Typography.Paragraph>
      </Card>
    </div>
  );
};

export default MaintenanceStatus;
