import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { Button, Form, Input, Typography, message } from "antd";
import type { FormProps } from "antd";
import { useLoginAuthMutation } from "../redux/api/auth.api";

const { Title } = Typography;

type FieldType = {
  email?: string;
  password?: string;
};

const Login = () => {
  const email = useSelector((state: RootState) => state.auth.email);
  const [loginAuth, { isLoading }] = useLoginAuthMutation();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    values.email = email;
    loginAuth(values)
      .unwrap()
      .then((res) => {
        message.success("Login successful!");
        console.log("Login success:", res);
      })
      .catch((err) => {
        const errorMessage =
          err?.data?.message || "Login failed. Please try again.";
        message.error(errorMessage);
        console.error("Login error:", err);
      });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="max-w-[340px] w-full">
        <Title level={3}>Login</Title>

        <Form
          name="login"
          onFinish={onFinish}
          initialValues={{ email }}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item<FieldType> label="Email" name="email">
            <Input disabled />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button
              loading={isLoading}
              htmlType="submit"
              className="w-full h-[44px] bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition duration-200"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default React.memo(Login);
