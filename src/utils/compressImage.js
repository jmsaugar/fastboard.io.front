import {
  uploadedImageDefaultType as imageType,
  uploadedImageQuality as imageQuality,
  uploadedImageMaxSize as maxSize,
} from '#constants';

/**
 * Resize an image, preserving PNG transparency and compressing other formats to JPEG.
 *
 * @see https://developer.mozilla.org/es/docs/Web/API/HTMLCanvasElement/toBlob
 *
 * @param {Object} file Image file.
 *
 * @returns {Promise} Resolved with the compressed file.
 */
export default function compressImage(file) {
  const pngType = 'image/png';
  let url;
  return new Promise((res, rej) => {
    try {
      // Create local url for the file
      url = URL.createObjectURL(new Blob([file]));

      // Create new image item with the url as source
      const image = new Image();
      image.src = url;

      // Perform the operation when the image loads
      image.onload = () => {
        let canvasWidth = image.width;
        let canvasHeight = image.height;

        // Calculate the final image dimensions, as it may need resizing
        if (canvasWidth > maxSize || canvasHeight > maxSize) {
          const ratio = Math.min(maxSize / image.width, maxSize / image.height);

          canvasWidth = image.width * ratio;
          canvasHeight = image.height * ratio;
        }

        // Create canvas where the image will be projected
        const canvas = document.createElement('canvas');
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        // Draw the image in the desired dimensions
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, canvasWidth, canvasHeight);

        // Resolve with the content of the compressed image
        canvas.toBlob(
          (compressedBlob) => {
            URL.revokeObjectURL(url);
            res(new File([compressedBlob], 'image', { type : compressedBlob.type }));
          },
          file.type === pngType ? pngType : imageType,
          imageQuality,
        );
      };
    } catch (error) {
      URL.revokeObjectURL(url);
      rej(error);
    }
  });
}
