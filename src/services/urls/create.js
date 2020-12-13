import { Log } from '#utils';

/**
 * Create a new local url from the given source.
 *
 * @param {Object} source Object to create the url for (like an image).
 *
 * @returns {String} Url for the given source.
 */
export default function create(source) {
  Log.info('Service : Urls : create');

  const blob = new Blob([source]);
  const url = URL.createObjectURL(blob);

  this.urls.push(url);

  return url;
}
