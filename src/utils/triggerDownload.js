/**
 * Trigger the download of a blob with the given file name.
 *
 * @param {Object} blob Data to be downloaded as file.
 * @param {String} fileName Desired file name.
 */
export default function triggerDownload(blob, fileName) {
  const link = document.createElement('a');

  link.href = URL.createObjectURL(blob);
  link.download = fileName;

  link.click();

  URL.revokeObjectURL(link.ref);
}
