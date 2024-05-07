import SellerTopBar from "@/components/common/SellerTopBar/SellerTopBar";
import UsersTable from "@/components/common/Users/UsersTable";
import React from "react";

const index = () => {
  return (
    <div>
      <SellerTopBar
        title={"Users Management"}
        tagLine={"You have total 46 Users right now!"}
      />
      <UsersTable />
    </div>
  );
};

export default index;
