import { Log } from '#utils';

/**
 * Handle onItemOperation event from a remote user.
 *
 * @param {Object} params { userId, tool, ...operationData }
 */
export default function onItemOperation({ userId, tool, ...operationData }) {
  Log.debug('Service : Drawings : onItemOperation', { userId, tool, operationData });

  if (!this.users[userId]) {
    Log.warning('Service : Drawings : onItemOperation : no such user', { userId });
    return;
  }

  // Perform the given operation
  this.tools.selector.operateItem(operationData);
}
