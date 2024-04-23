import React from "react";
import { Container, DetailsContainer, ButtonWrapper } from "./AccountDetsStyle";
import Button from "@/components/atoms/Button";
import { ButtonConfirm } from "@/components/common/MyWallet/WalletStyles";

const AccountDetailModal = ({ closeAccountModal }) => {
  return (
    <Container>
      <p>
        For this payment, please utilize the provided bank account details. Be
        sure to include the reference number in the &quot;Reason&quot; field.
      </p>
      <DetailsContainer>
        <div className="Dets">
          <h4>Bank Name</h4>
          <span>Bank of America</span>
        </div>

        <div className="Dets">
          <h4>Swift/BIC Number</h4>
          <span>123456789123456799</span>
        </div>

        <div className="Dets">
          <h4>Account Name</h4>
          <span>Daud Bongani</span>
        </div>

        <div className="Dets">
          <h4>Account Number</h4>
          <span>123456789123456799</span>
        </div>

        <div className="Dets">
          <h4>Refrence Number</h4>
          <span>45X37</span>
        </div>
      </DetailsContainer>

      <ButtonWrapper>
        <Button
          rounded
          sm
          btntype="download"
          onClick={() => closeAccountModal("download")}
        >
          Download Details
        </Button>
        <ButtonConfirm onClick={() => closeAccountModal("save")}>
          Save my Bank Details
        </ButtonConfirm>
      </ButtonWrapper>
    </Container>
  );
};

export default AccountDetailModal;
