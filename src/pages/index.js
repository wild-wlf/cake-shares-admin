import React, { useContext, useEffect } from "react";
import TopBar from "@/components/common/TopBar/TopBar";
import MyWallet from "../components/common/MyWallet/MyWallet";
import TransactionTable from "../components/common/TransactionTable";
import DetailBar from "@/components/atoms/DetailBar";
import { useRouter } from "next/router";

const Buyer = () => {
  // console.log(userType);
  const router = useRouter();
  console.log(router.query.type, "start");

  useEffect(() => {
    if (router.query.type) {
      if (router.query.type === "buyer") {
        console.log("inside");
        router.push("/buyer");
      } else if (
        router.query.type === "seller" ||
        router.query.type === "company"
      ) {
        router.push("/dashboard");
      }
    }
    // console.log(router);
  }, [router.query.type]);
  console.log(router.query.type, "end");

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
