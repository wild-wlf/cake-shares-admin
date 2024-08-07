import React from 'react';
import { StyledContainer, ChartWrapper } from './SellerWalletStyles';
import Graph from '@/components/molecules/Charts';
import PieChart from '@/components/molecules/PieChart';
import { formatAmount } from '@/helpers/common';

const SellerWallet = ({ pieData, amount }) => {
  const ary2 = [0, 200, 300, 6000, 500, 1000, 500, 5000, 1000, 8000, 200, 5000, 5200, 5500, 5700, 5720, 5880];

  return (
    <>
      <StyledContainer>
        <ChartWrapper>
          <div className="ChartContainer">
            <PieChart
              graphData={pieData}
              title="Total Investments"
              amount={`$${formatAmount(amount) || 0}`}
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
              amount="$0"
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
