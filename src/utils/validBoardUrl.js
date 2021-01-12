import { boardUrlRegex } from '#constants';

/**
 * Check if a board url is valid.
 *
 * @param {String} boardUrl Board url to be checked as valid.
 *
 * @returns {Boolean} True if the board url is valid; false otherwise.
 */
export default function validBoardUrl(boardUrl) {
  return typeof boardUrl === 'string' && boardUrlRegex.test(boardUrl);
}
