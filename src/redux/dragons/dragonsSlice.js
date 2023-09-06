import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  dragons: [],
  status: '',
  error: null,
};

const baseDragonsURL = 'https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=120&apikey=cd15d811a471e0cf71b9bbfac4de08c5';

export const fetchDragonsAsync = createAsyncThunk(
  'dragons/fetchDragons',
  async () => {
    const response = await axios.get(`${baseDragonsURL}`);
    return response.data;
  },
);

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragonsAsync.fulfilled, (state, action) => {
        const newDragons = [];
        const keys = Object.keys(action.payload);
        keys.forEach((keyOfActionPayload) => {
          newDragons.push({
            id: keyOfActionPayload,
            ...action.payload[keyOfActionPayload],
          });
        });
        state.dragons = newDragons;
        state.error = '';
      })
      .addCase(fetchDragonsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { dragonReserved, dragonCanceled } = dragonsSlice.actions;

export default dragonsSlice.reducer;
