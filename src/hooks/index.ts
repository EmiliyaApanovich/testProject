import {useState} from 'react';
import {ImageFromRequest, ParamsForRequest} from '../types';
import {getPhotos} from '../api';

export const useGetImages = () => {
  const [images, setImages] = useState<null | ImageFromRequest[]>(null);
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  async function mutate({date, roverCamera}: ParamsForRequest) {
    console.log('mutate');
    setIsLoading(true);
    try {
      const response = await getPhotos({date, roverCamera, page});
      setImages(() => response.photos);
    } catch (e) {
      console.log(e);
      setError(e as string);
    } finally {
      setIsLoading(false);
    }
  }
  function increase() {
    setPage(page + 1);
  }
  return {images, error, isLoading, mutate, page, increase};
};
