import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFeaturedProjects, getAllProjects } from '../../../api';
import { formatProjects } from '../../../api/formatters/';
import { isValidArray } from '../../../utils';
import { STATUS } from '../../../constants';

const name = 'projects';

const getFormattedProjects = (projects, slug) => {
  const formattedProjects = projects.map((p, i) => ({
    ...p,
    prevProject: projects[i-1],
    nextProject: projects[i+1],
  }));

  const activeIndex =  formattedProjects.findIndex(p => p.slug === slug);

  return {
    projects: formattedProjects,
    activeIndex,
  };
}

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

const getProjectBySlugCreator = async (slug, { getState }) => {
  try {
    const { projects: { all: { results: projects } } } = getState();
    if (!isValidArray(projects)) {
      const rawProjects = await getAllProjects();
      const newProjects = formatProjects(rawProjects);

      const { projects: formattedProjects, activeIndex } = getFormattedProjects(newProjects, slug);

      return {
        projects: formattedProjects,
        activeIndex,
      };
    }

    const { projects: formattedProjects, activeIndex } = getFormattedProjects(projects, slug);

    return {
      projects: formattedProjects,
      activeIndex,
    };

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
    state.loaded.activeIndex = action.payload.activeIndex;
    state.all.results = action.payload.projects;
    state.all.status = STATUS.SUCCESS;
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
