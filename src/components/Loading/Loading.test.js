import React from 'react';

import { render } from '#devTools/tests/utils';

import Loading from './Loading';

describe('Component : Loading', () => {
  test('Snapshot', () => {
    const { asFragment } = render(
      <Loading />,
    );

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
