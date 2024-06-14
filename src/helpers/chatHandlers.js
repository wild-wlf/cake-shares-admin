import { setSeenMessage } from './socketConnection';

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
    });
  }

  setChatMessages(prev => {
    return removeDuplicates([...prev, message], '_id');
  });
};

function removeDuplicates(array, propertyName) {
  return Object.values(
    array.reduce(function (unique, current) {
      if (!unique[current[propertyName]]) {
        unique[current[propertyName]] = current;
      }
      return unique;
    }, {}),
  );
}

export const updateCurrentConversations = data => {
  const { conversationId, message, setConversations } = data;

  setConversations(prev => {
    const con = prev?.find(_ => _?._id === conversationId);
    let existingCons = [...prev];

    if (con) {
      const conversationIndex = existingCons?.findIndex(item => item?._id === conversationId);

      if (conversationIndex > -1) {
        existingCons.splice(conversationIndex, 1);
        existingCons.unshift(con);
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
};
