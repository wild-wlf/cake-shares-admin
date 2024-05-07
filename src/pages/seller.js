import React from "react";
import { SellerContainer } from "../styles/GlobalStyles.styles";
import SellerWallet from "@/components/common/SellerWallet/SellerWallet";
import SellerDetailBar from "@/components/atoms/SellerDetailBar/SellerDetailBar";
import PortfolioTable from "@/components/common/Portfolio/PortfolioTable";
import SellerTopBar from "@/components/common/SellerTopBar/SellerTopBar";
import handIcon from "../_assets/handIcon.png";

const seller = () => {
  return (
    <SellerContainer>
      <SellerTopBar
        title={"Welcome Fostor!"}
        suffix={handIcon}
        tagLine={"Let's explore what's new with your product today!"}
      />
      <SellerWallet />
      <SellerDetailBar sm={true} />
      <PortfolioTable title="My Portfolio" />
    </SellerContainer>
  );
};

export default seller;
