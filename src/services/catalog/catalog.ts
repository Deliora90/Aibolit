import { api } from '../api';
import { CitiesResponce, CitiesResponceObject } from './catalog.types';

export const catalogApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCities: build.query<CitiesResponce, void>({
      query: () => ({ url: '/cities' }),
      transformResponse: (response) => CitiesResponceObject.check(response),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Cities', id } as const)),
        { type: 'Cities', id: 'LIST' },
      ],
    }),
  }),
});

export const { useGetCitiesQuery } = catalogApi;
