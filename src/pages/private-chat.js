import React, { useState, useEffect } from 'react';
import Chat from '@/components/common/Chat';
import ChatMedia from '@/components/common/Chat/ChatMedia';
import SideBar from '@/components/common/Community/SideBar';
import SellerTopBar from '@/components/common/SellerTopBar/SellerTopBar';
import { SellerContainer } from '@/styles/GlobalStyles.styles';
import Head from 'next/head';

const PrivateChat = () => {
  const [chosenChatDetails, setChosenChatDetails] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [totalConversations, setTotalConversations] = useState(0);

  const handleChoseChatDetails = details => {
    setChosenChatDetails(details);
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
        <title>CAKESHARES | Private Chat</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SellerContainer>
        <SellerTopBar
          title={'Private Chat'}
          tagLine={`You have total ${totalConversations} chat${
            totalConversations?.length > 1 ? 's' : ''
          } in your private chat right now!`}
        />
        <div className="chat-holder">
          <SideBar
            handleChoseChatDetails={handleChoseChatDetails}
            chosenChatDetails={chosenChatDetails}
            onlineUsers={onlineUsers}
            handleGetTotalConversations={handleGetTotalConversations}
            type="private"
          />
          {chosenChatDetails && (
            <>
              <Chat chosenChatDetails={chosenChatDetails} />
              <ChatMedia onlineUsers={onlineUsers} chosenChatDetails={chosenChatDetails} type="private" />
            </>
          )}
        </div>
      </SellerContainer>
    </div>
  );
};

export default PrivateChat;
