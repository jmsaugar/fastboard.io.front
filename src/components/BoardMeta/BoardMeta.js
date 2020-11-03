import React, { useCallback, useMemo, useState } from 'react';

import { escapeKeyCode, mainLayoutId } from '#constants';
import { useKey } from '#hooks';
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
  const [type, setType] = useState(types.none);

  // @todo those two values should come from the boards service
  const boardName = 'Board 123456';
  const userName = 'jms';

  const hide = useCallback(
    () => setType(types.none),
    [setType],
  );

  const saveUserName = useCallback();

  const saveBoardName = useCallback();

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
        {/* @todo number of users */}
        (3 users)
      </SWrapper>
      <Modal target={mainLayoutId} show={type !== types.none}>
        {type === types.userName && UserNameEditorComponent}
        {type === types.boardName && BoardNameEditorComponent}
      </Modal>
    </>
  );
};

export default BoardMeta;
