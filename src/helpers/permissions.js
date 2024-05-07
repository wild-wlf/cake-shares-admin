export const buyerPermission = "/buyer";
export const individualSellerPermission = [
  "/dashboard",
  "/portfolio",
  "/chat",
  "/wallet",
  "/profile",
  "/private-chat",
];
export const companySellerPermission = [
  ...individualSellerPermission,
  "/permissions",
  "/roles",
  "/users",
];
