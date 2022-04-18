export type ApiResponse<DataType> = {
  success: boolean;
  message: string;
  data: DataType;
};

export type ApiAuthResponse = {
  success: boolean;
  message: string;
};
