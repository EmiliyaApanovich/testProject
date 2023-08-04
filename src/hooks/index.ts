import {useState} from 'react';
import {ImageFromRequest, ParamsForRequest} from '../types';
import {getPhotos} from '../api';

export const useGetImages = () => {
  const [images, setImages] = useState<ImageFromRequest[]>([]);
  const [error, setError] = useState<null | string>(null);
  console.log(images);
  const [isLoading, setIsLoading] = useState(false);
  async function mutate({date, roverCamera}: ParamsForRequest) {
    setIsLoading(true);
    try {
      const response = await getPhotos({date, roverCamera});
      setImages(response.photos);
    } catch (e) {
      console.log(e);
      setError(e as string);
    } finally {
      setIsLoading(true);
    }
  }
  return {images, error, isLoading, mutate};
};
