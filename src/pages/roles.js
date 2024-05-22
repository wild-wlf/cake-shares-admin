import React from "react";
import { SellerContainer } from "@/styles/GlobalStyles.styles";
import RolesTable from "@/components/atoms/RolesTable";
import SellerTopBar from "@/components/common/SellerTopBar/SellerTopBar";

const roles = () => {
  return (
    <SellerContainer>
      <SellerTopBar
        title={"Roles Management"}
        tagLine={"You have total 46 roles right now!"}
      />
      <RolesTable />
    </SellerContainer>
  );
};

export default roles;
