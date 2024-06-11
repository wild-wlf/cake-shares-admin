import React from 'react';
import { ChatBody, ChatWrapper } from './Chat.style';
import ChatMessage from './ChatMessage';
import ChatMedia from './ChatMedia';
import { RiMenu3Fill } from 'react-icons/ri';
import ChatFooter from './ChatFooter';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

const Chat = ({ userInfo, type }) => {
  console.log('userInfo', userInfo);
  const chatMessages = [
    {
      text: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration',
      time: 'Yesterday, 12:29 PM',
    },
    {
      text: 'The Points of Using Lorem Ipsum',
      time: 'Yesterday, 12:29 PM',
    },
    {
      text: 'The Points of Using Lorem Ipsum The Points of Using Lorem Ipsum',
      time: 'Yesterday, 12:29 PM',
    },
    {
      text: 'The Points of Using Lorem Ipsum The Points of Using Lorem Ipsum',
      time: 'Yesterday, 12:29 PM',
    },
    {
      text: 'The Points of Using Lorem Ipsum The Points of Using Lorem Ipsum',
      time: 'Yesterday, 12:29 PM',
    },
    {
      text: 'The Points of Using Lorem Ipsum The Points of Using Lorem Ipsum',
      time: 'Yesterday, 12:29 PM',
    },
  ];

  return (
    <ChatWrapper>
      <div
        className="community-hamburger"
        onClick={() => document.body.classList.toggle('chat-community-sidebar-active')}>
        <HiOutlineMenuAlt2 size={30} />
      </div>
      <div className="chatWrapper">
        <ChatBody>
          <div className="messages-holder">
            {chatMessages?.map((item, index) => (
              <ChatMessage
                key={index}
                type="send"
                message={item.text}
                time={index === chatMessages.length - 1 && item?.time}
                showImage={index === chatMessages.length - 1}
              />
            ))}
          </div>
          <div className="messages-holder">
            {chatMessages?.map((item, index) => (
              <ChatMessage
                key={index}
                type="seen"
                message={item.text}
                time={index === chatMessages.length - 1 && item?.time}
                showImage={index === chatMessages.length - 1}
              />
            ))}
          </div>
        </ChatBody>
        <ChatFooter />
      </div>
      <div className="hamburger" onClick={() => document.body.classList.toggle('chat-sidebar-active')}>
        <RiMenu3Fill size={30} />
      </div>
    </ChatWrapper>
  );
};

export default Chat;
