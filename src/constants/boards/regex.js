import { baseUrl } from '../misc';

import routes from '#routes';

const boardIdPattern = '[0-9]{6}';

export const boardIdRegex = new RegExp(`^${boardIdPattern}$`);

export const boardUrlRegex = new RegExp(
  `^${(baseUrl + routes.board)
    .replace(/[-/\\^$*+?.()|][\]{}]/g, '\\$&') // Escape regex characters on the url
    .replace(':id', `(${boardIdPattern})`)}$`,
);
