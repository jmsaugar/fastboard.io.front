// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

import { Log } from '#utils';

// Disable all logs for testing environment
Log.setConfig({
  all     : false,
  info    : false,
  warning : false,
  error   : false,
  debug   : false,
});

// Setup i18n mock for all components using useTranslation hook
jest.mock('react-i18next', () => ({
  useTranslation : () => ({
    t    : (str) => str,
    i18n : {
      changeLanguage : () => new Promise(() => {}),
    },
  }),
}));

// Mock drawings service by default as paperjs does not play well with tests
jest.mock('#services', () => ({
  drawingsService : {},
}));

// Mock useSelector and let custom render function mock its implementation with custom store
jest.mock('react-redux', () => ({
  __esModule  : true,
  useSelector : jest.fn(),
}));


