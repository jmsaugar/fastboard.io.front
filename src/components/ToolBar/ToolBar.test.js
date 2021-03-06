import React from 'react';

import { render } from '#devTools/tests/utils';
import { defaultDrawingColor } from '#constants';

import ToolBar from './ToolBar';

const boardId = '123456';
const mockStore = {
  board : {
    joined    : false,
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
    const { queryByTestId } = render(<ToolBar boardId={boardId} />, { store : mockStore });

    expect(queryByTestId('toolbar-component')).toBeInTheDocument();
    expect(queryByTestId('toolbar-meta-component')).not.toBeInTheDocument();
  });

  test('Is visible with visible meta', () => {
    const { queryByTestId } = render(
      <ToolBar boardId={boardId} />,
      { store : { joined : true, ...mockStore } },
    );

    expect(queryByTestId('toolbar-component')).toBeInTheDocument();
    expect(queryByTestId('toolbar-meta-component')).not.toBeInTheDocument();
  });

  test('Snapshot', () => {
    const { asFragment } = render(<ToolBar boardId={boardId} />, { store : mockStore });

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
