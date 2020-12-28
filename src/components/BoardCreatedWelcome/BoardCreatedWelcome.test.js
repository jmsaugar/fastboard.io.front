import React from 'react';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/react';

import { render } from '#devTools/tests/utils';
import { toClipboard } from '#utils';

import BoardCreatedWelcome from './BoardCreatedWelcome';

const boardId = '123456';

jest.mock('#utils', () => ({
  toClipboard : jest.fn(() => new Promise((res) => res())),
}));

describe('Component : BoardCreatedWelcome', () => {
  beforeEach(() => {
    toClipboard.mockClear();
  });

  test('Is visible and reacts to actions', async () => {
    const onCloseFn = jest.fn();
    const { findByText, getByText } = render(
      <BoardCreatedWelcome
        boardId={boardId}
        onClose={onCloseFn}
      />,
    );

    expect(toClipboard).toHaveBeenCalledTimes(0);
    await act(async () => fireEvent.click(await findByText('welcome.created.copy')));
    expect(toClipboard).toHaveBeenCalledTimes(1);
    fireEvent.click(getByText('welcome.created.accept'));
    expect(onCloseFn).toHaveBeenCalledTimes(1);
  });

  test('Snapshot', () => {
    const { asFragment } = render(
      <BoardCreatedWelcome
        boardId={boardId}
        onClose={jest.fn()}
      />,
    );

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
