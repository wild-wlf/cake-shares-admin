import PermissionTable from "@/components/atoms/PermissionsTable";
import { SellerContainer } from "@/styles/GlobalStyles.styles";
import React from "react";

const permissions = () => {
  return (
    <SellerContainer>
      <PermissionTable />
    </SellerContainer>
  );
};

export default permissions;
