import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

/**
 * Render component using react-testing library and
 * mock the useSelector hook with a custom store object.
 *
 * @param {Function} component React component to be rendered for testing.
 * @param {Object|Array} mockStore Store content mock.
 *
 * @return {Object} Rendered component.
 */
export default function(component, mockStore) {
  if (mockStore) {
    useSelector.mockImplementation((callback) => callback(mockStore));
  }

  return render(component);
};
