import axios from 'axios';
import {API_KEY, BASE_URL} from '@env';
import {ParamsForRequest} from '../types';

export const getPhotos = async ({
  date,
  roverCamera,
  page,
}: ParamsForRequest) => {
  console.log(
    `${BASE_URL}?api_key=${API_KEY}&earth_date=${date}&camera=${roverCamera}&page=${page}`,
  );
  const response = await axios.get(
    `${BASE_URL}?api_key=${API_KEY}&earth_date=${date}&camera=${roverCamera}&page=${page}`,
  );
  const data = await response.data;
  return data;
};
