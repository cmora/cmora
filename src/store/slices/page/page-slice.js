import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPage } from '../../../api'
import { formatHomePage } from '../../../api/formatters';
import { STATUS } from '../../../constants';

const name = 'page';

const getHomePageCreator = async () => {
  try {
    const response = await getPage('home');
    return formatHomePage(response);
  } catch (error) {
    throw error;
  }
}

const getHomePage = createAsyncThunk(
  `${name}/getHomePage`,
  getHomePageCreator,
);

const initialState = {
  loading: false,
  loaded: true,
  sticky: false,
  pages: [],
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
  setSticky: (state, { payload }) => {
    state.sticky = payload;
  },
}

const extraReducers = {
  [getHomePage.fulfilled]: (state, { payload }) => {
    const page = {
      id: 'home-page',
      status: STATUS.SUCCESS,
      ...payload
    };
    const { pages } = state;
    const index = pages.findIndex(p => p.id === 'home-page');
    if (index >= 0 ) {
      state.pages[index] = page;
    } else {
      state.pages = [...state.pages, page];
    }
  },
  [getHomePage.rejected]: state => {
    const page = {
      id: 'home-page',
      status: STATUS.ERROR,
    };
    const { pages } = state;
    const index = pages.findIndex(p => p.id === 'home-page');
    if (index >= 0 ) {
      state.pages[index] = page;
    } else {
      state.pages = [...state.pages, page];
    }
  },
  [getHomePage.pending]: state => {
    const page = {
      id: 'home-page',
      status: STATUS.LOADING,
    };
    const { pages } = state;
    const index = pages.findIndex(p => p.id === 'home-page');
    if (index >= 0 ) {
      state.pages[index] = page;
    } else {
      state.pages = [...state.pages, page];
    }
  },
}

export const pageSlice = createSlice({
  name: 'loader',
  initialState,
  reducers,
  extraReducers,
});

export const {
  isLoading,
  loaded,
  setSticky,
} = pageSlice.actions;

export {
  getHomePage,
}

export default pageSlice.reducer;
