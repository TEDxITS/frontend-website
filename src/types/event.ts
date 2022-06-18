export type Payment = 'normal' | 'presale' | 'earlybird';

export type Event = 'offline-kit' | 'offline-non-kit';

export type EventPaymentType = {
  payment: Payment;
  type: Event;
};

export type PaymentApiData = {
  payment_id: string;
  type: Payment;
  price: number;
  quota: number;
};

export type EventApiData = {
  event_id: string;
  event_name: string;
  event_date: string;
  event_start: null | string;
  event_finish: null | string;
  event_type: string;
};

export type EventPaymentApiData = EventApiData & {
  event_price: PaymentApiData[];
};

export type EventSeatApiData = {
  seat_no: number;
  status: boolean;
  booking_id: null | string;
};
