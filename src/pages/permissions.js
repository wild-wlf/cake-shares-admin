import PermissionTable from '@/components/atoms/PermissionsTable';
import SellerTopBar from '@/components/common/SellerTopBar/SellerTopBar';
import { SellerContainer } from '@/styles/GlobalStyles.styles';
import React from 'react';

const permissions = () => {
  return (
    <SellerContainer>
      <SellerTopBar title={'Permissions Management'} tagLine={'You have total 46 permissions right now!'} />
      <PermissionTable />
    </SellerContainer>
  );
};

export default permissions;
