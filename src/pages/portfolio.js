import React from 'react';
import Head from 'next/head';
import PortfolioTable from '@/components/common/Portfolio/PortfolioTable';
import SellerTopBar from '@/components/common/SellerTopBar/SellerTopBar';
import { AuthContext } from '@/context/authContext';
import productService from '@/services/productService';
import { SellerContainer } from '@/styles/GlobalStyles.styles';
import { useContextHook } from 'use-context-hook';

const Portfolio = () => {
  const { fetch } = useContextHook(AuthContext, v => ({
    fetch: v.fetch,
  }));
  const { products_data } = productService.GetAllProducts(fetch);

  return (
    <>
      <Head>
        <title>CAKESHARES | PORTFOLIO</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SellerContainer>
        <SellerTopBar
          title={'My Portfolio'}
          tagLine={`You have total ${
            products_data?.totalItems ? products_data?.totalItems : '0'
          } Products in your Portfolio right now!`}
        />
        <PortfolioTable title="Portfolio" />
      </SellerContainer>
    </>
  );
};

export default Portfolio;
