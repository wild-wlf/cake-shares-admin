import React, { useState, useEffect } from 'react';
import ComChat from '@/components/common/Chat/CommunityChat';
import ChatMedia from '@/components/common/Chat/ChatMedia';
import SideBar from '@/components/common/Community/SideBar';
import SellerTopBar from '@/components/common/SellerTopBar/SellerTopBar';
import { SellerContainer } from '@/styles/GlobalStyles.styles';
import Head from 'next/head';

const StakeHolderChat = () => {
  const [chosenComDetails, setChosenComDetails] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [totalConversations, setTotalConversations] = useState(0);

  const handleChoseComDetails = details => {
    setChosenComDetails(details);
  };

  useEffect(() => {
    window.addEventListener('online_users', event => {
      setOnlineUsers(event.detail);
    });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('online_users', () => {});
    };
  }, []);

  const handleGetTotalConversations = total => {
    setTotalConversations(total);
  };

  return (
    <div>
      <Head>
        <title>CAKESHARES | Stakeholder Chat</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SellerContainer>
        <SellerTopBar
          title={'Stakeholder Chat'}
          tagLine={`You have total ${totalConversations} chat${
            totalConversations?.length > 1 ? 's' : ''
          } in your Stakeholder chat right now!`}
        />
        <div className="chat-holder">
          <SideBar
            handleChoseComDetails={handleChoseComDetails}
            chosenComDetails={chosenComDetails}
            onlineUsers={onlineUsers}
            handleGetTotalConversations={handleGetTotalConversations}
            type="stake"
          />
          {chosenComDetails && (
            <>
              <ComChat chosenComDetails={chosenComDetails} type="stake" />
              <ChatMedia onlineUsers={onlineUsers} chosenComDetails={chosenComDetails} type="stake" />
            </>
          )}
        </div>
      </SellerContainer>
    </div>
  );
};

export default StakeHolderChat;
