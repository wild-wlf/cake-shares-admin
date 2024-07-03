import React from 'react';
import DetailBar from '@/components/atoms/DetailBar';
import MyWallet from '@/components/common/MyWallet/MyWallet';
import TransactionTable from '../components/common/TransactionTable';
import { SellerContainer } from '@/styles/GlobalStyles.styles';
import SellerTopBar from '@/components/common/SellerTopBar/SellerTopBar';
import userService from '@/services/userService';

const Wallet = () => {
 
//  const res = userService.getWalletDetails(fetch);


  return (
    <div>
      <SellerContainer>
        <SellerTopBar title={'My Wallet'} tagLine={"Let's explore what's new with your product today!"} />
        <MyWallet />
        <DetailBar />
        <TransactionTable  />
      </SellerContainer>
    </div>
  );
};

export default Wallet;
