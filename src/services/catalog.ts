import { api } from './api';
import { IOption } from 'types/common/IOption';

export const catalogApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCities: build.query<IOption<number, string>[], void>({
      query: () => ({ url: '/cities' }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'Cities', id } as const)),
        { type: 'Cities', id: 'LIST' },
      ],
    }),
  }),
});

export const { useGetCitiesQuery } = catalogApi;
