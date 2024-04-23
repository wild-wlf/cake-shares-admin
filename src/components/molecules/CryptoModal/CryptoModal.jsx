import React, { useState } from "react";
import { Container } from "./CryptoMOdalStyles";
import Select from "@/components/atoms/Select";
import Form, { useForm } from "../Form";
import {
  ButtonConfirm,
  ButtonContainer,
} from "@/components/common/MyWallet/WalletStyles";

const CryptoModal = ({ walletLinkModal }) => {
  const cryptoWalletNames = [
    {
      label: "Bitcoin Wallet",
      value: "Bitcoin Wallet",
    },
    {
      label: "Ethereum Wallet",
      value: "Ethereum Wallet",
    },
    {
      label: "Ripple Wallet",
      value: "Ripple Wallet",
    },
    {
      label: "Litecoin Wallet",
      value: "Litecoin Wallet",
    },
    {
      label: "Bitcoin Cash Wallet",
      value: "Bitcoin Cash Wallet",
    },
    {
      label: "Cardano Wallet",
      value: "Cardano Wallet",
    },
    {
      label: "Polkadot Wallet",
      value: "Polkadot Wallet",
    },
  ];
  const { form } = useForm();

  return (
    <Container>
      <h3>
        Choose the crypto wallet you want to transfer funds from to top up your
        balance.
      </h3>
      <Form form={form}>
        <Form.Item
          label={"Select Crypto Wallet"}
          options={cryptoWalletNames}
          rules={[
            {
              required: true,
              message: "Crypto wallet should be selected",
            },
          ]}
        >
          <Select />
        </Form.Item>
      </Form>

      <ButtonContainer>
        <ButtonConfirm onClick={() => walletLinkModal()}>
          Link wallet
        </ButtonConfirm>
      </ButtonContainer>
    </Container>
  );
};

export default CryptoModal;
