import React from "react";
import TopBar from "./common/TopBar/TopBar";
import MyWallet from "./common/MyWallet/MyWallet";
import TransactionTable from "./common/TransactionTable";

const index = () => {
  return (
    <>
      <TopBar />
      <MyWallet />
      <TransactionTable />
    </>
  );
};

export default index;
