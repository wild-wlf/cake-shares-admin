import React, { useState, useEffect } from 'react';
import { StyledSideBar } from './SideBar.styles';
import CommunityGroup from '../CommunityGroup';
import userImg01 from '../../../../_assets/user-image-01.png';
import notificationService from '@/services/notificationservice';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import { updateCurrentConversations } from '@/helpers/chatHandlers';

const SideBar = ({ handleChoseChatDetails, chosenChatDetails }) => {
  const { user, fetch } = useContextHook(AuthContext, v => ({
    user: v.user,
    fetch: v.fetch,
  }));
  const [conversations, setConversations] = useState([]);

  const { conversations_loading, conversations_data } = notificationService.GetAllConversations(
    { page: 1, itemsPerPage: 10 },
    fetch,
  );

  useEffect(() => {
    if (conversations_data?.conversations?.length > 0) {
      setConversations(conversations_data?.conversations);
    }
  }, [conversations_data]);

  useEffect(() => {
    window.addEventListener('direct_chat_history', event => {
      updateCurrentConversations({
        ...event.detail,
        setConversations,
      });
    });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('direct_chat_history', () => {});
    };
  }, [chosenChatDetails?.conversationId]);

  const getReceiverInfo = participants => {
    const receiver = participants.find(_ => _?._id !== user?._id);
    return {
      username: receiver?.fullName ? receiver?.fullName : receiver?.username,
      profilePicture: receiver?.profilePicture ? receiver?.profilePicture : userImg01,
      _id: receiver?._id,
    };
  };

  return (
    <StyledSideBar>
      <div className="group-holder">
        {conversations_loading
          ? 'Loading...'
          : conversations?.map((item, index) => (
              <CommunityGroup
                key={index}
                type="private"
                image1={getReceiverInfo(item?.participants)?.profilePicture}
                title={getReceiverInfo(item?.participants)?.username}
                text={item?.lastMessage?.content ?? null}
                time={item?.updated_at}
                messageCounter={chosenChatDetails ? 0 : item?.unreadCount ?? 0}
                groupActive={chosenChatDetails?.conversationId === item?._id}
                onClick={() => {
                  handleChoseChatDetails({
                    conversationId: item?._id,
                    author: user._id,
                    receiver: getReceiverInfo(item?.participants)?._id,
                  });
                }}
              />
            ))}
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
