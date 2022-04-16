export type ApiResponse<DataType> = {
  success: true;
  message: string;
  data: DataType;
};

export type ApiAuthResponse = {
  success: boolean;
  message: string;
};

export type Profile = {
  user_id: string;
  user_name: string;
  user_email: string;
  user_latest_activities: string;
  user_verification: boolean;
  user_token: string;
};
