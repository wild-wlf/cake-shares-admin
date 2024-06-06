import React, { createContext, useEffect } from 'react';
import { getCookie } from '@/helpers/common';
import { useContextHook } from 'use-context-hook';
import { connectionWithSocketServer, socketServer } from '../helpers/socketConnection';
import { AuthContext } from './authContext';

const context = {
  socket: null,
};

export const SocketContext = createContext(context);

export function SocketContextProvider(props) {
  const { isLoggedIn, setSocketData } = useContextHook(AuthContext, v => ({
    isLoggedIn: v.isLoggedIn,
    setSocketData: v.setSocketData,
  }));
  const access_token = getCookie(process.env.NEXT_PUBLIC_TOKEN_COOKIE);

  const handleUserUpdate = data => {
    setSocketData(data);
  };

  useEffect(() => {
    if (access_token || isLoggedIn) {
      setTimeout(() => {
        connectionWithSocketServer(access_token, handleUserUpdate);
      }, 1000);
    }
    return () => {
      socketServer()?.off('connect');
      socketServer()?.off('disconnect');
      socketServer()?.off();
    };
  }, [access_token, isLoggedIn]);

  return <SocketContext.Provider value={{ socket: socketServer() }}>{props.children}</SocketContext.Provider>;
}
