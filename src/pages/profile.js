import Profile from "@/components/atoms/Profile";
import Categories from "@/components/atoms/categories";
import { SellerContainer } from "@/styles/GlobalStyles.styles";
import React from "react";

const index = () => {
  return (
    <SellerContainer>
      <Profile />
      {/* <Categories /> */}
    </SellerContainer>
  );
};

export default index;
