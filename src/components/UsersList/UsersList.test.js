import React from 'react';
import { fireEvent } from '@testing-library/react';

import { render } from '#devTools/tests/utils';

import UsersList from './UsersList';

const boardName = 'My board';
const myUserName = 'My user name';
const myJoinDate = '2021-02-28T12:14:15.000Z';
const others = [
  {
    id       : '1',
    name     : 'other user 1',
    joinDate : '2021-02-28T12:15:00.000Z',
  },
  {
    id       : '2',
    name     : 'other user 2',
    joinDate : '2021-02-28T12:15:00.000Z',
  },
];

describe('Component : UsersList', () => {
  test('Renders users list correctly and reacts to close action', () => {
    const onCloseFn = jest.fn();
    const { getByText } = render(
      <UsersList
        boardName={boardName}
        myUserName={myUserName}
        myJoinDate={myJoinDate}
        others={others}
        onClose={onCloseFn}
      />,
    );

    expect(getByText('meta.usersList.title')).toBeInTheDocument();
    expect(getByText(others[0].name)).toBeInTheDocument();
    expect(getByText(others[1].name)).toBeInTheDocument();
    fireEvent.click(getByText('meta.usersList.accept'));
    expect(onCloseFn).toHaveBeenCalledTimes(1);
  });

  test('Snapshot', () => {
    const { asFragment } = render(
      <UsersList
        boardName={boardName}
        myUserName={myUserName}
        myJoinDate={myJoinDate}
        others={others}
        onClose={jest.fn()}
      />,
    );

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
