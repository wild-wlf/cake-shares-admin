import React from "react";
import { SuccessfulModalWrapper } from "./SuccessfulModal.style";

const SuccessfulModal = ({ title ,text}) => {
  return (
    <SuccessfulModalWrapper>
      <h2>{title}</h2>
      <p>{text}</p>
    </SuccessfulModalWrapper>
  );
};

export default SuccessfulModal;
