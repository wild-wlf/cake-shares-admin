import React, { useState, useEffect } from 'react';
import { StyledChatMessage } from './ChatMessage.styles';
import Pic from '../../../../_assets/SellerProfile.png';
import { LiaCheckDoubleSolid, LiaCheckSolid } from 'react-icons/lia';
import Image from 'next/image';
import { format } from 'date-fns';

const ChatMessage = ({ showImage, message, time, type, readBy, messageId, receiverId }) => {
  const [isMessageRead, setIsMessageRead] = useState(readBy);

  useEffect(() => {
    window.addEventListener('seen_message_response', event => {
      const currentMessage = event.detail;

      if (messageId === currentMessage?._id && currentMessage?.readBy?.includes(receiverId)) {
        setIsMessageRead(true);
      }
    });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('seen_message_response', () => {});
    };
  }, [messageId, receiverId]);

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
            <span>{format(time, 'yyyy-MM-dd, hh:mma')}</span>
            <div className="icon">
              {isMessageRead ? <LiaCheckDoubleSolid size={18} /> : <LiaCheckSolid size={18} />}
            </div>
          </div>
        )}
      </div>
    </StyledChatMessage>
  );
};

export default ChatMessage;
