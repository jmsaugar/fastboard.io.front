import React from 'react';
import { fireEvent } from '@testing-library/react';

import { render } from '#devTools/tests/utils';

import ToolButton from './ToolButton';

describe('Component : ToolButton', () => {
  test('Is visible and clickable', () => {
    const onClickFn = jest.fn();
    const { getByTestId } = render(
      <ToolButton
        onClick={onClickFn}
        icon={<span />}
      />,
    );

    expect(getByTestId('toolbutton-component')).toBeInTheDocument();
    fireEvent.click(getByTestId('toolbutton-component'));
    expect(onClickFn).toHaveBeenCalledTimes(1);
  });

  test('Children are visible', () => {
    const onClickFn = jest.fn();
    const childrenTestId = 'toolbutton-children';
    const children = <span data-testid={childrenTestId} />;
    const { getByTestId } = render(
      <ToolButton
        onClick={onClickFn}
        icon={<span />}
      >
        {children}
      </ToolButton>,
    );

    expect(getByTestId(childrenTestId)).toBeInTheDocument();
  });

  test('Snapshot', () => {
    const onClickFn = jest.fn();
    const { asFragment } = render(
      <ToolButton
        onClick={onClickFn}
        icon={<span />}
      />,
    );

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
