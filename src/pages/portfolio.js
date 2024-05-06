import PortfolioTable from "@/components/common/PortfolioTable";
import SellerTopBar from "@/components/common/SellerTopBar/SellerTopBar";
import { SellerContainer } from "@/styles/GlobalStyles.styles";
import React from "react";

const portfolio = () => {
  return (
    <SellerContainer>
      <SellerTopBar
        title={"My Portfolio"}
        tagLine={"You have total 101 Products in your Portfolio right now!"}
      />
      <PortfolioTable />
    </SellerContainer>
  );
};

export default portfolio;
