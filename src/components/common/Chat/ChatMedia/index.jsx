import React, { useState } from 'react';
import { StyledChatMedia } from './ChatMedia.styles';
import ProfilePic from '../../../../_assets/SellerProfile.png';
import Image from 'next/image';
import Attachments from '../../../atoms/Attachments';
import { useContextHook } from 'use-context-hook';
import profileplaceHolder from '../../../../_assets/profileplaceHolder.jpg';
import MediaSlide from './MediaSlide';
import { TbExternalLink } from 'react-icons/tb';
import { AuthContext } from '@/context/authContext';
import CenterModal from '@/components/molecules/Modal/CenterModal';
import ChatMembers from '../ChatMembers';

const ChatMedia = ({ chosenChatDetails, type, onlineUsers, chosenComDetails }) => {
  const { user } = useContextHook(AuthContext, v => ({
    user: v.user,
  }));
  const [chatMembers, setChatMembers] = useState(false);

  const getThreeParticipants = () => {
    const receivers = chosenComDetails?.receivers?.filter(_ => _?._id !== user?._id);
    if (receivers?.length > 3) {
      receivers?.splice(0, 3);
    }
    return receivers;
  };

  return (
    <>
      <CenterModal open={chatMembers} setOpen={setChatMembers} title="All Chat Members" width="450">
        <ChatMembers chosenComDetails={chosenComDetails} user={user} onlineUsers={onlineUsers} />
      </CenterModal>
      <StyledChatMedia>
        <strong className="title">{type === 'community' || type === 'stake' ? 'Chat Members' : 'Private Chat'}</strong>
        <div className="chat-between">
          {type === 'private' && (
            <div className="col">
              <div
                className={`image-warp ${
                  onlineUsers?.find(_ => _?.id === chosenChatDetails?.receiver) ? 'online' : 'offline'
                }`}>
                <Image src={chosenChatDetails?.profilePicture} alt="profilePicture" width={80} height={80} />
              </div>
              <label className="userName">{chosenChatDetails?.username}</label>
              <span>Buyer</span>
            </div>
          )}

          {(type === 'community' || type === 'stake') && (
            <div className="col">
              <div className="image-warp buyer">
                <Image
                  src={user?.profilePicture ? user?.profilePicture : profileplaceHolder}
                  alt="profilePicture"
                  width={80}
                  height={80}
                />
              </div>
              <label className="userName">{user?.fullName || user?.username}</label>
              <span>Me</span>
            </div>
          )}

          {(type === 'community' || type === 'stake') && (
            <div className="community-col">
              <div className="images-wrapper">
                {getThreeParticipants()?.map((item, index) => {
                  return (
                    <div className="img-holder" key={index}>
                      <Image src={item?.profilePicture || ProfilePic} alt="profilePic" width={45} height={45} />
                    </div>
                  );
                })}
              </div>

              {chosenComDetails?.receivers?.filter(_ => _?._id !== user?._id)?.length > 2 && (
                <span
                  style={{ color: 'white' }}
                  onClick={() => {
                    setChatMembers(true);
                  }}>
                  View All <TbExternalLink fontSize={18} />
                </span>
              )}
            </div>
          )}

          {type === 'private' && (
            <div className="col">
              <div className="image-warp buyer">
                <Image
                  src={user?.profilePicture ? user?.profilePicture : profileplaceHolder}
                  alt="profilePicture"
                  width={80}
                  height={80}
                />
              </div>
              <label className="userName">{user?.fullName || user?.username}</label>
              <span>Me</span>
            </div>
          )}
        </div>
        <MediaSlide />
        <Attachments />
      </StyledChatMedia>
    </>
  );
};

export default ChatMedia;
