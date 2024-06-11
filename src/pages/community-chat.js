import Chat from '@/components/common/Chat';
import ChatMedia from '@/components/common/Chat/ChatMedia';
import SideBar from '@/components/common/Community/SideBar';
import SellerTopBar from '@/components/common/SellerTopBar/SellerTopBar';
import { SellerContainer } from '@/styles/GlobalStyles.styles';
import Head from 'next/head';
import React from 'react';

const index = () => {
  return (
    <div>
      <Head>
        <title>CAKESHARES | Community Chat</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SellerContainer>
        <SellerTopBar title={'Community Chat'} tagLine="You have total 101 chats in your community chat right now!" />
        <div className="chat-holder">
          <SideBar />
          <Chat />
          <ChatMedia type="Community" />
        </div>
      </SellerContainer>
    </div>
  );
};

export default index;
