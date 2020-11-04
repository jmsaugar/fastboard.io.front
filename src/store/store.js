import { configureStore } from '@reduxjs/toolkit';

import { boardSlice } from './slices/board';

export default configureStore({
  reducer : boardSlice.reducer,
});
