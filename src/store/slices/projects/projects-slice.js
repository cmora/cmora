import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFeaturedProjects, getAllProjects } from '../../../api';
import { formatProjects } from '../../../api/formatters/';
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

const featuredProjects = createAsyncThunk(
  `${name}/featuredProjects`,
  featuredProjectsCreator,
);

const allProjects = createAsyncThunk(
  `${name}/allProjects`,
  allProjectsCreator,
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
  active: {
    results: null,
    project: {},
  },
}

const reducers = {}

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
};

export default projectsSlice.reducer;
