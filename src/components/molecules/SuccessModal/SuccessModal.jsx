import React from "react";
import { Container } from "./Style";

const SuccessModal = () => {
  return (
    <Container>
      <h3 className="heading">Statement Sent Successfully!</h3>
      <p>
        Your account statement is now available at alex123@gmail.com. Be sure to
        check your spam folder if you don't see it right away.
      </p>
    </Container>
  );
};

export default SuccessModal;
