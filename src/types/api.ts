export type ApiResponse<DataType> = {
  success: true;
  message: string;
  data: DataType;
};

export type ApiAuthResponse = {
  success: true;
  message: string;
};
