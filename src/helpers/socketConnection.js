// import { io } from 'socket.io-client';
// let socket = null;

// const SOCKET_URL = process.env.NEXT_PUBLIC_BACKEND_ORIGIN;
// console.log(SOCKET_URL);

// export const connectionWithSocketServer = (token, onUserUpdated, onExpire) => {
//   const jwtToken = token;
//   socket = io(SOCKET_URL, {
//     auth: {
//       token: jwtToken,
//       type: 'user',
//     },
//   });

//   socket.on('connect', () => {
//     console.log('User Connected');
//   });

//   socket.on('tokenExpire', data => {
//     if (data && data.expire) {
//       onExpire(data.expire);
//     }
//   });

//   socket.on('userUpdated', data => {
//     console.log('DATA: ', data);
//     onUserUpdated(data);
//   });

//   socket.on('disconnect', () => {
//     console.log('User disconnect');
//   });
// };

// export const socketServer = () => socket;

import { io } from 'socket.io-client';
let socket = null;

export const connectionWithSocketServer = token => {
  const jwtToken = token;

  socket = io(process.env.NEXT_PUBLIC_BACKEND_ORIGIN, {
    path: '/websocket',
    auth: {
      token: jwtToken,
      type: 'admin',
    },
  });

  socket.on('connect', () => {
    console.log('User Connected');
  });

  socket.on('adminNotification', data => {
    console.log('DATA: ', data);
    window.dispatchEvent(new CustomEvent('admin_notification', { detail: data }));
  });

  socket.on('disconnect', () => {
    console.log('User disconnect');
  });
};

export const socketServer = () => socket;
