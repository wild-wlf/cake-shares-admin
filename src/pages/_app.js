import "../styles/global.css";
import styled, {createGlobalStyle} from "styled-components";
import Variables from "../styles/variables.css";
import {HelperClasses, Styling, PageWrapper} from "../styles/GlobalStyles.styles";
import {KycContextProvider} from "@/context/KycContext";
import Sidenav from "@/components/molecules/sideNav/index";
import {companySellerNav, indivisualSellerNav} from "@/helpers/nav";
import {AuthContextProvider} from "@/context/authContext";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {getCookie} from "@/helpers/common";
import {SocketContextProvider} from "@/context/socketContext";
import Layout from "@/components/molecules/Layout";

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

export default function App({Component, pageProps}) {
    const userInfo = JSON.parse(getCookie(process.env.NEXT_PUBLIC_USER_TYPE_COOKIE));
    const GlobalStyles = createGlobalStyle`
  ${Variables}
  ${Styling}
  ${HelperClasses}
`;

    return (
        <>
            <AuthContextProvider>
                <SocketContextProvider>
                    <KycContextProvider>
                        <GlobalStyles />
                        {pageProps?.statusCode === 404 ? (
                            <Component {...pageProps} />
                        ) : (
                            <Layout>
                                {userInfo?.type === "Buyer" ? (
                                    <Component {...pageProps} />
                                ) : userInfo?.type === "Seller" ? (
                                    userInfo?.isIndividualSeller ? (
                                        <PageWrapper>
                                            <Sidenav data={indivisualSellerNav} />
                                            <Component {...pageProps} />
                                        </PageWrapper>
                                    ) : (
                                        <PageWrapper>
                                            <Sidenav data={companySellerNav} />
                                            <Component {...pageProps} />
                                        </PageWrapper>
                                    )
                                ) : (
                                    <Component {...pageProps} />
                                )}
                            </Layout>
                        )}
                    </KycContextProvider>
                    <StyledToastContainer />
                </SocketContextProvider>
            </AuthContextProvider>
        </>
    );
}
