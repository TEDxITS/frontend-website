export type User = {
  token: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PageWithAuth<PropsType = any> = React.VFC<PropsType> & {
  permission: 'auth';
};
