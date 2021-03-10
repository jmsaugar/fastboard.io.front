import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { render } from '#devTools/tests/utils';

import Help from './Help';

jest.mock('#services', () => ({
  analyticsService : {
    pageview : jest.fn(),
  },
}));

describe('Page : Help', () => {
  test('Snapshot', () => {
    const { asFragment } = render(
      <HelmetProvider>
        <Help />
      </HelmetProvider>,
      { router : true },
    );

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
