import { io } from "socket.io-client";
let socket = null;

const SOCKET_URL = process.env.NEXT_PUBLIC_BACKEND_ORIGIN;
console.log(SOCKET_URL);

export const connectionWithSocketServer = (token, onUserUpdated, onExpire) => {
  const jwtToken = token;
  socket = io(SOCKET_URL, {
    auth: {
      token: jwtToken,
      type: "user",
    },
  });

  socket.on("connect", () => {
    console.log("User Connected");
  });

  socket.on("tokenExpire", (data) => {
    if (data && data.expire) {
      onExpire(data.expire);
    }
  });

  socket.on("userUpdated", (data) => {
    console.log("DATA: ", data);
    onUserUpdated(data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnect");
  });

  // socket.on('online-users', data => {
  //   const { onlineUsers } = data;
  //   console.log('onlineUsers', onlineUsers);
  // });
};

export const socketServer = () => socket;
