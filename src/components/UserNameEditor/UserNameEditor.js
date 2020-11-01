import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Button from '../Button';
import Input from '../Input';
import {
  SWrapper, SHeader, SContent, SFooter,
} from './styled';

const UserNameEditor = ({ initialUserName, onCancel, onSave }) => {
  const { t } = useTranslation('board');
  const [newUserName, setNewUserName] = useState(initialUserName);

  const onUserNameChange = useCallback(
    (evt) => setNewUserName(evt.target.value),
    [setNewUserName],
  );

  // @todo input ref and autofocus

  return (
    <SWrapper>
      <SHeader>
        {t('meta.userNameEditor.title')}
      </SHeader>
      <SContent>
        <Input
          name="userName"
          value={newUserName}
          onChange={onUserNameChange}
          fullWidth
        />
      </SContent>
      <SFooter>
        <Button type="secondary" onClick={onCancel}>
          {t('meta.userNameEditor.cancel')}
        </Button>
        <Button type="primary" onClick={() => onSave(newUserName)}>
          {t('meta.userNameEditor.save')}
        </Button>
      </SFooter>
    </SWrapper>
  );
};

UserNameEditor.propTypes = {
  initialUserName : PropTypes.string.isRequired,
  onCancel        : PropTypes.func.isRequired,
  onSave          : PropTypes.func.isRequired,
};

export default UserNameEditor;
