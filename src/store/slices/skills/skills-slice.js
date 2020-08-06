import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSkills as getSkillsApi } from '../../../api';
import { formatSkills } from '../../../api/formatters/';
import { STATUS } from '../../../constants';

const name = 'skills';

const getSkillsCreator = async () => {
  try {
    const response = await getSkillsApi();
    return formatSkills(response);
  } catch (error) {
    throw error;
  }
}

const getSkills = createAsyncThunk(
  `${name}/getSkills`,
  getSkillsCreator,
);

const initialState = {
  status: null,
  skills: {},
}

const reducers = {}

const extraReducers = {
  [getSkills.fulfilled]: (state, action) => {
    state.skills = action.payload;
    state.status = STATUS.SUCCESS;
  },
  [getSkills.rejected]: state => {
    state.status = STATUS.ERROR;
  },
  [getSkills.pending]: state => {
    state.status = STATUS.LOADING;
  },
}

export const skillsSlice = createSlice({
  name,
  initialState,
  reducers,
  extraReducers,
});

/**
 * Export all async action creators
 */
export {
  getSkills,
};

export default skillsSlice.reducer;
