import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import {
  SWrapper, STitle, SActions, SAction, SInput,
} from './styled';

const JoinStep = ({ show, onJoin, onCancel }) => {
  const { t } = useTranslation('home');
  const [boardId, setBoardId] = useState();

  const onBoardIdChange = useCallback(
    (evt) => setBoardId(evt.target.value),
    [setBoardId],
  );

  // @todo remove board id from form and autofocus on show

  return (
    <SWrapper show={show}>
      <STitle>
        {t('join.title')}
      </STitle>
      <SActions>
        <SInput
          name="boardId"
          onChange={onBoardIdChange}
          placeholder={t('join.boardId')}
        />
        <SAction onClick={onCancel}>
          {t('join.cancel')}
        </SAction>
        <SAction onClick={() => onJoin({ boardId })}>
          {t('join.join')}
        </SAction>
      </SActions>
    </SWrapper>
  );
};

JoinStep.propTypes = {
  show     : PropTypes.bool.isRequired,
  onJoin   : PropTypes.func.isRequired,
  onCancel : PropTypes.func.isRequired,
};

export default JoinStep;
