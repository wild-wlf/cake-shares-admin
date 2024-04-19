import React from "react";
import { Container, Button } from "./BankStyles";
import Field from "../Field";
import Form, { useForm } from "../Form";

const BankModal = ({ openAccountModal }) => {
  const [form] = useForm();

  return (
    <Container>
      <h3 className="Heading">
        Almost there! Fill in the details to top up your wallet.
      </h3>

      <Form form={form}>
        <div className="feildContainer">
          <div className="wrapper">
            <Form.Item
              label="IBAN, SWIFT or BIC Number"
              type="input"
              rounded
              sm
              name="IBAN number"
              placeholder="PK033310084246213"
              rules={[
                {
                  required: true,
                  message: "IBAN, SWIFT or BIC Number is Required",
                },
              ]}
            >
              <Field />
            </Form.Item>
          </div>
          <div className="wrapper">
            <Form.Item
              label="User ID"
              type="email"
              rounded
              sm
              name="email"
              placeholder="33445554"
              rules={[
                {
                  required: true,
                  message: "User ID is Required",
                },
              ]}
            >
              <Field />
            </Form.Item>
          </div>
        </div>

        <div className="feildContainer">
          <div className="wrapper">
            <Form.Item
              label="First Name (CakeSahre Profile)"
              type="input"
              rounded
              sm
              name="First Name"
              placeholder="Alex"
              rules={[
                {
                  required: true,
                  message: "First Name Required",
                },
              ]}
            >
              <Field />
            </Form.Item>
          </div>
          <div className="wrapper">
            <Form.Item
              label="Last Name (CakeSahre Profile)"
              type="input"
              rounded
              sm
              name="Last Name"
              placeholder="Mertiz"
              rules={[
                {
                  required: true,
                  message: "Last Name Required",
                },
              ]}
            >
              <Field />
            </Form.Item>
          </div>
        </div>
      </Form>

      <Button onClick={() => openAccountModal()}>Continue</Button>
    </Container>
  );
};

export default BankModal;
