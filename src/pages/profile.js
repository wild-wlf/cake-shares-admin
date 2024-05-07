import Profile from "@/components/atoms/Profile";
import UserDetail from "@/components/atoms/Profile/UserDetail";
import Categories from "@/components/atoms/categories";
import { SellerContainer } from "@/styles/GlobalStyles.styles";
import React from "react";

const index = () => {
  return (
    <SellerContainer>
      <Profile />
      <div className="child-Wrapper">
        <UserDetail />
        <Categories title="My Fully Funded Products" />
      </div>
    </SellerContainer>
  );
};

export default index;
