import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
// import { RootState } from 'state/store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:4200/',
  prepareHeaders: (headers, { getState }) => {
    // const token = (getState() as RootState).auth.token;
    // if (token) {
    //   headers.set('authentication', `Bearer ${token}`);
    // }
    return headers;
  },
});

const baseQueryRetry = retry(baseQuery, { maxRetries: 4 });

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryRetry,
  tagTypes: [],
  endpoints: () => ({}),
});

export const enhancedApi = api.enhanceEndpoints({
  endpoints: () => ({
    getPost: () => 'test',
  }),
});
