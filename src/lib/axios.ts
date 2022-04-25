import axios from 'axios';
import { GetServerSidePropsContext } from 'next';

import { getToken } from './auth';

const isServer = () => {
  return typeof window === 'undefined';
};
let context = <GetServerSidePropsContext>{};

/**
 * Must be set when calling api on server side
 */
export const setApiContext = (_context: GetServerSidePropsContext) => {
  context = _context;
  return;
};

export const baseURL = 'https://tesdeveloper.me/api';

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

api.interceptors.request.use((config) => {
  /** Get localStorage if client side */
  if (!isServer() && config.headers) {
    const token = getToken();
    config.headers.Authorization = token ? `Bearer ${token}` : '';
  }

  /** Get cookies from context if server side */
  if (isServer() && config.headers) {
    if (!context)
      throw 'Api Context not found. You must call `setApiContext(context)` before calling api on server-side';

    config.headers.Authorization = context.req.cookies?.['@tedxits/token']
      ? `Bearer ${context.req.cookies?.['@tedxits/token']}`
      : '';
  }

  return config;
});

export default api;
