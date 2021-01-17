import { createSlice } from '@reduxjs/toolkit';

import initialState from './initialState';
import {
  addUserReducer,
  removeUserReducer,
  setBoardNameReducer,
  setCreatedReducer,
  setJoinedReducer,
  setMapDraggingReducer,
  setMyUserNameReducer,
  setSelectedToolReducer,
  setToolColorReducer,
  setUnjoinedReducer,
  setUserNameReducer,
} from './reducers';

const boardSlice = createSlice({
  initialState,
  name     : 'board',
  reducers : {
    addUser         : addUserReducer,
    removeUser      : removeUserReducer,
    setBoardName    : setBoardNameReducer,
    setCreated      : setCreatedReducer,
    setJoined       : setJoinedReducer,
    setMapDragging  : setMapDraggingReducer,
    setMyUserName   : setMyUserNameReducer,
    setSelectedTool : setSelectedToolReducer,
    setToolColor    : setToolColorReducer,
    setUnjoined     : setUnjoinedReducer,
    setUserName     : setUserNameReducer,
  },
});

export const {
  addUser,
  removeUser,
  setBoardName,
  setCreated,
  setJoined,
  setMapDragging,
  setMyUserName,
  setSelectedTool,
  setToolColor,
  setUnjoined,
  setUserName,
  setUsers,
} = boardSlice.actions;

export default boardSlice;
