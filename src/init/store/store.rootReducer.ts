import todoApi from 'api/todoApi';
import authApi from 'api/authApi';
import authReducer from 'slice/authSlice';
import todoReducer from 'slice/todoSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
  [todoApi.reducerPath]: todoApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

export default rootReducer;
