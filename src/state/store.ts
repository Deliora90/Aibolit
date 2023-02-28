import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';
import { createWrapper } from 'next-redux-wrapper';
import { api } from 'services/api';
import cityReducer from './slices/city';
import authReducer from './slices/auth';

export const createStore = (
  options?: ConfigureStoreOptions['preloadedState']
) =>
  configureStore({
    reducer: {
      city: cityReducer,
      auth: authReducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    ...options,
    preloadedState: {},
  });

export const store = createStore();

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<typeof store.getState>;

export const wrapper = createWrapper<RootStore>(createStore, { debug: true });
