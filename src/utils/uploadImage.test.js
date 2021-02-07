import uploadImage from './uploadImage';

const name = 'image name';
const file = 'file contents';
const boardId = '123456';
const url = 'http://example.com/image.jpg';

describe('Utils : uploadImage', () => {
  test('Successful upload', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      status : 201,
      json   : jest.fn(() => Promise.resolve({ location : url })),
    }));

    const promise = uploadImage(name, file, boardId);

    return expect(promise).resolves.toStrictEqual({ url });
  });

  test('Uppload error', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      status : 400,
    }));

    const promise = uploadImage(name, file, boardId);

    return expect(promise).rejects.toBeUndefined();
  });
});
