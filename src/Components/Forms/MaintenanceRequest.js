import React from "react";
import { Form, Select, Button, Upload, Typography, message } from "antd";
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

//Mock upload action
const uploadProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
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
          <Upload.Dragger name="files" {...uploadProps}>
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
