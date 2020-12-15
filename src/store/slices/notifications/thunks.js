import { v4 as uuidv4 } from 'uuid';

import { notificationsTimeout } from '#constants';

import {
  addNotification as addNotificationAction,
  removeNotification as removeNotificationAction,
} from './slice';

const addNotification = (notification) => (dispatch) => {
  const id = uuidv4();

  dispatch(addNotificationAction({ ...notification, id }));

  setTimeout(
    () => dispatch(removeNotificationAction(id)),
    notificationsTimeout,
  );
};

export default addNotification;
