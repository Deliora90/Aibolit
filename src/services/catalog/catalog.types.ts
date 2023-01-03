import { Array, Number, String, Record } from 'runtypes';
import { IOption } from 'types/common/IOption';

export type CitiesResponce = IOption<number, string>[];

const CityOption = Record({
  id: Number,
  value: String,
});

export const CitiesResponceObject = Array(CityOption);
