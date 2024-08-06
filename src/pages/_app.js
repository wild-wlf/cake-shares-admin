import '../styles/global.css';
import styled, { createGlobalStyle } from 'styled-components';
import Variables from '../styles/variables.css';
import { HelperClasses, Styling, PageWrapper } from '../styles/GlobalStyles.styles';
import { KycContextProvider } from '@/context/KycContext';
import Sidenav from '@/components/molecules/sideNav/index';
import { companySellerNav, indivisualSellerNav } from '@/helpers/nav';
import { AuthContextProvider } from '@/context/authContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCookie } from '@/helpers/common';
import { SocketContextProvider } from '@/context/socketContext';
import Layout from '@/components/molecules/Layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PreLoader from '@/components/molecules/PreLoader';

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
  const router = useRouter();
  // const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const userInfo = JSON.parse(getCookie(process.env.NEXT_PUBLIC_USER_TYPE_COOKIE));
  const GlobalStyles = createGlobalStyle`
  ${Variables}
  ${Styling}
  ${HelperClasses}
`;

  useEffect(() => {
    router.events.on('routeChangeError', () => setLoading(false));
    router.events.on('routeChangeStart', () => setLoading(true));
    router.events.on('routeChangeComplete', () => setLoading(false));

    return () => {
      router.events.off('routeChangeError', () => setLoading(false));
      router.events.off('routeChangeStart', () => setLoading(true));
      router.events.off('routeChangeComplete', () => setLoading(false));
    };
  }, [router.events]);

  return (
    <>
      <AuthContextProvider>
        <SocketContextProvider>
          <KycContextProvider>
            <GlobalStyles />
            {pageProps?.statusCode === 404 ? (
              <Component {...pageProps} />
            ) : (
              <>
                {loading && <PreLoader />}
                <Layout>
                  {userInfo ? (
                    <PageWrapper>
                      <Sidenav data={userInfo.isIndividualSeller ? indivisualSellerNav : companySellerNav} />
                      <Component {...pageProps} />
                    </PageWrapper>
                  ) : (
                    <Component {...pageProps} />
                  )}
                </Layout>
              </>
            )}
          </KycContextProvider>
          <StyledToastContainer />
        </SocketContextProvider>
      </AuthContextProvider>
    </>
  );
}
