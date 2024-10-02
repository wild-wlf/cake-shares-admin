import React from 'react';
import DetailBar from '@/components/atoms/DetailBar';
import MyWallet from '@/components/common/MyWallet/MyWallet';
import TransactionTable from '../components/common/TransactionTable';
import { SellerContainer } from '@/styles/GlobalStyles.styles';
import SellerTopBar from '@/components/common/SellerTopBar/SellerTopBar';
import userService from '@/services/userService';
import { getRandomColor } from '@/helpers/common';

const Wallet = () => {
  const { wallet_Details } = userService.GetWalletDetails();

  let filterData = wallet_Details?.wallet?.data.reduce((acc, record) => {
    let existingRecord = acc.find(r => r.investmentTypeName === record.investmentTypeName);
    if (existingRecord) {
      existingRecord.percentage += record.percentage;
      existingRecord.investmentAmount += record.investmentAmount;
      existingRecord.totalInvestment += 1;
    } else {
      acc.push({ ...record, totalInvestment: 1 });
    }
    return acc;
  }, []);

  const investmentData = filterData?.map((item, index) => ({
    name: item.investmentTypeName,
    y: item.percentage,
    color: index <= 5 ? getRandomColor(index) : getRandomColor(),
  }));

  const totalInvestmentCount = filterData?.reduce((total, item) => total + item.totalInvestment, 0);

  return (
    <div>
      <SellerContainer>
        <SellerTopBar title={'My Wallet'} tagLine={"Let's explore what's new with your product today!"} />
        <MyWallet pieData={investmentData} amount={wallet_Details?.wallet?.totalInvestmentAmount} />
        <DetailBar
          topData={filterData}
          amount={wallet_Details?.wallet?.totalInvestmentAmount}
          totalInvestmentCount={totalInvestmentCount}
        />
        <TransactionTable />
      </SellerContainer>
    </div>
  );
};

export default Wallet;
