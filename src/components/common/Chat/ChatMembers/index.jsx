import React from 'react';
import { ChatMembersWrapper } from './ChatMembers.style';
import profileplaceHolder from '../../../../_assets/profileplaceHolder.jpg';
import Image from 'next/image';
import { HiOutlineStatusOffline } from 'react-icons/hi';
import { HiOutlineStatusOnline } from 'react-icons/hi';

const ChatMembers = () => {
  const arr = [
    {
      image: profileplaceHolder,
      name: 'Logan Paulson',
      type: 'Buyer',
      online: true,
    },
    {
      image: profileplaceHolder,
      name: 'John Doe',
      type: 'Individual Seller',
      online: true,
    },
    {
      image: profileplaceHolder,
      name: 'Steve Smith',
      type: 'Buyer',
      online: false,
    },
    {
      image: profileplaceHolder,
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
