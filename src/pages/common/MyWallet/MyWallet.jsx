import React from "react";
import { StyledContainer } from "./WalletStyles";
import Button from "@/components/atoms/Button";
import btnLeftArrow from "../../_assets/btnLeftArrow.png";
import walletWhite from "../../_assets/walletWhite.png";
import Image from "next/image";

const MyWallet = () => {
  return (
    <StyledContainer>
      <div className="btnDiv">
        <Button rounded sm btntype="gray">
          <Image src={btnLeftArrow} />
          Go Back
        </Button>
        <Button rounded sm btntype="green">
          Top Up Wallet
          <Image src={walletWhite} />
        </Button>
      </div>
      <div className="textContainer">
        <h1 className="title">MyWallet</h1>
        <div className="credit">
          <span>Total Credit:</span> <br />
          <h1>$35,265.000</h1>
        </div>
      </div>
    </StyledContainer>
  );
};

export default MyWallet;
