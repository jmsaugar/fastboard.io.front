import React from 'react';
import { fireEvent } from '@testing-library/react';

import { render } from '#devTools/tests/utils';

import ClearConfirmation from './ClearConfirmation';

describe('Component : ClearConfirmation', () => {
  test('Is visible and reacts to clear action', () => {
    const onConfirmFn = jest.fn();

    const { getByText } = render(
      <ClearConfirmation
        onConfirm={onConfirmFn}
        onCancel={jest.fn()}
      />,
    );

    expect(getByText('clearConfirmation.about')).toBeInTheDocument();
    fireEvent.click(getByText('clearConfirmation.accept'));
    expect(onConfirmFn).toHaveBeenCalledTimes(1);
  });

  test('Is visible and reacts to cancel action', () => {
    const onCancelFn = jest.fn();

    const { getByText } = render(
      <ClearConfirmation
        onConfirm={jest.fn()}
        onCancel={onCancelFn}
      />,
    );

    expect(getByText('clearConfirmation.about')).toBeInTheDocument();
    fireEvent.click(getByText('clearConfirmation.cancel'));
    expect(onCancelFn).toHaveBeenCalledTimes(1);
  });

  test('Snapshot', () => {
    const { asFragment } = render(
      <ClearConfirmation
        onConfirm={jest.fn()}
        onCancel={jest.fn()}
      />,
    );

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
