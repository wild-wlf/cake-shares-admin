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

export default function App({ Component, pageProps }) {
  const a = true;
  const [userType, setUserType] = useState("seller");

  const GlobalStyles = createGlobalStyle`
  ${Variables}
  ${Styling}
  ${HelperClasses}
`;
  return (
    <>
      <KycContextProvider>
        <GlobalStyles />
        {userType === "seller" && (
          <PageWrapper>
            <Sidenav />
            <Component {...pageProps} />
          </PageWrapper>
        )}
        {userType === "buyer" && (
          <>
            <Component {...pageProps} />
          </>
        )}
      </KycContextProvider>
    </>
  );
}
