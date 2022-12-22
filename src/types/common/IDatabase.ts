import { IOption } from './IOption';
import { IUser } from './IUser';

export interface IDatabase {
  cities: IOption<number, string>[];
  user: IUser;
}
