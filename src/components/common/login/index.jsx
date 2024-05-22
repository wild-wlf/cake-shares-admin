import React, { useState } from "react";
import Image from "next/image";
import Form, { useForm } from "@/components/molecules/Form";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "@/context/authContext";
import Field from "@/components/molecules/Field";
import Button from "@/components/atoms/Button";
import CheckBox from "@/components/molecules/CheckBox";
import logo from "../../../_assets/logo.svg";
import loginbanner from "../../../_assets/loginBanner.png";
import { StyledLogin } from "./Login.styles";

const Login = () => {
  const { onLogin, loading } = useContextHook(AuthContext, (v) => ({
    onLogin: v.onLogin,
    loading: v.loading,
  }));
  const [form] = useForm();
  return (
    <StyledLogin>
      <div className="loginWrap">
        <div className="logo">
          <Image src={logo} alt="logo" />
        </div>
        <strong className="title">
          Welcome Back! <br /> you have been missed.
        </strong>

        <div className="formWrap">
          <Form form={form} onSubmit={onLogin}>
            <Form.Item
              invert
              type="text"
              label="Username"
              name="username"
              sm
              rounded
              placeholder="jhondoe@gmail.com"
              rules={[
                {
                  required: true,
                  message: "Username is Required",
                },
              ]}
            >
              <Field invert />
            </Form.Item>
            <Form.Item
              invert
              type="password"
              label="Password"
              name="password"
              sm
              rounded
              placeholder="****************"
              rules={[
                {
                  required: true,
                  message: "Password is Required",
                },
              ]}
            >
              <Field invert />
            </Form.Item>
            <div className="formAction">
              <CheckBox label="Remember me" color />
            </div>
            <Button
              lg
              block
              htmlType={loading ? "button" : "submit"}
              variant="dark"
            >
              Sign in
            </Button>
          </Form>
        </div>
      </div>
      <div className="loginBanner">
        <div className="imageWrap">
          <Image src={loginbanner} alt="loginbanner" />
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
