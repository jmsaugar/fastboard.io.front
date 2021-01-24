import React, { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { escapeKeyCode, mainLayoutId } from '#constants';
import { useKey } from '#hooks';
import { boardsService } from '#services';
import {
  boardNameSelector,
  myUserNameSelector,
  myJoinDateSelector,
  usersCountSelector,
  otherUsersSelector,
  setBoardName,
  setMyUserName,
} from '#store';

import UserNameEditor from '../UserNameEditor';
import BoardNameEditor from '../BoardNameEditor';
import UsersList from '../UsersList';
import Modal from '../Modal';

import SWrapper from './styled';

const types = Object.freeze({
  none      : 0,
  userName  : 1,
  boardName : 2,
  usersList : 3,
});

const BoardMeta = () => {
  const { t } = useTranslation('board');
  const dispatch = useDispatch();

  const boardName = useSelector(boardNameSelector);
  const myUserName = useSelector(myUserNameSelector);
  const myJoinDate = useSelector(myJoinDateSelector);
  const usersCount = useSelector(usersCountSelector);
  const otherUsers = useSelector(otherUsersSelector);

  const [type, setType] = useState(types.none);

  const hide = useCallback(
    () => setType(types.none),
    [setType],
  );

  const saveUserName = useCallback(
    (newUserName) => boardsService.setUserName(newUserName)
      .then(() => {
        dispatch(setMyUserName(newUserName));
        hide();
      }), // @todo error case
    [dispatch, hide],
  );

  const saveBoardName = useCallback(
    (newBoardName) => boardsService.setBoardName(newBoardName)
      .then(() => {
        dispatch(setBoardName(newBoardName));
        hide();
      }), // @todo error case
    [dispatch, hide],
  );

  const UserNameEditorComponent = useMemo(
    () => (
      <UserNameEditor
        initialUserName={myUserName}
        onCancel={hide}
        onSave={saveUserName}
      />
    ),
    [myUserName, hide, saveUserName],
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

  const UsersListComponent = useMemo(
    () => (
      <UsersList
        boardName={boardName}
        myUserName={myUserName}
        myJoinDate={myJoinDate}
        others={otherUsers}
        onClose={hide}
      />
    ),
    [boardName, myUserName, myJoinDate, otherUsers, hide],
  );

  useKey(escapeKeyCode, hide);

  return (
    <>
      <SWrapper onClick={() => setType(types.userName)} isClickable>
        {myUserName}
      </SWrapper>
      <SWrapper>
        @
      </SWrapper>
      <SWrapper onClick={() => setType(types.boardName)} isClickable>
        {boardName}
      </SWrapper>
      <SWrapper onClick={() => setType(types.usersList)} isClickable>
        {t('meta.usersCount', { count : usersCount })}
      </SWrapper>
      <Modal target={mainLayoutId} show={type !== types.none}>
        {type === types.userName && UserNameEditorComponent}
        {type === types.boardName && BoardNameEditorComponent}
        {type === types.usersList && UsersListComponent}
      </Modal>
    </>
  );
};

export default BoardMeta;
