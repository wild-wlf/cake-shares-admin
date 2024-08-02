import React, { useState, useEffect } from 'react';
import { StyledChatMessage, MessageContainer, ReactionContainer, AddedReaction } from './ChatMessage.styles';
import Pic from '../../../../_assets/SellerProfile.png';
import { LiaCheckDoubleSolid, LiaCheckSolid } from 'react-icons/lia';
import Image from 'next/image';
import { format } from 'date-fns';
import RenderTextMessage from './renderTextMessage';
import reactionIcon from '@/_assets/reaction.png';
import ReactionTooltip from '@/components/atoms/ReactionTooltip';
import MessageReaction from '@/components/atoms/MessageReactions/index';
import { sendPrivateReaction } from '@/helpers/socketConnection';

const ChatMessage = ({
  showImage,
  message,
  time,
  type,
  readBy,
  messageId,
  receiverId,
  group,
  receivers,
  defaultReaction,
  showReaction,
  chatType,
}) => {
  const [isMessageRead, setIsMessageRead] = useState(readBy);
  const [reaction, setReactions] = useState('');
  const [receivedReaction, setReceivedReaction] = useState('');
  const [active, setActive] = useState(false);

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

  useEffect(() => {
    if (chatType === 'private' && reaction) {
      sendPrivateReaction({
        reaction,
        messageId,
        receiverId,
      });
    }
  }, [reaction, chatType, messageId, receiverId]);

  useEffect(() => {
    const handleReaction = event => {
      const currentMessage = event.detail;

      if (messageId === currentMessage?.messageId && currentMessage?.reaction) {
        setReceivedReaction(currentMessage?.reaction);
      }
    };

    window.addEventListener('reaction-added', handleReaction);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('reaction-added', handleReaction);
    };
  }, [messageId, receiverId, receivers]);

  return (
    <StyledChatMessage $type={type}>
      {type === 'send' && group && (
        <div className="img-holder">
          <Image src={showImage || Pic} alt="user-pic" height={20} width={20} />
        </div>
      )}
      <div className="message-holder">
        <MessageContainer>
          {showReaction && (
            <ReactionContainer>
              <ReactionTooltip
                data={<MessageReaction setActive={setActive} setReaction={setReactions} />}
                type="primary"
                width={230}
                active={active}
                setActive={setActive}
                alignRight={true}>
                <Image src={reactionIcon} alt="add reaction" height={22} width={22} />
              </ReactionTooltip>
            </ReactionContainer>
          )}
          <div className="message">
            <p>
              <RenderTextMessage text={message} />
            </p>
          </div>
          {(chatType === 'private' && defaultReaction) || receivedReaction ? (
            <AddedReaction>
              <span>{receivedReaction || defaultReaction}</span>
            </AddedReaction>
          ) : (
            ''
          )}
          {(chatType === 'private' && defaultReaction) || reaction ? (
            <AddedReaction>
              <span>{reaction || defaultReaction}</span>
            </AddedReaction>
          ) : (
            ''
          )}
        </MessageContainer>
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
