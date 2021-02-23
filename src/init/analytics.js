import { analyticsId } from '#constants';
import { analyticsService } from '#services';

export default () => {
  if (analyticsId) {
    analyticsService.setup(analyticsId);
  }
};
