import React from 'react';
import { StyledPollDetailsModal } from './PollDetailsModal.styles';
import { HiMiniStar } from 'react-icons/hi2';
import userImg from '../../../../_assets/userProfile.png';
import Image from 'next/image';

const PollDetailsModal = () => {
  return (
    <StyledPollDetailsModal>
      <div className="question">
        <span className="heading">Question</span>
        <span>How many shares you want to buy?</span>
      </div>
      <div className="options-holder">
        <span className="heading">Options</span>
        <div className="options">
          <div className="total-votes">
            <span className="heading">I want to buy 10 Shares</span>
            <div className="votes-holder">
              <span className="heading">2 Vote</span>
              <HiMiniStar color="#FFB800" size={20} />
            </div>
          </div>
          <div className="user-holder">
            <div>
              <div className="img-holder">
                <Image src={userImg} alt="userImg" width={50} height={50} />
              </div>
              <span className="heading">John</span>
              <span className="time">10 mins ago</span>
            </div>
          </div>
        </div>
      </div>
    </StyledPollDetailsModal>
  );
};

export default PollDetailsModal;
