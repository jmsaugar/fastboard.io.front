import React from 'react';
import { fireEvent } from '@testing-library/react';

import { render } from '#devTools/tests/utils';
import UserNameEditor from './UserNameEditor';

const initialUserName = 'initial user name';
const newUserName = 'new user name';

describe('Component : UserNameEditor', () => {
  test('Is visible and reacts to user name change action', () => {
    const onSaveFn = jest.fn();
    const { getByText, container } = render(
      <UserNameEditor
        initialUserName={initialUserName}
        onSave={onSaveFn}
        onCancel={jest.fn()}
      />,
    );

    expect(getByText('meta.userNameEditor.title')).toBeInTheDocument();
    fireEvent.change(
      container.querySelector('[name="userName"]'),
      { target : { value : newUserName } },
    );
    fireEvent.click(getByText('meta.userNameEditor.save'));
    expect(onSaveFn).toHaveBeenCalledTimes(1);
    expect(onSaveFn).toHaveBeenCalledWith(newUserName);
  });

  test('Is visible and reacts to cancel action', () => {
    const onSaveFn = jest.fn();
    const onCancelFn = jest.fn();
    const { getByText } = render(
      <UserNameEditor
        initialUserName={initialUserName}
        onSave={onSaveFn}
        onCancel={onCancelFn}
      />,
    );

    expect(getByText('meta.userNameEditor.title')).toBeInTheDocument();
    fireEvent.click(getByText('meta.userNameEditor.cancel'));
    expect(onSaveFn).toHaveBeenCalledTimes(0);
    expect(onCancelFn).toHaveBeenCalledTimes(1);
  });

  test('Snapshot', () => {
    const { asFragment } = render(
      <UserNameEditor
        initialUserName={initialUserName}
        onSave={jest.fn()}
        onCancel={jest.fn()}
      />,
    );

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
