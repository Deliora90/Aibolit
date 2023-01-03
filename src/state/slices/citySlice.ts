import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'state/store';

type CityState = {
  key?: number;
};

const initialState: CityState = {
  key: 1, //TODO: Should get key from localStorage
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    selectCity: (state, action: PayloadAction<number>) => {
      state.key = action.payload;
      if (action.payload)
        localStorage.setItem('city', action.payload.toString());
    },
  },
});

export const { selectCity } = citySlice.actions;

export const citySelector = (state: RootState) => state.city.key;

export default citySlice.reducer;
