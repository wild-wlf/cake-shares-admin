import React from 'react';
import { Container, Data } from './SellerBarStyles';
import { formatAmount } from '@/helpers/common';

const SellerDetailBar = ({ sm, topData, amount, totalInvestmentCount }) => {
  topData?.sort((a, b) => b.percentage - a.percentage);

  const topInvestments = topData?.slice(0, 4) || [];

  const renderData = (item, index) => {
    if (item) {
      return (
        <Data key={item._id}>
          <span className="f-span">{item.investmentTypeName}</span>
          <h1>{`$${formatAmount(item.investmentAmount)}`}</h1>
          <span className="l-span">{`${item.totalInvestment} Investments`}</span>
        </Data>
      );
    } else {
      return (
        <Data key={`placeholder-${index}`}>
          <span className="f-span">-------</span>
          <h1>$0</h1>
          <span className="l-span">0 Investments</span>
        </Data>
      );
    }
  };
  return (
    <Container sm={sm}>
      {[...Array(4)].map((_, index) => renderData(topInvestments[index], index))}
      <Data>
        <span className="f-span">Total Investment</span>
        <h1>{`$${formatAmount(amount)}`}</h1>
        <span className="l-span">{`${totalInvestmentCount} Investments`} </span>
      </Data>
    </Container>
  );
};

export default SellerDetailBar;
