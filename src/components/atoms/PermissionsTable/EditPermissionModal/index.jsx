import React from "react";
import { CreatePermissionModalWrapper } from "./EditPermissionModal.style";
import Form from "@/components/molecules/Form/Form";
import Field from "@/components/molecules/Field";
import Button from "../../Button";
import { useForm } from "@/components/molecules/Form";
import Select from "../../Select";

const EditPermissionModal = ({ closeModal, value }) => {
  const [form] = useForm();

  const arr = [
    {
      label: "Admin",
      value: "admin",
    },
    {
      label: "Super_Admin",
      value: "super_admin",
    },
  ];

  return (
    <CreatePermissionModalWrapper>
      <Form form={form}>
        <div className="input-wrapper">
          <Form.Item
            type="text"
            label="Route"
            name="route"
            placeholder="/route"
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
            label="Can Do"
            name="can_do"
            placeholder={value.can_do}
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
            label="Description"
            name="description"
            placeholder={value.desc}
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
            label="Parent"
            name="AccountHolderName"
            placeholder="Select"
            rules={[
              { required: true },
              {
                message: "Maximum Character Length is 256",
              },
            ]}
          >
            <Select options={arr} isMulti />
          </Form.Item>
        </div>
        <div>
          <Button sm rounded btntype="green" width="170px" onClick={closeModal}>
            Save Changes
          </Button>
        </div>
      </Form>
    </CreatePermissionModalWrapper>
  );
};

export default EditPermissionModal;
