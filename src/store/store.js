import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { boardSlice } from './slices/board';
import { notificationsSlice } from './slices/notifications';

export default configureStore({
  reducer : combineReducers({
    board         : boardSlice.reducer,
    notifications : notificationsSlice.reducer,
  }),
});
