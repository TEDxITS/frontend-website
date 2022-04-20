/* eslint-disable unused-imports/no-unused-vars */
import api from '../axios';

import { ApiResponse } from '@/types/api';
import { Event, EventPaymentData, Payment } from '@/types/event';

export const getEventData = async (type: Event, payment: Payment) => {
  const response = await api.get<ApiResponse<EventPaymentData>>('');
};
