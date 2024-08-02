import React from 'react';
import { StyledPollDetailsModal } from './PollDetailsModal.styles';
import { HiMiniStar } from 'react-icons/hi2';
import Pic from '@/_assets/SellerProfile.png';
import Image from 'next/image';
import userAvatar from '../../../../../_assets/user_avatar.png';

const PollDetailsModal = ({ poolOptions, question, user, receivers, author }) => {
  const getReceiverInfo = user_id => {
    return receivers?.find(_ => _?._id === user_id?._id);
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
                  const receiverInfo = getReceiverInfo(_);
                  let fullName, profilePicture;
                  if (!receiverInfo) {
                    fullName = author?.fullName;
                    profilePicture = author?.profilePicture || Pic;
                  } else {
                    fullName = receiverInfo?.fullName || receiverInfo?.username;
                    profilePicture = receiverInfo?.profilePicture || Pic;
                  }

                  return (
                    <div key={__}>
                      <div className="img-holders">
                        <Image
                          src={_?.isAnonymous ? userAvatar : profilePicture}
                          alt="userImg"
                          width={50}
                          height={50}
                        />
                      </div>
                      <span className="user-name">{!_?.isAnonymous ? fullName : 'Anonymous'}</span>
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
