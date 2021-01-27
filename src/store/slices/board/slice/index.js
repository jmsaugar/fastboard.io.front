import { createSlice } from '@reduxjs/toolkit';

import initialState from './initialState';
import {
  addUserReducer,
  removeUserReducer,
  showItemMenuReducer,
  hideItemMenuReducer,
  setBoardNameReducer,
  setCreatedReducer,
  setJoinedReducer,
  setMapDraggingReducer,
  setMyUserNameReducer,
  setSelectedToolReducer,
  setSelectorCursorHoverReducer,
  setSelectorCursorOperationReducer,
  setToolColorReducer,
  setUnjoinedReducer,
  setUserNameReducer,
} from './reducers';

const boardSlice = createSlice({
  initialState,
  name     : 'board',
  reducers : {
    addUser                    : addUserReducer,
    removeUser                 : removeUserReducer,
    showItemMenu               : showItemMenuReducer,
    hideItemMenu               : hideItemMenuReducer,
    setBoardName               : setBoardNameReducer,
    setCreated                 : setCreatedReducer,
    setJoined                  : setJoinedReducer,
    setMapDragging             : setMapDraggingReducer,
    setMyUserName              : setMyUserNameReducer,
    setSelectedTool            : setSelectedToolReducer,
    setSelectorCursorHover     : setSelectorCursorHoverReducer,
    setSelectorCursorOperation : setSelectorCursorOperationReducer,
    setToolColor               : setToolColorReducer,
    setUnjoined                : setUnjoinedReducer,
    setUserName                : setUserNameReducer,
  },
});

export const {
  addUser,
  removeUser,
  showItemMenu,
  hideItemMenu,
  setBoardName,
  setCreated,
  setJoined,
  setMapDragging,
  setMyUserName,
  setSelectorCursorHover,
  setSelectorCursorOperation,
  setSelectedTool,
  setToolColor,
  setUnjoined,
  setUserName,
  setUsers,
} = boardSlice.actions;

export default boardSlice;
