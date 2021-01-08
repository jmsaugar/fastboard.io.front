import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { boardsErrors } from '#constants';

import ErrorMessage from './ErrorMessage';
import {
  SWrapper, STitle, SActions, SAction, SInputs, SInput,
} from './styled';

const JoinStep = ({
  show, errorCode, onJoin, onCancel,
}) => {
  const { t } = useTranslation('home');
  const boardIdRef = useRef();
  const userNameRef = useRef();
  const [boardId, setBoardId] = useState();
  const [userName, setUserName] = useState();

  const onBoardIdChange = useCallback(
    (evt) => setBoardId(evt.target.value),
    [setBoardId],
  );

  const onUserNameChange = useCallback(
    (evt) => setUserName(evt.target.value),
    [setUserName],
  );

  useEffect(
    () => {
      if (show) {
        boardIdRef.current.value = '';
        userNameRef.current.value = '';
        boardIdRef.current.focus();
      }
    },
    [show, boardIdRef, userNameRef],
  );

  return (
    <SWrapper show={show}>
      <STitle>
        {t('join.title')}
      </STitle>
      <SInputs>
        <SInput
          name="boardId"
          ref={boardIdRef}
          onChange={onBoardIdChange}
          placeholder={t('join.boardId')}
        />
        <SInput
          name="userName"
          ref={userNameRef}
          onChange={onUserNameChange}
          placeholder={t('join.userName')}
        />
      </SInputs>
      <SActions>
        <SAction onClick={onCancel}>
          {t('join.cancel')}
        </SAction>
        <SAction onClick={() => onJoin(boardId, userName)}>
          {t('join.join')}
        </SAction>
        {errorCode && <ErrorMessage code={errorCode} />}
      </SActions>
    </SWrapper>
  );
};

JoinStep.defaultProps = {
  errorCode : undefined,
};

JoinStep.propTypes = {
  show      : PropTypes.bool.isRequired,
  errorCode : PropTypes.oneOf(Object.values(boardsErrors)),
  onJoin    : PropTypes.func.isRequired,
  onCancel  : PropTypes.func.isRequired,
};

export default JoinStep;
