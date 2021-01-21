import React from 'react';

import { render } from '#devTools/tests/utils';

import Card from './Card';

describe('Component : Card', () => {
  test('Is visible and renders children', () => {
    const childrenTestId = 'card-children';
    const children = <span data-testid={childrenTestId} />;
    const { getByTestId } = render(
      <Card>
        {children}
      </Card>,
    );

    expect(getByTestId(childrenTestId)).toBeInTheDocument();
  });

  test('Snapshot', () => {
    const { asFragment } = render(
      <Card>
        <span />
      </Card>,
    );

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
