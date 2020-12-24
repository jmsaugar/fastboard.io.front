import React from 'react';

import { render } from '#devTools/tests/utils';

import Spinner from './Spinner';

const testId = 'spinner-component';

describe('Component : Spinner', () => {
  test('Renders correctly', () => {
    const { getByTestId, asFragment } = render(<Spinner />);

    expect(getByTestId(testId)).toBeInTheDocument();

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
