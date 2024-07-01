import React from 'react';
import DetailBar from '@/components/atoms/DetailBar';
import MyWallet from '@/components/common/MyWallet/MyWallet';
import TransactionTable from '../components/common/TransactionTable';
import { SellerContainer } from '@/styles/GlobalStyles.styles';
import SellerTopBar from '@/components/common/SellerTopBar/SellerTopBar';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';

const Wallet = () => {
  const { user } = useContextHook(AuthContext, v => ({
    user: v.user,
  }));
  return (
    <div>
      <SellerContainer>
        <SellerTopBar title={'My Wallet'} tagLine={"Let's explore what's new with your product today!"} />
        <MyWallet />
        <DetailBar />
        <TransactionTable />
      </SellerContainer>
    </div>
  );
};

export default Wallet;
