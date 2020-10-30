import i18nInit from './i18n';
import loggerInit from './logger';
import { Log } from '../utils';

export default () => {
  loggerInit();
  Log.info('Init : logger : initialized');

  i18nInit();
  Log.info('Init : i18n : initialized');
};
