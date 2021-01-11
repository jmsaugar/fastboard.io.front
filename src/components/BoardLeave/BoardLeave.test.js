import React from 'react';
import { fireEvent } from '@testing-library/react';

import { render } from '#devTools/tests/utils';

import BoardLeave from './BoardLeave';

describe('Component : BoardLeave', () => {
  test('Is visible with last user and reacts to leave action', () => {
    const onLeaveFn = jest.fn();

    const { getByText } = render(
      <BoardLeave
        isLast
        onLeave={onLeaveFn}
        onCancel={jest.fn()}
      />,
    );

    expect(getByText('leave.message.lastUser')).toBeInTheDocument();
    fireEvent.click(getByText('leave.leave'));
    expect(onLeaveFn).toHaveBeenCalledTimes(1);
  });

  test('Is visible with many users and reacts to cancel action', () => {
    const onCancelFn = jest.fn();

    const { getByText } = render(
      <BoardLeave
        isLast={false}
        onLeave={jest.fn()}
        onCancel={onCancelFn}
      />,
    );

    expect(getByText('leave.message.notLastUser')).toBeInTheDocument();
    fireEvent.click(getByText('leave.cancel'));
    expect(onCancelFn).toHaveBeenCalledTimes(1);
  });

  test('Snapshot', () => {
    const { asFragment } = render(
      <BoardLeave
        isLast
        onLeave={jest.fn()}
        onCancel={jest.fn()}
      />,
    );

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
