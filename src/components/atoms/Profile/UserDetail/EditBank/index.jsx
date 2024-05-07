import Button from "@/components/atoms/Button";
import Field from "@/components/molecules/Field";
import { useForm } from "@/components/molecules/Form";
import React from "react";
import { StyledEditForm } from "./EditForm.styles";
import Form from "@/components/molecules/Form/Form";

const EditBank = () => {
  const [form] = useForm();

  return (
    <StyledEditForm form={form}>
      <div className="combine-fields">
        <Form.Item
          type="text"
          label="Bank Name"
          name="bank_name"
          sm
          rounded
          placeholder="Bank of America"
          rules={[
            {
              pattern: /^.{0,40}$/,
              required: true,
              message: "Maximum Character Length is 256",
            },
          ]}
        >
          <Field />
        </Form.Item>
        <Form.Item
          type="text"
          label="IBAN"
          name="IBAN"
          sm
          rounded
          placeholder="PK033310084246213"
          rules={[
            {
              pattern: /^.{0,256}$/,
              required: true,
              message: "Maximum Character Length is 256",
            },
          ]}
        >
          <Field />
        </Form.Item>
        <Form.Item
          type="text"
          label="SWIFT / BIC Number"
          name="swiftNumber"
          sm
          rounded
          placeholder="PK033310084246213"
          rules={[
            {
              pattern: /^.{0,40}$/,
              required: true,
              message: "Maximum Character Length is 256",
            },
          ]}
        >
          <Field />
        </Form.Item>
        <Form.Item
          type="text"
          label="User ID"
          name="user_id"
          sm
          rounded
          placeholder="33445554"
          rules={[
            {
              pattern: /^.{0,256}$/,
              required: true,
              message: "Maximum Character Length is 256",
            },
          ]}
        >
          <Field />
        </Form.Item>
      </div>

      <Button rounded md btntype="primary" width="170" htmlType="submit">
        Save Changes
      </Button>
    </StyledEditForm>
  );
};

export default EditBank;
