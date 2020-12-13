import { Log } from '#utils';

/**
 * Remove an user whose drawings were being handled.
 *
 * @param {String} userId Id of the user to be removed.
 */
export default function removeUser(userId) {
  Log.info('Service : Drawings : removeUser', { userId });

  delete this.users[userId];
}
