import SellerDetailBar from '@/components/atoms/SellerDetailBar/SellerDetailBar';
import PortfolioTable from '@/components/common/Portfolio/PortfolioTable';
import SellerTopBar from '@/components/common/SellerTopBar/SellerTopBar';
import SellerWallet from '@/components/common/SellerWallet/SellerWallet';
import { SellerContainer } from '@/styles/GlobalStyles.styles';
import React, { useState } from 'react';
import handIcon from '../_assets/handIcon.png';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import userService from '@/services/userService';
import productService from '@/services/productService';
import { getRandomColor } from '@/helpers/common';

const Dashoard = () => {
  const { user } = useContextHook(AuthContext, v => ({
    user: v.user,
  }));

  const { wallet_Details } = userService.GetWalletDetails();
  const { best_selling_seller_prod_data } = productService.GetBestSellingSellerProducts();

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

  const bestSellingProdData = best_selling_seller_prod_data?.bestSellingProducts
    ?.map((item, index) => ({
      name: item.productName,
      y: item.sellingScore,
      color: index <= 5 ? getRandomColor(index) : getRandomColor(),
    }))
    ?.filter(ele => ele?.y !== 0);

  const totalInvestmentCount = filterData?.reduce((total, item) => total + item.totalInvestment, 0);

  return (
    <div>
      <SellerContainer>
        <SellerTopBar
          title={`Welcome ${user?.fullName || user?.username}!`}
          suffix={handIcon}
          tagLine={"Let's explore what's new with your product today!"}
        />
        <SellerWallet
          pieData={investmentData}
          bestSellingProdData={bestSellingProdData}
          amount={wallet_Details?.wallet?.totalInvestmentAmount}
        />
        <SellerDetailBar
          sm={true}
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
