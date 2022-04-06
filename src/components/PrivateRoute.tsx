import { useRouter } from 'next/router';
import * as React from 'react';
import { ImSpinner8 } from 'react-icons/im';

import { getToken, removeToken } from '@/lib/auth';
import api from '@/lib/axios';

import useAuthStore from '@/store/useAuthStore';

import { ApiResponse } from '@/types/api';
import { User } from '@/types/auth';

type PrivateRouteProps = {
  children: JSX.Element;
  permission: 'auth';
};

export default function PrivateRoute({
  children,
  permission: routePermission,
}: PrivateRouteProps) {
  const router = useRouter();
  const { query } = router;

  //#region  //*=========== STORE ===========
  const isAuthenticated = useAuthStore.useIsAuthenticated();
  const isLoading = useAuthStore.useIsLoading();
  const login = useAuthStore.useLogin();
  const stopLoading = useAuthStore.useStopLoading();
  const user = useAuthStore.useUser();
  //#endregion  //*======== STORE ===========

  React.useEffect(() => {
    const loadUser = async () => {
      try {
        const token = getToken();
        if (!token) {
          return;
        }
        const res = await api.get<ApiResponse<User>>('/me');

        login({
          token: res.data.data.token,
        });
      } catch (err) {
        removeToken();
      } finally {
        stopLoading();
      }
    };

    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        // Prevent authenticated user from accessing auth or other role pages
        if (routePermission === 'auth') {
          if (query?.redirect) {
            router.push(query.redirect as string);
          } else {
            router.replace('/');
          }
        }
        // Prevent unauthenticated user from accessing protected pages
      } else {
        if (routePermission !== 'auth') {
          router.replace(`/login/?redirect=${router.asPath}`, `/login/`);
        }
      }
    }
  }, [isAuthenticated, isLoading, query, router, routePermission, user]);

  if (
    // If authenticated user want to access auth or other role pages
    ((isLoading || isAuthenticated) && routePermission === 'auth') ||
    // If unauthenticated user want to access protected pages
    ((isLoading || !isAuthenticated) && routePermission !== 'auth')
  ) {
    return (
      <div className='flex flex-col justify-center items-center min-h-screen text-gray-800'>
        <ImSpinner8 className='mb-4 text-4xl animate-spin' />
        <p>Loading...</p>
      </div>
    );
  }

  return children;
}
