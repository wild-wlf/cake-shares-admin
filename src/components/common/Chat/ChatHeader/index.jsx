import Image from 'next/image';
import React from 'react';
import { ChatHeaderWrapper } from './ChatHeader.style';
import profileplaceHolder from '../../../../_assets/profileplaceHolder.jpg';

const ChatHeader = ({  type,productName }) => {
  return type === 'community' || type === 'stake' ? (
    <ChatHeaderWrapper>{productName}</ChatHeaderWrapper>
  ) : (
    <ChatHeaderWrapper>
      <div className={`image-wrapper ${onlineUsers?.find(_ => _?.id === userInfo?._id) ? 'online' : 'offline'}`}>
        <Image
          src={userInfo?.profilPicture ? userInfo?.profilPicture : profileplaceHolder}
          alt="profilePic"
          width={40}
          height={40}
        />
      </div>
      <div>
        <h6>{userInfo?.fullName || userInfo?.username}</h6>
        <span>You & {userInfo?.fullName || userInfo?.username}</span>
      </div>
    </ChatHeaderWrapper>
  );
};

export default ChatHeader;
