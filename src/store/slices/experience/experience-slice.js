import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getExperience } from '../../../api';
import { formatExperience } from '../../../api/formatters/';
import { STATUS } from '../../../constants';

const name = 'experience';

const experienceCreator = async () => {
  try {
    const response = await getExperience();
    return formatExperience(response);
  } catch (error) {
    throw error;
  }
}

const getWorkExperience = createAsyncThunk(
  `${name}/getWorkExperience`,
  experienceCreator,
);

const initialState = {
  status: null,
  experience: [],
}

const reducers = {}

const extraReducers = {
  [getWorkExperience.fulfilled]: (state, action) => {
    state.experience = action.payload;
    state.status = STATUS.SUCCESS;
  },
  [getWorkExperience.rejected]: state => {
    state.status = STATUS.ERROR;
  },
  [getWorkExperience.pending]: state => {
    state.status = STATUS.LOADING;
  },
}

export const experienceSlice = createSlice({
  name,
  initialState,
  reducers,
  extraReducers,
});

/**
 * Export all async action creators
 */
export {
  getWorkExperience,
};

export default experienceSlice.reducer;
