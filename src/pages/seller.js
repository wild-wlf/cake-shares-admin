import React from "react";
import { SellerContainer } from "../styles/GlobalStyles.styles";
import SellerWallet from "@/components/common/SellerWallet/SellerWallet";
import SellerDetailBar from "@/components/atoms/SellerDetailBar/SellerDetailBar";
import PortfolioTable from "@/components/common/Portfolio/PortfolioTable";
import SellerTopBar from "@/components/common/SellerTopBar/SellerTopBar";
import handIcon from "../_assets/handIcon.png";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "@/context/authContext";

const Seller = () => {
  const { user } = useContextHook(AuthContext, (v) => ({
    user: v.user,
  }));
  return (
    <SellerContainer>
      <SellerTopBar
        title={`Welcome ${user?.fullName}!`}
        suffix={handIcon}
        tagLine={"Let's explore what's new with your product today!"}
      />
      <SellerWallet />
      <SellerDetailBar sm={true} />
      <PortfolioTable title="My Portfolio" />
    </SellerContainer>
  );
};

export default Seller;
