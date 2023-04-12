import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { APIBASE, APIKEY } from '../hooks/useSearch';
import UnsplashItem from '../types/UnsplashItemInterface';

interface APIResponse {
  results: UnsplashItem[];
  total: number;
  toal_pages: number;
}

export const imgApi = createApi({
  reducerPath: 'unsplashAPI',
  baseQuery: fetchBaseQuery({ baseUrl: APIBASE }),
  endpoints: (build) => ({
    getImages: build.query<UnsplashItem[], string>({
      query: (value) => ({
        url: '/search/photos',
        headers: {
          Authorization: `Client-ID ${APIKEY}`,
        },
        params: {
          query: value || 'random',
        },
      }),
      transformResponse: (response: APIResponse) => response.results,
    }),
    getImageById: build.query<UnsplashItem, string>({
      query: (id) => ({
        url: `/photos/${id}`,
        headers: {
          Authorization: `Client-ID ${APIKEY}`,
        },
      }),
    }),
  }),
});

export const { useGetImagesQuery, useGetImageByIdQuery } = imgApi;
