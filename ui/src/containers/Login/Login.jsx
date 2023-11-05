import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";

import { Form, Input, Button, Typography, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import helpers from "../../utils/helper";
import CONSTANTS from "../../utils/constants";

import "./Login.css";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { context, setContext } = useContext(AuthContext);
  useEffect(() => {
    if (context.isAuthenticated) {
      navigate("/home");
    }
  }, [context, navigate]);

  const onFinish = async (values) => {
    setError("");
    try {
      await axios.post(`${CONSTANTS.API_BASE_URL}auth/login`, values, {
        withCredentials: true,
      });
      const token = helpers.getCookie("token");
      const tokenData = jwtDecode(token);
      setContext({ ...context, isAuthenticated: true, theme: tokenData.theme });
    } catch (err) {
      console.error(err);
      setError(err.response.data.message || CONSTANTS.DEFAULT_ERROR_MESSAGE);
    }
  };

  return (
    <div className="login-container d-flex j-center a-center">
      <div className="section  font-50">
        <Typography.Title className="t-align-center">
          User Preference Management
        </Typography.Title>
      </div>
      <Divider type="vertical" />
      <div className="d-flex j-center a-center f-dir-col section">
        <Typography.Text className="d-flex j-center a-center font-50 m-20">
          <UserOutlined className="user-icon" />
        </Typography.Text>
        <Form name="login-form" className="w-50" onFinish={onFinish}>
          <Form.Item
            name="userName"
            rules={[
              {
                required: true,
                message: "Please enter your username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Typography.Text type="danger">{error}</Typography.Text>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
