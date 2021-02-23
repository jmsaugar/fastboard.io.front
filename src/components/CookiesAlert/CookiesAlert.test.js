import React from 'react';
import { fireEvent } from '@testing-library/react';

import { render } from '#devTools/tests/utils';

import CookiesAlert from './CookiesAlert';

describe('Component : CookiesAlert', () => {
  test('Is visible and reacts to actions', () => {
    const onAcceptFn = jest.fn();
    const { getByText } = render(
      <CookiesAlert onAccept={onAcceptFn} />,
      { router : true },
    );

    expect(getByText('cookies.message')).toBeInTheDocument();
    fireEvent.click(getByText('cookies.accept'));
    expect(onAcceptFn).toHaveBeenCalledTimes(1);
  });

  test('Snapshot', () => {
    const { asFragment } = render(
      <CookiesAlert onAccept={jest.fn()} />,
      { router : true },
    );

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
