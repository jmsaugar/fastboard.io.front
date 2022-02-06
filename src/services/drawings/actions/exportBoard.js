import { Log, timeoutPromise } from '#utils';
import {
  canvasBgColor,
  exportedImageType,
  exportedImageQuality,
  exportedImageMargin,
  exportImageTimeout,
} from '#constants';

import onExport from './onExport';

/**
 * Export the board project to JPG.
 *
 * @returns {Promise} Resolved with the blob representing the board in JPG format.
 */
export default function exportBoard() {
  Log.info('Service : Drawings : exportBoard');

  return timeoutPromise((res, rej) => {
    const svgString = this.projects.drawings.exportSVG({
      asString : true,
      bounds   : 'content',
      onExport,
    });

    const url = URL.createObjectURL(new Blob(
      [svgString],
      { type : 'image/svg+xml' },
    ));

    const image = new Image();
    image.src = url;

    image.onerror = (err) => {
      URL.revokeObjectURL(url);
      rej(err);
    };

    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.width + 2 * exportedImageMargin;
      canvas.height = image.height + 2 * exportedImageMargin;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = canvasBgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, exportedImageMargin, exportedImageMargin, image.width, image.height);

      canvas.toBlob((blob) => {
        URL.revokeObjectURL(url);
        res(blob);
      }, exportedImageType, exportedImageQuality);
    };
  }, exportImageTimeout);
}
