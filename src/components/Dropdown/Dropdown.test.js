import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Dropdown from './Dropdown';

const label = 'the label';

describe('Component : Dropdown', () => {
  let options;

  beforeEach(() => {
    options = [
      {
        id      : 1,
        label   : 'first option label',
        onClick : jest.fn(),
      },
      {
        id      : 2,
        label   : 'second option label',
        onClick : jest.fn(),
      },
    ];
  });

  test('Is visible with correct label', () => {
    const { queryByText } = render(
      <Dropdown
        label={label}
        options={options}
      />,
    );

    expect(queryByText(label)).toBeInTheDocument();
  });

  test('Options are displayed and clickable', () => {
    const { getByText, queryByText } = render(
      <Dropdown
        label={label}
        options={options}
      />,
    );

    expect(queryByText(options[0].label)).not.toBeInTheDocument();
    expect(queryByText(options[1].label)).not.toBeInTheDocument();
    fireEvent.click(getByText(label));
    expect(queryByText(options[0].label)).toBeInTheDocument();
    expect(queryByText(options[1].label)).toBeInTheDocument();
    fireEvent.click(getByText(options[0].label));
    expect(options[0].onClick).toHaveBeenCalledTimes(1);
    expect(options[1].onClick).toHaveBeenCalledTimes(0);
  });

  test('Snapshot', () => {
    const { getByText, asFragment } = render(
      <Dropdown
        label={label}
        options={options}
      />,
    );

    fireEvent.click(getByText(label));

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
