import { useRouter } from 'next/router';
import * as React from 'react';
import toast from 'react-hot-toast';

import { getToken, removeToken } from '@/lib/auth';
import api from '@/lib/axios';

import useAuthStore from '@/store/useAuthStore';

import { LOGIN_PAGE } from '@/constant/links';

import LoadingPage from './layout/LoadingPage';

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
    if (!isAuthenticated && router.asPath !== LOGIN_PAGE) {
      router.replace(LOGIN_PAGE);
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
    router.asPath !== LOGIN_PAGE
  ) {
    return <LoadingPage />;
  }

  return children;
}
