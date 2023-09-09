import { configureStore, combineReducers } from '@reduxjs/toolkit';
import statsReducer from './stats/statsSlice';

const rootReducer = combineReducers({
  stats: statsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
