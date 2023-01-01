import { faker } from '@faker-js/faker';

export const getCities = (quantity: number = 10) => {
  const result = [];
  for (let i = 0; i < quantity; i++) {
    result.push({
      id: faker.datatype.number(),
      value: faker.address.cityName(),
    });
  }
  return result;
};
