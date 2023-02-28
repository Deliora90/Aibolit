import { createSlice } from '@reduxjs/toolkit';
import { setCookie } from 'cookies-next';
import { RootState } from 'state/store';
import { authApi } from 'services/auth/auth';
import { IUser } from 'types/common/IUser';

type AuthState = {
  token: string | null;
  user: IUser | null;
  isError: boolean;
  isLoading: boolean;
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  user: null,
  token: null,
  isError: false,
  isLoading: false,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchPending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        setCookie('authToken', action.payload.token, {
          maxAge: 60 * 60 * 24 * 30,
          path: '/',
        });
      })
      .addMatcher(authApi.endpoints.login.matchRejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { logout } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;
