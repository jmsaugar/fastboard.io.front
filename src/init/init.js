import { Log } from '#utils';

import i18nInit from './i18n';
import loggerInit from './logger';
import analyticsInit from './analytics';

export default () => {
  loggerInit();
  Log.info('Init : logger : initialized');

  i18nInit();
  Log.info('Init : i18n : initialized');

  analyticsInit();
  Log.info('Init : analytics : initialized');
};
