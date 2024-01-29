import { type StateType } from 'types/todoType';
import { createSlice } from '@reduxjs/toolkit';

const initialState: StateType = {
  toggleForm: true,
  todoUpdate: {},
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    toggleInputForm: (state: StateType, action) => {
      state.toggleForm = !state.toggleForm;
      state.todoUpdate = { ...state.todoUpdate, ...action.payload };
    },
  },
});

export const { toggleInputForm } = todoSlice.actions;
export default todoSlice.reducer;
