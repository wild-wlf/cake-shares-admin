import SellerDetailBar from "@/components/atoms/SellerDetailBar/SellerDetailBar";
import PortfolioTable from "@/components/common/Portfolio/PortfolioTable";
import SellerTopBar from "@/components/common/SellerTopBar/SellerTopBar";
import SellerWallet from "@/components/common/SellerWallet/SellerWallet";
import {SellerContainer} from "@/styles/GlobalStyles.styles";
import React, { useState } from 'react';
import handIcon from '../_assets/handIcon.png';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import userService from '@/services/userService';
const Dashoard = () => {
  const { user } = useContextHook(AuthContext, v => ({
    user: v.user,
  }));

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
        <SellerTopBar
          title={`Welcome ${user?.fullName || user?.username}!`}
          suffix={handIcon}
          tagLine={"Let's explore what's new with your product today!"}
        />
        <SellerWallet pieData={pieData} amount={wallet_Details?.wallet?.totalInvestmentAmount}/>
        <SellerDetailBar sm={true}  
         topData={filterData}
         amount={wallet_Details?.wallet?.totalInvestmentAmount}
         totalInvestmentCount={totalInvestmentCount}
          />
        <PortfolioTable title="My Portfolio" />
      </SellerContainer>
    </div>
  );
};

export default Dashoard;
