import jsonServer from 'json-server';
import { getCities } from './creators/getCities';

const server = jsonServer.create();

server.get('/cities', (req, res) => {
  const cities = getCities();
  res.jsonp(cities);
});

server.listen(5000, () => {
  console.log('JSON Server started on http://localhost:5000, url: http://localhost:5000 ');
});
