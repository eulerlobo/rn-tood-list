import 'react-native-get-random-values';
import {createSlice} from '@reduxjs/toolkit';

import {v4 as uuidv4} from 'uuid';

import {MOCK_TASK_LIST} from '../../../mock/mock_task_list';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    tasks: MOCK_TASK_LIST,
  },
  reducers: {
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(item => item.id !== action.payload);
    },
    markTaskAsDone: (state, action) => {
      const task = state.tasks.find(item => item.id === action.payload);
      task.done = true;
    },
    addTask: (state, action) => {
      state.tasks.push({
        id: uuidv4(),
        name: action.payload,
        done: false,
      });
    },
  },
});

export const {removeTask, markTaskAsDone, addTask} = itemsSlice.actions;
export default itemsSlice.reducer;
