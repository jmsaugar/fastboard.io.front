import React from 'react';
import { fireEvent } from '@testing-library/react';

import { render } from '#devTools/tests/utils';
import BoardNameEditor from './BoardNameEditor';

const initialBoardName = 'initial board name';
const newBoardName = 'new board name';

describe('Component : BoardNameEditor', () => {
  test('Is visible and reacts to board name change action', () => {
    const onSaveFn = jest.fn();
    const { getByText, container } = render(
      <BoardNameEditor
        initialBoardName={initialBoardName}
        onSave={onSaveFn}
        onCancel={jest.fn()}
      />,
    );

    expect(getByText('meta.boardNameEditor.title')).toBeInTheDocument();
    fireEvent.change(
      container.querySelector('[name="boardName"]'),
      { target : { value : newBoardName } },
    );
    fireEvent.click(getByText('meta.boardNameEditor.save'));
    expect(onSaveFn).toHaveBeenCalledTimes(1);
    expect(onSaveFn).toHaveBeenCalledWith(newBoardName);
  });

  test('Is visible and reacts to cancel action', () => {
    const onSaveFn = jest.fn();
    const onCancelFn = jest.fn();
    const { getByText } = render(
      <BoardNameEditor
        initialBoardName={initialBoardName}
        onSave={onSaveFn}
        onCancel={onCancelFn}
      />,
    );

    expect(getByText('meta.boardNameEditor.title')).toBeInTheDocument();
    fireEvent.click(getByText('meta.boardNameEditor.cancel'));
    expect(onSaveFn).toHaveBeenCalledTimes(0);
    expect(onCancelFn).toHaveBeenCalledTimes(1);
  });

  test('Snapshot', () => {
    const { asFragment } = render(
      <BoardNameEditor
        initialBoardName={initialBoardName}
        onSave={jest.fn()}
        onCancel={jest.fn()}
      />,
    );

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
