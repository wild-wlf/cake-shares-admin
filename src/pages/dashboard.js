import DetailBar from "@/components/atoms/DetailBar";
import SellerDetailBar from "@/components/atoms/SellerDetailBar/SellerDetailBar";
import MyWallet from "@/components/common/MyWallet/MyWallet";
import PortfolioTable from "@/components/common/Portfolio/PortfolioTable";
import SellerWallet from "@/components/common/SellerWallet/SellerWallet";
import TopBar from "@/components/common/TopBar/TopBar";
import TransactionTable from "@/components/common/TransactionTable";
import { SellerContainer } from "@/styles/GlobalStyles.styles";
import React from "react";

const dashoard = () => {
  return (
    <div>
      <SellerContainer>
        <SellerWallet />
        <SellerDetailBar sm={true} />
        <PortfolioTable title="My Portfolio" />
      </SellerContainer>
    </div>
  );
};

export default dashoard;
