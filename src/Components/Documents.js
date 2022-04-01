import React from "react";
import { List } from "antd";
import { FilePdfTwoTone } from "@ant-design/icons";
const data = [
  {
    title: "Passport Copy",
    description: "Personal document",
  },
  {
    title: "Tenancy Contract",
    description: "Critical document",
  },
  {
    title: "Ejari",
    description: "Legal",
  },
  {
    title: "Building Map",
    description: "misc",
  },
];
const Documents = () => {
  //Map out dummy files with example pdfs
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      style={{ padding: "3rem" }}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<FilePdfTwoTone />}
            title={
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
              >
                {item.title}
              </a>
            }
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
};

export default Documents;
