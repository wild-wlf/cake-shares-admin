import React from "react";
import Form, { useForm } from "../Form";
import Field from "../Field";
import { ButtonContainer } from "@/components/common/MyWallet/WalletStyles";
import Button from "@/components/atoms/Button";
import { Container } from "../CryptoModal/CryptoMOdalStyles";

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
        <Button
          rounded
          width={"170px"}
          height={"40px"}
          sm
          btntype="green"
          onClick={() => saveDetailsModal()}
        >
          Top up now
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default AddAmountModal;
