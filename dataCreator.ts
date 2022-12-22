import path from 'node:path';
import { faker } from '@faker-js/faker';
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { IOption } from 'types/common/IOption';

interface IFakeData {
  cities: IOption<number, string>[];
}

interface IDataCreator {
  createCities: (quantity: number) => void;
}

class FakeData implements IFakeData {
  cities: IOption<number, string>[];

  constructor() {
    this.cities = [];
  }
}

class DataCreator implements IDataCreator {
  public fakeData: FakeData;

  #file: string;
  #adapter: lowdb.AdapterSync<IFakeData>;
  #db: lowdb.LowdbSync<IFakeData>;
  #initialFakeData: IFakeData = {
    cities: [],
  };

  constructor() {
    this.fakeData = new FakeData();
    this.#file = path.resolve(__dirname, 'db.json');
    this.#adapter = new FileSync(this.#file);
    this.#db = lowdb(this.#adapter);
    this.#db.defaults(this.#initialFakeData).write();
  }

  createCities = async (quantity: number) => {
    const cities = this.#getData('cities');
    for (let i = 0; i < quantity; i++) {
      cities
        .push({
          id: faker.datatype.number(),
          value: faker.address.cityName(),
        })
        .write();
    }
  };

  #getData = (key: keyof IFakeData) => this.#db.get(key);
}

const creator = new DataCreator();
creator.createCities(10);
