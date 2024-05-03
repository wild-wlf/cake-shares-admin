import React from "react";
import { SellerContainer } from "../styles/GlobalStyles.styles";
import SellerWallet from "@/components/common/SellerWallet/SellerWallet";
import SellerDetailBar from "@/components/atoms/SellerDetailBar/SellerDetailBar";
import PortfolioTable from "@/components/common/PortfolioTable";

const seller = () => {
  return (
    <SellerContainer>
      <SellerWallet />
      <SellerDetailBar sm={true} />
      <PortfolioTable title="My Portfolio" />
    </SellerContainer>
  );
};

export default seller;
