import React from "react";
import { ScheduleOutlined, CalendarTwoTone } from "@ant-design/icons";
import { Card, Typography } from "antd";
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
            key="AddToCalendar"
            onClick={() => {
              window.open("https://www.google.com/calendar/");
            }}
          />,
        ]}
      >
        <Card.Meta
          avatar={<ScheduleOutlined />}
          title="Your next rent payment is due on:"
        />
        <Typography.Paragraph type="warning" style={{ paddingTop: "1rem" }}>
          April 20th 2022 ({paymentDue("2022-04-20")} days)
        </Typography.Paragraph>
      </Card>
    </div>
  );
};

export default UpcomingPayments;
