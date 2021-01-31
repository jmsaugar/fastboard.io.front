import ReactGA from 'react-ga';

import { analyticsId } from '#constants';

export default () => {
  if (analyticsId) {
    ReactGA.initialize(analyticsId);
  }
};
