import { useEffect, useState } from 'react';
import UnsplashItem from '../types/UnsplashItemInterface';

const APIBASE = 'https://api.unsplash.com/search/photos';
const APIKEY = 'a5palNm0YtmRHuTIcENLO_9wTi1tmWp_Bc2Vg4OpS6Y';

export const useSearch = (searchValue: string) => {
  const [result, setResult] = useState<UnsplashItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (searchValue) {
      setLoading(true);
      fetch(`${APIBASE}?query=${searchValue}`, {
        headers: {
          Authorization: `Client-ID ${APIKEY}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setResult(data.results);
          setLoading(false);
          console.log(data.results);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [searchValue]);

  return { result, loading, error };
};
