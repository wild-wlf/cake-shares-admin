import React, { useState, useEffect } from 'react';
import { StyledPole } from './Pole.styles';
import checkImage from '../../../../_assets/isMulti.svg';
import { LiaCheckDoubleSolid, LiaCheckSolid } from 'react-icons/lia';
import { format } from 'date-fns';
import Image from 'next/image';
import PollDetailsModal from './PollDetailsModal';
import ModalContainer from '@/components/molecules/ModalContainer';
import Pic from '@/_assets/SellerProfile.png';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';
import PoleOption from './poleOption';
import { clearPoolVotes } from '@/helpers/socketConnection';

const Pole = ({ type, time, question, options, allow_multiple, receivers, readBy, messageId, showImage, author }) => {
  const [isMessageRead, setIsMessageRead] = useState(readBy);
  const { user } = useContextHook(AuthContext, v => ({
    user: v.user,
  }));
  const [poolOptions, setPoolOptions] = useState(options);

  useEffect(() => {
    window.addEventListener('seen_message_response', event => {
      const currentMessage = event.detail;

      if (messageId === currentMessage?._id && currentMessage?.readBy?.length >= receivers?.length) {
        setIsMessageRead(true);
      }
    });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('seen_message_response', () => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageId]);

  useEffect(() => {
    window.addEventListener('pool_response', event => {
      const currentMessage = event.detail;

      if (messageId === currentMessage?._id) {
        setPoolOptions(currentMessage?.pool?.options);
      }
    });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('pool_response', () => {});
    };
  }, [messageId]);

  const isOneOptionSelected = () => {
    const option = poolOptions?.find(_ => _?.users?.includes(user?._id));

    return option;
  };

  return (
    <StyledPole $type={type}>
      {type === 'send' && (
        <figure className="img-holder">
          <Image src={showImage || Pic} alt="user-pic" height={20} width={20} />
        </figure>
      )}
      <div className="head">
        <strong className="pole_title">{question}</strong>
        {isOneOptionSelected() && (
          <button
            onClick={() => {
              clearPoolVotes({ msg_id: messageId, user_id: user?._id });
            }}>
            clear
          </button>
        )}
      </div>
      {allow_multiple && (
        <div className="isMulti">
          <Image src={checkImage} alt="Checkbox" height={20} width={20} />
          <span>Select Multiple</span>
        </div>
      )}
      {poolOptions?.map((vote, index) => (
        <div className="votesWrapper" key={index}>
          <PoleOption
            type={type}
            name={vote?.option}
            users={vote?.users}
            user={user}
            option_id={vote?._id}
            messageId={messageId}
            receivers={receivers}
            allow_multiple={allow_multiple}
          />
        </div>
      ))}
      {time && (
        <div className="time-holder">
          <span>{format(time, 'yyyy-MM-dd, hh:mma')}</span>
          <div className="icon">{isMessageRead ? <LiaCheckDoubleSolid size={16} /> : <LiaCheckSolid size={16} />}</div>
        </div>
      )}
      <ModalContainer
        width={600}
        title="Poll Details"
        btnComponent={({ onClick }) => (
          <button className="view-votes" onClick={onClick}>
            View Votes
          </button>
        )}
        content={({ onClose }) => (
          <PollDetailsModal
            onClose={onClose}
            poolOptions={poolOptions}
            question={question}
            user={user}
            receivers={receivers}
            author={author}
          />
        )}
      />
    </StyledPole>
  );
};

export default Pole;
