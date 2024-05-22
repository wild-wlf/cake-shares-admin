import Profile from "@/components/atoms/Profile";
import UserDetail from "@/components/atoms/Profile/UserDetail";
import Categories from "@/components/atoms/categories";
import SellerTopBar from "@/components/common/SellerTopBar/SellerTopBar";
import { SellerContainer } from "@/styles/GlobalStyles.styles";
import React from "react";

const index = () => {
  return (
    <SellerContainer>
      <SellerTopBar
        title={"Settings"}
        tagLine={"Here you can manage your Profile & Account Settings"}
      />
      <Profile />
      <div className="child-Wrapper">
        <UserDetail />
        <Categories title="My Fully Funded Products" />
      </div>
    </SellerContainer>
  );
};

export default index;
