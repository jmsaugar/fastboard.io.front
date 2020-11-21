import { notificationsTimeout } from '#constants';
import { generateId } from '#utils';

import {
  addNotification as addNotificationAction,
  removeNotification as removeNotificationAction,
} from './slice';

const addNotification = (notification) => (dispatch) => {
  const id = generateId();

  dispatch(addNotificationAction({ ...notification, id }));

  setTimeout(
    () => dispatch(removeNotificationAction(id)),
    notificationsTimeout,
  );
};

export default addNotification;
