import React from "react";
import { Container } from "./Style";

const SuccessModal = ({ heading, paragraph }) => {
  return (
    <Container>
      <h3 className="heading">{heading}</h3>
      <p>{paragraph}</p>
    </Container>
  );
};

export default SuccessModal;
