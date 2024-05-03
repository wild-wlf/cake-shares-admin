import React from "react";
import { StyledContainer, ChartWrapper } from "./SellerWalletStyles";
import Button from "@/components/atoms/Button";
import Graph from "@/components/molecules/Charts";
import PieChart from "@/components/molecules/PieChart";

const SellerWallet = () => {
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

  return (
    <>
      <StyledContainer>
        <div className="btnDiv">
          <Button width={"111px"} height={"40px"} rounded sm btntype="gray">
            {/* <Image src={btnLeftArrow} /> */}
            Go Back
          </Button>
          <Button
            width={"142px"}
            height={"40px"}
            rounded
            sm
            btntype="primary"
            onClick={() => openModal()}
          >
            Top Up Wallet
            {/* <Image src={walletWhite} /> */}
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
              timeFrame="steps"
            />
          </div>
          <div className="ChartContainer">
            <PieChart
              graphData={pieData}
              title="Total Investments"
              amount="$1000"
              timeFrame="year"
            />
          </div>
        </ChartWrapper>
      </StyledContainer>
    </>
  );
};

export default SellerWallet;
