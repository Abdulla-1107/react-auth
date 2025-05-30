import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { Button, Form, Input, Typography, Select } from "antd";
import type { FormProps } from "antd";
import { useGetRegionsQuery } from "../redux/api/region.api";
import { useRegisterAuthMutation } from "../redux/api/auth.api";
import ImageUpload from "./ImageUpload";

const { Title } = Typography;

type FieldType = {
  email?: string;
  firstname?: string;
  lastname?: string;
  regionId?: string;
  password?: string;
  img?: string;
};

const Register = () => {
  const email = useSelector((state: RootState) => state.auth.email);
  const { data } = useGetRegionsQuery({});
  const options = data?.data?.map((item: any) => ({
    value: item.id,
    label: item.name,
  }));
  const [registerAuth, { isLoading }] = useRegisterAuthMutation();
  const [img, setImg] = useState("");

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    values.img = img;
    registerAuth(values)
      .unwrap()
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br flex items-center justify-center px-4 py-8">
      <div className="max-w-[400px] w-full bg-white shadow-2xl rounded-2xl p-6 space-y-4">
        <Title level={3} className="!text-center !text-blue-600">
          Create an Account
        </Title>

        <div>
          <p className="text-gray-600 font-medium mb-2">Upload your image</p>
          <ImageUpload onImageUpload={(url) => setImg(url || "image")} />
        </div>

        <Form
          name="register"
          initialValues={{ email }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldType>
            label="First name"
            name="firstname"
            rules={[
              { required: true, message: "Please input your firstname!" },
            ]}
          >
            <Input className="rounded-lg py-2" placeholder="John" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Last name"
            name="lastname"
            rules={[{ required: true, message: "Please input your lastname!" }]}
          >
            <Input className="rounded-lg py-2" placeholder="Doe" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Region"
            name="regionId"
            rules={[{ required: true, message: "Please select region!" }]}
          >
            <Select
              className="rounded-lg"
              placeholder="Select your region"
              options={options}
            />
          </Form.Item>

          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input className="rounded-lg py-2" disabled />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              className="rounded-lg py-2"
              placeholder="********"
            />
          </Form.Item>

          <Form.Item>
            <Button
              loading={isLoading}
              htmlType="submit"
              className="w-full h-[44px] bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition duration-200"
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default React.memo(Register);
