import React, { useState } from 'react';
import { StyledCommunityGroup } from './CommunityGroup.styles';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const CommunityGroup = ({ groupActive, onClick, type, image1, image2, image3, title, text, time, messageCounter }) => {
  const [star, setStar] = useState(false);
  function handleStarToggle() {
    setStar(!star);
  }

  return (
    <StyledCommunityGroup $groupActive={groupActive} onClick={onClick} $type={type}>
      <div className="all-images">
        <div className="image-holder img1">
          <Image src={image1} alt="userImg01" />
        </div>
        <div className="image-holder img2">
          <Image src={image2} alt="userImg01" />
        </div>
        <div className="image-holder img3">
          <Image src={image3} alt="userImg01" />
        </div>
      </div>
      <div className="community-name">
        <span className="title">{title}</span>
        <span className="text">{text}</span>
      </div>
      <div className="time-holder">
        <span className="time">{time}</span>
        <div className="icon-holder">
          {messageCounter && (
            <div className="icon message-counter">
              <span>{messageCounter}</span>
            </div>
          )}
          <div className={star ? 'icon active' : 'icon'} onClick={() => handleStarToggle(true)}>
            <FaStar size={12} />
          </div>
        </div>
      </div>
    </StyledCommunityGroup>
  );
};

export default CommunityGroup;
