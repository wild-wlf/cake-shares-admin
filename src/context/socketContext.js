import React, {createContext, useEffect, useState} from "react";
import {getCookie} from "@/helpers/common";
import {useContextHook} from "use-context-hook";
import {connectionWithSocketServer, socketServer} from "../helpers/socketConnection/socketConnection";
import {AuthContext} from "./authContext";

const context = {
    socket: null,
};

export const SocketContext = createContext(context);

export function SocketContextProvider(props) {
    const {setSocketData, setExpire, isLoggedIn} = useContextHook(AuthContext, v => ({
        setSocketData: v.setSocketData,
        setExpire: v.setExpire,
        isLoggedIn: v.isLoggedIn,
    }));
    const access_token = getCookie(process.env.NEXT_PUBLIC_TOKEN_COOKIE);
    const [socket, setSocket] = useState(null);

    const handleUserUpdate = data => {
        setSocketData(data);
    };

    const handleExpire = data => {
        setExpire(data);
    };

    useEffect(() => {
        if (access_token || isLoggedIn) {
            setTimeout(() => {
                connectionWithSocketServer(
                    access_token,
                    handleUserUpdate,
                    handleExpire
                    // handleUpComingNotifications,
                    // updateNotification
                );
                setSocket(socketServer());
                socketServer();
            }, 1000);
        }
        return () => {
            socketServer()?.off("connect");
            socketServer()?.off("disconnect");
            socketServer()?.off();
        };
    }, [access_token]);

    return <SocketContext.Provider value={{socket}}>{props.children}</SocketContext.Provider>;
}
