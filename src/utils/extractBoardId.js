import { boardUrlRegex } from '#constants';

/**
 * Extract the board id from a valid board url.
 *
 * @param {String} boardUrl Board url to extract the board id from.
 *
 * @returns {String|undefined} Board id string or undefined if the url is not correct.
 */
export default function extractBoardId(boardUrl) {
  const results = boardUrlRegex.exec(boardUrl);

  return results?.length > 1 ? results[1] : undefined;
}
