import { setSeenMessage } from './socketConnection';
import { removeDuplicates } from './common';

export const updateDirectChatHistoryIfActive = data => {
  const { participants, message, conversationId, user, receiverId, setChatMessages } = data;
  const loggedInUser = user;
  const usersInConversation = [receiverId, loggedInUser._id];

  if (participants) {
    updateDirectChatHistoryIfSameConversationActive({
      participants,
      usersInConversation,
      message,
      conversationId,
      loggedInUser,
      setChatMessages,
    });
  } else {
    console.error('error is in updateDirectChatHistoryIfActive');
  }
};

const updateDirectChatHistoryIfSameConversationActive = ({
  participants,
  usersInConversation,
  message,
  conversationId,
  loggedInUser,
  setChatMessages,
}) => {
  if (!Array.isArray(participants) || !Array.isArray(usersInConversation)) {
    console.error('Participants or Users in Conversation is not an array');
  }

  const allParticipantsIncluded = participants.every(participantId => usersInConversation.includes(participantId));

  if (!allParticipantsIncluded) return;
  if (loggedInUser?._id === message?.receiver?._id) {
    setSeenMessage({
      conversationId,
      user: loggedInUser?._id,
      message,
      type: 'user',
    });
  }

    setChatMessages(prev => {
      return removeDuplicates([...prev, message], '_id');
    });
};



export const updateCurrentConversations = data => {
  const { conversationId, message, setConversations, type } = data;

  if (type === message?.type) {
    setConversations(prev => {
      const con = prev?.find(_ => _?._id === conversationId);
      let existingCons = [...prev];

      if (con) {
        const conversationIndex = existingCons?.findIndex(item => item?._id === conversationId);

        if (conversationIndex > -1) {
          existingCons.splice(conversationIndex, 1);
          const { unreadCount, lastMessage, ...rest } = con;
          existingCons.unshift({ ...rest, unreadCount: unreadCount + 1, lastMessage: message });
        }
      }

      if (!con) {
        existingCons.unshift({
          _id: conversationId,
          participants: [{ ...message.author }, { ...message.receiver }],
          lastMessage: message,
          unreadCount: 1,
          updated_at: message?.created_at,
        });
      }

      return existingCons;
    });
  }
};
