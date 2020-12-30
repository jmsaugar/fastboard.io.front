import React from 'react';
import { wait } from '@testing-library/react';

import { render } from '#devTools/tests/utils';
import routes from '#routes';

import HeadMeta from './HeadMeta';

describe('Component : HeadMeta', () => {
  test('Renders correct meta in home page', async () => {
    render(<HeadMeta route={routes.home} />);

    await wait(() => expect(document.title).toBe('home:head.title'));
  });

  test('Renders correct meta in board page', async () => {
    render(
      <HeadMeta
        route={routes.board}
      />,
    );

    await wait(() => expect(document.title).toBe('board:head.title'));
  });
});
