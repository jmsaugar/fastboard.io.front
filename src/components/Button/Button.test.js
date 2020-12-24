import React from 'react';
import { fireEvent } from '@testing-library/react';

import { render } from '#devTools/tests/utils';

import Button from './Button';

const label = 'Button label';

describe('Component : Button', () => {
  test('Is visible and clickable', () => {
    const onClickFn = jest.fn();
    const { getByText } = render(
      <Button type="primary" onClick={onClickFn}>
        {label}
      </Button>,
    );

    expect(onClickFn).toHaveBeenCalledTimes(0);
    fireEvent.click(getByText(label));
    expect(onClickFn).toHaveBeenCalledTimes(1);
  });

  test('Is disabled', () => {
    const onClickFn = jest.fn();
    const { getByText } = render(
      <Button type="primary" onClick={onClickFn} isDisabled>
        {label}
      </Button>,
    );

    expect(onClickFn).toHaveBeenCalledTimes(0);
    fireEvent.click(getByText(label));
    expect(onClickFn).toHaveBeenCalledTimes(0);
  });

  test('Is loading', () => {
    const { getByTestId, queryByText } = render(
      <Button type="primary" isLoading>
        {label}
      </Button>,
    );

    expect(queryByText(label)).not.toBeInTheDocument();
    expect(getByTestId('spinner-component')).toBeInTheDocument();
  });

  test('Snapshot', () => {
    const { asFragment } = render(
      <Button type="primary">
        {label}
      </Button>,
    );

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
