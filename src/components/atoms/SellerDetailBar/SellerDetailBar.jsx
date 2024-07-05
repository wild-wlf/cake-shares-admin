import React from 'react';
import { Container, Data } from './SellerBarStyles';

const SellerDetailBar = ({ sm, topData, amount, totalInvestmentCount }) => {
  
  topData?.sort((a, b) => b.percentage - a.percentage);

  let topInvestments = topData?.filter((item, index) => index < 4);
  return (
    <Container sm={sm}>
      {topInvestments?.map(item => (
        <Data key={item}>
          <span className="f-span">{item.investmentTypeName}</span>
          <h1>{`$${item.investmentAmount}`}</h1>
          <span className="l-span">{`${item.totalInvestment} Investments`}</span>
        </Data>
      ))}
      <Data>
        <span className="f-span">Total Investment</span>
        <h1>{`$${amount}`}</h1>
        <span className="l-span">{`$${totalInvestmentCount} Investments`} </span>
      </Data>
    </Container>
  );
};

export default SellerDetailBar;
