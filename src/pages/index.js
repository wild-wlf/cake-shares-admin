import React, { useEffect } from "react";
import TopBar from "@/components/common/TopBar/TopBar";
import MyWallet from "../components/common/MyWallet/MyWallet";
import TransactionTable from "../components/common/TransactionTable";
import DetailBar from "@/components/atoms/DetailBar";
import { useRouter } from "next/router";

const Buyer = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/buyer");
  }, []);

  return (
    <>
      {/* <TopBar />
      <MyWallet />
      <DetailBar />
      <TransactionTable /> */}
    </>
  );
};

export default Buyer;
