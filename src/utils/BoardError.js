/**
 * Custom error "class" for boards. Extends Error.
 * Includes an error code.
 */
export default class BoardError extends Error {
  /**
   * BoardError constructor.
   *
   * @param {String} code Error code
   * @param {...any} params Rest of params - passed to Error constructor.
   */
  constructor(code, ...params) {
    super(...params);
    this.code = code;
  }
}
