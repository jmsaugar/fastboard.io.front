import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { render } from '#devTools/tests/utils';

import Cookies from './Cookies';

describe('Page : Cookies', () => {
  test('Snapshot', () => {
    const { asFragment } = render(
      <HelmetProvider>
        <Cookies />
      </HelmetProvider>,
      { router : true },
    );

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
