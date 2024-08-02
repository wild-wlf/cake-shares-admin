/* eslint-disable react-hooks/exhaustive-deps */
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
    '/shareholder-chat',
    '/private-chat',
    '/community-chat',
    '/wallet',
    '/profile',
    '/permissions',
    '/roles',
    '/users',
  ];

  const onLogout = async () => {
    try {
      await userService.logout();
      setIsLoggedIn(false);
      router.push('/sign-in');
      clearCookie(process.env.NEXT_PUBLIC_TOKEN_COOKIE);
      clearCookie(process.env.NEXT_PUBLIC_ALLOWED_PAGES_COOKIE);
      clearCookie(process.env.NEXT_PUBLIC_USER_TYPE_COOKIE);
      Toast({ type: 'success', message: 'Logged Out Successfully!' });
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const getPermissions = () => {
    setLoadingUser(true);
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
        setIsLoggedIn(false);
        setLoadingUser(false);
        Toast({
          type: 'error',
          message: err.message,
        });
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      getPermissions();
    } else if (!isLoggedIn) {
      
      clearCookie(process.env.NEXT_PUBLIC_TOKEN_COOKIE);
      clearCookie(process.env.NEXT_PUBLIC_ALLOWED_PAGES_COOKIE);
      clearCookie(process.env.NEXT_PUBLIC_USER_TYPE_COOKIE);
      if (privatePages.includes(router.pathname)) {
        router.push('/sign-in');
      }

    }

    window.addEventListener('FETCH_ADMIN_ROLE', () => {
      getPermissions();
    });
    return () => {
      window.removeEventListener('FETCH_ADMIN_ROLE', () => {
        getPermissions();
      });
    };
  }, [isLoggedIn, fetch_user, reFetch]);

  useEffect(() => {
    if (socketData?.approved && isLoggedIn) {
      setTimeout(() => {
        getPermissions();
      }, 1000);
    }
  }, [socketData]);

  const onLogin = async ({ username, password }) => {
    setLoadingUser(true);
    setLoading(true);

    try {
      const res = await userService.login({
        username,
        password,
        type: 'Seller',
      });
      if (!res?.token) {
        throw new Error(res?.message);
      }

      setIsLoggedIn(true);
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
   * @description - If someone tries to temper with the cookies we take the appropriate action
   */
  useEffect(() => {
    function listenCookieChange(callback, interval) {
      let old_token = getCookie(process.env.NEXT_PUBLIC_TOKEN_COOKIE);
      let old_allowed = getCookie(process.env.NEXT_PUBLIC_ALLOWED_PAGES_COOKIE);
      startTransition(() => {
        setInterval(() => {
          const new_bap_token = getCookie(process.env.NEXT_PUBLIC_TOKEN_COOKIE);
          const new_allowed = getCookie(process.env.NEXT_PUBLIC_ALLOWED_PAGES_COOKIE);
          if (new_bap_token !== old_token) {
            try {
              callback(new_bap_token, process.env.NEXT_PUBLIC_TOKEN_COOKIE);
            } finally {
              old_token = new_bap_token;
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
          // console.log('cookie');
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
        getPermissions,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};
