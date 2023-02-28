import { Number, Record, String } from 'runtypes';
import { IUser } from 'types/common/IUser';

export type LoginRequest = { login: string; password: string };

export type LoginResponse = { token: string; user: IUser };

export const LoginResponseObject = Record({
  token: String,
  user: Record({
    id: Number,
    name: String,
    lastName: String,
  }),
});
