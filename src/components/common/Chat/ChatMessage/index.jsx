import React from 'react';
import { StyledChatMessage } from './ChatMessage.styles';
import Pic from '../../../../_assets/SellerProfile.png';
import { LiaCheckDoubleSolid } from 'react-icons/lia';
import Image from 'next/image';

const ChatMessage = ({ showImage, message, time, type }) => {
  return (
    <StyledChatMessage $type={type}>
      {showImage && (
        <div className="img-holder">
          <Image src={Pic} alt="user-pic" />
        </div>
      )}
      <div className="message-holder">
        <div className="message">
          <p>{message}</p>
        </div>
        {time && (
          <div className="time-holder">
            <span>{time}</span>
            <div className="icon">
              <LiaCheckDoubleSolid size={18} />
            </div>
          </div>
        )}
      </div>
    </StyledChatMessage>
  );
};

export default ChatMessage;
