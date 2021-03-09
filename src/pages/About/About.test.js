import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { render } from '#devTools/tests/utils';

import About from './About';

jest.mock('#services', () => ({
  analyticsService : {
    pageview : jest.fn(),
  },
}));

describe('Page : About', () => {
  test('Snapshot', () => {
    const { asFragment } = render(
      <HelmetProvider>
        <About />
      </HelmetProvider>,
      { router : true },
    );

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
