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
import { removeDuplicates } from '@/helpers/common';
import { startChat, endChat } from '@/helpers/socketConnection';

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
      conversationId: chosenChatDetails?.conversationId,
      receiver: chosenChatDetails?.receiver,
      page: 1,
    }));
    setChatMessages([]);
    setChatLoading(true);
  }, [chosenChatDetails?.conversationId, chosenChatDetails?.receiver]);

  useEffect(() => {
    if (messages_data?.messages?.length > 0) {
      setChatMessages(prev => [...messages_data?.messages, ...prev]);
      setMoreMsgLoading(false);
    }
  }, [messages_data, chosenChatDetails?.conversationId]);

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
  }, [chosenChatDetails?.receiver, user]);

  const onScrolledToTop = e => {
    if (e.target.scrollTop === 0 && chatMessages?.length < messages_data?.totalItems && messages_data?.totalItems > 0) {
      setSearchQuery(prev => ({ ...prev, ['page']: prev?.page + 1 }));
      setMoreMsgLoading(true);
    }
  };

  useEffect(() => {
    const handleStartChat = () => {
      if (user?._id && chosenChatDetails?.receiver) {
        startChat({ author: user._id, receiver: chosenChatDetails.receiver });
      }
    };
    const handleEndChat = () => {
      if (user?._id && chosenChatDetails?.receiver) {
        endChat({ author: user?._id, receiver: chosenChatDetails?.receiver });
      }
    };
    handleStartChat();
    window.addEventListener('beforeunload', handleEndChat);
    window.addEventListener('unload', handleEndChat);

    return () => {
      handleEndChat();
      window.removeEventListener('beforeunload', handleEndChat);
      window.removeEventListener('unload', handleEndChat);
    };
  }, [chosenChatDetails.receiver, user._id]);

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
            chatMessages
              ?.filter(item => item.conversationId === chosenChatDetails?.conversationId)
              ?.map((item, index) => (
                <ChatMessage
                  key={index}
                  chatType={'private'}
                  type={item?.author?._id === user?._id ? 'seen' : 'send'}
                  message={item.content}
                  time={item?.created_at}
                  readBy={item?.readBy?.find(_ => _?._id === chosenChatDetails?.receiver)}
                  messageId={item?._id}
                  receiverId={chosenChatDetails?.receiver}
                  defaultReaction={item?.reaction}
                  showReaction={item?.author?._id !== user?._id ? true : false}
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
