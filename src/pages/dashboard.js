import SellerDetailBar from "@/components/atoms/SellerDetailBar/SellerDetailBar";
import PortfolioTable from "@/components/common/Portfolio/PortfolioTable";
import SellerTopBar from "@/components/common/SellerTopBar/SellerTopBar";
import SellerWallet from "@/components/common/SellerWallet/SellerWallet";
import { SellerContainer } from "@/styles/GlobalStyles.styles";
import React from "react";
import handIcon from "../_assets/handIcon.png";
import DataTabs from "@/components/molecules/DataTabs";

const dashoard = () => {
  const data = [
    {
      label: "hello",
      content: "hjhk",
    },
    {
      label: "hello",
      content: "jhk",
    },
  ];
  return (
    <div>
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
      {/* <DataTabs data={data} /> */}
    </div>
  );
};

export default dashoard;
