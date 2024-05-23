import SellerDetailBar from "@/components/atoms/SellerDetailBar/SellerDetailBar";
import PortfolioTable from "@/components/common/Portfolio/PortfolioTable";
import SellerTopBar from "@/components/common/SellerTopBar/SellerTopBar";
import SellerWallet from "@/components/common/SellerWallet/SellerWallet";
import { SellerContainer } from "@/styles/GlobalStyles.styles";
import React from "react";
import handIcon from "../_assets/handIcon.png";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "@/context/authContext";

const Dashoard = () => {
  const { user } = useContextHook(AuthContext, (v) => ({
    user: v.user,
  }));
  return (
    <div>
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
    </div>
  );
};

export default Dashoard;
