import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ChatBody, ChatWrapper } from './Chat.style';
import ChatMessage from './ChatMessage';
import { RiMenu3Fill } from 'react-icons/ri';
import ChatFooter from './ChatFooter';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import Pole from './Pole';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import notificationService from '@/services/notificationservice';
import Loader from '@/components/atoms/Loader';
import { updateChatIfActive } from '@/helpers/comMsgHandlers';

const ComChat = ({ chosenComDetails, type }) => {
  const [chatMessages, setChatMessages] = useState([]);
  const { user, fetch } = useContextHook(AuthContext, v => ({
    user: v.user,
    fetch: v.fetch,
  }));
  const chatBoxRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    itemsPerPage: 10,
    conversationId: chosenComDetails?.conversationId ?? '',
    type,
  });
  const [chatLoading, setChatLoading] = useState(true);
  const [moreMsgLoading, setMoreMsgLoading] = useState(false);

  const { messages_loading, messages_data } = notificationService.GetAllCommunityConversationMessages(
    searchQuery,
    fetch,
    chosenComDetails,
  );

  useEffect(() => {
    setSearchQuery(prev => ({ ...prev, ['conversationId']: chosenComDetails?.conversationId }));
  }, [chosenComDetails?.conversationId]);

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
    window.addEventListener('com_message_history', event => {
      updateChatIfActive({
        ...event.detail,
        user,
        setChatMessages,
      });
      handleScrollToBottom();
    });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('com_message_history', () => {});
    };
  }, [chosenComDetails?.conversationId, user]);

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
            chatMessages?.map((item, index) =>
              item?.isPool ? (
                <Pole
                  type={item?.author?._id === user?._id ? 'seen' : 'send'}
                  time={item?.created_at}
                  key={index}
                  question={item?.pool?.question}
                  options={item?.pool?.options}
                  allow_multiple={item?.pool?.allow_multiple}
                  receivers={item?.receivers}
                  showImage={item?.author?.profilePicture}
                  readBy={item?.readBy?.length >= item?.receivers?.length}
                  messageId={item?._id}
                />
              ) : (
                <ChatMessage
                  key={index}
                  type={item?.author?._id === user?._id ? 'seen' : 'send'}
                  message={item.content}
                  time={item?.created_at}
                  readBy={item?.readBy?.length >= item?.receivers?.length}
                  messageId={item?._id}
                  receivers={item?.receivers}
                  showImage={item?.author?.profilePicture}
                  group
                />
              ),
            )
          )}
        </ChatBody>
        <ChatFooter chosenComDetails={chosenComDetails} type={type} />
      </div>
      <div className="hamburger" onClick={() => document.body.classList.toggle('chat-sidebar-active')}>
        <RiMenu3Fill size={30} />
      </div>
    </ChatWrapper>
  );
};

export default ComChat;
