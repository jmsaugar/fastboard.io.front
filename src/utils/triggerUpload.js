/**
 * Trigger the upload of a file.
 *
 * @param {Object} blob Data to be downloaded as file.
 *
 * @returns {Promise} Resolved if successful upload with file; rejected otherwise.
 */
export default function triggerUpload() {
  return new Promise((res) => {
    const input = document.createElement('input');
    input.onchange = (evt) => res(evt.path[0].files[0]); // @todo check this exists?
    input.type = 'file';
    input.click();
  });
}
