import React from "react";
import { Container, Button } from "../BankModal/BankStyles";
import Field from "../Field";
import Form, { useForm } from "../Form";

const CardModal = ({ openCardNext }) => {
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
              label="Card Holder Name"
              type="input"
              rounded
              sm
              name="Card Holder Name"
              placeholder="Alez Mertiz"
              rules={[
                {
                  required: true,
                  message: "Card Holder Name is Required",
                },
              ]}
            >
              <Field />
            </Form.Item>
          </div>
          <div className="wrapper">
            <Form.Item
              label="Card Number"
              type="input"
              rounded
              sm
              name="Card Number"
              placeholder="123456789"
              rules={[
                {
                  required: true,
                  message: "Card Number is Required",
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
              label="Expiry Date"
              type="input"
              rounded
              sm
              name="Expiry Date"
              placeholder="02/29"
              rules={[
                {
                  required: true,
                  message: "Expiry Date is Required",
                },
              ]}
            >
              <Field />
            </Form.Item>
          </div>
          <div className="wrapper">
            <Form.Item
              label="CVC Number"
              type="input"
              rounded
              sm
              name="CVC Number"
              placeholder="356"
              rules={[
                {
                  required: true,
                  message: "CVC Number is Required",
                },
              ]}
            >
              <Field />
            </Form.Item>
          </div>
        </div>

        <div className="feildContainer">
          <div className="wrapper fullWidth">
            <Form.Item
              label="Enter Amount"
              type="input"
              rounded
              sm
              name="Amount"
              placeholder="$2,000,00"
              rules={[
                {
                  required: true,
                  message: "Amount Required",
                },
              ]}
            >
              <Field />
            </Form.Item>
          </div>
        </div>
      </Form>

      <Button onClick={() => openCardNext()}>Top up Now</Button>
    </Container>
  );
};

export default CardModal;
