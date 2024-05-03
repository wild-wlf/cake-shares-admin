import PortfolioTable from "@/components/common/Portfolio/PortfolioTable";
import { SellerContainer } from "@/styles/GlobalStyles.styles";
import React from "react";

const portfolio = () => {
  return (
    <SellerContainer>
      <PortfolioTable />
    </SellerContainer>
  );
};

export default portfolio;
