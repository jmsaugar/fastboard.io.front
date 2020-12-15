import { createSlice } from '@reduxjs/toolkit';

import {
  addNotificationReducer, removeNotificationReducer,
} from './reducers';

const notificationsSlice = createSlice({
  name         : 'notifications',
  initialState : [],
  reducers     : {
    addNotification    : addNotificationReducer,
    removeNotification : removeNotificationReducer,
  },
});

export const {
  addNotification,
  removeNotification,
} = notificationsSlice.actions;

export default notificationsSlice;
