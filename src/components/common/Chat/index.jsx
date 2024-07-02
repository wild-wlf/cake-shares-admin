import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ChatBody, ChatWrapper } from './Chat.style';
import ChatMessage from './ChatMessage';
import { RiMenu3Fill } from 'react-icons/ri';
import ChatFooter from './ChatFooter';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import notificationService from '@/services/notificationservice';
import { updateDirectChatHistoryIfActive } from '@/helpers/chatHandlers';
import Loader from '@/components/atoms/Loader';

const Chat = ({ chosenChatDetails }) => {
  const [chatMessages, setChatMessages] = useState([]);
  const { user, fetch } = useContextHook(AuthContext, v => ({
    user: v.user,
    fetch: v.fetch,
  }));
  const chatBoxRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    itemsPerPage: 10,
    author: user?._id,
    receiver: chosenChatDetails?.receiver,
    conversationId: chosenChatDetails?.conversationId ?? '',
  });
  const [chatLoading, setChatLoading] = useState(true);
  const [moreMsgLoading, setMoreMsgLoading] = useState(false);

  const { messages_loading, messages_data } = notificationService.GetAllConversationMessages(
    searchQuery,
    fetch,
    chosenChatDetails,
  );
  useEffect(() => {
    setSearchQuery(prev => ({
      ...prev,
      ['conversationId']: chosenChatDetails?.conversationId,
      ['receiver']: chosenChatDetails?.receiver,
    }));
  }, [chosenChatDetails?.conversationId, chosenChatDetails?.receiver]);

  useEffect(() => {
    if (messages_data?.messages?.length > 0) {
      setChatMessages(prev => [...messages_data?.messages, ...prev]);
      setMoreMsgLoading(false);
    }
  }, [messages_data]);

  useEffect(() => {
    setChatLoading(chatMessages?.length > 0 ? false : messages_loading);
  }, [chatMessages?.length, messages_loading]);

  const handleScrollToBottom = () => {
    if (chatBoxRef?.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      handleScrollToBottom();
    }, 300);
  }, []);

  useEffect(() => {
    window.addEventListener('direct_chat_history', event => {
      updateDirectChatHistoryIfActive({
        ...event.detail,
        user,
        receiverId: chosenChatDetails?.receiver,
        setChatMessages,
      });
      handleScrollToBottom();
    });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('direct_chat_history', () => {});
    };
  }, [user, chosenChatDetails]);

  const onScrolledToTop = e => {
    if (e.target.scrollTop === 0 && chatMessages?.length < messages_data?.totalItems && messages_data?.totalItems > 0) {
      setSearchQuery(prev => ({ ...prev, ['page']: prev?.page + 1 }));
      setMoreMsgLoading(true);
    }
  };

  return (
    <ChatWrapper>
      <div
        className="community-hamburger"
        onClick={() => document.body.classList.toggle('chat-community-sidebar-active')}>
        <HiOutlineMenuAlt2 size={30} />
      </div>
      <div className="chatWrapper">
        <ChatBody ref={chatBoxRef} onScroll={onScrolledToTop}>
          {moreMsgLoading && <Loader noHeight />}
          {chatLoading ? (
            <div
              css={`
                height: 100%;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
              `}>
              <Loader />
            </div>
          ) : (
            chatMessages?.map((item, index) => (
              <ChatMessage
                key={index}
                type={item?.author?._id === user?._id ? 'seen' : 'send'}
                message={item.content}
                time={item?.created_at}
                readBy={item?.readBy?.includes(chosenChatDetails?.receiver)}
                messageId={item?._id}
                receiverId={chosenChatDetails?.receiver}
              />
            ))
          )}
        </ChatBody>
        <ChatFooter chosenChatDetails={chosenChatDetails} type="private" />
      </div>
      <div className="hamburger" onClick={() => document.body.classList.toggle('chat-sidebar-active')}>
        <RiMenu3Fill size={30} />
      </div>
    </ChatWrapper>
  );
};

export default Chat;
