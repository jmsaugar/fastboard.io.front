import React from 'react';

import { render } from '#devTools/tests/utils';

import Modal from './Modal';

const modalContent = 'modal content';
const targetId = 'target-id';

describe('Component : Modal', () => {
  test('Is visible with content in target element', () => {
    const { getByTestId } = render(
      <>
        <div id={targetId} data-testid={targetId} />
        <Modal target={targetId} show>
          {modalContent}
        </Modal>
      </>,
    );

    expect(getByTestId(targetId)).toBeInTheDocument();
    expect(getByTestId(targetId)).toHaveTextContent(modalContent);
  });

  test('Snapshot : visible', () => {
    const { asFragment } = render(
      <>
        <div id={targetId} data-testid={targetId} />
        <Modal target={targetId} show>
          {modalContent}
        </Modal>
      </>,
    );

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });

  test('Snapshot : not visible', () => {
    const { asFragment } = render(
      <>
        <div id={targetId} data-testid={targetId} />
        <Modal target={targetId} show={false}>
          {modalContent}
        </Modal>
      </>,
    );

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
