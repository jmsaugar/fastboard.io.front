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

const CreateStep = ({
  show, errorCode, onCreate, onCancel,
}) => {
  const { t } = useTranslation('home');
  const boardNameRef = useRef();
  const userNameRef = useRef();
  const [boardName, setBoardName] = useState();
  const [userName, setUserName] = useState();

  const onBoardNameChange = useCallback(
    (evt) => setBoardName(evt.target.value),
    [setBoardName],
  );

  const onUserNameChange = useCallback(
    (evt) => setUserName(evt.target.value),
    [setUserName],
  );

  useEffect(
    () => {
      if (show) {
        boardNameRef.current.value = '';
        userNameRef.current.value = '';
        userNameRef.current.focus();
      }
    },
    [show, boardNameRef, userNameRef],
  );

  return (
    <SWrapper show={show}>
      <STitle>
        {t('create.title')}
      </STitle>
      <SInputs>
        <SInput
          name="userName"
          ref={userNameRef}
          onChange={onUserNameChange}
          placeholder={t('create.userName')}
        />
        <SInput
          name="boardName"
          ref={boardNameRef}
          onChange={onBoardNameChange}
          placeholder={t('create.boardName')}
        />
      </SInputs>
      <SActions>
        <SAction onClick={onCancel}>
          {t('create.cancel')}
        </SAction>
        <SAction onClick={() => onCreate(boardName, userName)}>
          {t('create.create')}
        </SAction>
        {errorCode && <ErrorMessage code={errorCode} />}
      </SActions>
    </SWrapper>
  );
};

CreateStep.defaultProps = {
  errorCode : undefined,
};

CreateStep.propTypes = {
  show      : PropTypes.bool.isRequired,
  errorCode : PropTypes.oneOf(Object.values(boardsErrors)),
  onCreate  : PropTypes.func.isRequired,
  onCancel  : PropTypes.func.isRequired,
};

export default CreateStep;
