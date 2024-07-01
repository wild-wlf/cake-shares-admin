import React from 'react';
import { Container, Data } from './SellerBarStyles';

const SellerDetailBar = ({ sm }) => {
  const data = [
    {
      title: 'Banking Product',
      amount: '$0',
      investments: '0 Investments',
    },
    { title: 'Properties', amount: '$0', investments: '0 Investments' },
    { title: 'Ventures', amount: '$0', investments: '0 Investments' },
    { title: 'Bazar', amount: '$0', investments: '0 Investments' },
    {
      title: 'Total Investment',
      amount: '$0',
      investments: '0 Investments',
    },
  ];
  return (
    <Container sm={sm}>
      {data.map((item, index) => {
        return (
          <Data key={index} sm={sm}>
            <span className="f-span">{item.title}</span>
            <h1>{item.amount}</h1>
            
            <span className="l-span">{item.investments}</span>
          </Data>
        );
      })}
    </Container>
  );
};

export default SellerDetailBar;
