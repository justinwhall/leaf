import { API_URL } from '@/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => 'top-headlines?country=us&apiKey=ffeee91983414084972e71cab438496e',
    }),
  }),
});

export const {
  useGetNewsQuery,
} = newsApi;
