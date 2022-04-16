import { useRouter } from 'next/router';
import * as React from 'react';
import toast from 'react-hot-toast';
import { ImSpinner8 } from 'react-icons/im';

import { getToken, removeToken } from '@/lib/auth';
import api from '@/lib/axios';

import useAuthStore from '@/store/useAuthStore';

import { ApiAuthResponse } from '@/types/api';

type PrivateRouteProps = {
  children: JSX.Element;
  permission: 'auth';
};

export default function PrivateRoute({
  children,
  permission: routePermission,
}: PrivateRouteProps) {
  const router = useRouter();

  //#region  //*=========== STORE ===========
  const isAuthenticated = useAuthStore.useIsAuthenticated();
  const login = useAuthStore.useLogin();
  const isLoading = useAuthStore.useIsLoading();
  const stopLoading = useAuthStore.useStopLoading();
  //#endregion  //*======== STORE ===========

  const redirect = () => {
    if (!isAuthenticated && router.asPath !== '/login') {
      router.replace(`/login`);
      toast.error('Please Login or Register your Account First!');
    }
  };
  const loadUser = async () => {
    try {
      const token = getToken();
      if (!token) {
        redirect();
        return;
      }
      const res = await api.post<ApiAuthResponse>(`/auth/check-account`, {
        token: token,
      });
      if (res.data.success) {
        login({
          token: token,
        });
      } else {
        redirect();
      }
    } catch (err) {
      redirect();
      removeToken();
    } finally {
      stopLoading();
    }
  };
  React.useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (
    (isLoading || !isAuthenticated) &&
    routePermission === 'auth' &&
    router.asPath !== '/login'
  ) {
    return (
      <div className='bg-cdark flex flex-col items-center justify-center min-h-screen text-gray-800'>
        <ImSpinner8 className='animate-spin mb-4 text-4xl text-clight' />
        <p className='text-clight'>Loading...</p>
      </div>
    );
  }

  return children;
}
