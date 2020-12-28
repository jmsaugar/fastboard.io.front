import React from 'react';
import { fireEvent } from '@testing-library/react';

import { render } from '#devTools/tests/utils';

import BoardJoinedWelcome from './BoardJoinedWelcome';

const boardId = '123456';
const userName = 'user name';

describe('Component : BoardJoinedWelcome', () => {
  test('Is visible and reacts to join action', () => {
    const onJoinFn = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <BoardJoinedWelcome
        boardId={boardId}
        isLoading={false}
        onJoin={onJoinFn}
        onCancel={jest.fn()}
      />,
    );

    expect(getByText('welcome.joined.about')).toBeInTheDocument();
    fireEvent.change(
      getByPlaceholderText('welcome.joined.userNamePlaceholder'),
      { target : { value : userName } },
    );
    fireEvent.click(getByText('welcome.joined.join'));
    expect(onJoinFn).toHaveBeenCalledTimes(1);
    expect(onJoinFn).toHaveBeenCalledWith(userName);
  });

  test('Is visible and reacts to cancel action', () => {
    const onJoinFn = jest.fn();
    const onCancelFn = jest.fn();
    const { getByText } = render(
      <BoardJoinedWelcome
        boardId={boardId}
        isLoading={false}
        onJoin={onJoinFn}
        onCancel={onCancelFn}
      />,
    );

    expect(onCancelFn).toHaveBeenCalledTimes(0);
    fireEvent.click(getByText('welcome.joined.cancel'));
    expect(onCancelFn).toHaveBeenCalledTimes(1);
    expect(onJoinFn).toHaveBeenCalledTimes(0);
  });

  test('Snapshot', () => {
    const { asFragment } = render(
      <BoardJoinedWelcome
        boardId={boardId}
        isLoading={false}
        onJoin={jest.fn()}
        onCancel={jest.fn()}
      />,
    );

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
