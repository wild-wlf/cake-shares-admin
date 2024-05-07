import React from "react";
import { Container } from "../BankModal/BankStyles";
import Field from "../Field";
import Form, { useForm } from "../Form";
import Button from "@/components/atoms/Button";
import ProfileMenuImage from "../../../_assets/ProfileMenuImage.png";
import Image from "next/image";

const UpdatePasswordModal = () => {
  const [form] = useForm();

  return (
    <Container>
      <Image src={ProfileMenuImage} className="ProfilePicture" />
      <Form form={form}>
        <div className="feildContainer">
          <div className="wrapper">
            <Form.Item
              label="Change Password"
              type="password"
              rounded
              sm
              name="Change Password"
              placeholder="******************"
              rules={[
                {
                  required: true,
                  message: "Password is Required",
                },
              ]}
            >
              <Field />
            </Form.Item>
          </div>
          <div className="wrapper">
            <Form.Item
              label="Confirm New Password"
              type="password"
              rounded
              sm
              name="Confirm New Password"
              placeholder="******************"
              rules={[
                {
                  required: true,
                  message: "New Password is Required",
                },
              ]}
            >
              <Field />
            </Form.Item>
          </div>
        </div>

        <Button rounded width={"170px"} height={"40px"} sm btntype="green">
          Save Changes
        </Button>
      </Form>
    </Container>
  );
};

export default UpdatePasswordModal;
