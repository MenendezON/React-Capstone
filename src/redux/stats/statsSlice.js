import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  stats: [],
  status: '',
  error: null,
};

export const fetchStatsAsync = createAsyncThunk(
  'stats/fetchStats',
  async () => {
    const response = await axios.get('https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=120&apikey=cd15d811a471e0cf71b9bbfac4de08c5');
    return response.data;
  },
);

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStatsAsync.fulfilled, (state, action) => {
        const newStats = [];
        const keys = Object.keys(action.payload);
        keys.forEach((keyOfActionPayload) => {
          newStats.push({
            id: keyOfActionPayload,
            ...action.payload[keyOfActionPayload],
          });
        });
        state.stats = newStats;
        state.error = '';
      })
      .addCase(fetchStatsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default statsSlice.reducer;
