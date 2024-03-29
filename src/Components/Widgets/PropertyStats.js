import React from "react";
import { HomeTwoTone } from "@ant-design/icons";
import { Card } from "antd";
const PropertyStats = () => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card title="About your Home " bordered={true}>
        <Card.Meta
          avatar={<HomeTwoTone style={{ fontSize: "23px" }} />}
          title="Property Stats"
        />
        <div className="property-stats">
          <p>Property Type: Studio</p>
          <p>Property Size: 839 sqft / 78 sqm </p>
          <p>Location: JLT, Cluster Z</p>
          <p>Ejari Number: 010893923EJ</p>
          <p>Makani Number: 1023916742</p>
          <p>Cost: 90,000 AED (Cheque)</p>
        </div>
      </Card>
    </div>
  );
};

export default PropertyStats;
