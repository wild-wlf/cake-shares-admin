import React, { useState, useEffect } from 'react';
import { StyledChatMessage } from './ChatMessage.styles';
import Pic from '../../../../_assets/SellerProfile.png';
import { LiaCheckDoubleSolid, LiaCheckSolid } from 'react-icons/lia';
import Image from 'next/image';
import { format } from 'date-fns';

const ChatMessage = ({ showImage, message, time, type, readBy, messageId, receiverId, group, receivers }) => {
  const [isMessageRead, setIsMessageRead] = useState(readBy);

  useEffect(() => {
    window.addEventListener('seen_message_response', event => {
      const currentMessage = event.detail;

      if (messageId === currentMessage?._id && currentMessage?.readBy?.includes(receiverId) && !group) {
        setIsMessageRead(true);
      }

      if (messageId === currentMessage?._id && currentMessage?.readBy?.length >= receivers?.length && group) {
        setIsMessageRead(true);
      }
    });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('seen_message_response', () => {});
    };
  }, [group, messageId, receiverId, receivers?.length]);

  return (
    <StyledChatMessage $type={type}>
      {type === 'send' && group && (
        <div className="img-holder">
          <Image src={showImage || Pic} alt="user-pic" />
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
