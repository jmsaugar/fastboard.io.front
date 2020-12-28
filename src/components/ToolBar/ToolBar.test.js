import React from 'react';

import { render } from '#devTools/tests/utils';
import { defaultDrawingColor } from '#constants';

import ToolBar from './ToolBar';

const mockStore = {
  board : {
    joined    : false,
    owner     : undefined,
    boardName : undefined,
    users     : {
      me     : undefined,
      others : [],
    },
    tools : {
      selected : undefined,
      colors   : {
        pencil      : defaultDrawingColor,
        pen         : defaultDrawingColor,
        highlighter : defaultDrawingColor,
        text        : defaultDrawingColor,
      },
    },
  },
};

describe('Component : ToolBar', () => {
  test('Is visible with hidden meta', () => {
    const { queryByTestId } = render(<ToolBar />, { store : mockStore });

    expect(queryByTestId('toolbar-component')).toBeInTheDocument();
    expect(queryByTestId('toolbar-meta-component')).not.toBeInTheDocument();
  });

  test('Is visible with visible meta', () => {
    const { queryByTestId } = render(<ToolBar />, { store : { joined : true, ...mockStore } });

    expect(queryByTestId('toolbar-component')).toBeInTheDocument();
    expect(queryByTestId('toolbar-meta-component')).not.toBeInTheDocument();
  });

  test('Snapshot', () => {
    const { asFragment } = render(<ToolBar />, { store : mockStore });

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
