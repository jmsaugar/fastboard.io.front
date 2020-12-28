import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

/**
 * Render component using react-testing library
 * with the given options:
 *
 * store: mock the useSelector hook with a custom store object.
 * router: wrap the component in a BrowserRouter component.
 *
 * @param {Function} component React component to be rendered for testing.
 * @param {Object} Options Rendering options { store, router }
 *
 * @return {Object} Rendered component.
 */
export default function(component, options = {}) {
  if (options.store) {
    useSelector.mockImplementation((callback) => callback(options.store));
  }

  const tree = options.router
    ? <BrowserRouter>{component}</BrowserRouter>
    : component;

  return render(tree);
};
