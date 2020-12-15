import { createSlice } from '@reduxjs/toolkit';

import { defaultDrawingColor } from '#constants';

import {
  addUserReducer,
  removeUserReducer,
  setBoardNameReducer,
  setCreatedReducer,
  setJoinedReducer,
  setMyUserNameReducer,
  setSelectedToolReducer,
  setToolColorReducer,
  setUnjoinedReducer,
  setUserNameReducer,
} from './reducers';

const boardSlice = createSlice({
  name         : 'board',
  initialState : {
    joined    : false,
    owner     : undefined,
    boardName : undefined,
    users     : {
      me     : undefined,
      others : [],
    },
    tools : {
      selected : undefined,
      colors   : {
        pencil      : defaultDrawingColor,
        pen         : defaultDrawingColor,
        highlighter : defaultDrawingColor,
        text        : defaultDrawingColor,
      },
    },
  },
  reducers : {
    addUser         : addUserReducer,
    removeUser      : removeUserReducer,
    setBoardName    : setBoardNameReducer,
    setCreated      : setCreatedReducer,
    setJoined       : setJoinedReducer,
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
  setMyUserName,
  setSelectedTool,
  setToolColor,
  setUnjoined,
  setUserName,
  setUsers,
} = boardSlice.actions;

export default boardSlice;
