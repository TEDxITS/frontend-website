export type ApiResponse<DataType> = {
  success: boolean;
  message: string;
  data: DataType;
  error?: {
    message: string;
  };
};

export type ApiAuthResponse = {
  success: boolean;
  message: string;
};

export type TicketResponse = {
  payment_id?: string;
  booking_id: string;
  event_id: string;
  user_id: string;
  booking_name: string;
  booking_address: string;
  booking_telp: string;
  booking_status: boolean;
  booking_start_time: string;
  booking_finish_time: string;
  Event: {
    event_id: string;
    event_name: string;
    event_date: string;
    event_start: null;
    event_finish: null;
    event_type: string;
  };
  PaymentType?: {
    payment_id: string;
    event_id: string;
    type: string;
    price: string;
    quota: number;
  };
};

export type CheckoutDataResponse = {
  event_id: string;
  user_id: string;
  payment_id: string;
  booking_name: string;
  booking_address: string;
  booking_telp: string;
  booking_status: boolean;
  booking_start_time: string;
  booking_finish_time: string;
};

export type ApiForgotPass = {
  status: boolean;
  message: string;
};
