import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  let base_url='https://ngsa-cosmos-westus3-dev.austinrdc.dev';
  http.get(base_url+'/api/actors/nm0000284');
  sleep(1)
  http.get(base_url+'/api/movies/tt1272878');
  sleep(1)
  http.get(base_url+'/api/movies?genre=Animation');
  sleep(1)
}
