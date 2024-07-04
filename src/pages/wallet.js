import React from 'react';
import DetailBar from '@/components/atoms/DetailBar';
import MyWallet from '@/components/common/MyWallet/MyWallet';
import TransactionTable from '../components/common/TransactionTable';
import { SellerContainer } from '@/styles/GlobalStyles.styles';
import SellerTopBar from '@/components/common/SellerTopBar/SellerTopBar';
import userService from '@/services/userService';

const Wallet = () => {
  const { wallet_Details } = userService.GetWalletDetails();
  // console.log({ wallet_Details });

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

  const pieData = filterData?.map((item, index) => ({
    name: item.investmentTypeName,
    y: item.percentage,
    color: index <= 5 ? getRandomColor(index) : getRandomColor(),
  }));
  function getRandomColor(index) {
    const colors = ['#408F8C', '#00AFD6', '#0A1149', '#419400'];
    if (index >= 0 && index < colors.length) {
      return colors[index];
    } else {
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
  }
  const totalInvestmentCount = filterData?.reduce((total, item) => total + item.totalInvestment, 0);

  return (
    <div>
      <SellerContainer>
        <SellerTopBar title={'My Wallet'} tagLine={"Let's explore what's new with your product today!"} />
        <MyWallet pieData={pieData} amount={wallet_Details?.wallet?.totalInvestmentAmount} />
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
