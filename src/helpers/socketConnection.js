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
