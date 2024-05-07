import React from "react";
import { SuccessfulModalWrapper } from "./SuccessfulModal.style";

const SuccessfulModal = ({ title }) => {
  return (
    <SuccessfulModalWrapper>
      <h2>{title}</h2>
    </SuccessfulModalWrapper>
  );
};

export default SuccessfulModal;
