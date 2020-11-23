let id = 0;

/**
 * Generate a new unique simple positive integer id.
 *
 * @returns {Integer} New unique id.
 */
export default () => {
  id += 1;

  return id;
};
