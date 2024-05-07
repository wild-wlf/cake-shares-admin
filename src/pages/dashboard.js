import SellerDetailBar from "@/components/atoms/SellerDetailBar/SellerDetailBar";
import PortfolioTable from "@/components/common/Portfolio/PortfolioTable";
import SellerTopBar from "@/components/common/SellerTopBar/SellerTopBar";
import SellerWallet from "@/components/common/SellerWallet/SellerWallet";
import { SellerContainer } from "@/styles/GlobalStyles.styles";
import React from "react";
import handIcon from "../_assets/handIcon.png";
import DataTabs from "@/components/molecules/DataTabs";
import CenterModal from "@/components/molecules/Modal/CenterModal";
import Switch from "@/components/molecules/Switch";

const dashoard = () => {
  const data = [
    {
      label: "Dashboard",
      content: "hjhk",
    },
    {
      label: "portfolio",
      content: "portfolio",
    },
    {
      label: "Private Chat",
      content: "Private Chat",
    },
    {
      label: "Stakeholder Chat",
      content: (
        <>
          <Switch onChange={(e) => console.log(e)} label="Select All" />
        </>
      ),
    },
    {
      label: "Permissions",
      content: "Permissions",
    },
    {
      label: "Roles",
      content: "Roles",
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
      {/* <CenterModal open={true} width="955" title="Customize Permissions">
        <DataTabs data={data} />
      </CenterModal> */}
    </div>
  );
};

export default dashoard;
