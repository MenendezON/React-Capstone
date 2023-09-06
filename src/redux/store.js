import { configureStore, combineReducers } from '@reduxjs/toolkit';
import dragonsReducer from './dragons/dragonsSlice';

const rootReducer = combineReducers({
  dragons: dragonsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
