import { setComSeenMsg } from './socketConnection';

export const updateChatIfActive = data => {
  const { participants, message, conversationId, user, setChatMessages } = data;

  const loggedInUser = user;
  const usersInConversation = [...participants, loggedInUser._id];

  if (participants) {
    updateChatHistoryIfSameConversationActive({
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

const updateChatHistoryIfSameConversationActive = ({
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
  if (loggedInUser?._id !== message?.author?._id) {
    setComSeenMsg({
      conversationId,
      user: loggedInUser?._id,
      messageId: message?._id,
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

export const updateCurrentComConversations = data => {
  const { conversationId, message, setConversations } = data;

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
        participants: [{ ...message?.author }, { ...message?.receivers }],
        lastMessage: message,
        unreadCount: 1,
        updated_at: message?.created_at,
      });
    }

    return existingCons;
  });
};
