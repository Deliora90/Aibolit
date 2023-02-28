import jsonServer from 'json-server';
import { getCities } from './creators/getCities';
import { login } from './creators/login';

const server = jsonServer.create();

server.get('/cities', (req, res) => {
  const cities = getCities();
  res.jsonp(cities);
});

server.post('/login', (req, res) => {
  const user = login();
  res.jsonp(user);
});

server.listen(5000, () => {
  console.log(
    'JSON Server started on http://localhost:5000, url: http://localhost:5000 '
  );
});
