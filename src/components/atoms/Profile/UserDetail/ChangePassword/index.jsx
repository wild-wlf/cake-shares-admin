import React from "react";
import { StyledEditForm } from "../EditBank/EditForm.styles";
import Form from "@/components/molecules/Form/Form";
import { useForm } from "@/components/molecules/Form";
import Button from "@/components/atoms/Button";
import Field from "@/components/molecules/Field";

const ChangePassword = () => {
  const [form] = useForm();
  function handelSubmit(e) {}
  return (
    <StyledEditForm>
      <Form form={form} onSubmit={handelSubmit}>
        <Form.Item
          type="password"
          label="Current Password"
          name="current_Password"
          sm
          rounded
          placeholder="Enter Current Password"
          rules={[
            { required: true },
            {
              pattern: /^.{0,40}$/,
              message: "Maximum Character Length is 256",
            },
          ]}
        >
          <Field />
        </Form.Item>
        <div className="combine-fields">
          <Form.Item
            type="password"
            label="New Password"
            name="new_Password"
            sm
            rounded
            placeholder="Enter New Password"
            rules={[
              { required: true },
              {
                pattern: /^.{0,40}$/,
                message: "Maximum Character Length is 256",
              },
            ]}
          >
            <Field />
          </Form.Item>
          <Form.Item
            type="password"
            label="Confirm Password"
            name="confirm_Password"
            sm
            rounded
            placeholder="confirm password"
            rules={[
              { required: true },
              {
                pattern: /^.{0,40}$/,
                message: "Maximum Character Length is 256",
              },
            ]}
          >
            <Field />
          </Form.Item>
        </div>
        <Button rounded md btntype="primary" width="170" htmlType="submit">
          Change Password
        </Button>
      </Form>
    </StyledEditForm>
  );
};

export default ChangePassword;
