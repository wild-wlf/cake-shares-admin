import Button from "@/components/atoms/Button";
import Field from "@/components/atoms/Field";
import React, { useEffect } from "react";
import { StyledEditForm } from "./EditForm.styles";
import Form from "@/components/molecules/Form/Form";
import { useForm } from "@/components/molecules/Form";

const EditInheritance = () => {
  const [form] = useForm();

  function handelSubmit(e) {
    console.log(e);
  }
  useEffect(() => {
    form.setFieldsValue({
      // full_name: "hamza",
      //  email: admin?.email,
      //  roles: roles?.filter(({ value }) =>
      //    admin?.roles?.find(({ id }) => id === value)
      //  ),
    });
  }, []);
  return (
    <>
      <StyledEditForm>
        <Form form={form} onSubmit={handelSubmit}>
          <div className="combine-fields">
            <Form.Item
              type="text"
              label="Name of Person"
              name="Name of Person"
              sm
              rounded
              placeholder="Jhon Doe"
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
              type="text"
              label="Passport Number"
              name="Passport Number"
              sm
              rounded
              placeholder="123467894562339"
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
              type="text"
              label="Country of Residence"
              name="Country of Residence"
              sm
              rounded
              placeholder="United States"
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
            Add
          </Button>
        </Form>
      </StyledEditForm>
    </>
  );
};

export default EditInheritance;
