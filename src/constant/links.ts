import { Event, EventPaymentType, Payment } from '@/types/event';

export const AllPaymentType: Payment[] = ['earlybird', 'normal', 'presale'];
export const AllEventType: Event[] = ['offline-kit', 'offline-non-kit'];

export const offlineNonKit: EventPaymentType = {
  payment: 'earlybird',
  type: 'offline-non-kit',
};
export const offlineWithKit: EventPaymentType = {
  payment: 'earlybird',
  type: 'offline-kit',
};

export const LOGIN_PAGE = '/auth/login';
export const FORGOT_PASSWORD_PAGE = '/auth/forgot-password';

export const REGISTER_PAGE = '/auth/register';
export const RESEND_VERIFICATION_PAGE =
  '/auth/verification/resend-verification';

export const DASHBOARD_PAGE = '/dashboard/ticket';

export const TICKET_PAGE_AUTH = '/dashboard/ticket';
export const TICKET_PAGE_NO_AUTH = '/ticket';
