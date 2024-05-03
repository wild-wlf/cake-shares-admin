import React from "react";
import { Container, Data } from "./SellerBarStyles";

const SellerDetailBar = () => {
  return (
    <Container>
      <Data>
        <span className="f-span">Banking Product</span>
        <h1>$5,000</h1>
        <span className="l-span">2 Investments</span>
      </Data>
      <Data>
        <span className="f-span">Properties</span>
        <h1>$30,000</h1>
        <span className="l-span">12 Investments</span>
      </Data>
      <Data>
        <span className="f-span">Ventures</span>
        <h1>$2,000</h1>
        <span className="l-span">1 Investments</span>
      </Data>
      <Data>
        <span className="f-span">Bazar</span>
        <h1>$2,000</h1>
        <span className="l-span">1 Investments</span>
      </Data>
      <Data>
        <span className="f-span">Total Investment</span>
        <h1>$37,000</h1>
        <span className="l-span">16 Investments</span>
      </Data>
    </Container>
  );
};

export default SellerDetailBar;
