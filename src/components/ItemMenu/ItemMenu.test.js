import React from 'react';
import { fireEvent } from '@testing-library/react';

import { render } from '#devTools/tests/utils';

import ItemMenu from './ItemMenu';

describe('Component : ItemMenu', () => {
  test('Is visible and reacts to actions', () => {
    const onItem2FrontFn = jest.fn();
    const onItem2BackFn = jest.fn();
    const onItemRemoveFn = jest.fn();
    const { getByText } = render(
      <ItemMenu
        show
        top={20}
        left={20}
        onItem2Front={onItem2FrontFn}
        onItem2Back={onItem2BackFn}
        onItemRemove={onItemRemoveFn}
      />,
    );

    expect(getByText('itemMenu.bringForward')).toBeInTheDocument();
    expect(getByText('itemMenu.sendBackward')).toBeInTheDocument();
    expect(getByText('itemMenu.remove')).toBeInTheDocument();

    fireEvent.click(getByText('itemMenu.bringForward'));
    fireEvent.click(getByText('itemMenu.sendBackward'));
    fireEvent.click(getByText('itemMenu.remove'));

    expect(onItem2FrontFn).toHaveBeenCalledTimes(1);
    expect(onItem2BackFn).toHaveBeenCalledTimes(1);
    expect(onItemRemoveFn).toHaveBeenCalledTimes(1);
  });

  test('Snapshot : visible', () => {
    const { asFragment } = render(
      <ItemMenu
        show
        top={20}
        left={20}
        onItem2Front={jest.fn()}
        onItem2Back={jest.fn()}
        onItemRemove={jest.fn()}
      />,
    );

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });

  test('Snapshot : not visible', () => {
    const { asFragment } = render(
      <ItemMenu
        show={false}
        top={20}
        left={20}
        onItem2Front={jest.fn()}
        onItem2Back={jest.fn()}
        onItemRemove={jest.fn()}
      />,
    );

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
