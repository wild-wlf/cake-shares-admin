import React from "react";
import { CreatePermissionModalWrapper } from "./CreatePermissionModal.style";
import Form from "@/components/molecules/Form/Form";
import Field from "@/components/molecules/Field";
import Button from "../../Button";
import { useForm } from "@/components/molecules/Form";

const CreatePermissionModal = () => {
  const [form] = useForm();

  return (
    <CreatePermissionModalWrapper>
      <Form form={form}>
        <div className="input-wrapper">
          <Form.Item
            type="text"
            label="Account Holder Name"
            name="AccountHolderName"
            placeholder="Alex Mertiz"
            rules={[
              { required: true },
              {
                message: "Maximum Character Length is 256",
              },
            ]}
          >
            <Field />
          </Form.Item>
          <Form.Item
            type="text"
            label="Account Holder Name"
            name="AccountHolderName"
            placeholder="Alex Mertiz"
            rules={[
              { required: true },
              {
                message: "Maximum Character Length is 256",
              },
            ]}
          >
            <Field />
          </Form.Item>
        </div>
        <div className="input-wrapper">
          <Form.Item
            type="text"
            label="Account Holder Name"
            name="AccountHolderName"
            placeholder="Alex Mertiz"
            rules={[
              { required: true },
              {
                message: "Maximum Character Length is 256",
              },
            ]}
          >
            <Field />
          </Form.Item>
          <Form.Item
            type="text"
            label="Account Holder Name"
            name="AccountHolderName"
            placeholder="Alex Mertiz"
            rules={[
              { required: true },
              {
                message: "Maximum Character Length is 256",
              },
            ]}
          >
            <Field />
          </Form.Item>
        </div>
        <div>
          <Button sm rounded btntype="green" width="170px" htmlType={"submit"}>
            Create Permission
          </Button>
        </div>
      </Form>
    </CreatePermissionModalWrapper>
  );
};

export default CreatePermissionModal;
