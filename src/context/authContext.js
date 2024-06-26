/* eslint-disable no-unreachable */
import React, { useState, useEffect, startTransition } from 'react';
import { createContextHook } from 'use-context-hook';
import { clearCookie, getCookie, setCookie } from '@/helpers/common';
import userService from '@/services/userService';
import { useCancellablePromise } from '@/helpers/promiseHandler';
import { useRouter } from 'next/router';
import Toast from '@/components/molecules/Toast';

const context = {};

export const AuthContext = createContextHook(context);

export const AuthContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getCookie(process.env.NEXT_PUBLIC_TOKEN_COOKIE));
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [loading_user, setLoadingUser] = useState(false);
  const [fetch_user, setFetchUser] = useState(false);
  const [permission, setPermission] = useState(false);
  const { cancellablePromise } = useCancellablePromise();
  const [socketData, setSocketData] = useState(null);
  const [reFetch, setRefetch] = useState(false);
  const [showTokenModal, setShowTokenModal] = useState(false);
  const [allowedPages, setAllowedPages] = useState(
    JSON.parse(getCookie(process.env.NEXT_PUBLIC_ALLOWED_PAGES_COOKIE)) || [],
  );

  const publicPages = ['/sign-in'];

  const privatePages = [
    '/buyer',
    '/dashboard',
    '/portfolio',
    '/chat',
    '/wallet',
    '/profile',
    '/private-chat',
    '/permissions',
    '/roles',
    '/users',
  ];

  const onLogout = async () => {
    if (!isLoggedIn) return;
    try {
      setIsLoggedIn(prev => !prev);
      clearCookie(process.env.NEXT_PUBLIC_TOKEN_COOKIE);
      clearCookie(process.env.NEXT_PUBLIC_ALLOWED_PAGES_COOKIE);
      clearCookie(process.env.NEXT_PUBLIC_USER_TYPE_COOKIE);
      router.push('/sign-in');
      Toast({ type: 'success', message: 'Logged Out Successfully!' });
      await userService.logout();
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const getPermissions = () => {
    // debugger
    // if (!isLoggedIn) return;
    setLoadingUser(true);
    // if (!allowedPages) return;
    cancellablePromise(userService.getCurrentAdmin())
      .then(res => {
        setAllowedPages(res.permissions.filter(p => p.includes('.nav')).map(p => `${p.split('.')[0]}`));
        setCookie(
          process.env.NEXT_PUBLIC_ALLOWED_PAGES_COOKIE,
          JSON.stringify(res.permissions.filter(p => p.includes('.nav')).map(p => `${p.split('.')[0]}`)),
        );
        setCookie(
          process.env.NEXT_PUBLIC_USER_TYPE_COOKIE,
          JSON.stringify({
            type: res?.user?.type,
            isIndividualSeller: res?.user?.isIndividualSeller,
          }),
        );
        const firstPage = res.permissions.filter(p => p.includes('.nav')).map(p => `${p.split('.')[0]}`)[0];

        setLoadingUser(false);
        setUser(res?.user);
        if (publicPages.includes(router.pathname)) {
          router.push(firstPage);
        }
      })
      .catch(err => {
        clearCookie(process.env.NEXT_PUBLIC_TOKEN_COOKIE);
        clearCookie(process.env.NEXT_PUBLIC_ALLOWED_PAGES_COOKIE);
        setLoadingUser(false);
        Toast({
          type: 'error',
          message: err.message,
        });
      });
  };
  /**
   * @description - This function is used to fetch the user details from the server
   */
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     getPermissions();
  //   }
  //   // listen to event
  //   window.addEventListener("FETCH_ADMIN_ROLE", () => {
  //     getPermissions();
  //   });
  //   return () => {
  //     window.removeEventListener("FETCH_ADMIN_ROLE", () => {
  //       getPermissions();
  //     });
  //   };
  // }, [isLoggedIn, fetch_user]);

  useEffect(() => {
    if (isLoggedIn || permission) {
      getPermissions();
    } else if (!isLoggedIn) {
      if (privatePages.includes(router.pathname)) {
        router.push('/sign-in');
      }
    }
  }, [isLoggedIn, permission]);

  useEffect(() => {
    if (socketData?.approved) {
      setTimeout(() => {
        getPermissions();
      }, 1000);
    }
  }, [socketData]);

  const onLogin = async ({ username, password, sellerType }) => {
    setLoadingUser(true);
    setLoading(true);

    try {
      const res = await userService.login({
        username,
        password,
        type: 'Seller',
        sellerType: sellerType.value,
      });
      if (!res?.token) {
        throw new Error(res?.message);
      }

      setIsLoggedIn(true);
      // router.push("/dashboard");
      setCookie(process.env.NEXT_PUBLIC_TOKEN_COOKIE, res.token);
      setLoadingUser(false);
      setLoading(false);
      Toast({ type: 'success', message: 'Logged In Successfully!' });
    } catch ({ message }) {
      setIsLoggedIn(false);
      setLoadingUser(false);
      setLoading(false);
      Toast({ type: 'error', message });
    }
  };

  /**
   * @description - If the User is Logged in we start listning to the socket
   *
   */
  //   useEffect(() => {
  //     const startListening = () => {
  //       const socket = webSocketConnection.reOpen();
  //       socket.addEventListener("message", (event) => {
  //         const data = JSON.parse(event.data);
  //         const sound = new Audio(
  //           "https://plastk.s3.ca-central-1.amazonaws.com/mp3_file/jim_notification.mp3"
  //         );
  //         window.dispatchEvent(new Event("mousemove"));
  //         sound.play();
  //         Toast({
  //           type: "info",
  //           message: data.message
  //             ? `Received: ${data.message}`
  //             : "Updates Received From Admin",
  //         });
  //         switch (data.type) {
  //           case "LOG_OUT":
  //             onLogout();
  //             break;
  //           default:
  //             window.dispatchEvent(new Event(data.type));
  //             break;
  //         }
  //       });
  //       socket.addEventListener("close", (e) => {
  //         if (e.reason !== "reopening")
  //           setTimeout(() => {
  //             if (isLoggedIn) {
  //               startListening();
  //             } else {
  //               router.push("/");
  //               webSocketConnection.close();
  //             }
  //           }, 5000);
  //       });
  //     };

  //     if (isLoggedIn) {
  //       startListening();
  //     } else {
  //       router.push("/");
  //       webSocketConnection.close();
  //     }
  //   }, [isLoggedIn]);

  // useEffect(() => {
  //   const startListening = () => {
  //     const socket = webSocketConnection.reOpen();
  //     socket.addEventListener("message", (event) => {
  //       const data = JSON.parse(event.data);
  //       const sound = new Audio(
  //         "https://plastk.s3.ca-central-1.amazonaws.com/mp3_file/jim_notification.mp3"
  //       );
  //       window.dispatchEvent(new Event("mousemove"));
  //       sound.play();
  //       Toast({
  //         type: "info",
  //         message: data.message
  //           ? `Received: ${data.message}`
  //           : "Updates Received From Admin",
  //       });
  //       switch (data.type) {
  //         case "LOG_OUT":
  //           onLogout();
  //           break;
  //         default:
  //           window.dispatchEvent(new Event(data.type));
  //           break;
  //       }
  //     });
  //     socket.addEventListener("close", (e) => {
  //       if (e.reason !== "reopening")
  //         setTimeout(() => {
  //           if (isLoggedIn) {
  //             startListening();
  //           }
  //         }, 5000);
  //     });
  //   };
  //   if (isLoggedIn) startListening();
  //   else {
  //     webSocketConnection.close();
  //   }
  // }, [isLoggedIn]);

  /**
   * @description - If someone tries to temper with the cookies we take the appropriate action
   */
  useEffect(() => {
    function listenCookieChange(callback, interval) {
      let old_bap_token = getCookie(process.env.NEXT_PUBLIC_TOKEN_COOKIE);
      let old_allowed = getCookie(process.env.NEXT_PUBLIC_ALLOWED_PAGES_COOKIE);
      startTransition(() => {
        setInterval(() => {
          const new_bap_token = getCookie(process.env.NEXT_PUBLIC_TOKEN_COOKIE);
          const new_allowed = getCookie(process.env.NEXT_PUBLIC_ALLOWED_PAGES_COOKIE);
          if (new_bap_token !== old_bap_token) {
            try {
              callback(new_bap_token, process.env.NEXT_PUBLIC_TOKEN_COOKIE);
            } finally {
              old_bap_token = new_bap_token;
            }
          }
          if (new_allowed !== old_allowed) {
            try {
              callback(new_allowed, process.env.NEXT_PUBLIC_ALLOWED_PAGES_COOKIE);
            } finally {
              old_allowed = new_allowed;
            }
          }
        }, interval);
      });
    }
    listenCookieChange((value, cookie) => {
      if (cookie === process.env.NEXT_PUBLIC_TOKEN_COOKIE) {
        if (!value) {
          onLogout();
          console.log('cookie');
        }
      }
      if (cookie === process.env.NEXT_PUBLIC_ALLOWED_PAGES_COOKIE) {
        if (JSON.stringify(allowedPages) !== value && isLoggedIn) {
          // getPermissions();
        }
      }
    }, 1000);
  }, []);

  const hasPermission = perm => user?.permissions?.includes(perm);
  return (
    <AuthContext.Provider
      value={{
        setIsLoggedIn,
        onLogout,
        onLogin,
        refetch: () => setRefetch(_ => !_),
        fetchUser: () => setFetchUser(() => !fetch_user),
        setShowTokenModal,
        setLoading,
        hasPermission,
        setSocketData,
        socketData,
        allowedPages,
        showTokenModal,
        loading,
        isLoggedIn,
        fetch: reFetch,
        user,
        setUser,
        setPermission,
        // loading_user,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};
