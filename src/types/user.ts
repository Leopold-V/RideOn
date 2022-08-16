export type User = {
  id?: string;
  firstname?: string;
  lastname?: string;
  email: string;
  password?: string;
  friendslist?: string[];
  isOnline?: boolean;
};

export type UserAPIResponse = {
  error: boolean;
  message: string;
  isAuth?: boolean;
  user?: User;
  users?: User[];
};

export type UserLoginAPIResponse = UserAPIResponse & {
  token: string;
};
