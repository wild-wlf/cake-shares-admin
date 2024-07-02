import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getCookie, setCookie } from '@/helpers/common';
import { AuthContext } from '@/context/authContext';
import { useContextHook } from 'use-context-hook';

const Home = () => {
  const allowedPages = JSON.parse(getCookie(process.env.NEXT_PUBLIC_ALLOWED_PAGES_COOKIE) || '[]');
  const router = useRouter();

  const { getPermissions } = useContextHook(AuthContext, ['getPermissions']);

  useEffect(() => {
    if (allowedPages.length > 0) {
      router.push(allowedPages[0]);
    } else if (router.query.token) {
      setCookie(process.env.NEXT_PUBLIC_TOKEN_COOKIE, router.query.token);
      getPermissions();
      router.push('dashboard');
    } else {
      router.push('/sign-in');
    }
  }, [allowedPages, router]);

  return <div></div>;
};

export default Home;
