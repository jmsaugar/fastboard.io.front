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
