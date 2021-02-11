/**
 * Trigger the upload of a file.
 *
 * @param {Object} blob Data to be downloaded as file.
 *
 * @returns {Promise} Resolved if successful upload with file; rejected otherwise.
 */
export default function triggerUpload() {
  return new Promise((res, rej) => {
    const input = document.createElement('input');
    input.onchange = function onchange() {
      return this.files?.[0] ? res(this.files?.[0]) : rej();
    };
    input.type = 'file';
    input.click();
  });
}
