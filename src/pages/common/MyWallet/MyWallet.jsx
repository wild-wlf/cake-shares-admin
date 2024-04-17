import React, { useState } from "react";
import { StyledContainer, ChartWrapper } from "./WalletStyles";
import Button from "@/components/atoms/Button";
import btnLeftArrow from "../../_assets/btnLeftArrow.png";
import walletWhite from "../../_assets/walletWhite.png";
import Image from "next/image";
import Graph from "@/components/molecules/Charts";
import PieChart from "@/components/molecules/PieChart";
import CenterModal from "@/components/molecules/Modal/CenterModal";

const MyWallet = () => {
  const ary3 = [0, 200, 10, 1000, 5000, 200, 8000, 10, 500];
  const ary2 = [
    0, 200, 300, 6000, 500, 1000, 500, 5000, 1000, 8000, 200, 5000, 5200, 5500,
    5700, 5720, 5880,
  ];
  const pieData = [
    { name: "Banking product", y: 30, color: "#408F8C" },
    { name: "Properties", y: 25, color: "#00AFD6" },
    { name: "Ventures", y: 20, color: "#0A1149" },
    { name: "Bazar", y: 15, color: "#419400" },
    { name: "Cars", y: 10, color: "#4E6199" },
  ];
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      <CenterModal
        open={open}
        setOpen={setOpen}
        width="666"
        padding={"30px"}
        title="Download Statement"
      ></CenterModal>

      <StyledContainer>
        <div className="btnDiv">
          <Button rounded sm btntype="gray">
            <Image src={btnLeftArrow} />
            Go Back
          </Button>
          <Button rounded sm btntype="green" onClick={() => openModal()}>
            Top Up Wallet
            <Image src={walletWhite} />
          </Button>
        </div>
        <div className="textContainer">
          <h1 className="title">MyWallet</h1>
          <div className="credit">
            <span>Total Credit:</span> <br />
            <h1>$35,265.000</h1>
          </div>
        </div>

        <ChartWrapper>
          <div className="ChartContainer">
            <PieChart
              graphData={pieData}
              title="Total Investments"
              amount="$1000"
              timeFrame="year"
            />
          </div>

          <div className="ChartContainer">
            <Graph
              graphLineColor="#4E6199"
              // graphData={dashboard_data?.charDataTransaction?.map( => .total)}
              graphData={ary2}
              tooltipBg=""
              title="Potential Return P.A"
              // amount={dashboard_data?.totalTransactionAmount}
              amount="$2405"
              timeFrame=""
            />
          </div>
          <div className="ChartContainer">
            <Graph
              graphLineColor="#D74120"
              // graphData={dashboard_data?.charDataTransaction?.map( => .total)}
              graphData={ary3}
              tooltipBg=""
              tooltipImg=""
              title="Portfolio Costs"
              // amount={dashboard_data?.totalTransactionAmount}
              amount="$2405"
              timeFrame=""
            />
          </div>
        </ChartWrapper>
      </StyledContainer>
    </>
  );
};

export default MyWallet;
