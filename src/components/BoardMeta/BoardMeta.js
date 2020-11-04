import React, { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { escapeKeyCode, mainLayoutId } from '#constants';
import { useKey } from '#hooks';
import { boardsService } from '#services';
import store, {
  boardNameSelector, userNameSelector, usersCountSelector, setBoardName, setUserName,
} from '#store';

import UserNameEditor from '../UserNameEditor';
import BoardNameEditor from '../BoardNameEditor';
import Modal from '../Modal';

import SWrapper from './styled';

const types = Object.freeze({
  none      : 0,
  userName  : 1,
  boardName : 2,
});

const BoardMeta = () => {
  const { t } = useTranslation('board');

  const boardName = useSelector(boardNameSelector);
  const userName = useSelector(userNameSelector);
  const usersCount = useSelector(usersCountSelector);

  const [type, setType] = useState(types.none);

  const hide = useCallback(
    () => setType(types.none),
    [setType],
  );

  const saveUserName = useCallback(
    (newUserName) => boardsService.setUserName(newUserName)
      .then(() => {
        store.dispatch(setUserName(newUserName));
        hide();
      }), // @todo error case
    [hide],
  );

  const saveBoardName = useCallback(
    (newBoardName) => boardsService.setBoardName(newBoardName)
      .then(() => {
        store.dispatch(setBoardName(newBoardName));
        hide();
      }), // @todo error case
    [hide],
  );

  const UserNameEditorComponent = useMemo(
    () => (
      <UserNameEditor
        initialUserName={userName}
        onCancel={hide}
        onSave={saveUserName}
      />
    ),
    [userName, hide, saveUserName],
  );

  const BoardNameEditorComponent = useMemo(
    () => (
      <BoardNameEditor
        initialBoardName={boardName}
        onCancel={hide}
        onSave={saveBoardName}
      />
    ),
    [boardName, hide, saveBoardName],
  );

  useKey(escapeKeyCode, hide);

  return (
    <>
      <SWrapper onClick={() => setType(types.userName)}>
        {userName}
      </SWrapper>
      @
      <SWrapper onClick={() => setType(types.boardName)}>
        {boardName}
        {t('meta.usersCount', { count : usersCount })}
      </SWrapper>
      <Modal target={mainLayoutId} show={type !== types.none}>
        {type === types.userName && UserNameEditorComponent}
        {type === types.boardName && BoardNameEditorComponent}
      </Modal>
    </>
  );
};

export default BoardMeta;
