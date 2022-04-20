export type Payment = 'normal' | 'presale' | 'earlybird';

export type Event = 'offline-kit' | 'offline-non-kit' | 'online';
export type PaymentData = {
  payment_id: string;
  type: Payment;
  price: string;
  quota: number;
};

export type EventData = {
  event_id: string;
  event_name: string;
  event_date: string;
  event_start: null | string;
  event_finish: null | string;
  event_type: string;
};

export type EventPaymentData = EventData & {
  event_price: PaymentData[];
};
