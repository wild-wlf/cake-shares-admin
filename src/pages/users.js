import SellerTopBar from "@/components/common/SellerTopBar/SellerTopBar";
import React from "react";

const index = () => {
  return (
    <div>
      <SellerTopBar
        title={"Users Management"}
        tagLine={"You have total 46 Users right now!"}
      />
    </div>
  );
};

export default index;
