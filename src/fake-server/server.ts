import jsonServer from 'json-server';
import { DataCreator } from './dataCreator';

const creator = new DataCreator();
creator.createCities(10).createUser();

const server = jsonServer.create();
const router = jsonServer.router({ ...creator.fakeData });
server.use(router);
server.listen(5000, () => {
  console.log('JSON Server is running');
});

//npx ts-node src/fake-server/server.ts
