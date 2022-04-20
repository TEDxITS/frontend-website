export type ApiResponse<DataType> = {
  success: true;
  message: string;
  data: DataType;
};

export type ApiAuthResponse = {
  success: true;
  message: string;
};

export type TicketResponse = {
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
};
export type ApiForgotPass = {
  status: boolean;
  message: string;
};
