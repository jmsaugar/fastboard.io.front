import { boardIdRegex } from '#constants';

/**
 * Check if a board id is valid.
 *
 * @param {String} boardId Board id to be checked as valid.
 *
 * @returns {Boolean} True if the board is is valid; false otherwise.
 */
export default function validBoardId(boardId) {
  return typeof boardId === 'string' && boardIdRegex.test(boardId);
}
