import jsonServer from 'json-server';
import { getCities } from './creators/getCities';

const server = jsonServer.create();

server.get('/cities', (req, res) => {
  const cities = getCities();
  res.jsonp(cities);
});

server.listen(5000, () => {
  console.log('JSON Server is running');
});
