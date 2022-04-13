import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getToken = (): string => {
  return cookies.get('@tedxits/token');
};

export const setToken = (token: string) => {
  cookies.set('@tedxits/token', token);
};

export const removeToken = () => {
  cookies.remove('@tedxits/token');
};
