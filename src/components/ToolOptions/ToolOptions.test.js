import React from 'react';
import { render } from '@testing-library/react';

import ToolOptions from './ToolOptions';

describe('Component : ToolOptions', () => {
  test('Is visible and shows children', () => {
    const childrenTestId = 'tooloptions-children';
    const children = <span data-testid={childrenTestId} />;
    const { getByTestId } = render(
      <ToolOptions show>
        {children}
      </ToolOptions>,
    );

    expect(getByTestId(childrenTestId)).toBeInTheDocument();
  });

  test('Snapshot', () => {
    const { asFragment } = render(
      <ToolOptions show>
        <span />
      </ToolOptions>,
    );

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
