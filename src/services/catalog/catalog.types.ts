import { Array, Number, String, Record } from 'runtypes';
import { IOption } from 'types/common/IOption';

export type CitiesResponse = IOption<number, string>[];

const CityOption = Record({
  id: Number,
  value: String,
});

export const CitiesResponseObject = Array(CityOption);
