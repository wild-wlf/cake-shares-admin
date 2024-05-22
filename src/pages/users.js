import SellerTopBar from "@/components/common/SellerTopBar/SellerTopBar";
import UsersTable from "@/components/common/Users/UsersTable";
import React from "react";
import { SellerContainer } from "@/styles/GlobalStyles.styles";

const index = () => {
  return (
    <SellerContainer>
      <SellerTopBar
        title={"Users Management"}
        tagLine={"You have total 46 Users right now!"}
      />
      <UsersTable />
    </SellerContainer>
  );
};

export default index;
