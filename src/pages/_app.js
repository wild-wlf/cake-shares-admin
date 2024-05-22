import "../styles/global.css";
import styled, { createGlobalStyle } from "styled-components";
import Variables from "../styles/variables.css";
import {
  HelperClasses,
  Styling,
  PageWrapper,
} from "../styles/GlobalStyles.styles";
import { KycContextProvider } from "@/context/KycContext";
import Sidenav from "@/components/molecules/sideNav/index";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  buyerPermission,
  companySellerPermission,
  individualSellerPermission,
} from "@/helpers/permissions";
import { companySellerNav, indivisualSellerNav } from "@/helpers/nav";
import { useRouter } from "next/router";
import { AuthContextProvider } from "@/context/authContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const StyledToastContainer = styled(ToastContainer)`
  z-index: 99999;

  .Toastify__toast {
    padding: 0;
    min-height: 0;
    border-radius: 8px;
    font-family: inherit;
  }
  .Toastify__toast--default {
    background: none;
  }
  .Toastify__toast-body {
    padding: 0;
  }
  .Toastify__close-button {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
  }
`;

export default function App({ Component, pageProps }) {
  // const [userType, setUserType] = useState(null);
  const router = useRouter();

  // useEffect(() => {
  //   if (router.query.type) {
  //     setUserType(router.query.type);
  //   }
  // }, [router.query.type]);

  const GlobalStyles = createGlobalStyle`
  ${Variables}
  ${Styling}
  ${HelperClasses}
`;

  const pathname = usePathname();
  // console.log(pathname);
  console.log(router.query, "start");

  return (
    <>
      <AuthContextProvider>
        <KycContextProvider>
          <GlobalStyles />
          {/* {userType === "buyer" && buyerPermission.includes(pathname) && ( */}
          <>
            <Component {...pageProps} />
          </>
          {/* )} */}
          {/* {userType === "seller" &&
          individualSellerPermission.includes(pathname) && (
            <PageWrapper>
              <Sidenav data={indivisualSellerNav} />
              <Component {...pageProps} />
            </PageWrapper>
          )}
        {userType === "company" &&
          companySellerPermission.includes(pathname) && (
            <PageWrapper>
              <Sidenav data={companySellerNav} />
              <Component {...pageProps} />
            </PageWrapper>
          )}
        {userType === null && pathname === "/" && (
          <>
            <Component {...pageProps} />
          </>
        )} */}
        </KycContextProvider>
        <StyledToastContainer />
      </AuthContextProvider>
    </>
  );
}
