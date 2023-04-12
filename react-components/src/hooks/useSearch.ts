import { useEffect, useState } from 'react';
import UnsplashItem from '../types/UnsplashItemInterface';

export const APIBASE = 'https://api.unsplash.com/';
export const APIKEY = 'a5palNm0YtmRHuTIcENLO_9wTi1tmWp_Bc2Vg4OpS6Y';

type SearchBy = 'search' | 'id';

export const useSearch = (searchBy: SearchBy, searchValue: string) => {
  const [result, setResult] = useState<UnsplashItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  let path: string;

  switch (searchBy) {
    case 'id':
      path = `${APIBASE}/photos/${searchValue}`;
      break;
    case 'search':
      path = `${APIBASE}/search/photos?query=${searchValue}`;
      break;
  }

  useEffect(() => {
    if (searchValue) {
      setLoading(true);
      fetch(path, {
        headers: {
          Authorization: `Client-ID ${APIKEY}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setResult(data.results || [data]);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [path, searchValue]);

  return { result, loading, error };
};
