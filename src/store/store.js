import {configureStore} from '@reduxjs/toolkit';
import itemsReducer from './slices/items/itemsSlice';

export default configureStore({
  reducer: {
    items: itemsReducer,
  },
});
