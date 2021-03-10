import React, { memo } from 'react';
import propTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import routes from '#routes';

// @todo add more meta tags
const HeadMeta = ({ route, boardId, boardName }) => {
  const { t } = useTranslation(['home', 'board', 'about', 'help', 'cookies']);

  let title;
  switch (route) {
    case routes.home:
      title = t('home:head.title');
      break;

    case routes.board:
      title = t('board:head.title', { boardId, title : boardName || '$t(board:head.boardId)' });
      break;

    case routes.about:
      title = t('about:head.title');
      break;

    case routes.help:
      title = t('help:head.title');
      break;

    case routes.cookies:
      title = t('cookies:head.title');
      break;

    default:
      break;
  }

  return (
    <Helmet>
      <title>
        {title}
      </title>
    </Helmet>
  );
};

HeadMeta.defaultProps = {
  boardId   : undefined,
  boardName : undefined,
};

HeadMeta.propTypes = {
  route     : propTypes.string.isRequired,
  boardId   : propTypes.string,
  boardName : propTypes.string,
};

export default memo(HeadMeta);
