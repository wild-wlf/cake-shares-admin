import React from "react";
import TopBar from "./common/TopBar/TopBar";
import MyWallet from "./common/MyWallet/MyWallet";
import TransactionTable from "./common/TransactionTable";
import DetailBar from "@/components/atoms/DetailBar";

const index = () => {
  return (
    <>
      <div className="container">
        <TopBar />
        <MyWallet />
      </div>
      <DetailBar />
      <div className="container">
        <TransactionTable />
      </div>
    </>
  );
};

export default index;
