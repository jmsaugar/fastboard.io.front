import { httpRoutes, httpStatusCreated } from '#constants';

/**
 * Upload a file to the storage backend.
 *
 * @param {String} name Name of the file.
 * @param {Object} file File to be uploaded.
 *
 * @return {Promise} Resolved with { url } if successful; rejected otherwise.
 */
export default function uploadImage(name, file, boardId) {
  const formData = new FormData();

  formData.append('image', file);
  formData.append('itemName', name);
  formData.append('boardId', boardId);

  return fetch(`${process.env.REACT_APP_SERVER}${httpRoutes.createImage.path}`, {
    method : httpRoutes.createImage.method,
    body   : formData,
  }).then((response) => (response.status === httpStatusCreated
    ? response.json().then(({ location }) => ({ url : location }))
    : Promise.reject()
  ));
}
