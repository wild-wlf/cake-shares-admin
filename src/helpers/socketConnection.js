import { io } from 'socket.io-client';
let socket = null;

export const connectionWithSocketServer = token => {
  const jwtToken = token;

  socket = io(process.env.NEXT_PUBLIC_BACKEND_ORIGIN, {
    path: '/websocket',
    auth: {
      token: jwtToken,
      type: 'user',
    },
  });

  socket.on('connect', () => {
    console.log('User Connected');
  });

  socket.on('online-users', data => {
    const { onlineUsers } = data;
    window.dispatchEvent(new CustomEvent('online_users', { detail: [...onlineUsers] }));
  });

  socket.on('direct-chat-history', data => {
    if (socket && data) {
      window.dispatchEvent(new CustomEvent('direct_chat_history', { detail: { ...data } }));
    }
  });

  socket.on('seen-message-response', data => {
    window.dispatchEvent(new CustomEvent('seen_message_response', { detail: { ...data } }));
  });

  socket.on('userUpdated', data => {
    onUserUpdated(data);
  });

  socket.on('sellerNotification', data => {
    window.dispatchEvent(new CustomEvent('seller_notification', { detail: data }));
  });

  socket.on('disconnect', () => {
    console.log('User disconnect');
  });
};

export const socketServer = () => socket;

export const sendDirectMessage = data => {
  if (socket && data) {
    socket.emit('direct-message', data);
  }
};

export const setSeenMessage = data => {
  if (data && socket) {
    socket?.emit('get-seen-message', data);
  }
};
