import path from 'node:path';
import { faker } from '@faker-js/faker';
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { IOption } from 'types/common/IOption';
import { IDatabase } from 'types/common/IDatabase';
import { IUser } from 'types/common/IUser';

interface IDataCreator {
  createCities: (quantity: number) => void;
  createUser: () => void;
}

class FakeData implements IDatabase {
  cities: IOption<number, string>[];
  user: IUser;

  constructor() {
    this.cities = [];
    this.user = { id: -1, name: '', lastName: '' };
  }
}

export class DataCreator implements IDataCreator {
  public fakeData: IDatabase;

  #db: lowdb.LowdbSync<IDatabase>;

  constructor() {
    const file = path.resolve(__dirname, 'db.json');
    const adapter = new FileSync(file);
    this.fakeData = new FakeData();
    this.#db = lowdb(adapter);
    this.#db.defaults(this.fakeData).write();
  }

  createCities = (quantity: number) => {
    const cities = this.#db.get('cities');
    for (let i = 0; i < quantity; i++) {
      cities
        .push({
          id: faker.datatype.number(),
          value: faker.address.cityName(),
        })
        .write();
    }
    return this;
  };

  createUser = () => {
    const user: IUser = {
      id: faker.datatype.number(),
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
    };
    this.#db.get('user').assign(user).write();
    return this;
  };
}

const creator = new DataCreator();
creator.createCities(10).createUser();
