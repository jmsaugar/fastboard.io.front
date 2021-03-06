import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { boardFieldsMaxLengths } from '#constants';

import Button from '../Button';
import Input from '../Input';
import {
  SCard, SHeader, SContent, SFooter,
} from './styled';

const BoardNameEditor = ({ initialBoardName, onCancel, onSave }) => {
  const { t } = useTranslation('board');
  const [newBoardName, setNewBoardName] = useState(initialBoardName);

  return (
    <SCard>
      <SHeader>
        {t('meta.boardNameEditor.title')}
      </SHeader>
      <SContent>
        <Input
          name="boardName"
          value={newBoardName}
          onChange={setNewBoardName}
          maxLength={boardFieldsMaxLengths.boardName}
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
    </SCard>
  );
};

BoardNameEditor.propTypes = {
  initialBoardName : PropTypes.string.isRequired,
  onCancel         : PropTypes.func.isRequired,
  onSave           : PropTypes.func.isRequired,
};

export default BoardNameEditor;
