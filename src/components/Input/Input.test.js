
import React from 'react';
import { fireEvent } from '@testing-library/react';

import { render } from '#devTools/tests/utils';

import Input from './Input';

const originalText = 'some original text';
const changedText = 'some changed text';

describe('Component : Input', () => {
  test('Is visible and reacts to changes', () => {
    const onChangeFn = jest.fn();
    const { queryByTestId } = render(
      <Input
        name="sample"
        value={originalText}
        onChange={onChangeFn}
      />,
    );

    const input = queryByTestId('input-component');

    expect(input).toBeInTheDocument();
    expect(input.value).toBe(originalText);
    expect(onChangeFn).toHaveBeenCalledTimes(0);

    fireEvent.change(input, { target : { value : changedText } });

    expect(onChangeFn).toHaveBeenCalledTimes(1);
    expect(onChangeFn).toHaveBeenCalledWith(changedText);
  });

  test('Snapshot', () => {
    const { asFragment } = render(
      <Input
        name="sample"
        value={originalText}
        onChange={jest.fn()}
      />,
    );

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
