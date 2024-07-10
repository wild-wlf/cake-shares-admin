import Profile from '@/components/atoms/Profile';
import UserDetail from '@/components/atoms/Profile/UserDetail';
import Categories from '@/components/atoms/categories';
import SellerTopBar from '@/components/common/SellerTopBar/SellerTopBar';
import { AuthContext } from '@/context/authContext';
import productService from '@/services/productService';
import { SellerContainer } from '@/styles/GlobalStyles.styles';
import React, { useEffect, useState } from 'react';
import { useContextHook } from 'use-context-hook';

const ProfilePage = () => {
  const [searchQuery, setSearchQuery] = useState({
    type: 'funded',
  });
  const { user } = useContextHook(AuthContext, v => ({
    user: v.user,
  }));
  const { products_data, products_loading } = productService.GetAllProducts(searchQuery);
  const { financial_data } = productService.GetFinancialInfo();

  return (
    <SellerContainer>
      <SellerTopBar title={'Settings'} tagLine={'Here you can manage your Profile & Account Settings'} />
      <Profile />
      <div className="child-Wrapper">
        <UserDetail userData={user} financialData={financial_data} />
        <Categories title="My Fully Funded Products" loading={products_loading} data={products_data?.items} />
      </div>
    </SellerContainer>
  );
};

export default ProfilePage;
