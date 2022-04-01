import React from "react";
import { Form, Select, Button, Upload, Typography } from "antd";
import { FileImageOutlined } from "@ant-design/icons";
const { Option } = Select;
//Form spacing
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

//Display file name on upload
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const MaintenanceRequest = () => {
  return (
    <Form name="validate_other" {...formItemLayout}>
      <Form.Item>
        <Typography.Title level={1} style={{ padding: "1rem" }}>
          Submit a maintenance request
        </Typography.Title>
      </Form.Item>
      <Form.Item
        name="what issue are you facing?"
        label="What issue are you facing?"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please select a category",
          },
        ]}
      >
        <Select placeholder="Please select request type">
          <Option value="repair">Repair</Option>
          <Option value="cleaning">AC Cleaning</Option>
          <Option value="utilities">Water/Electricity</Option>
          <Option value="structure">Structural</Option>
          <Option value="plumbing">Plumbing</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Attach pictures of issue">
        <Form.Item
          name="dragger"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <FileImageOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MaintenanceRequest;
