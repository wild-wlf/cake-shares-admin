// pages/index.js
import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { getCookie, setCookie } from '@/helpers/common';
// import { AuthContext } from '@/context/authContext';

const Home = () => {
  const allowedPages = JSON.parse(getCookie(process.env.NEXT_PUBLIC_ALLOWED_PAGES_COOKIE) || '[]');
  const router = useRouter();
  const { query } = router;
  // const { fetchUserData, setUserToken } = useContext(AuthContext);
  // localhost:3004?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NjJkNDlmMzc2ZTdjMWUxNjU3MGQ4MiIsInVzZXJuYW1lIjoiYXNhZGJ1a2hhcmk5OCIsImlhdCI6MTcxOTg0OTQ1NSwiZXhwIjoxNzE5ODU2NjU1fQ.7sRXktcLqI5T9kvM5bl9xd1DwXJHkPG7942a5ZTLwOs
  http: useEffect(() => {
    if (allowedPages.length > 0) {
      router.push(allowedPages[0]);
    } else {
      router.push('/sign-in');
    }
  }, [allowedPages, router]);

  useEffect(() => {
    console.log(query.token);
    if (query && query.token) {
      setCookie(process.env.NEXT_PUBLIC_TOKEN_COOKIE, query.token);
      // setUserToken(query.token);
      // fetchUserData(query.token);
    }
  }, [query]);

  return <div></div>;
};

export default Home;
