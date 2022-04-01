import React from "react";
import { Form, Radio, Button, Checkbox, Typography, DatePicker } from "antd";
import moment from "moment";
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const MovingOutRequest = () => {
  return (
    <Form name="validate_other" {...formItemLayout}>
      <Typography.Title level={1} style={{ padding: "1rem" }}>
        Submit a move out request
      </Typography.Title>

      <Form.Item
        name="radio-group"
        label="Re-painting process"
        rules={[
          {
            required: true,
            message: "Please select an option",
          },
        ]}
      >
        <Radio.Group>
          <Radio value="yes-paint">I will hire a painter</Radio>
          <Radio value="no-paint">
            I will pay the additional re-painting fee
          </Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item name="radio-group" label="Do you need moving help?">
        <Radio.Group>
          <Radio value="yes-help">
            Yes (Additional fee subject to items will apply)
          </Radio>
          <Radio value="no-help">No</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label="Move out date"
        rules={[
          {
            required: true,
            message: "Please select a date",
          },
        ]}
      >
        <DatePicker
          disabledDate={(current) => {
            //Prevent selecting an earlier date
            let customDate = moment().format("YYYY-MM-DD");
            return current && current < moment(customDate, "YYYY-MM-DD");
          }}
        />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        label="I am liable for any damage"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Please confirm you understand")),
          },
        ]}
      >
        <Checkbox>
          I understand I am responsible for any property damage and will be
          charged
        </Checkbox>
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

export default MovingOutRequest;
