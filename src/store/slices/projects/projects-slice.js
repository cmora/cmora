import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFeaturedProjects } from '../../../api';
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

const featuredProjects = createAsyncThunk(
  `${name}/featuredProjects`,
  featuredProjectsCreator,
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
};

export default projectsSlice.reducer;
