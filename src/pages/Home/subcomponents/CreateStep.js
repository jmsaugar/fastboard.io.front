import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { boardsErrors } from '#constants';

import ErrorMessage from './ErrorMessage';
import {
  SWrapper, STitle, SActions, SAction, SInputs, SInput,
} from './styled';

const CreateStep = ({
  show, isLoading, errorCode, onCreate, onCancel,
}) => {
  const { t } = useTranslation('home');
  const boardNameRef = useRef();
  const userNameRef = useRef();
  const [boardName, setBoardName] = useState();
  const [userName, setUserName] = useState();

  // Reset form state when showing
  useEffect(
    () => {
      if (show) {
        boardNameRef.current.value = '';
        userNameRef.current.value = '';
        userNameRef.current.focus();

        setBoardName();
        setUserName();
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
          onChange={setUserName}
          placeholder={t('create.userName')}
          isRequired
        />
        <SInput
          name="boardName"
          ref={boardNameRef}
          onChange={setBoardName}
          placeholder={t('create.boardName')}
          isRequired
        />
      </SInputs>
      <SActions>
        <SAction size="lg" onClick={onCancel}>
          {t('create.cancel')}
        </SAction>
        <SAction
          size="lg"
          onClick={() => onCreate(boardName, userName)}
          isDisabled={!boardName || !userName}
          isLoading={isLoading}
        >
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
  isLoading : PropTypes.bool.isRequired,
  errorCode : PropTypes.oneOf(Object.values(boardsErrors)),
  onCreate  : PropTypes.func.isRequired,
  onCancel  : PropTypes.func.isRequired,
};

export default CreateStep;
