import "../styles/global.css";
import { createGlobalStyle } from "styled-components";
import Variables from "../styles/variables.css";
import {
  HelperClasses,
  Styling,
  PageWrapper,
} from "../styles/GlobalStyles.styles";
import { KycContextProvider } from "@/context/KycContext";
import Sidenav from "@/components/molecules/sideNav/index";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  buyerPermission,
  companySellerPermission,
  individualSellerPermission,
} from "@/helpers/permissions";

export default function App({ Component, pageProps }) {
  const [userType, setUserType] = useState("seller");

  const GlobalStyles = createGlobalStyle`
  ${Variables}
  ${Styling}
  ${HelperClasses}
`;
  const pathname = usePathname();
  console.log(pathname);

  return (
    <>
      <KycContextProvider>
        <GlobalStyles />
        {userType === "buyer" && buyerPermission.includes(pathname) && (
          <>
            <Component {...pageProps} />
          </>
        )}
        {userType === "seller" &&
          individualSellerPermission.includes(pathname) && (
            <PageWrapper>
              <Sidenav />
              <Component {...pageProps} />
            </PageWrapper>
          )}
        {userType === "companySeller" &&
          companySellerPermission.includes(pathname) && (
            <PageWrapper>
              <Sidenav />
              <Component {...pageProps} />
            </PageWrapper>
          )}
      </KycContextProvider>
    </>
  );
}
