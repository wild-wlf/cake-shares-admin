import React from 'react';
import { StyledPollDetailsModal } from './PollDetailsModal.styles';
import { HiMiniStar } from 'react-icons/hi2';
import Pic from '@/_assets/SellerProfile.png';
import Image from 'next/image';

const PollDetailsModal = ({ poolOptions, question, user, receivers }) => {
  const getReceiverInfo = user_id => {
    return receivers?.find(_ => _?._id === user_id);
  };

  return (
    <StyledPollDetailsModal>
      <div className="question">
        <span className="heading">Question:</span>
        <span>{question}</span>
      </div>
      <div className="options-holder">
        <span className="heading">Options:</span>
        {poolOptions?.map((item, index) => {
          return (
            <div className="options" key={index}>
              <div className="total-votes">
                <span className="heading vote-option">{item?.option}</span>
                <div className="votes-holder">
                  <span className="heading">{item?.users?.length}</span>
                  {item?.users?.includes(user?._id) && <HiMiniStar color="#FFB800" size={20} />}
                </div>
              </div>

              <div className="user-holder">
                {item?.users?.map((_, __) => {
                  const isCurrentUser = _ === user?._id;
                  const receiverInfo = isCurrentUser ? user : getReceiverInfo(_);
                  const fullName = receiverInfo?.fullName || receiverInfo?.username;
                  const profilePicture = receiverInfo?.profilePicture || Pic;

                  return (
                    <div key={__}>
                      <div className="img-holders">
                        <Image src={profilePicture} alt="userImg" width={50} height={50} />
                      </div>
                      <span className="user-name">{fullName}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </StyledPollDetailsModal>
  );
};

export default PollDetailsModal;
