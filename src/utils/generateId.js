let id = 0;

/**
 * Generate a new unique simple positive integer id.
 *
 * @return {Integer} New unique id.
 */
export default () => {
  id += 1;

  return id;
};
