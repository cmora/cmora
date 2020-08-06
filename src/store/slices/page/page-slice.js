import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPage } from '../../../api'
import {
  formatHomePage,
  formatProjectPage,
  formatAboutPage,
} from '../../../api/formatters';
import { STATUS, PAGES } from '../../../constants';

const name = 'page';

const getHomePageCreator = async () => {
  try {
    const response = await getPage('home');
    return formatHomePage(response);
  } catch (error) {
    throw error;
  }
}

const getProjectPageCreator = async () => {
  try {
    const response = await getPage('projects');
    return formatProjectPage(response);
  } catch (error) {
    throw error;
  }
}

const getAboutPageCreator = async () => {
  try {
    const response = await getPage('about');
    return formatAboutPage(response);
  } catch (error) {
    throw error;
  }
}

const getHomePage = createAsyncThunk(
  `${name}/getHomePage`,
  getHomePageCreator,
);

const getProjectsPage = createAsyncThunk(
  `${name}/getProjectsPage`,
  getProjectPageCreator,
);

const getAboutPage = createAsyncThunk(
  `${name}/getAboutPage`,
  getAboutPageCreator,
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
  // Home page
  [getHomePage.fulfilled]: (state, { payload }) => {
    const page = {
      id: PAGES.home,
      status: STATUS.SUCCESS,
      ...payload
    };
    const { pages } = state;
    const index = pages.findIndex(p => p.id === PAGES.home);
    if (index >= 0 ) {
      state.pages[index] = page;
    } else {
      state.pages = [...state.pages, page];
    }
  },
  [getHomePage.rejected]: state => {
    const page = {
      id: PAGES.home,
      status: STATUS.ERROR,
    };
    const { pages } = state;
    const index = pages.findIndex(p => p.id === PAGES.home);
    if (index >= 0 ) {
      state.pages[index] = page;
    } else {
      state.pages = [...state.pages, page];
    }
  },
  [getHomePage.pending]: state => {
    const page = {
      id: PAGES.home,
      status: STATUS.LOADING,
    };
    const { pages } = state;
    const index = pages.findIndex(p => p.id === PAGES.home);
    if (index >= 0 ) {
      state.pages[index] = page;
    } else {
      state.pages = [...state.pages, page];
    }
  },
  // Projects page
  [getProjectsPage.fulfilled]: (state, { payload }) => {
    const page = {
      id: PAGES.projects,
      status: STATUS.SUCCESS,
      ...payload
    };
    const { pages } = state;
    const index = pages.findIndex(p => p.id === PAGES.projects);
    if (index >= 0 ) {
      state.pages[index] = page;
    } else {
      state.pages = [...state.pages, page];
    }
  },
  [getProjectsPage.rejected]: (state, action) => {
    const page = {
      id: PAGES.projects,
      status: STATUS.ERROR,
    };
    const { pages } = state;
    const index = pages.findIndex(p => p.id === PAGES.projects);
    if (index >= 0 ) {
      state.pages[index] = page;
    } else {
      state.pages = [...state.pages, page];
    }
  },
  [getProjectsPage.pending]: state => {
    const page = {
      id: PAGES.projects,
      status: STATUS.LOADING,
    };
    const { pages } = state;
    const index = pages.findIndex(p => p.id === PAGES.projects);
    if (index >= 0 ) {
      state.pages[index] = page;
    } else {
      state.pages = [...state.pages, page];
    }
  },
  // About page
  [getAboutPage.fulfilled]: (state, { payload }) => {
    const page = {
      id: PAGES.about,
      status: STATUS.SUCCESS,
      ...payload
    };
    const { pages } = state;
    const index = pages.findIndex(p => p.id === PAGES.about);
    if (index >= 0 ) {
      state.pages[index] = page;
    } else {
      state.pages = [...state.pages, page];
    }
  },
  [getAboutPage.rejected]: (state, action) => {
    const page = {
      id: PAGES.about,
      status: STATUS.ERROR,
    };
    const { pages } = state;
    const index = pages.findIndex(p => p.id === PAGES.about);
    if (index >= 0 ) {
      state.pages[index] = page;
    } else {
      state.pages = [...state.pages, page];
    }
  },
  [getAboutPage.pending]: state => {
    const page = {
      id: PAGES.about,
      status: STATUS.LOADING,
    };
    const { pages } = state;
    const index = pages.findIndex(p => p.id === PAGES.about);
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
  getProjectsPage,
  getAboutPage,
}

export default pageSlice.reducer;
