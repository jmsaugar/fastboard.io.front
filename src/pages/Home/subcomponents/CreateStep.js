import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import {
  SWrapper, STitle, SActions, SAction, SInput,
} from './styled';

const CreateStep = ({ show, onCreate, onCancel }) => {
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
      <SActions>
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
        <SAction onClick={onCancel}>
          {t('create.cancel')}
        </SAction>
        <SAction onClick={() => onCreate({ boardName, userName })}>
          {t('create.create')}
        </SAction>
      </SActions>
    </SWrapper>
  );
};

CreateStep.propTypes = {
  show     : PropTypes.bool.isRequired,
  onCreate : PropTypes.func.isRequired,
  onCancel : PropTypes.func.isRequired,
};

export default CreateStep;
