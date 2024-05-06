import DetailBar from "@/components/atoms/DetailBar";
import MyWallet from "@/components/common/MyWallet/MyWallet";
import TopBar from "@/components/common/TopBar/TopBar";
import TransactionTable from "@/components/common/TransactionTable";
import React from "react";

const dashoard = () => {
  return (
    <div>
      <TopBar />
      <MyWallet />
      <DetailBar />
      <TransactionTable />
    </div>
  );
};

export default dashoard;
