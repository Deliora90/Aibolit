import { api } from '../api';
import { CitiesResponse, CitiesResponseObject } from './catalog.types';

export const catalogApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCities: build.query<CitiesResponse, void>({
      query: () => ({ url: '/cities' }),
      transformResponse: (response) => CitiesResponseObject.check(response),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Cities', id } as const)),
        { type: 'Cities', id: 'LIST' },
      ],
    }),
  }),
});

export const { useGetCitiesQuery } = catalogApi;
