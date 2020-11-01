import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Button from '../Button';
import Input from '../Input';
import {
  SWrapper, SHeader, SContent, SFooter,
} from './styled';

const BoardNameEditor = ({ initialBoardName, onCancel, onSave }) => {
  const { t } = useTranslation('board');
  const inputRef = useRef();
  const [newBoardName, setNewBoardName] = useState(initialBoardName);

  const onBoardNameChange = useCallback(
    (evt) => setNewBoardName(evt.target.value),
    [setNewBoardName],
  );

  useEffect(
    () => {
      // @todo check why this does not work
      inputRef.current.focus();
    },
    [inputRef],
  );

  return (
    <SWrapper>
      <SHeader>
        {t('meta.boardNameEditor.title')}
      </SHeader>
      <SContent>
        <Input
          name="boardName"
          ref={inputRef}
          value={newBoardName}
          onChange={onBoardNameChange}
          fullWidth
        />
      </SContent>
      <SFooter>
        <Button type="secondary" onClick={onCancel}>
          {t('meta.boardNameEditor.cancel')}
        </Button>
        <Button type="primary" onClick={() => onSave(newBoardName)}>
          {t('meta.boardNameEditor.save')}
        </Button>
      </SFooter>
    </SWrapper>
  );
};

BoardNameEditor.propTypes = {
  initialBoardName : PropTypes.string.isRequired,
  onCancel         : PropTypes.func.isRequired,
  onSave           : PropTypes.func.isRequired,
};

export default BoardNameEditor;
