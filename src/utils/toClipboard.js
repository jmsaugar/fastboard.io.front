/**
 * Copy a text to the user clipboard.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API
 *
 * @param {String} text Text to be copied to the clipboard.
 *
 * @returns {Promise} Resolved if successful; rejected otherwise.
 */
export default function toClipboard(text) {
  return navigator.clipboard.writeText(text);
}
