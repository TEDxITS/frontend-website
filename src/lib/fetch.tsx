import api from './axios';
import { LinkData } from './type/data';

import { ApiResponse } from '@/types/api';
import { Event, EventPaymentApiData, Payment } from '@/types/event';

export const postLink = async (value: LinkData) => {
  const res = await fetch('/api/createUrl', {
    method: 'POST',
    body: JSON.stringify(value),
  });

  return await res.json();
};

export const getLink = async (value: string) => {
  const data = {
    shortened: value,
  };

  const res = await fetch('/api/getShortUrl', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return await res.json();
};
