/**
 * Custom error "class" for timeout. Extends Error.
 * Includes an error code.
 */
export default class TimeoutError extends Error {
  /**
   * TimeoutError constructor.
   *
   * @param {String} code Error code
   * @param {...any} params Rest of params - passed to Error constructor.
   */
  constructor(code, ...params) {
    super(...params);

    this.code = code;
  }
}
