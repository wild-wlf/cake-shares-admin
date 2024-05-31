import React from "react";
import {StyledContainer, ChartWrapper} from "./SellerWalletStyles";
import Graph from "@/components/molecules/Charts";
import PieChart from "@/components/molecules/PieChart";

const SellerWallet = () => {
    const ary2 = [0, 200, 300, 6000, 500, 1000, 500, 5000, 1000, 8000, 200, 5000, 5200, 5500, 5700, 5720, 5880];
    const pieData = [
        {name: "Banking", y: 30, color: "#408F8C"},
        {name: "Properties", y: 25, color: "#00AFD6"},
        {name: "Ventures", y: 20, color: "#0A1149"},
        {name: "Bazar", y: 15, color: "#419400"},
        {name: "Cars", y: 10, color: "#4E6199"},
    ];

    return (
        <>
            <StyledContainer>
                <ChartWrapper>
                    <div className="ChartContainer">
                        <PieChart
                            // graphData={pieData}
                            title="Total Investments"
                            amount="$0"
                            timeFrame="year"
                            sm={true}
                        />
                    </div>

                    <div className="ChartContainer">
                        <Graph
                            graphLineColor="#4E6199"
                            // graphData={dashboard_data?.charDataTransaction?.map( => .total)}
                            // graphData={ary2}
                            tooltipBg=""
                            title="Total Return"
                            // amount={dashboard_data?.totalTransactionAmount}
                            amount="$0"
                            timeFrame="steps"
                            sm={true}
                        />
                    </div>
                    <div className="ChartContainer">
                        <PieChart
                            // graphData={pieData}
                            title="Best Selling Products"
                            amount="0"
                            timeFrame="year"
                            sm={true}
                        />
                    </div>
                </ChartWrapper>
            </StyledContainer>
        </>
    );
};

export default SellerWallet;
