import React, { useState, useEffect, useMemo, useRef } from 'react';
import { StyledSideBar } from './SideBar.styles';
import CommunityGroup from '../CommunityGroup';
import profileplaceHolder from '../../../../_assets/profileplaceHolder.jpg';
import notificationService from '@/services/notificationservice';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '@/context/authContext';
import { updateCurrentConversations } from '@/helpers/chatHandlers';
import { updateCurrentComConversations } from '@/helpers/comMsgHandlers';
import { FaPollH } from 'react-icons/fa';
import Field from '@/components/molecules/Field';
import debounce from 'lodash/debounce';
import { CiSearch } from 'react-icons/ci';

const SideBar = ({
  handleChoseChatDetails,
  chosenChatDetails,
  onlineUsers,
  handleGetTotalConversations,
  type,
  handleChoseComDetails,
  chosenComDetails,
}) => {
  const { user, fetch } = useContextHook(AuthContext, v => ({
    user: v.user,
    fetch: v.fetch,
  }));
  const [searchText, setSearchText] = useState('');
  const debounceRef = useRef(0);

  const [conversations, setConversations] = useState([]);

  const { conversations_loading, conversations_data } = notificationService.GetAllConversations(
    {
      page: 1,
      itemsPerPage: 10,
      type: type === 'private' ? 'PERSONAL_CHAT' : type === 'community' ? 'COM_CHAT' : 'STAKE_CHAT',
      searchText,
    },
    fetch,
  );

  useEffect(() => {
    // if (conversations_data?.conversations?.length > 0) {
    setConversations(conversations_data?.conversations);
    // }
  }, [conversations_data]);

  useEffect(() => {
    window.addEventListener('direct_chat_history', event => {
      if (type === 'private') {
        updateCurrentConversations({
          ...event.detail,
          type: 'DIRECT_MESSAGE',
          setConversations,
        });
      }
    });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('direct_chat_history', () => {});
    };
  }, [type]);

  useEffect(() => {
    window.addEventListener('com_message_history', event => {
      if (type === 'community' || type === 'stake') {
        updateCurrentComConversations({
          ...event.detail,
          type: type === 'community' ? 'COM_CHAT_MESSAGE' : 'STAKE_CHAT_MESSAGE',
          setConversations,
        });
      }
    });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('com_message_history', () => {});
    };
  }, [type]);

  useEffect(() => {
    if (conversations?.length > 0) {
      handleGetTotalConversations(conversations?.length);
    }
  }, [conversations, handleGetTotalConversations]);

  const getReceiverInfo = participants => {
    const receiver = participants.find(_ => _?._id !== user?._id);
    return {
      username: receiver?.fullName ? receiver?.fullName : receiver?.username,
      profilePicture: receiver?.profilePicture ? receiver?.profilePicture : profileplaceHolder,
      _id: receiver?._id,
    };
  };

  const renderParticipants = participants => {
    const channelParticipants = participants.filter(_ => _?._id !== user?._id);
    return channelParticipants.map((item, index) => (
      <>
        <span>{item?.fullName || item?.username}</span>
        {channelParticipants.length - 1 !== index && <span>,&nbsp;</span>}
      </>
    ));
  };

  const onSearchCallText = useMemo(
    () =>
      debounce(value => {
        debounceRef.current += 1;
        const LocalRef = debounceRef.current;
        setTimeout(() => {
          if (LocalRef === debounceRef.current) {
            setSearchText(value);
          }
        }, 1);
      }, 300),
    [],
  );

  return (
    <StyledSideBar>
      <div className="search">
        <Field
          type="search"
          rounded
          sm
          name="search"
          placeholder={'Search Chats'}
          suffix={<CiSearch className="icon" />}
          onChange={({ target: { value } }) => {
            onSearchCallText(value.trim());
          }}
        />
      </div>
      <div className="group-holder">
        {conversations_loading ? (
          'Loading...'
        ) : conversations?.length > 0 ? (
          conversations?.map((item, index) => (
            <CommunityGroup
              key={index}
              type={type}
              isOnline={
                type === 'private' ? onlineUsers?.find(_ => _?.id === getReceiverInfo(item?.participants)?._id) : false
              }
              image1={
                type === 'private'
                  ? getReceiverInfo(item?.participants)?.profilePicture
                  : type === 'community' || type === 'stake'
                  ? user?.profilePicture || profileplaceHolder
                  : null
              }
              image2={item?.participants[0]?.profilePicture || profileplaceHolder}
              image3={
                item?.participants[1]?._id === user?._id
                  ? item?.participants[2]
                    ? item?.participants[2]?.profilePicture || profileplaceHolder
                    : null
                  : item?.participants[1]?.profilePicture || profileplaceHolder
              }
              title={
                type === 'private'
                  ? getReceiverInfo(item?.participants)?.username
                  : type === 'community' || type === 'stake'
                  ? renderParticipants(item?.participants)
                  : null
              }
              text={
                item?.lastMessage?.content ? (
                  item?.lastMessage?.content
                ) : item?.lastMessage?.isPool ? (
                  <>
                    <FaPollH /> Poll
                  </>
                ) : null
              }
              time={item?.updated_at}
              messageCounter={
                type === 'private'
                  ? chosenChatDetails
                    ? 0
                    : item?.unreadCount ?? 0
                  : type === 'community' || type === 'stake'
                  ? chosenComDetails
                    ? 0
                    : item?.unreadCount ?? 0
                  : 0
              }
              groupActive={
                chosenChatDetails?.conversationId === item?._id || chosenComDetails?.conversationId === item?._id
              }
              onClick={() => {
                if (type === 'private') {
                  handleChoseChatDetails({
                    conversationId: item?._id,
                    author: user._id,
                    receiver: getReceiverInfo(item?.participants)?._id,
                    profilePicture: getReceiverInfo(item?.participants)?.profilePicture,
                    username: getReceiverInfo(item?.participants)?.username,
                  });
                }
                if (type === 'community' || type === 'stake') {
                  handleChoseComDetails({
                    conversationId: item?._id,
                    author: user._id,
                    receivers: item?.participants,
                  });
                }
              }}
            />
          ))
        ) : (
          <div className="noConvoFound">No Conversation Found!</div>
        )}
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
