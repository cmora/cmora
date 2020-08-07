import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFeaturedProjects, getAllProjects, getProject } from '../../../api';
import { formatProjects, formatProject } from '../../../api/formatters/';
import { STATUS } from '../../../constants';

const name = 'projects';

const featuredProjectsCreator = async () => {
  try {
    const response = await getFeaturedProjects();
    return formatProjects(response);
  } catch (error) {
    throw error;
  }
}

const allProjectsCreator = async (limit = 30) => {
  try {
    const response = await getAllProjects(limit);
    return formatProjects(response);
  } catch (error) {
    throw error;
  }
}

const getProjectBySlugCreator = async (slug) => {
  try {
    const response = await getProject(slug);
    return formatProject(response.items[0]);
  } catch (error) {
    throw error;
  }
}

const featuredProjects = createAsyncThunk(
  `${name}/featuredProjects`,
  featuredProjectsCreator,
);

const allProjects = createAsyncThunk(
  `${name}/allProjects`,
  allProjectsCreator,
);

const getProjectBySlug = createAsyncThunk(
  `${name}/getProjectBySlug`,
  getProjectBySlugCreator,
);

const initialState = {
  featured: {
    results: [],
    status: null,
  },
  all: {
    results: [],
    status: null,
  },
  loaded: {
    results: [],
    activeIndex: null,
  }
}

const reducers = {
  setActiveIndex: (state, action) => {
    state.loaded.activeIndex = action.payload;
  }
}

const extraReducers = {
  [featuredProjects.fulfilled]: (state, action) => {
    state.featured.results = action.payload;
    state.featured.status = STATUS.SUCCESS;
  },
  [featuredProjects.rejected]: state => {
    state.featured.results = [];
    state.featured.status = STATUS.ERROR;
  },
  [featuredProjects.pending]: state => {
    state.featured.status = STATUS.LOADING;
  },
  [allProjects.fulfilled]: (state, action) => {
    state.all.results = action.payload;
    state.all.status = STATUS.SUCCESS;
  },
  [allProjects.rejected]: state => {
    state.all.results = [];
    state.all.status = STATUS.ERROR;
  },
  [allProjects.pending]: state => {
    state.all.status = STATUS.LOADING;
  },
  [getProjectBySlug.fulfilled]: (state, action) => {
    const projects = [...state.loaded.results, action.payload];
    const index = projects.findIndex(p => p.id === action.payload.id);
    state.loaded.results = projects;
    state.loaded.activeIndex = index >= 0 ? index : 0;
  },
}

export const projectsSlice = createSlice({
  name,
  initialState,
  reducers,
  extraReducers,
});

/**
 * Export all async action creators
 */
export {
  featuredProjects,
  allProjects,
  getProjectBySlug,
};

export const {
  setActiveIndex,
} = projectsSlice.actions;

export default projectsSlice.reducer;
