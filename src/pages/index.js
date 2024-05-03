import React from "react";
import TopBar from "@/components/common/TopBar/TopBar";
import MyWallet from "../components/common/MyWallet/MyWallet";
import TransactionTable from "../components/common/TransactionTable";
import DetailBar from "@/components/atoms/DetailBar";

const index = () => {
  return (
    <>
      <TopBar />
      <MyWallet />
      <DetailBar />
      <TransactionTable />
    </>
  );
};

export default index;
