import React, { useState, useEffect, useRef } from 'react';
import { ChatBody, ChatWrapper } from './Chat.style';
import ChatMessage from './ChatMessage';
import { RiMenu3Fill } from 'react-icons/ri';
import ChatFooter from './ChatFooter';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import notificationService from '@/services/notificationservice';
import { updateDirectChatHistoryIfActive } from '@/helpers/chatHandlers';

const Chat = ({ chosenChatDetails }) => {
  const [chatMessages, setChatMessages] = useState([]);
  const { user, fetch } = useContextHook(AuthContext, v => ({
    user: v.user,
    fetch: v.fetch,
  }));
  const chatBoxRef = useRef(null);

  const { messages_loading, messages_data } = notificationService.GetAllConversationMessages(
    {
      page: 1,
      itemsPerPage: 10,
      author: user?._id,
      receiver: chosenChatDetails?.receiver,
      conversationId: chosenChatDetails?.conversationId ?? '',
    },
    fetch,
    chosenChatDetails,
  );

  useEffect(() => {
    if (messages_data?.messages?.length > 0) {
      setChatMessages(messages_data?.messages?.reverse());
    }
  }, [messages_data]);

  const handleScrollToBottom = () => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  };

  useEffect(() => {
    if (chatMessages?.length > 0) {
      handleScrollToBottom();
    }
  }, [chatMessages?.length]);

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

  return (
    <ChatWrapper>
      <div
        className="community-hamburger"
        onClick={() => document.body.classList.toggle('chat-community-sidebar-active')}>
        <HiOutlineMenuAlt2 size={30} />
      </div>
      <div className="chatWrapper">
        <ChatBody ref={chatBoxRef}>
          {messages_loading
            ? 'Loading...'
            : chatMessages?.map((item, index) => (
                <ChatMessage
                  key={index}
                  type={item?.author?._id === user?._id ? 'seen' : 'send'}
                  message={item.content}
                  time={item?.created_at}
                  readBy={item?.readBy?.includes(chosenChatDetails?.receiver)}
                  messageId={item?._id}
                  receiverId={chosenChatDetails?.receiver}
                  // showImage={index === chatMessages.length - 1}
                />
              ))}
        </ChatBody>
        <ChatFooter chosenChatDetails={chosenChatDetails} />
      </div>
      <div className="hamburger" onClick={() => document.body.classList.toggle('chat-sidebar-active')}>
        <RiMenu3Fill size={30} />
      </div>
    </ChatWrapper>
  );
};

export default Chat;
