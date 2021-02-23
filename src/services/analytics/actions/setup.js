import { Log } from '#utils';

/**
 * Setup Analytics service with GA-id.
 *
 * @param {String} analyticsId Google Analytics id.
 */
export default function setup(analyticsId) {
  Log.info('Service : Analytics : setup', { analyticsId : !!analyticsId });

  this.analyticsId = analyticsId;
}
