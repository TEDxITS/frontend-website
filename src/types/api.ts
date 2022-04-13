export type ApiResponse<DataType> = {
  success: true;
  message: 'Login Success';
  data: DataType;
};

export type Profile = {
  user_id: string;
  user_name: string;
  user_email: string;
  user_latest_activities: string;
  user_verification: boolean;
  user_token: string;
};
