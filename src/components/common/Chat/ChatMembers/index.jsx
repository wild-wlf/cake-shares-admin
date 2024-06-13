import React from 'react';
import { ChatMembersWrapper } from './ChatMembers.style';
import ProfilePic from '../../../../_assets/seller-img.png';
import Image from 'next/image';
import { HiOutlineStatusOffline } from 'react-icons/hi';

import { HiOutlineStatusOnline } from 'react-icons/hi';

const ChatMembers = () => {
  const arr = [
    {
      image: ProfilePic,
      name: 'Logan Paulson',
      type: 'Buyer',
      online: true,
    },
    {
      image: ProfilePic,
      name: 'John Doe',
      type: 'Individual Seller',
      online: true,
    },
    {
      image: ProfilePic,
      name: 'Steve Smith',
      type: 'Buyer',
      online: false,
    },
    {
      image: ProfilePic,
      name: 'Alex Hales',
      type: 'Company Seller',
      online: true,
    },
  ];
  return (
    <ChatMembersWrapper>
      {arr?.map((data, index) => (
        <div key={index}>
          <div className="infoWrapper">
            <Image src={data?.image} alt="profilePic" />
            <div className="info">
              <h6>{data?.name}</h6>
              <span>{data?.type}</span>
            </div>
          </div>
          <span className={data?.online ? 'online' : 'offline'}>
            {data?.online ? <HiOutlineStatusOnline /> : <HiOutlineStatusOffline />}
          </span>
        </div>
      ))}
    </ChatMembersWrapper>
  );
};

export default ChatMembers;
