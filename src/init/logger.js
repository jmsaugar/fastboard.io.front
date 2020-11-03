import { Log } from '#utils';

const prefix = 'FASTBOARD';

export default () => {
  Log.init(prefix, { all : true }); // @todo based on env
};
