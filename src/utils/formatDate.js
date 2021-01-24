/**
 * Format date and time in a user friendly format.
 *
 * @param {Object} date Date object.
 *
 * @returns {String|undefined} User friendly datetime string if valid input; indefined otherwise.
 */
export default function formatDate(date) {
  if (date instanceof Date) {
    return `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`;
  }

  return undefined;
}
