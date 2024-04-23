import React from "react";
import { Container } from "../CryptoModal/CryptoMOdalStyles";
import Form, { useForm } from "../Form";
import Field from "../Field";
import {
  ButtonConfirm,
  ButtonContainer,
} from "@/components/common/MyWallet/WalletStyles";

const AddAmountModal = ({ saveDetailsModal }) => {
  const { form } = useForm();

  return (
    <Container>
      <h3>
        Please enter the amount you want to top up in your cakeshares wallet.
      </h3>
      <Form form={form}>
        <Form.Item
          label={"Enter Amount"}
          rounded
          sm
          name="Amount"
          placeholder="$2,000.00"
          rules={[
            {
              required: true,
              message: "Amount is Required",
            },
          ]}
        >
          <Field />
        </Form.Item>
      </Form>

      <ButtonContainer>
        <ButtonConfirm onClick={() => saveDetailsModal()}>
          Top up now
        </ButtonConfirm>
      </ButtonContainer>
    </Container>
  );
};

export default AddAmountModal;
