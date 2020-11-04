import { createSlice } from '@reduxjs/toolkit';

const boardSlice = createSlice({
  name         : 'board',
  initialState : {
    boardName : undefined,
    users     : {
      me     : undefined,
      others : [],
    },
  },
  reducers : {
    setBoardName : (state, action) => (
      action.payload
        ? { ...state, boardName : action.payload }
        : state
    ),
    setUserName : (state, action) => (
      action.payload
        ? { ...state, users : { ...state.users, me : action.payload } }
        : state
    ),
  },
});

export const { setBoardName, setUserName } = boardSlice.actions;

export default boardSlice;
