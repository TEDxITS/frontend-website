import { useRouter } from 'next/router';
import * as React from 'react';
import toast from 'react-hot-toast';
import { ImSpinner8 } from 'react-icons/im';

import { getToken, removeToken } from '@/lib/auth';
import api from '@/lib/axios';

import useAuthStore from '@/store/useAuthStore';

import { LOGIN_PAGE, REGISTER_PAGE } from '@/constant/links';

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
    if (
      !isAuthenticated &&
      router.asPath !== LOGIN_PAGE &&
      router.asPath !== REGISTER_PAGE
    ) {
      router.replace(`/auth/login`);
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
    router.asPath !== LOGIN_PAGE &&
    router.asPath !== REGISTER_PAGE
  ) {
    return (
      <div className='bg-cdark flex flex-col justify-center items-center min-h-screen text-gray-800'>
        <ImSpinner8 className='text-clight mb-4 text-4xl animate-spin' />
        <p className='text-clight'>Loading...</p>
      </div>
    );
  }

  return children;
}
