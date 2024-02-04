export interface IUser {
  id: number;
  login: string;
  email: string;
  password: string;
  token: string;
  favoriteMovies: Array<number>;
  theme: "dark" | "light";
}

export type NewUserType = Omit<IUser, "id">;

export type UserLoginAndEmailType = Pick<IUser, "id" | "login" | "email">;

export type EnteredUserLoginAndEmailType = Pick<IUser, "login" | "email">;

export type EnteredUserEmailAndPasswordType = Pick<IUser, "email" | "password">;

export type UserTokenType = Pick<IUser, "token">;

export interface IInitialAuthState {
  user: IUser | null;
  usersLoginsAndEmails: Array<UserLoginAndEmailType>;
  loading: boolean;
  errorMessage: string;
}
