import React, { memo } from 'react';
import propTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import routes from '#routes';

// @todo add more meta tags
const HeadMeta = ({ route, boardId, boardName }) => {
  const { t } = useTranslation(['board']);

  let title;
  switch (route) {
    case routes.home:
      title = t('common:brand');
      break;

    case routes.board:
      title = t('head.title', { boardId, title : boardName || '$t(head.boardId)' });
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