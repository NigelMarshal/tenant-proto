import React from "react";
import { ScheduleOutlined, CalendarTwoTone } from "@ant-design/icons";
import { Card, Typography, Progress } from "antd";
import moment from "moment";
const UpcomingPayments = () => {
  const paymentDue = (dateDue) => {
    const start = moment(dateDue);
    let end = moment().startOf("day");
    return Math.round((start - end) / 86400000);
  };
  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title="Upcoming Payments"
        bordered={true}
        actions={[
          <CalendarTwoTone
            style={{ fontSize: "23px" }}
            key="AddToCalendar"
            onClick={() => {
              window.open("https://www.google.com/calendar/");
            }}
          />,
        ]}
      >
        <Card.Meta
          avatar={<ScheduleOutlined style={{ fontSize: "23px" }} />}
          title="Your next rent payment is due on:"
        />
        <Typography.Paragraph
          type="warning"
          style={{ paddingTop: "1rem", fontWeight: "500" }}
        >
          April 20th 2023 ({paymentDue("2023-04-20")} days away)
        </Typography.Paragraph>
        <div style={{ width: 200 }}>
          <Progress percent={85} size="small" />
          <p>1 rent payment installment left</p>
        </div>
      </Card>
    </div>
  );
};

export default UpcomingPayments;
