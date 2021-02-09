import React from 'react';
import { wait } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';

import { render } from '#devTools/tests/utils';
import routes from '#routes';

import HeadMeta from './HeadMeta';

describe('Component : HeadMeta', () => {
  test('Renders correct meta in home page', async () => {
    render(
      <HelmetProvider>
        <HeadMeta route={routes.home} />
      </HelmetProvider>,
    );

    await wait(() => expect(document.title).toBe('home:head.title'));
  });

  test('Renders correct meta in board page', async () => {
    render(
      <HelmetProvider>
        <HeadMeta
          route={routes.board}
        />
      </HelmetProvider>,
    );

    await wait(() => expect(document.title).toBe('board:head.title'));
  });
});
