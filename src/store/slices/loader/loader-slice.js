import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  loaded: true,
}

const reducers = {
  isLoading: state => {
    state.loading = true;
    state.loaded = false;
  },
  loaded: state => {
    state.loading = false;
    state.loaded = true;
  },
}

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers,
});

export const {
  isLoading,
  loaded,
} = loaderSlice.actions;

export default loaderSlice.reducer;
