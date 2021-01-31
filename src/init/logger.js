import { Log } from '#utils';
import { envs } from '#constants';

const prefix = 'FASTBOARD';

export default () => {
  Log.init(prefix, {
    all     : process.env.NODE_ENV === envs.dev,
    info    : true,
    warning : false,
    error   : false,
    debug   : process.env.NODE_ENV === envs.dev,
  });
};
