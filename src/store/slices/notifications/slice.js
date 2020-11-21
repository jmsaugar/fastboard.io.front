import { createSlice } from '@reduxjs/toolkit';

const notificationsSlice = createSlice({
  name         : 'notifications',
  initialState : [],
  reducers     : {
    addNotification : (state, action) => (
      action.payload
        ? [...state, action.payload]
        : state
    ),
    removeNotification : (state, action) => (
      action.payload
        ? state.filter(({ id }) => id !== action.payload)
        : state
    ),
  },
});

export const {
  addNotification,
  removeNotification,
} = notificationsSlice.actions;

export default notificationsSlice;
