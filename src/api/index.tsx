import axios from 'axios';
import {API_KEY, BASE_URL} from '@env';
import {ParamsForRequest} from '../types';

export const getPhotos = async ({date, roverCamera}: ParamsForRequest) => {
  const response = await axios.get(
    `${BASE_URL}?api_key=${API_KEY}&earth_date=${date}&camera=${roverCamera}`,
  );
  const data = await response.data;
  return data;
};
