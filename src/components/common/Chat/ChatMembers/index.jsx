import React from 'react';
import { ChatMembersWrapper } from './ChatMembers.style';
import profileplaceHolder from '../../../../_assets/profileplaceHolder.jpg';
import Image from 'next/image';
import { HiOutlineStatusOffline, HiOutlineStatusOnline } from 'react-icons/hi';

const ChatMembers = ({ chosenComDetails, user, onlineUsers }) => {
  return (
    <ChatMembersWrapper>
      {chosenComDetails?.receivers
        ?.filter(_ => _?._id !== user?._id)
        ?.map((data, index) => (
          <div key={index}>
            <div className="infoWrapper">
              <Image src={data?.profilePicture || profileplaceHolder} alt="profilePic" />
              <div className="info">
                <h6>{data?.fullName || data?.username}</h6>
                <span>Buyer</span>
              </div>
            </div>
            <span className={data?.online ? 'online' : 'offline'}>
              {onlineUsers?.find(_ => _?.id === data?._id) ? <HiOutlineStatusOnline /> : <HiOutlineStatusOffline />}
            </span>
          </div>
        ))}
    </ChatMembersWrapper>
  );
};

export default ChatMembers;
