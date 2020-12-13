import { Log } from '#utils';

/**
 * Revoke all created local urls.
 */
export default function revokeAll() {
  Log.info('Service : Urls : revokeAll');

  this.urls.forEach(URL.revokeObjectURL);
  this.urls = [];
}
