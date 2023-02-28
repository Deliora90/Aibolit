import { retry } from '@reduxjs/toolkit/query/react';
import { api } from '../api';
import { LoginRequest, LoginResponse, LoginResponseObject } from './auth.types';

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response) => LoginResponseObject.check(response),
      extraOptions: {
        backoff: () => {
          retry.fail({ message: 'login error' });
        },
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
